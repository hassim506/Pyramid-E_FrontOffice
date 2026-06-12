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

  /** Génère un PDF simple avec jsPDF */
  exportPdf(title: string, sections: { heading: string; rows: RapportRow[] }[], filename: string): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const marginL = 14;
    let y = 18;

    // Titre
    doc.setFontSize(16);
    doc.setTextColor(30, 41, 59);
    doc.text(title, marginL, y);
    y += 8;

    // Date
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, marginL, y);
    y += 10;

    for (const section of sections) {
      if (y > 270) { doc.addPage(); y = 18; }

      // Heading section
      doc.setFontSize(11);
      doc.setTextColor(83, 74, 183);
      doc.text(section.heading, marginL, y);
      y += 6;

      if (!section.rows.length) {
        doc.setFontSize(9); doc.setTextColor(100, 116, 139);
        doc.text('Aucune donnée disponible.', marginL, y);
        y += 8; continue;
      }

      const headers = Object.keys(section.rows[0]);
      const colW    = (190 - marginL) / headers.length;

      // En-têtes tableau
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      doc.setFillColor(83, 74, 183);
      doc.rect(marginL, y, 190 - marginL, 6, 'F');
      headers.forEach((h, i) => doc.text(h, marginL + i * colW + 2, y + 4));
      y += 6;

      // Lignes
      doc.setTextColor(30, 41, 59);
      for (const row of section.rows) {
        if (y > 275) { doc.addPage(); y = 18; }
        doc.setFillColor(248, 250, 252);
        doc.rect(marginL, y, 190 - marginL, 5.5, 'F');
        doc.setDrawColor(226, 232, 240);
        doc.rect(marginL, y, 190 - marginL, 5.5, 'S');
        headers.forEach((h, i) => {
          const val = String(row[h] ?? '');
          doc.text(val.length > 20 ? val.substring(0, 18) + '…' : val, marginL + i * colW + 2, y + 3.8);
        });
        y += 5.5;
      }
      y += 6;
    }

    doc.save(filename + '.pdf');
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
