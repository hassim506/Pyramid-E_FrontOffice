import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

export interface RapportRow { [key: string]: string | number; }

@Injectable({ providedIn: 'root' })
export class RapportExportService {

  /** Télécharge un fichier CSV */
  exportCsv(rows: RapportRow[], filename: string): void {
    if (!rows.length) { this.exportEmptyCsv(filename); return; }
    const headers = Object.keys(rows[0]);
    const lines   = [headers.join(';')];
    for (const r of rows) {
      lines.push(headers.map(h => `"${String(r[h] ?? '').replace(/"/g, '""')}"`).join(';'));
    }
    this.downloadBlob(lines.join('\n'), filename + '.csv', 'text/csv;charset=utf-8;');
  }

  /** Télécharge un fichier Excel (.xlsx) simplifié via XML SpreadsheetML */
  exportExcel(rows: RapportRow[], filename: string): void {
    if (!rows.length) { this.exportEmptyExcel(filename); return; }
    const headers = Object.keys(rows[0]);
    let xml = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Rapport"><Table>`;
    xml += '<Row>' + headers.map(h => `<Cell><Data ss:Type="String">${this.escXml(h)}</Data></Cell>`).join('') + '</Row>';
    for (const r of rows) {
      xml += '<Row>' + headers.map(h => {
        const v = r[h] ?? '';
        const t = typeof v === 'number' ? 'Number' : 'String';
        return `<Cell><Data ss:Type="${t}">${this.escXml(String(v))}</Data></Cell>`;
      }).join('') + '</Row>';
    }
    xml += '</Table></Worksheet></Workbook>';
    this.downloadBlob(xml, filename + '.xls', 'application/vnd.ms-excel;charset=utf-8;');
  }

  /** Génère un PDF avec jsPDF — orientation landscape pour éviter les colonnes imbriquées */
  exportPdf(title: string, sections: { heading: string; rows: RapportRow[] }[], filename: string): void {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = 297;
    const marginL = 10;
    const marginR = 10;
    const tableW = pageW - marginL - marginR;
    const pageH = 210;
    let y = 18;

    doc.setFillColor(186, 117, 23);
    doc.rect(0, 0, pageW, 8, 'F');

    y = 16;

    doc.setFontSize(14);
    doc.setTextColor(30, 41, 59);
    doc.text(title, marginL, y);
    y += 7;

    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, marginL, y);
    y += 9;

    for (const section of sections) {
      if (y > pageH - 20) { doc.addPage(); y = 14; }

      doc.setFontSize(11);
      doc.setTextColor(186, 117, 23);
      doc.text(section.heading, marginL, y);
      y += 6;

      if (!section.rows.length) {
        doc.setFontSize(9); doc.setTextColor(100, 116, 139);
        doc.text('Aucune donnée disponible.', marginL, y);
        y += 8; continue;
      }

      const headers = Object.keys(section.rows[0]);
      const colWidths = this.computeColumnWidths(headers, section.rows, tableW);
      const rowH = 5.5;
      const cellPad = 1.5;

      doc.setFontSize(7);
      doc.setTextColor(255, 255, 255);
      doc.setFillColor(186, 117, 23);
      doc.rect(marginL, y, tableW, 6, 'F');
      let x = marginL;
      headers.forEach((h, i) => {
        doc.text(this.truncate(h, colWidths[i] - cellPad * 2, doc), x + cellPad, y + 4);
        x += colWidths[i];
      });
      y += 6;

      doc.setFontSize(7);
      doc.setTextColor(30, 41, 59);
      for (const row of section.rows) {
        const cellTexts = headers.map((h, i) => {
          const val = String(row[h] ?? '');
          return this.wrapText(val, colWidths[i] - cellPad * 2, doc);
        });
        const lineCount = Math.max(...cellTexts.map(t => t.length), 1);
        const currentRowH = Math.max(rowH, lineCount * 3.5 + 1);

        if (y + currentRowH > pageH - 10) { doc.addPage(); y = 14; }

        doc.setFillColor(248, 250, 252);
        doc.rect(marginL, y, tableW, currentRowH, 'F');
        doc.setDrawColor(226, 232, 240);
        doc.rect(marginL, y, tableW, currentRowH, 'S');

        x = marginL;
        headers.forEach((h, i) => {
          const lines = cellTexts[i];
          lines.forEach((line, li) => {
            doc.text(line, x + cellPad, y + 3.2 + li * 3.5);
          });
          x += colWidths[i];
        });
        y += currentRowH;
      }
      y += 6;
    }

    doc.save(filename + '.pdf');
  }

  private computeColumnWidths(headers: string[], rows: RapportRow[], tableW: number): number[] {
    const minCol = 18;
    const maxSample = Math.min(rows.length, 30);
    const avgLengths = headers.map((h, i) => {
      let total = h.length;
      for (let r = 0; r < maxSample; r++) {
        total += String(rows[r][h] ?? '').length;
      }
      return total / (maxSample + 1);
    });
    const sumLengths = avgLengths.reduce((a, b) => a + b, 0) || 1;
    let widths = avgLengths.map(l => Math.max(minCol, (l / sumLengths) * tableW));
    const sumWidths = widths.reduce((a, b) => a + b, 0);
    widths = widths.map(w => (w / sumWidths) * tableW);
    return widths;
  }

  private wrapText(text: string, maxWidth: number, doc: jsPDF): string[] {
    if (!text || text === '—') return [text];
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = '';
    for (const word of words) {
      const test = current ? current + ' ' + word : word;
      if (doc.getTextWidth(test) <= maxWidth) {
        current = test;
      } else {
        if (current) lines.push(current);
        current = doc.getTextWidth(word) <= maxWidth ? word : word.substring(0, Math.floor(maxWidth / 1.5)) + '…';
      }
    }
    if (current) lines.push(current);
    return lines.length ? lines : [text.substring(0, 30)];
  }

  private truncate(text: string, maxWidth: number, doc: jsPDF): string {
    if (doc.getTextWidth(text) <= maxWidth) return text;
    let t = text;
    while (t.length > 1 && doc.getTextWidth(t + '…') > maxWidth) t = t.slice(0, -1);
    return t + '…';
  }

  private downloadBlob(content: string, filename: string, mime: string): void {
    const bom  = mime.includes('csv') ? '﻿' : '';
    const blob = new Blob([bom + content], { type: mime });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  private exportEmptyCsv(filename: string): void {
    this.downloadBlob('"Aucune donnée"\n', filename + '.csv', 'text/csv;charset=utf-8;');
  }

  private exportEmptyExcel(filename: string): void {
    const xml = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Rapport"><Table><Row><Cell><Data ss:Type="String">Aucune donnée</Data></Cell></Row></Table></Worksheet></Workbook>`;
    this.downloadBlob(xml, filename + '.xls', 'application/vnd.ms-excel;charset=utf-8;');
  }

  private escXml(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}
