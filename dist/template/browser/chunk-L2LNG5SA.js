import {
  ZoomMeetingService
} from "./chunk-HRLZE63H.js";
import {
  SessionFormationService
} from "./chunk-RK3Q2J3M.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import "./chunk-M25A5D3F.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-session/instructor-session.component.ts
function InstructorSessionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorSessionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomError = "");
    });
    \u0275\u0275element(4, "i", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.zoomError, " ");
  }
}
function InstructorSessionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.zoomSuccess, "\n");
  }
}
function InstructorSessionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearError());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 63);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementEnd();
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const s_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createZoomMeeting(s_r6));
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, " Cr\xE9er ");
    \u0275\u0275elementEnd();
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_button_1_Template, 3, 0, "button", 67)(2, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_span_2_Template, 2, 0, "span", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.statut !== "terminee" && s_r6.statut !== "annulee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.statut === "terminee" || s_r6.statut === "annulee");
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "button", 73);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_4_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const s_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMeeting(s_r6));
    });
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_4_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const s_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteZoomMeeting(s_r6));
    });
    \u0275\u0275element(6, "i", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-zoom-btn--live", ctx_r1.isZoomAccessible(s_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isZoomAccessible(s_r6) ? "D\xE9marrer" : "Lien h\xF4te");
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_4_div_5_Template, 7, 3, "div", 71);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-zoom-badge--live", ctx_r1.isZoomAccessible(s_r6))("ip-zoom-badge--done", ctx_r1.isZoomExpired(s_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isZoomAccessible(s_r6) ? "En direct" : ctx_r1.getZoomDelai(s_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isZoomExpired(s_r6));
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_span_1_Template, 2, 0, "span", 64)(2, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_span_2_Template, 2, 0, "span", 65)(3, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_3_Template, 3, 2, "ng-container", 4)(4, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_ng_container_4_Template, 6, 6, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.zoomLoading[s_r6.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomLoading[s_r6.id] && ctx_r1.zoomMeetings[s_r6.id] === void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomLoading[s_r6.id] && ctx_r1.zoomMeetings[s_r6.id] === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomLoading[s_r6.id] && ctx_r1.zoomMeetings[s_r6.id]);
  }
}
function InstructorSessionComponent_ng_container_4_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 44);
    \u0275\u0275listener("mouseenter", function InstructorSessionComponent_ng_container_4_tr_56_Template_tr_mouseenter_0_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadZoomMeeting(s_r6));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 45)(3, "div", 46);
    \u0275\u0275element(4, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td")(13, "div", 51)(14, "span", 52);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 53);
    \u0275\u0275text(17, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 54);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 55)(29, "span", 56);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 57);
    \u0275\u0275element(32, "div", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "td")(34, "span", 59);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td", 60);
    \u0275\u0275template(37, InstructorSessionComponent_ng_container_4_tr_56_ng_container_37_Template, 3, 0, "ng-container", 4)(38, InstructorSessionComponent_ng_container_4_tr_56_ng_container_38_Template, 5, 4, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td")(40, "button", 61);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_tr_56_Template_button_click_40_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(s_r6));
    });
    \u0275\u0275element(41, "i", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.code_session);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.formation == null ? null : s_r6.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r6.date_debut));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r6.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-type-badge ip-type-", s_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, s_r6.type));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-statut-badge ip-statut-", s_r6.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutDisplay(s_r6.statut));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", s_r6.nombre_inscrits || 0, "/", s_r6.capacite_max);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (s_r6.nombre_inscrits || 0) / s_r6.capacite_max * 100, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r6.lieu || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r6.type === "presentiel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.type !== "presentiel");
  }
}
function InstructorSessionComponent_ng_container_4_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorSessionComponent_ng_container_4_div_58_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_div_58_button_6_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r11 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11);
  }
}
function InstructorSessionComponent_ng_container_4_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "button", 81);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_div_58_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorSessionComponent_ng_container_4_div_58_button_6_Template, 2, 3, "button", 83);
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_div_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.totalData, " session", ctx_r1.totalData > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage * ctx_r1.pageSize >= ctx_r1.totalData);
  }
}
function InstructorSessionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19)(2, "div")(3, "h5", 20);
    \u0275\u0275text(4, "Mes sessions ");
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8, "Vos sessions de formation assign\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadSessions());
    });
    \u0275\u0275element(10, "i", 24);
    \u0275\u0275text(11, " Actualiser ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_ng_container_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function InstructorSessionComponent_ng_container_4_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_ng_container_4_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatut, $event) || (ctx_r1.selectedStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function InstructorSessionComponent_ng_container_4_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatut());
    });
    \u0275\u0275elementStart(15, "option", 28);
    \u0275\u0275text(16, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 29);
    \u0275\u0275text(18, "Planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 30);
    \u0275\u0275text(20, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 31);
    \u0275\u0275text(22, "Termin\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 32);
    \u0275\u0275text(24, "Annul\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_ng_container_4_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedType, $event) || (ctx_r1.selectedType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function InstructorSessionComponent_ng_container_4_Template_select_change_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByType());
    });
    \u0275\u0275elementStart(26, "option", 28);
    \u0275\u0275text(27, "Tous les types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 33);
    \u0275\u0275text(29, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 34);
    \u0275\u0275text(31, "Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 35);
    \u0275\u0275text(33, "Hybride");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 36)(35, "div", 37)(36, "table", 38);
    \u0275\u0275listener("matSortChange", function InstructorSessionComponent_ng_container_4_Template_table_matSortChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortData($event));
    });
    \u0275\u0275elementStart(37, "thead")(38, "tr")(39, "th", 39);
    \u0275\u0275text(40, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 40);
    \u0275\u0275text(42, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 41);
    \u0275\u0275text(46, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Zoom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "tbody");
    \u0275\u0275template(56, InstructorSessionComponent_ng_container_4_tr_56_Template, 42, 22, "tr", 42)(57, InstructorSessionComponent_ng_container_4_tr_57_Template, 5, 0, "tr", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, InstructorSessionComponent_ng_container_4_div_58_Template, 9, 5, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalData);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatut);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedType);
    \u0275\u0275advance(31);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackBySessionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tableData.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function InstructorSessionComponent_div_7_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 118);
    \u0275\u0275element(2, "i", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 103);
    \u0275\u0275text(5, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.lieu);
  }
}
function InstructorSessionComponent_div_7_ng_container_58_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "Par participant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 124);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedSession.cout_par_participant, " XOF");
  }
}
function InstructorSessionComponent_div_7_ng_container_58_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "Total session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 124);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedSession.cout_total_session, " XOF");
  }
}
function InstructorSessionComponent_div_7_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275element(2, "i", 120);
    \u0275\u0275text(3, " Co\xFBts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 99);
    \u0275\u0275template(5, InstructorSessionComponent_div_7_ng_container_58_div_5_Template, 5, 1, "div", 121)(6, InstructorSessionComponent_div_7_ng_container_58_div_6_Template, 5, 1, "div", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.cout_par_participant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.cout_total_session);
  }
}
function InstructorSessionComponent_div_7_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275element(2, "i", 125);
    \u0275\u0275text(3, " Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 126);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.description);
  }
}
function InstructorSessionComponent_div_7_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275element(2, "i", 127);
    \u0275\u0275text(3, " Instructions d'acc\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 126);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.instructions_acces);
  }
}
function InstructorSessionComponent_div_7_div_61_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r12);
  }
}
function InstructorSessionComponent_div_7_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 97);
    \u0275\u0275element(2, "i", 128);
    \u0275\u0275text(3, " Documents requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129);
    \u0275\u0275template(5, InstructorSessionComponent_div_7_div_61_div_1_span_5_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.selectedSession.documents_requis);
  }
}
function InstructorSessionComponent_div_7_div_61_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r13);
  }
}
function InstructorSessionComponent_div_7_div_61_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 97);
    \u0275\u0275element(2, "i", 132);
    \u0275\u0275text(3, " Mat\xE9riel requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129);
    \u0275\u0275template(5, InstructorSessionComponent_div_7_div_61_div_2_span_5_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.selectedSession.materiel_requis);
  }
}
function InstructorSessionComponent_div_7_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, InstructorSessionComponent_div_7_div_61_div_1_Template, 6, 1, "div", 4)(2, InstructorSessionComponent_div_7_div_61_div_2_Template, 6, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.documents_requis == null ? null : ctx_r1.selectedSession.documents_requis.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.materiel_requis == null ? null : ctx_r1.selectedSession.materiel_requis.length);
  }
}
function InstructorSessionComponent_div_7_ng_container_62_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2, " Chargement du meeting\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_1_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.createZoomMeeting(ctx_r1.selectedSession));
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, " Cr\xE9er le meeting ");
    \u0275\u0275elementEnd();
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 135);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun meeting Zoom pour cette session.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_1_button_5_Template, 3, 0, "button", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.statut !== "terminee" && ctx_r1.selectedSession.statut !== "annulee");
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 139);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r15 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r15.password);
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "Enregistrement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 140);
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275text(5, " Voir l'enregistrement ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r15 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("href", m_r15.recording_url, \u0275\u0275sanitizeUrl);
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "button", 142);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.startMeeting(ctx_r1.selectedSession));
    });
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 143);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteZoomMeeting(ctx_r1.selectedSession));
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, " Supprimer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-zoom-btn--live", ctx_r1.isZoomAccessible(ctx_r1.selectedSession));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isZoomAccessible(ctx_r1.selectedSession) ? "D\xE9marrer maintenant" : "Ouvrir lien h\xF4te", " ");
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 136)(2, "div", 137)(3, "span", 70);
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 122)(7, "span", 123);
    \u0275\u0275text(8, "Programm\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 124);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 122)(12, "span", 123);
    \u0275\u0275text(13, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 124);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_16_Template, 5, 1, "div", 121)(17, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_17_Template, 6, 1, "div", 121)(18, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_div_18_Template, 7, 3, "div", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r15 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ip-zoom-badge--live", ctx_r1.isZoomAccessible(ctx_r1.selectedSession))("ip-zoom-badge--done", ctx_r1.isZoomExpired(ctx_r1.selectedSession));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isZoomAccessible(ctx_r1.selectedSession) ? "En direct" : ctx_r1.getZoomDelai(ctx_r1.selectedSession), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(m_r15.scheduled_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", m_r15.duration, " min");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r15.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r15.recording_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isZoomExpired(ctx_r1.selectedSession));
  }
}
function InstructorSessionComponent_div_7_ng_container_62_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_1_Template, 6, 1, "ng-container", 4)(2, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_ng_container_2_Template, 19, 10, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.zoomMeetings[ctx_r1.selectedSession.id] === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.zoomMeetings[ctx_r1.selectedSession.id]);
  }
}
function InstructorSessionComponent_div_7_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275text(3, " Meeting Zoom");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorSessionComponent_div_7_ng_container_62_div_4_Template, 3, 0, "div", 133)(5, InstructorSessionComponent_div_7_ng_container_62_ng_container_5_Template, 3, 2, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.zoomLoading[ctx_r1.selectedSession.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomLoading[ctx_r1.selectedSession.id]);
  }
}
function InstructorSessionComponent_div_7_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275element(2, "i", 144);
    \u0275\u0275text(3, " Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 145);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.notes_organisateur);
  }
}
function InstructorSessionComponent_div_7_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 146);
    \u0275\u0275element(2, "i", 147);
    \u0275\u0275text(3, " Motif d'annulation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.motif_annulation);
  }
}
function InstructorSessionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 89)(5, "div", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 91)(8, "span", 92);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 93);
    \u0275\u0275text(11, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 95);
    \u0275\u0275element(20, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 96)(22, "div", 97);
    \u0275\u0275element(23, "i", 98);
    \u0275\u0275text(24, " Planning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 99)(26, "div", 100)(27, "div", 101);
    \u0275\u0275element(28, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 103);
    \u0275\u0275text(31, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 104);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 100)(35, "div", 105);
    \u0275\u0275element(36, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "div", 103);
    \u0275\u0275text(39, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 104);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, InstructorSessionComponent_div_7_div_42_Template, 8, 1, "div", 107);
    \u0275\u0275elementStart(43, "div", 100)(44, "div", 108);
    \u0275\u0275element(45, "i", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div")(47, "div", 103);
    \u0275\u0275text(48, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 104);
    \u0275\u0275text(50);
    \u0275\u0275elementStart(51, "span", 110);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 111)(54, "div", 112);
    \u0275\u0275element(55, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 114);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, InstructorSessionComponent_div_7_ng_container_58_Template, 7, 2, "ng-container", 4)(59, InstructorSessionComponent_div_7_ng_container_59_Template, 6, 1, "ng-container", 4)(60, InstructorSessionComponent_div_7_ng_container_60_Template, 6, 1, "ng-container", 4)(61, InstructorSessionComponent_div_7_div_61_Template, 3, 2, "div", 115)(62, InstructorSessionComponent_div_7_ng_container_62_Template, 6, 2, "ng-container", 4)(63, InstructorSessionComponent_div_7_ng_container_63_Template, 6, 1, "ng-container", 4)(64, InstructorSessionComponent_div_7_ng_container_64_Template, 6, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 116)(66, "button", 117);
    \u0275\u0275text(67, "Fermer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.code_session);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.formation == null ? null : ctx_r1.selectedSession.formation.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-type-badge ip-type-", ctx_r1.selectedSession.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 28, ctx_r1.selectedSession.type));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-statut-badge ip-statut-", ctx_r1.selectedSession.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutDisplay(ctx_r1.selectedSession.statut));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSession.date_debut));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSession.date_fin));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.lieu);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.nombre_inscrits || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.selectedSession.capacite_max);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", (ctx_r1.selectedSession.nombre_inscrits || 0) / ctx_r1.selectedSession.capacite_max * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.selectedSession.nombre_places_restantes, " place", ctx_r1.selectedSession.nombre_places_restantes !== 1 ? "s" : "", " restante", ctx_r1.selectedSession.nombre_places_restantes !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.cout_par_participant || ctx_r1.selectedSession.cout_total_session);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.instructions_acces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedSession.documents_requis == null ? null : ctx_r1.selectedSession.documents_requis.length) || (ctx_r1.selectedSession.materiel_requis == null ? null : ctx_r1.selectedSession.materiel_requis.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.type !== "presentiel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.notes_organisateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.statut === "annulee" && ctx_r1.selectedSession.motif_annulation);
  }
}
var InstructorSessionComponent = class _InstructorSessionComponent {
  sessionService;
  zoomService;
  // Pagination
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  totalData = 0;
  // Filtres
  searchDataValue = "";
  selectedStatut = "";
  selectedType = "";
  // État
  loading = false;
  error = "";
  selectedSession = null;
  formateurId = null;
  // ── Zoom ──────────────────────────────────────
  zoomMeetings = {};
  zoomLoading = {};
  zoomError = "";
  zoomSuccess = "";
  constructor(sessionService, zoomService) {
    this.sessionService = sessionService;
    this.zoomService = zoomService;
  }
  ngOnInit() {
    try {
      const userDataString = localStorage.getItem("pyramide_user");
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        this.formateurId = currentUser.id;
      }
    } catch (e) {
      console.error("Erreur lecture utilisateur:", e);
    }
    this.loadSessions();
  }
  loadSessions() {
    if (!this.formateurId) {
      this.error = "Impossible d'identifier le formateur connect\xE9.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.sessionService.getSessionsByFormateur(this.formateurId).subscribe({
      next: (response) => {
        this.tableDataCopy = response.sessions || [];
        this.actualData = [...this.tableDataCopy];
        this.totalData = this.actualData.length;
        this.currentPage = 1;
        this.skip = 0;
        this.getTableData();
        this.loading = false;
        this.zoomMeetings = {};
        this.loadZoomForVisible();
      },
      error: (err) => {
        console.error("Erreur sessions:", err);
        this.error = "Erreur lors du chargement des sessions.";
        this.loading = false;
      }
    });
  }
  loadZoomForVisible() {
    this.tableData.filter((s) => s.type !== "presentiel").forEach((s) => {
      this.zoomLoading[s.id] = true;
      this.zoomService.getMeetingBySession(s.id).subscribe({
        next: (res) => {
          this.zoomMeetings[s.id] = res.meeting ?? null;
          this.zoomLoading[s.id] = false;
        },
        error: () => {
          this.zoomMeetings[s.id] = null;
          this.zoomLoading[s.id] = false;
        }
      });
    });
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  filterByStatut() {
    this.applyFilters();
  }
  filterByType() {
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.tableDataCopy];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((s) => s.titre?.toLowerCase().includes(q) || s.code_session?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q));
    }
    if (this.selectedStatut) {
      filtered = filtered.filter((s) => s.statut === this.selectedStatut);
    }
    if (this.selectedType) {
      filtered = filtered.filter((s) => s.type === this.selectedType);
    }
    this.actualData = filtered;
    this.totalData = filtered.length;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData();
  }
  viewDetails(session) {
    this.selectedSession = session;
    const modal = new window.bootstrap.Modal(document.getElementById("sessionDetailsModal"));
    modal.show();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData();
    this.loadZoomForVisible();
  }
  getTableData() {
    this.tableData = this.actualData.slice(this.skip, this.skip + this.pageSize);
  }
  sortData(sort) {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === "") {
      this.actualData = data;
      this.getTableData();
      return;
    }
    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "titre":
          return this.compare(a.titre, b.titre, isAsc);
        case "date_debut":
          return this.compare(new Date(a.date_debut), new Date(b.date_debut), isAsc);
        case "statut":
          return this.compare(a.statut, b.statut, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData();
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getStatutDisplay(statut) {
    const map = {
      planifiee: "Planifi\xE9e",
      en_cours: "En cours",
      terminee: "Termin\xE9e",
      annulee: "Annul\xE9e"
    };
    return map[statut] || statut;
  }
  getStatutClass(statut) {
    switch (statut) {
      case "planifiee":
        return "badge bg-info";
      case "en_cours":
        return "badge bg-success";
      case "terminee":
        return "badge bg-secondary";
      case "annulee":
        return "badge bg-danger";
      default:
        return "badge bg-light";
    }
  }
  getTypeClass(type) {
    switch (type) {
      case "presentiel":
        return "badge bg-primary";
      case "distanciel":
        return "badge bg-warning";
      case "hybride":
        return "badge bg-success";
      default:
        return "badge bg-light";
    }
  }
  trackBySessionId(_index, session) {
    return session.id;
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  clearError() {
    this.error = "";
  }
  // ── Zoom methods ──────────────────────────────
  loadZoomMeeting(s) {
    if (s.type === "presentiel" || this.zoomMeetings[s.id] || this.zoomLoading[s.id])
      return;
    this.zoomLoading[s.id] = true;
    this.zoomService.getMeetingBySession(s.id).subscribe({
      next: (res) => {
        this.zoomMeetings[s.id] = res.meeting ?? null;
        this.zoomLoading[s.id] = false;
      },
      error: () => {
        this.zoomMeetings[s.id] = null;
        this.zoomLoading[s.id] = false;
      }
    });
  }
  createZoomMeeting(s) {
    this.zoomLoading[s.id] = true;
    this.zoomError = "";
    this.zoomService.createMeeting(s.id).subscribe({
      next: (res) => {
        this.zoomMeetings[s.id] = res.meeting;
        this.zoomLoading[s.id] = false;
        this.zoomSuccess = "Meeting Zoom cr\xE9\xE9. Le lien a \xE9t\xE9 envoy\xE9 aux participants.";
        setTimeout(() => this.zoomSuccess = "", 5e3);
      },
      error: (err) => {
        this.zoomLoading[s.id] = false;
        this.zoomError = err.error?.message || "Erreur lors de la cr\xE9ation du meeting Zoom.";
      }
    });
  }
  startMeeting(s) {
    const m = this.zoomMeetings[s.id];
    if (!m)
      return;
    window.open(m.start_url, "_blank");
  }
  deleteZoomMeeting(s) {
    const m = this.zoomMeetings[s.id];
    if (!m || !confirm("Supprimer le meeting Zoom de cette session ?"))
      return;
    this.zoomLoading[s.id] = true;
    this.zoomService.deleteMeeting(m.id).subscribe({
      next: () => {
        this.zoomMeetings[s.id] = null;
        this.zoomLoading[s.id] = false;
        this.zoomSuccess = "Meeting Zoom supprim\xE9.";
        setTimeout(() => this.zoomSuccess = "", 4e3);
      },
      error: () => {
        this.zoomLoading[s.id] = false;
        this.zoomError = "Erreur lors de la suppression.";
      }
    });
  }
  isZoomAccessible(s) {
    const m = this.zoomMeetings[s.id];
    return m ? this.zoomService.isAccessible(m) : false;
  }
  isZoomExpired(s) {
    const m = this.zoomMeetings[s.id];
    return m ? this.zoomService.isExpired(m) : false;
  }
  getZoomDelai(s) {
    const m = this.zoomMeetings[s.id];
    return m ? this.zoomService.getDelai(m) : "";
  }
  static \u0275fac = function InstructorSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSessionComponent)(\u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(ZoomMeetingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSessionComponent, selectors: [["app-instructor-session"]], decls: 8, vars: 6, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "ip-alert ip-alert--err", 4, "ngIf"], ["class", "ip-alert ip-alert--ok", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "sessionDetailsModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable", 2, "max-width", "680px"], ["class", "sd-modal modal-content", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "ip-alert", "ip-alert--err"], [1, "isax", "isax-video-slash"], ["type", "button", 1, "ip-alert__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "ip-alert", "ip-alert--ok"], [1, "isax", "isax-video-circle"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], ["type", "button", 1, "ip-btn", "ip-btn--outline", 3, "click"], [1, "isax", "isax-refresh-2"], [1, "ip-toolbar"], ["type", "text", "placeholder", "Rechercher session, code, formation\u2026", 1, "ip-search", 3, "ngModelChange", "input", "ngModel"], [1, "ip-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "planifiee"], ["value", "en_cours"], ["value", "terminee"], ["value", "annulee"], ["value", "presentiel"], ["value", "distanciel"], ["value", "hybride"], [1, "ip-card"], [1, "table-responsive"], ["matSort", "", 1, "table", "ip-table", 3, "matSortChange"], ["mat-sort-header", "titre"], ["mat-sort-header", "date_debut"], ["mat-sort-header", "statut"], [3, "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ip-pagination", 4, "ngIf"], [3, "mouseenter"], [1, "ip-session-cell"], [1, "ip-session-icon"], [1, "isax", "isax-calendar-1"], [1, "ip-session-title"], [1, "ip-session-sub"], [1, "ip-session-formation"], [1, "ip-date-cell"], [1, "ip-date-start"], [1, "ip-date-arrow"], [1, "ip-date-end"], [1, "ip-participants"], [1, "ip-pill"], [1, "ip-mini-bar"], [1, "ip-mini-fill"], [1, "text-muted"], [1, "ip-zoom-cell"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], [1, "ip-zoom-na"], ["class", "ip-zoom-spin", 4, "ngIf"], ["class", "ip-zoom-na", 4, "ngIf"], [1, "ip-zoom-spin"], ["type", "button", "class", "ip-zoom-create", 3, "click", 4, "ngIf"], ["type", "button", 1, "ip-zoom-create", 3, "click"], [1, "isax", "isax-video-add"], [1, "ip-zoom-badge"], ["class", "ip-zoom-btns", 4, "ngIf"], [1, "ip-zoom-btns"], ["type", "button", "title", "D\xE9marrer (h\xF4te)", 1, "ip-zoom-btn", "ip-zoom-btn--start", 3, "click"], [1, "isax", "isax-video-play"], ["type", "button", "title", "Supprimer meeting", 1, "ip-zoom-btn", "ip-zoom-btn--del", 3, "click"], [1, "isax", "isax-trash"], ["colspan", "8", 1, "ip-empty"], [1, "ip-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"], [1, "sd-modal", "modal-content"], [1, "sd-head"], [1, "sd-head__icon"], [1, "sd-head__text"], [1, "sd-head__title"], [1, "sd-head__sub"], [1, "sd-mono"], [1, "sd-sep"], [1, "sd-head__badges"], ["type", "button", "data-bs-dismiss", "modal", 1, "sd-close"], [1, "sd-body"], [1, "sd-section-label"], [1, "isax", "isax-clock"], [1, "sd-grid-2"], [1, "sd-info-card"], [1, "sd-info-card__icon", "sd-ic--blue"], [1, "isax", "isax-calendar-add"], [1, "sd-info-card__label"], [1, "sd-info-card__val"], [1, "sd-info-card__icon", "sd-ic--purple"], [1, "isax", "isax-calendar-remove"], ["class", "sd-info-card", 4, "ngIf"], [1, "sd-info-card__icon", "sd-ic--orange"], [1, "isax", "isax-people"], [1, "sd-muted"], [1, "sd-pbar-wrap"], [1, "sd-pbar"], [1, "sd-pbar__fill"], [1, "sd-pbar__label"], ["class", "sd-grid-2", 4, "ngIf"], [1, "sd-foot"], ["type", "button", "data-bs-dismiss", "modal", 1, "sd-btn-ghost"], [1, "sd-info-card__icon", "sd-ic--teal"], [1, "isax", "isax-location"], [1, "isax", "isax-wallet-money"], ["class", "sd-recap-row", 4, "ngIf"], [1, "sd-recap-row"], [1, "sd-rl"], [1, "sd-rv"], [1, "isax", "isax-document-text"], [1, "sd-text-box"], [1, "isax", "isax-info-circle"], [1, "isax", "isax-document"], [1, "sd-tag-list"], ["class", "sd-tag", 4, "ngFor", "ngForOf"], [1, "sd-tag"], [1, "isax", "isax-box"], ["class", "sd-zoom-loading", 4, "ngIf"], [1, "sd-zoom-loading"], [1, "sd-zoom-empty"], [1, "sd-zoom-card"], [1, "sd-zoom-card__status"], ["class", "sd-zoom-card__actions", 4, "ngIf"], [1, "sd-rv", "sd-mono"], ["target", "_blank", 1, "ip-zoom-link", 3, "href"], [1, "sd-zoom-card__actions"], ["type", "button", 1, "ip-zoom-btn", "ip-zoom-btn--start", 3, "click"], ["type", "button", 1, "ip-zoom-btn", "ip-zoom-btn--del", 3, "click"], [1, "isax", "isax-note-text"], [1, "sd-text-box", "sd-text-box--note"], [1, "sd-section-label", 2, "color", "#dc2626"], [1, "isax", "isax-warning-2"], [1, "sd-text-box", "sd-text-box--danger"]], template: function InstructorSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorSessionComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorSessionComponent_div_1_Template, 5, 1, "div", 1)(2, InstructorSessionComponent_div_2_Template, 3, 1, "div", 2)(3, InstructorSessionComponent_div_3_Template, 3, 1, "div", 3)(4, InstructorSessionComponent_ng_container_4_Template, 59, 8, "ng-container", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275template(7, InstructorSessionComponent_div_7_Template, 68, 30, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.zoomError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.zoomSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedSession);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, TitleCasePipe], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #534AB7;\n  border: 1px solid #534AB7;\n}\n.ip-btn--outline[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n}\n.ip-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.ip-search[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  min-width: 240px;\n  transition: border-color 0.15s;\n}\n.ip-search[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.ip-select[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n.ip-select[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-session-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-session-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #EEF2FF;\n  color: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-session-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  margin-top: 1px;\n}\n.ip-session-formation[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #534AB7;\n  margin-top: 2px;\n}\n.ip-date-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12px;\n}\n.ip-date-start[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-date-arrow[_ngcontent-%COMP%] {\n  color: #6C757D;\n  font-size: 11px;\n}\n.ip-date-end[_ngcontent-%COMP%] {\n  color: #6C757D;\n}\n.ip-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-type-badge.ip-type-presentiel[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-type-badge.ip-type-distanciel[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-type-badge.ip-type-hybride[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.ip-statut-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-statut-badge.ip-statut-planifiee[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-statut-badge.ip-statut-en_cours[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-statut-badge.ip-statut-terminee[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-statut-badge.ip-statut-annulee[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-participants[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-mini-bar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 4px;\n  background: #E9ECEF;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ip-mini-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #534AB7;\n  border-radius: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E9ECEF;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ip-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.ip-alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n  border: 1px solid #fecaca;\n}\n.ip-alert--ok[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n  border: 1px solid #6ee7b7;\n}\n.ip-alert__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 14px;\n}\n.ip-zoom-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ip-zoom-na[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 12px;\n}\n.ip-zoom-spin[_ngcontent-%COMP%] {\n  color: #534AB7;\n  font-size: 13px;\n}\n.ip-zoom-spin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-zoom-create[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #534AB7;\n  background: #EEF2FF;\n  border: 1px solid #c7d2fe;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ip-zoom-create[_ngcontent-%COMP%]:hover {\n  background: #e0e7ff;\n}\n.ip-zoom-create[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-zoom-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  background: #f0f4ff;\n  color: #534AB7;\n  border: 1px solid #c7d2fe;\n}\n.ip-zoom-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-zoom-badge--live[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  border-color: #6ee7b7;\n  animation: _ngcontent-%COMP%_pulse-live 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-live {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.ip-zoom-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n}\n.ip-zoom-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.ip-zoom-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-zoom-btn--start[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #534AB7;\n  border-color: #c7d2fe;\n}\n.ip-zoom-btn--start.ip-zoom-btn--live[_ngcontent-%COMP%] {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.ip-zoom-btn--del[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n  border-color: #fecaca;\n  padding: 4px 6px;\n}\n.ip-zoom-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.8;\n}\n.ip-zoom-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ip-zoom-modal-info[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.ip-zoom-modal-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  padding: 4px 0;\n}\n.ip-zoom-modal-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  min-width: 120px;\n}\n.ip-zoom-link[_ngcontent-%COMP%] {\n  color: #534AB7;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-zoom-badge--done[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #9CA3AF;\n  border-color: #E5E7EB;\n}\n.sd-modal[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border: none;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.sd-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 60%,\n      #E8B84B 100%);\n  color: #fff;\n  flex-shrink: 0;\n}\n.sd-head__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.sd-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sd-head__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sd-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.8;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sd-head__badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.sd-head__badges[_ngcontent-%COMP%]   .ip-type-badge[_ngcontent-%COMP%], \n.sd-head__badges[_ngcontent-%COMP%]   .ip-statut-badge[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.sd-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.12);\n  border: none;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.sd-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.22);\n}\n.sd-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  letter-spacing: 0.03em;\n}\n.sd-sep[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.sd-muted[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 0.9em;\n}\n.sd-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #F8FAFC;\n}\n.sd-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.sd-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sd-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #D1D5DB;\n  border-radius: 10px;\n}\n.sd-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6B7280;\n  margin-top: 16px;\n  margin-bottom: 10px;\n}\n.sd-section-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sd-section-label[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.sd-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .sd-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sd-info-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.sd-info-card__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.sd-info-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6B7280;\n  margin-bottom: 2px;\n}\n.sd-info-card__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.sd-ic--blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sd-ic--purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.sd-ic--teal[_ngcontent-%COMP%] {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.sd-ic--orange[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #EA580C;\n}\n.sd-pbar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.sd-pbar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.sd-pbar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #BA7517;\n  border-radius: 10px;\n  transition: width 0.3s;\n}\n.sd-pbar__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  white-space: nowrap;\n}\n.sd-text-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.sd-text-box--note[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  border-color: #FDE68A;\n  color: #92400E;\n}\n.sd-text-box--danger[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  border-color: #FECACA;\n  color: #991B1B;\n}\n.sd-tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.sd-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: #EFF6FF;\n  color: #1D4ED8;\n  border: 1px solid #BFDBFE;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.sd-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 6px 0;\n  border-bottom: 1px solid #F3F4F6;\n  font-size: 13px;\n}\n.sd-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sd-rl[_ngcontent-%COMP%] {\n  color: #6B7280;\n  flex-shrink: 0;\n}\n.sd-rv[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n  font-weight: 500;\n  text-align: right;\n}\n.sd-zoom-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sd-zoom-card__status[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.sd-zoom-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #F3F4F6;\n}\n.sd-zoom-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #6B7280;\n  font-size: 13px;\n  padding: 12px 0;\n}\n.sd-zoom-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.sd-zoom-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  background: #fff;\n  border: 1px dashed #D1D5DB;\n  border-radius: 10px;\n  color: #9CA3AF;\n  font-size: 13px;\n  text-align: center;\n}\n.sd-zoom-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  opacity: 0.5;\n}\n.sd-foot[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  border-top: 1px solid #E9ECEF;\n  background: #fff;\n  display: flex;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.sd-btn-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  border: 1px solid #D1D5DB;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sd-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n  border-color: #9CA3AF;\n}\n/*# sourceMappingURL=instructor-session.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSessionComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-session", standalone: true, imports: [CommonModule, FormsModule, MatSortModule, CustomPaginationComponent], template: `<!-- Loading -->\r
<div *ngIf="loading" class="ip-loader">\r
  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>\r
</div>\r
\r
<!-- Alerts -->\r
<div *ngIf="zoomError" class="ip-alert ip-alert--err">\r
  <i class="isax isax-video-slash"></i> {{ zoomError }}\r
  <button type="button" class="ip-alert__close" (click)="zoomError=''"><i class="isax isax-close-circle"></i></button>\r
</div>\r
<div *ngIf="zoomSuccess" class="ip-alert ip-alert--ok">\r
  <i class="isax isax-video-circle"></i> {{ zoomSuccess }}\r
</div>\r
<div *ngIf="error" class="alert alert-danger alert-dismissible">\r
  {{ error }}\r
  <button type="button" class="btn-close" (click)="clearError()"></button>\r
</div>\r
\r
<ng-container *ngIf="!loading">\r
\r
  <!-- Page header -->\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">Mes sessions <span class="ip-count">{{ totalData }}</span></h5>\r
      <p class="ip-page-head__sub">Vos sessions de formation assign\xE9es</p>\r
    </div>\r
    <button type="button" class="ip-btn ip-btn--outline" (click)="loadSessions()">\r
      <i class="isax isax-refresh-2"></i> Actualiser\r
    </button>\r
  </div>\r
\r
  <!-- Toolbar -->\r
  <div class="ip-toolbar">\r
    <input type="text" class="ip-search" placeholder="Rechercher session, code, formation\u2026"\r
           [(ngModel)]="searchDataValue" (input)="searchData($any($event.target).value)">\r
    <select class="ip-select" [(ngModel)]="selectedStatut" (change)="filterByStatut()">\r
      <option value="">Tous les statuts</option>\r
      <option value="planifiee">Planifi\xE9e</option>\r
      <option value="en_cours">En cours</option>\r
      <option value="terminee">Termin\xE9e</option>\r
      <option value="annulee">Annul\xE9e</option>\r
    </select>\r
    <select class="ip-select" [(ngModel)]="selectedType" (change)="filterByType()">\r
      <option value="">Tous les types</option>\r
      <option value="presentiel">Pr\xE9sentiel</option>\r
      <option value="distanciel">Distanciel</option>\r
      <option value="hybride">Hybride</option>\r
    </select>\r
  </div>\r
\r
  <!-- Table -->\r
  <div class="ip-card">\r
    <div class="table-responsive">\r
      <table class="table ip-table" matSort (matSortChange)="sortData($event)">\r
        <thead>\r
          <tr>\r
            <th mat-sort-header="titre">Session</th>\r
            <th mat-sort-header="date_debut">Dates</th>\r
            <th>Type</th>\r
            <th mat-sort-header="statut">Statut</th>\r
            <th>Participants</th>\r
            <th>Lieu</th>\r
            <th>Zoom</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let s of tableData; trackBy: trackBySessionId"\r
              (mouseenter)="loadZoomMeeting(s)">\r
            <td>\r
              <div class="ip-session-cell">\r
                <div class="ip-session-icon"><i class="isax isax-calendar-1"></i></div>\r
                <div>\r
                  <div class="ip-session-title">{{ s.titre }}</div>\r
                  <div class="ip-session-sub">{{ s.code_session }}</div>\r
                  <div class="ip-session-formation">{{ s.formation?.titre }}</div>\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="ip-date-cell">\r
                <span class="ip-date-start">{{ formatDate(s.date_debut) }}</span>\r
                <span class="ip-date-arrow">\u2192</span>\r
                <span class="ip-date-end">{{ formatDate(s.date_fin) }}</span>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="ip-type-badge ip-type-{{ s.type }}">{{ s.type | titlecase }}</span>\r
            </td>\r
            <td>\r
              <span class="ip-statut-badge ip-statut-{{ s.statut }}">{{ getStatutDisplay(s.statut) }}</span>\r
            </td>\r
            <td>\r
              <div class="ip-participants">\r
                <span class="ip-pill">{{ s.nombre_inscrits || 0 }}/{{ s.capacite_max }}</span>\r
                <div class="ip-mini-bar">\r
                  <div class="ip-mini-fill" [style.width.%]="(s.nombre_inscrits || 0) / s.capacite_max * 100"></div>\r
                </div>\r
              </div>\r
            </td>\r
            <td><span class="text-muted">{{ s.lieu || '\u2014' }}</span></td>\r
\r
            <!-- Zoom -->\r
            <td class="ip-zoom-cell">\r
              <!-- Pr\xE9sentiel : pas de Zoom -->\r
              <ng-container *ngIf="s.type === 'presentiel'">\r
                <span class="ip-zoom-na">\u2014</span>\r
              </ng-container>\r
\r
              <ng-container *ngIf="s.type !== 'presentiel'">\r
\r
                <!-- En chargement -->\r
                <span *ngIf="zoomLoading[s.id]" class="ip-zoom-spin">\r
                  <i class="isax isax-refresh-2"></i>\r
                </span>\r
\r
                <!-- Pas encore interrog\xE9 (undefined) : afficher spinner discret -->\r
                <span *ngIf="!zoomLoading[s.id] && zoomMeetings[s.id] === undefined" class="ip-zoom-na">\u2026</span>\r
\r
                <!-- Confirm\xE9 : aucun meeting (null) -->\r
                <ng-container *ngIf="!zoomLoading[s.id] && zoomMeetings[s.id] === null">\r
                  <button *ngIf="s.statut !== 'terminee' && s.statut !== 'annulee'"\r
                          type="button" class="ip-zoom-create" (click)="createZoomMeeting(s)">\r
                    <i class="isax isax-video-add"></i> Cr\xE9er\r
                  </button>\r
                  <span *ngIf="s.statut === 'terminee' || s.statut === 'annulee'" class="ip-zoom-na">\u2014</span>\r
                </ng-container>\r
\r
                <!-- Meeting existant -->\r
                <ng-container *ngIf="!zoomLoading[s.id] && zoomMeetings[s.id]">\r
                  <div class="ip-zoom-badge"\r
                       [class.ip-zoom-badge--live]="isZoomAccessible(s)"\r
                       [class.ip-zoom-badge--done]="isZoomExpired(s)">\r
                    <i class="isax isax-video-circle"></i>\r
                    <span>{{ isZoomAccessible(s) ? 'En direct' : getZoomDelai(s) }}</span>\r
                  </div>\r
                  <div class="ip-zoom-btns" *ngIf="!isZoomExpired(s)">\r
                    <button type="button" class="ip-zoom-btn ip-zoom-btn--start"\r
                            title="D\xE9marrer (h\xF4te)" (click)="startMeeting(s)"\r
                            [class.ip-zoom-btn--live]="isZoomAccessible(s)">\r
                      <i class="isax isax-video-play"></i>\r
                      <span>{{ isZoomAccessible(s) ? 'D\xE9marrer' : 'Lien h\xF4te' }}</span>\r
                    </button>\r
                    <button type="button" class="ip-zoom-btn ip-zoom-btn--del"\r
                            title="Supprimer meeting" (click)="deleteZoomMeeting(s)">\r
                      <i class="isax isax-trash"></i>\r
                    </button>\r
                  </div>\r
                </ng-container>\r
\r
              </ng-container>\r
            </td>\r
\r
            <td>\r
              <button type="button" class="ip-action-btn" title="D\xE9tails" (click)="viewDetails(s)">\r
                <i class="isax isax-eye"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="tableData.length === 0">\r
            <td colspan="8" class="ip-empty">\r
              <i class="isax isax-calendar-1"></i>\r
              <span>Aucune session trouv\xE9e</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="ip-pagination" *ngIf="totalData > pageSize">\r
      <span class="pg-info">{{ totalData }} session{{ totalData > 1 ? 's' : '' }}</span>\r
      <div class="pg-controls">\r
        <button type="button" class="pg-btn" [disabled]="currentPage === 1" (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" class="pg-btn"\r
                *ngFor="let p of getPageNumbers()"\r
                [class.active]="p === currentPage"\r
                (click)="onPageChange(p)">{{ p }}</button>\r
        <button type="button" class="pg-btn"\r
                [disabled]="currentPage * pageSize >= totalData"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-2"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550 MODAL D\xC9TAILS SESSION \u2550\u2550 -->\r
<div class="modal fade" id="sessionDetailsModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-scrollable" style="max-width:680px;">\r
    <div class="sd-modal modal-content" *ngIf="selectedSession">\r
\r
      <!-- Head -->\r
      <div class="sd-head">\r
        <div class="sd-head__icon">\r
          <i class="isax isax-calendar-1"></i>\r
        </div>\r
        <div class="sd-head__text">\r
          <div class="sd-head__title">{{ selectedSession.titre }}</div>\r
          <div class="sd-head__sub">\r
            <span class="sd-mono">{{ selectedSession.code_session }}</span>\r
            <span class="sd-sep">\xB7</span>\r
            {{ selectedSession.formation?.titre }}\r
          </div>\r
        </div>\r
        <div class="sd-head__badges">\r
          <span class="ip-type-badge ip-type-{{ selectedSession.type }}">{{ selectedSession.type | titlecase }}</span>\r
          <span class="ip-statut-badge ip-statut-{{ selectedSession.statut }}">{{ getStatutDisplay(selectedSession.statut) }}</span>\r
        </div>\r
        <button type="button" class="sd-close" data-bs-dismiss="modal">\r
          <i class="isax isax-close-circle"></i>\r
        </button>\r
      </div>\r
\r
      <div class="sd-body">\r
\r
        <!-- \u2500\u2500 Planning \u2500\u2500 -->\r
        <div class="sd-section-label"><i class="isax isax-clock"></i> Planning</div>\r
        <div class="sd-grid-2">\r
          <div class="sd-info-card">\r
            <div class="sd-info-card__icon sd-ic--blue"><i class="isax isax-calendar-add"></i></div>\r
            <div>\r
              <div class="sd-info-card__label">D\xE9but</div>\r
              <div class="sd-info-card__val">{{ formatDate(selectedSession.date_debut) }}</div>\r
            </div>\r
          </div>\r
          <div class="sd-info-card">\r
            <div class="sd-info-card__icon sd-ic--purple"><i class="isax isax-calendar-remove"></i></div>\r
            <div>\r
              <div class="sd-info-card__label">Fin</div>\r
              <div class="sd-info-card__val">{{ formatDate(selectedSession.date_fin) }}</div>\r
            </div>\r
          </div>\r
          <div class="sd-info-card" *ngIf="selectedSession.lieu">\r
            <div class="sd-info-card__icon sd-ic--teal"><i class="isax isax-location"></i></div>\r
            <div>\r
              <div class="sd-info-card__label">Lieu</div>\r
              <div class="sd-info-card__val">{{ selectedSession.lieu }}</div>\r
            </div>\r
          </div>\r
          <div class="sd-info-card">\r
            <div class="sd-info-card__icon sd-ic--orange"><i class="isax isax-people"></i></div>\r
            <div>\r
              <div class="sd-info-card__label">Participants</div>\r
              <div class="sd-info-card__val">\r
                {{ selectedSession.nombre_inscrits || 0 }}<span class="sd-muted">/{{ selectedSession.capacite_max }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Participants bar \u2500\u2500 -->\r
        <div class="sd-pbar-wrap">\r
          <div class="sd-pbar">\r
            <div class="sd-pbar__fill"\r
                 [style.width.%]="(selectedSession.nombre_inscrits || 0) / selectedSession.capacite_max * 100"></div>\r
          </div>\r
          <span class="sd-pbar__label">\r
            {{ selectedSession.nombre_places_restantes }} place{{ selectedSession.nombre_places_restantes !== 1 ? 's' : '' }} restante{{ selectedSession.nombre_places_restantes !== 1 ? 's' : '' }}\r
          </span>\r
        </div>\r
\r
        <!-- \u2500\u2500 Co\xFBts \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSession.cout_par_participant || selectedSession.cout_total_session">\r
          <div class="sd-section-label"><i class="isax isax-wallet-money"></i> Co\xFBts</div>\r
          <div class="sd-grid-2">\r
            <div class="sd-recap-row" *ngIf="selectedSession.cout_par_participant">\r
              <span class="sd-rl">Par participant</span>\r
              <span class="sd-rv">{{ selectedSession.cout_par_participant }} XOF</span>\r
            </div>\r
            <div class="sd-recap-row" *ngIf="selectedSession.cout_total_session">\r
              <span class="sd-rl">Total session</span>\r
              <span class="sd-rv">{{ selectedSession.cout_total_session }} XOF</span>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 Description \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSession.description">\r
          <div class="sd-section-label"><i class="isax isax-document-text"></i> Description</div>\r
          <div class="sd-text-box">{{ selectedSession.description }}</div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 Instructions \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSession.instructions_acces">\r
          <div class="sd-section-label"><i class="isax isax-info-circle"></i> Instructions d'acc\xE8s</div>\r
          <div class="sd-text-box">{{ selectedSession.instructions_acces }}</div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 Documents / Mat\xE9riel \u2500\u2500 -->\r
        <div class="sd-grid-2" *ngIf="selectedSession.documents_requis?.length || selectedSession.materiel_requis?.length">\r
          <div *ngIf="selectedSession.documents_requis?.length">\r
            <div class="sd-section-label"><i class="isax isax-document"></i> Documents requis</div>\r
            <div class="sd-tag-list">\r
              <span class="sd-tag" *ngFor="let d of selectedSession.documents_requis">{{ d }}</span>\r
            </div>\r
          </div>\r
          <div *ngIf="selectedSession.materiel_requis?.length">\r
            <div class="sd-section-label"><i class="isax isax-box"></i> Mat\xE9riel requis</div>\r
            <div class="sd-tag-list">\r
              <span class="sd-tag" *ngFor="let m of selectedSession.materiel_requis">{{ m }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Zoom \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSession.type !== 'presentiel'">\r
          <div class="sd-section-label"><i class="isax isax-video-circle"></i> Meeting Zoom</div>\r
\r
          <div *ngIf="zoomLoading[selectedSession.id]" class="sd-zoom-loading">\r
            <i class="isax isax-refresh-2"></i> Chargement du meeting\u2026\r
          </div>\r
\r
          <ng-container *ngIf="!zoomLoading[selectedSession.id]">\r
            <!-- Pas de meeting -->\r
            <ng-container *ngIf="zoomMeetings[selectedSession.id] === null">\r
              <div class="sd-zoom-empty">\r
                <i class="isax isax-video-slash"></i>\r
                <span>Aucun meeting Zoom pour cette session.</span>\r
                <button *ngIf="selectedSession.statut !== 'terminee' && selectedSession.statut !== 'annulee'"\r
                        type="button" class="ip-zoom-create" (click)="createZoomMeeting(selectedSession)">\r
                  <i class="isax isax-video-add"></i> Cr\xE9er le meeting\r
                </button>\r
              </div>\r
            </ng-container>\r
\r
            <!-- Meeting existant -->\r
            <ng-container *ngIf="zoomMeetings[selectedSession.id] as m">\r
              <div class="sd-zoom-card">\r
                <div class="sd-zoom-card__status">\r
                  <span class="ip-zoom-badge"\r
                        [class.ip-zoom-badge--live]="isZoomAccessible(selectedSession)"\r
                        [class.ip-zoom-badge--done]="isZoomExpired(selectedSession)">\r
                    <i class="isax isax-video-circle"></i>\r
                    {{ isZoomAccessible(selectedSession) ? 'En direct' : getZoomDelai(selectedSession) }}\r
                  </span>\r
                </div>\r
                <div class="sd-recap-row">\r
                  <span class="sd-rl">Programm\xE9 le</span>\r
                  <span class="sd-rv">{{ formatDate(m.scheduled_at) }}</span>\r
                </div>\r
                <div class="sd-recap-row">\r
                  <span class="sd-rl">Dur\xE9e</span>\r
                  <span class="sd-rv">{{ m.duration }} min</span>\r
                </div>\r
                <div class="sd-recap-row" *ngIf="m.password">\r
                  <span class="sd-rl">Mot de passe</span>\r
                  <span class="sd-rv sd-mono">{{ m.password }}</span>\r
                </div>\r
                <div class="sd-recap-row" *ngIf="m.recording_url">\r
                  <span class="sd-rl">Enregistrement</span>\r
                  <a [href]="m.recording_url" target="_blank" class="ip-zoom-link">\r
                    <i class="isax isax-video-play"></i> Voir l'enregistrement\r
                  </a>\r
                </div>\r
                <div class="sd-zoom-card__actions" *ngIf="!isZoomExpired(selectedSession)">\r
                  <button type="button" class="ip-zoom-btn ip-zoom-btn--start"\r
                          [class.ip-zoom-btn--live]="isZoomAccessible(selectedSession)"\r
                          (click)="startMeeting(selectedSession)">\r
                    <i class="isax isax-video-play"></i>\r
                    {{ isZoomAccessible(selectedSession) ? 'D\xE9marrer maintenant' : 'Ouvrir lien h\xF4te' }}\r
                  </button>\r
                  <button type="button" class="ip-zoom-btn ip-zoom-btn--del"\r
                          (click)="deleteZoomMeeting(selectedSession)">\r
                    <i class="isax isax-trash"></i> Supprimer\r
                  </button>\r
                </div>\r
              </div>\r
            </ng-container>\r
          </ng-container>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 Notes \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSession.notes_organisateur">\r
          <div class="sd-section-label"><i class="isax isax-note-text"></i> Notes</div>\r
          <div class="sd-text-box sd-text-box--note">{{ selectedSession.notes_organisateur }}</div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 Motif annulation \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSession.statut === 'annulee' && selectedSession.motif_annulation">\r
          <div class="sd-section-label" style="color:#dc2626;"><i class="isax isax-warning-2"></i> Motif d'annulation</div>\r
          <div class="sd-text-box sd-text-box--danger">{{ selectedSession.motif_annulation }}</div>\r
        </ng-container>\r
\r
      </div><!-- /sd-body -->\r
\r
      <div class="sd-foot">\r
        <button type="button" class="sd-btn-ghost" data-bs-dismiss="modal">Fermer</button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/instructor/instructor-session/instructor-session.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--outline {\n  background: #fff;\n  color: #534AB7;\n  border: 1px solid #534AB7;\n}\n.ip-btn--outline:hover {\n  background: #EEF2FF;\n}\n.ip-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.ip-search {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  min-width: 240px;\n  transition: border-color 0.15s;\n}\n.ip-search:focus {\n  border-color: #534AB7;\n}\n.ip-select {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n.ip-select:focus {\n  border-color: #534AB7;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-session-cell {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-session-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #EEF2FF;\n  color: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-session-sub {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  margin-top: 1px;\n}\n.ip-session-formation {\n  font-size: 11px;\n  color: #534AB7;\n  margin-top: 2px;\n}\n.ip-date-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12px;\n}\n.ip-date-start {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-date-arrow {\n  color: #6C757D;\n  font-size: 11px;\n}\n.ip-date-end {\n  color: #6C757D;\n}\n.ip-type-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-type-badge.ip-type-presentiel {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-type-badge.ip-type-distanciel {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-type-badge.ip-type-hybride {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.ip-statut-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-statut-badge.ip-statut-planifiee {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-statut-badge.ip-statut-en_cours {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-statut-badge.ip-statut-terminee {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-statut-badge.ip-statut-annulee {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-participants {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-mini-bar {\n  width: 80px;\n  height: 4px;\n  background: #E9ECEF;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ip-mini-fill {\n  height: 100%;\n  background: #534AB7;\n  border-radius: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E9ECEF;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ip-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.ip-alert--err {\n  background: #FEF2F2;\n  color: #DC2626;\n  border: 1px solid #fecaca;\n}\n.ip-alert--ok {\n  background: #ECFDF5;\n  color: #059669;\n  border: 1px solid #6ee7b7;\n}\n.ip-alert__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 14px;\n}\n.ip-zoom-cell {\n  white-space: nowrap;\n}\n.ip-zoom-na {\n  color: #9ca3af;\n  font-size: 12px;\n}\n.ip-zoom-spin {\n  color: #534AB7;\n  font-size: 13px;\n}\n.ip-zoom-spin i {\n  display: inline-block;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-zoom-create {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #534AB7;\n  background: #EEF2FF;\n  border: 1px solid #c7d2fe;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ip-zoom-create:hover {\n  background: #e0e7ff;\n}\n.ip-zoom-create i {\n  font-size: 13px;\n}\n.ip-zoom-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  background: #f0f4ff;\n  color: #534AB7;\n  border: 1px solid #c7d2fe;\n}\n.ip-zoom-badge i {\n  font-size: 12px;\n}\n.ip-zoom-badge--live {\n  background: #ecfdf5;\n  color: #059669;\n  border-color: #6ee7b7;\n  animation: pulse-live 1.5s ease-in-out infinite;\n}\n@keyframes pulse-live {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.ip-zoom-btns {\n  display: flex;\n  gap: 4px;\n  margin-top: 4px;\n}\n.ip-zoom-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.ip-zoom-btn i {\n  font-size: 13px;\n}\n.ip-zoom-btn--start {\n  background: #EEF2FF;\n  color: #534AB7;\n  border-color: #c7d2fe;\n}\n.ip-zoom-btn--start.ip-zoom-btn--live {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.ip-zoom-btn--del {\n  background: #FEF2F2;\n  color: #DC2626;\n  border-color: #fecaca;\n  padding: 4px 6px;\n}\n.ip-zoom-btn:hover:not(:disabled) {\n  opacity: 0.8;\n}\n.ip-zoom-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ip-zoom-modal-info {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.ip-zoom-modal-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  padding: 4px 0;\n}\n.ip-zoom-modal-row .label {\n  color: #6c757d;\n  min-width: 120px;\n}\n.ip-zoom-link {\n  color: #534AB7;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-zoom-badge--done {\n  background: #F3F4F6;\n  color: #9CA3AF;\n  border-color: #E5E7EB;\n}\n.sd-modal {\n  border-radius: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border: none;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.sd-head {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 60%,\n      #E8B84B 100%);\n  color: #fff;\n  flex-shrink: 0;\n}\n.sd-head__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.sd-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.sd-head__title {\n  font-size: 16px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sd-head__sub {\n  font-size: 12px;\n  opacity: 0.8;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sd-head__badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.sd-head__badges .ip-type-badge,\n.sd-head__badges .ip-statut-badge {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.sd-close {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.12);\n  border: none;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.sd-close:hover {\n  background: rgba(0, 0, 0, 0.22);\n}\n.sd-mono {\n  font-family: monospace;\n  letter-spacing: 0.03em;\n}\n.sd-sep {\n  opacity: 0.6;\n}\n.sd-muted {\n  color: #9CA3AF;\n  font-size: 0.9em;\n}\n.sd-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #F8FAFC;\n}\n.sd-body::-webkit-scrollbar {\n  width: 5px;\n}\n.sd-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sd-body::-webkit-scrollbar-thumb {\n  background: #D1D5DB;\n  border-radius: 10px;\n}\n.sd-section-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6B7280;\n  margin-top: 16px;\n  margin-bottom: 10px;\n}\n.sd-section-label i {\n  font-size: 14px;\n}\n.sd-section-label:first-child {\n  margin-top: 0;\n}\n.sd-grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .sd-grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n.sd-info-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.sd-info-card__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.sd-info-card__label {\n  font-size: 11px;\n  color: #6B7280;\n  margin-bottom: 2px;\n}\n.sd-info-card__val {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.sd-ic--blue {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sd-ic--purple {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.sd-ic--teal {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.sd-ic--orange {\n  background: #FFF7ED;\n  color: #EA580C;\n}\n.sd-pbar-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.sd-pbar {\n  flex: 1;\n  height: 6px;\n  background: #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.sd-pbar__fill {\n  height: 100%;\n  background: #BA7517;\n  border-radius: 10px;\n  transition: width 0.3s;\n}\n.sd-pbar__label {\n  font-size: 12px;\n  color: #6B7280;\n  white-space: nowrap;\n}\n.sd-text-box {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.sd-text-box--note {\n  background: #FFFBEB;\n  border-color: #FDE68A;\n  color: #92400E;\n}\n.sd-text-box--danger {\n  background: #FFF5F5;\n  border-color: #FECACA;\n  color: #991B1B;\n}\n.sd-tag-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.sd-tag {\n  display: inline-flex;\n  align-items: center;\n  background: #EFF6FF;\n  color: #1D4ED8;\n  border: 1px solid #BFDBFE;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.sd-recap-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 6px 0;\n  border-bottom: 1px solid #F3F4F6;\n  font-size: 13px;\n}\n.sd-recap-row:last-child {\n  border-bottom: none;\n}\n.sd-rl {\n  color: #6B7280;\n  flex-shrink: 0;\n}\n.sd-rv {\n  color: #1A1A2E;\n  font-weight: 500;\n  text-align: right;\n}\n.sd-zoom-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sd-zoom-card__status {\n  margin-bottom: 8px;\n}\n.sd-zoom-card__actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #F3F4F6;\n}\n.sd-zoom-loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #6B7280;\n  font-size: 13px;\n  padding: 12px 0;\n}\n.sd-zoom-loading i {\n  animation: spin 0.8s linear infinite;\n}\n.sd-zoom-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  background: #fff;\n  border: 1px dashed #D1D5DB;\n  border-radius: 10px;\n  color: #9CA3AF;\n  font-size: 13px;\n  text-align: center;\n}\n.sd-zoom-empty i {\n  font-size: 24px;\n  opacity: 0.5;\n}\n.sd-foot {\n  padding: 14px 24px;\n  border-top: 1px solid #E9ECEF;\n  background: #fff;\n  display: flex;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.sd-btn-ghost {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  border: 1px solid #D1D5DB;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sd-btn-ghost:hover {\n  background: #F9FAFB;\n  border-color: #9CA3AF;\n}\n/*# sourceMappingURL=instructor-session.component.css.map */\n"] }]
  }], () => [{ type: SessionFormationService }, { type: ZoomMeetingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSessionComponent, { className: "InstructorSessionComponent", filePath: "app/features/instructor/instructor-session/instructor-session.component.ts", lineNumber: 16 });
})();
export {
  InstructorSessionComponent
};
//# sourceMappingURL=chunk-L2LNG5SA.js.map
