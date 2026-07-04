import {
  E
} from "./chunk-ESOPKBER.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VTSSTHJF.js";

// src/app/shared/service/rapport/rapport-export.service.ts
var RapportExportService = class _RapportExportService {
  /** Télécharge un fichier CSV */
  exportCsv(rows, filename) {
    if (!rows.length) {
      this.exportEmptyCsv(filename);
      return;
    }
    const headers = Object.keys(rows[0]);
    const lines = [headers.join(";")];
    for (const r of rows) {
      lines.push(headers.map((h) => `"${String(r[h] ?? "").replace(/"/g, '""')}"`).join(";"));
    }
    this.downloadBlob(lines.join("\n"), filename + ".csv", "text/csv;charset=utf-8;");
  }
  /** Télécharge un fichier Excel (.xlsx) simplifié via XML SpreadsheetML */
  exportExcel(rows, filename) {
    if (!rows.length) {
      this.exportEmptyExcel(filename);
      return;
    }
    const headers = Object.keys(rows[0]);
    let xml = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Rapport"><Table>`;
    xml += "<Row>" + headers.map((h) => `<Cell><Data ss:Type="String">${this.escXml(h)}</Data></Cell>`).join("") + "</Row>";
    for (const r of rows) {
      xml += "<Row>" + headers.map((h) => {
        const v = r[h] ?? "";
        const t = typeof v === "number" ? "Number" : "String";
        return `<Cell><Data ss:Type="${t}">${this.escXml(String(v))}</Data></Cell>`;
      }).join("") + "</Row>";
    }
    xml += "</Table></Worksheet></Workbook>";
    this.downloadBlob(xml, filename + ".xls", "application/vnd.ms-excel;charset=utf-8;");
  }
  /** Génère un PDF simple avec jsPDF */
  exportPdf(title, sections, filename) {
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    const marginL = 14;
    let y = 18;
    doc.setFillColor(186, 117, 23);
    doc.rect(0, 0, 210, 10, "F");
    y = 20;
    doc.setFontSize(15);
    doc.setTextColor(30, 41, 59);
    doc.text(title, marginL, y);
    y += 8;
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`G\xE9n\xE9r\xE9 le ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")}`, marginL, y);
    y += 10;
    for (const section of sections) {
      if (y > 270) {
        doc.addPage();
        y = 18;
      }
      doc.setFontSize(11);
      doc.setTextColor(186, 117, 23);
      doc.text(section.heading, marginL, y);
      y += 6;
      if (!section.rows.length) {
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text("Aucune donn\xE9e disponible.", marginL, y);
        y += 8;
        continue;
      }
      const headers = Object.keys(section.rows[0]);
      const colW = (190 - marginL) / headers.length;
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      doc.setFillColor(186, 117, 23);
      doc.rect(marginL, y, 190 - marginL, 6, "F");
      headers.forEach((h, i) => doc.text(h, marginL + i * colW + 2, y + 4));
      y += 6;
      doc.setTextColor(30, 41, 59);
      for (const row of section.rows) {
        if (y > 275) {
          doc.addPage();
          y = 18;
        }
        doc.setFillColor(248, 250, 252);
        doc.rect(marginL, y, 190 - marginL, 5.5, "F");
        doc.setDrawColor(226, 232, 240);
        doc.rect(marginL, y, 190 - marginL, 5.5, "S");
        headers.forEach((h, i) => {
          const val = String(row[h] ?? "");
          doc.text(val.length > 20 ? val.substring(0, 18) + "\u2026" : val, marginL + i * colW + 2, y + 3.8);
        });
        y += 5.5;
      }
      y += 6;
    }
    doc.save(filename + ".pdf");
  }
  downloadBlob(content, filename, mime) {
    const bom = mime.includes("csv") ? "\uFEFF" : "";
    const blob = new Blob([bom + content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  exportEmptyCsv(filename) {
    this.downloadBlob('"Aucune donn\xE9e"\n', filename + ".csv", "text/csv;charset=utf-8;");
  }
  exportEmptyExcel(filename) {
    const xml = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Rapport"><Table><Row><Cell><Data ss:Type="String">Aucune donn\xE9e</Data></Cell></Row></Table></Worksheet></Workbook>`;
    this.downloadBlob(xml, filename + ".xls", "application/vnd.ms-excel;charset=utf-8;");
  }
  escXml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  static \u0275fac = function RapportExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RapportExportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RapportExportService, factory: _RapportExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RapportExportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RapportExportService
};
//# sourceMappingURL=chunk-MHSMBBCC.js.map
