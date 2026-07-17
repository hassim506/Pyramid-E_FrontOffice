import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-C3XHZ4TX.js";
import {
  ZoomMeetingService
} from "./chunk-HRLZE63H.js";
import {
  SessionFormationService
} from "./chunk-RK3Q2J3M.js";
import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import {
  HasPermissionDirective
} from "./chunk-VS3ZYZPZ.js";
import "./chunk-HPF6XDYM.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  TitleCasePipe
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-session/adminrh-session.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
var _c2 = () => ({ n: 1, l: "Infos & modalit\xE9" });
var _c3 = () => ({ n: 2, l: "Date & horaire" });
var _c4 = () => ({ n: 3, l: "Participants" });
var _c5 = (a0, a1, a2) => [a0, a1, a2];
var _c6 = () => ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
var _c7 = () => ({ standalone: true });
function AdminrhSessionComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function AdminrhSessionComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, " Planifier une session ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomError = "");
    });
    \u0275\u0275element(4, "i", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.zoomError, " ");
  }
}
function AdminrhSessionComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_33_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275element(4, "i", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AdminrhSessionComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_34_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275element(4, "i", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function AdminrhSessionComponent_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 46);
  }
}
function AdminrhSessionComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, AdminrhSessionComponent_div_60_div_1_Template, 1, 0, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminrhSessionComponent_div_61_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r7);
  }
}
function AdminrhSessionComponent_div_61_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275pipe(1, "titlecase");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.getSessionTypeClass(s_r8))("title", (s_r8.titre || (s_r8.formation == null ? null : s_r8.formation.titre) || "") + " \u2014 " + \u0275\u0275pipeBind1(1, 3, s_r8.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 5, s_r8.titre || (s_r8.formation == null ? null : s_r8.formation.titre) || "\u2014", 0, 18), " ");
  }
}
function AdminrhSessionComponent_div_61_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65);
    \u0275\u0275template(4, AdminrhSessionComponent_div_61_div_12_div_4_Template, 4, 9, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-cal__cell--other", !ctx_r1.isCurrentMonth(cell_r9.date))("ss-cal__cell--today", ctx_r1.isTodayDate(cell_r9.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r9.date.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cell_r9.sessions);
  }
}
function AdminrhSessionComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "button", 50);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_61_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mainCalPrev());
    });
    \u0275\u0275element(4, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_61_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mainCalNext());
    });
    \u0275\u0275element(9, "i", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 54);
    \u0275\u0275template(11, AdminrhSessionComponent_div_61_div_11_Template, 2, 1, "div", 55)(12, AdminrhSessionComponent_div_61_div_12_Template, 5, 6, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 57)(14, "span", 58);
    \u0275\u0275element(15, "span", 59);
    \u0275\u0275text(16, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 58);
    \u0275\u0275element(18, "span", 60);
    \u0275\u0275text(19, "Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 58);
    \u0275\u0275element(21, "span", 61);
    \u0275\u0275text(22, "Hybride");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r1.mainCalMonthLabel));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getMainCalendarDays());
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 88);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 92);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const s_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createZoomMeeting(s_r11));
    });
    \u0275\u0275element(2, "i", 93);
    \u0275\u0275text(3, " Cr\xE9er ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.zoomMeetings[s_r11.id] == null ? null : ctx_r1.zoomMeetings[s_r11.id].password, " ");
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275element(2, "i", 95);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 96)(6, "button", 97);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const s_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openZoomLink(s_r11));
    });
    \u0275\u0275element(7, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 99);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const s_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyJoinLink(s_r11));
    });
    \u0275\u0275element(9, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 101);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const s_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteZoomMeeting(s_r11));
    });
    \u0275\u0275element(11, "i", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_div_12_Template, 3, 1, "div", 103);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ss-zoom-badge--live", ctx_r1.isZoomAccessible(s_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isZoomAccessible(s_r11) ? "En direct" : ctx_r1.getZoomDelai(s_r11));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.zoomMeetings[s_r11.id] == null ? null : ctx_r1.zoomMeetings[s_r11.id].password);
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSessionComponent_div_62_tr_21_ng_container_29_span_1_Template, 2, 0, "span", 89)(2, AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_2_Template, 4, 0, "ng-container", 71)(3, AdminrhSessionComponent_div_62_tr_21_ng_container_29_ng_container_3_Template, 13, 4, "ng-container", 71);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.zoomLoading[s_r11.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomLoading[s_r11.id] && !ctx_r1.zoomMeetings[s_r11.id] && s_r11.statut !== "annulee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomLoading[s_r11.id] && ctx_r1.zoomMeetings[s_r11.id]);
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_36_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_36_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const s_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openInscription(s_r11));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_36_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_36_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const s_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelSession(s_r11));
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_62_tr_21_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSessionComponent_div_62_tr_21_ng_container_36_button_1_Template, 2, 0, "button", 106);
    \u0275\u0275elementStart(2, "button", 107);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const s_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r11));
    });
    \u0275\u0275element(3, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhSessionComponent_div_62_tr_21_ng_container_36_button_4_Template, 2, 0, "button", 109);
    \u0275\u0275elementStart(5, "button", 110);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_ng_container_36_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const s_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveSession(s_r11));
    });
    \u0275\u0275element(6, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.statut === "planifiee");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", s_r11.statut === "annulee");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r11.statut === "planifiee");
  }
}
function AdminrhSessionComponent_div_62_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 73);
    \u0275\u0275listener("mouseenter", function AdminrhSessionComponent_div_62_tr_21_Template_tr_mouseenter_0_listener() {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadZoomMeeting(s_r11));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 76);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 77);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 78)(20, "div", 79);
    \u0275\u0275element(21, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 81);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td")(25, "div", 74);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 82);
    \u0275\u0275template(28, AdminrhSessionComponent_div_62_tr_21_ng_container_28_Template, 3, 0, "ng-container", 71)(29, AdminrhSessionComponent_div_62_tr_21_ng_container_29_Template, 4, 3, "ng-container", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td")(31, "div", 83)(32, "button", 84);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_Template_button_click_32_listener() {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(s_r11));
    });
    \u0275\u0275element(33, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 86);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_tr_21_Template_button_click_34_listener() {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openParticipants(s_r11));
    });
    \u0275\u0275element(35, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminrhSessionComponent_div_62_tr_21_ng_container_36_Template, 7, 3, "ng-container", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r11.titre || (s_r11.formation == null ? null : s_r11.formation.titre) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r11.code_session);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r11.date_debut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatTime(s_r11.date_debut), " \u2013 ", ctx_r1.formatTime(s_r11.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-t", s_r11.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, s_r11.type_display || s_r11.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-s", ctx_r1.statutKey(ctx_r1.resolvedStatut(s_r11)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statutLabel(ctx_r1.resolvedStatut(s_r11)));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (s_r11.nombre_inscrits || 0) / s_r11.capacite_max * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r11.nombre_inscrits || 0, "/", s_r11.capacite_max);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((s_r11.formateur == null ? null : s_r11.formateur.name) || (s_r11.formateur == null ? null : s_r11.formateur.prenom) + " " + (s_r11.formateur == null ? null : s_r11.formateur.nom) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r11.type === "presentiel" || ctx_r1.isSessionPassed(s_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.type !== "presentiel" && !ctx_r1.isSessionPassed(s_r11));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.isSessionPassed(s_r11));
  }
}
function AdminrhSessionComponent_div_62_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhSessionComponent_div_62_div_23_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_div_23_button_3_Template_button_click_0_listener() {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.currentPage = i_r19 + 1);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r19 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r19 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r19 + 1);
  }
}
function AdminrhSessionComponent_div_62_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "button", 117);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentPage = ctx_r1.currentPage - 1);
    });
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminrhSessionComponent_div_62_div_23_button_3_Template, 2, 3, "button", 118);
    \u0275\u0275elementStart(4, "button", 117);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_62_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentPage = ctx_r1.currentPage + 1);
    });
    \u0275\u0275element(5, "i", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagesArray);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminrhSessionComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "table", 69)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Modalit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Places");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Zoom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AdminrhSessionComponent_div_62_tr_21_Template, 37, 19, "tr", 70)(22, AdminrhSessionComponent_div_62_tr_22_Template, 5, 0, "tr", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, AdminrhSessionComponent_div_62_div_23_Template, 6, 3, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.pagedSessions)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sessions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function AdminrhSessionComponent_div_63_ng_container_13_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 142);
  }
}
function AdminrhSessionComponent_div_63_ng_container_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r21.n);
  }
}
function AdminrhSessionComponent_div_63_ng_container_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 143);
  }
}
function AdminrhSessionComponent_div_63_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 137)(2, "div", 138);
    \u0275\u0275template(3, AdminrhSessionComponent_div_63_ng_container_13_i_3_Template, 1, 0, "i", 139)(4, AdminrhSessionComponent_div_63_ng_container_13_span_4_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 140);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhSessionComponent_div_63_ng_container_13_div_7_Template, 1, 0, "div", 141);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const st_r21 = ctx.$implicit;
    const last_r22 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", ctx_r1.wizardStep > st_r21.n)("active", ctx_r1.wizardStep === st_r21.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > st_r21.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep <= st_r21.n);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.wizardStep > st_r21.n)("active", ctx_r1.wizardStep === st_r21.n);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r21.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r22);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r23 = ctx.$implicit;
    \u0275\u0275property("value", f_r23.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r23.titre);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r24 = ctx.$implicit;
    \u0275\u0275property("value", f_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r24.prenom ? f_r24.prenom + " " + f_r24.nom : f_r24.name, " ");
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_ng_container_15_div_30_Template_div_click_0_listener() {
      const m_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setMode(m_r26.key));
    });
    \u0275\u0275elementStart(1, "div", 160);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 161);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 162);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("on", ctx_r1.wizardType === m_r26.key);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", m_r26.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r26.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r26.sub);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "label", 145);
    \u0275\u0275text(2, "Salle / Lieu ");
    \u0275\u0275template(3, AdminrhSessionComponent_div_63_ng_container_15_div_31_span_3_Template, 2, 0, "span", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 164)(5, "div", 165);
    \u0275\u0275element(6, "i", 166)(7, "input", 167);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wizardType === "presentiel");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_32_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275element(1, "i", 177);
    \u0275\u0275elementStart(2, "span", 173);
    \u0275\u0275text(3, "Mot de passe :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.zoomMeetings[ctx_r1.wizardSelected.id].password);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 171);
    \u0275\u0275element(2, "i", 172);
    \u0275\u0275elementStart(3, "span", 173);
    \u0275\u0275text(4, "Lien Zoom participants :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 174);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 175);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_ng_container_15_div_32_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copyJoinLink(ctx_r1.wizardSelected));
    });
    \u0275\u0275element(8, "i", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminrhSessionComponent_div_63_ng_container_15_div_32_div_3_div_9_Template, 6, 1, "div", 176);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.zoomMeetings[ctx_r1.wizardSelected.id].join_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.zoomMeetings[ctx_r1.wizardSelected.id].join_url, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.zoomMeetings[ctx_r1.wizardSelected.id].password);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_32_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div", 165);
    \u0275\u0275element(2, "i", 178)(3, "input", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 165);
    \u0275\u0275element(5, "i", 105)(6, "input", 180);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "label", 145);
    \u0275\u0275text(2, "Lien de connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminrhSessionComponent_div_63_ng_container_15_div_32_div_3_Template, 10, 3, "div", 168)(4, AdminrhSessionComponent_div_63_ng_container_15_div_32_div_4_Template, 7, 2, "div", 169);
    \u0275\u0275elementStart(5, "span", 157);
    \u0275\u0275text(6, " Laissez vide si vous utilisez Zoom \u2014 le lien sera g\xE9n\xE9r\xE9 automatiquement apr\xE8s cr\xE9ation ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wizardSelected && ctx_r1.zoomMeetings[ctx_r1.wizardSelected.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.wizardSelected || !ctx_r1.zoomMeetings[ctx_r1.wizardSelected.id]);
  }
}
function AdminrhSessionComponent_div_63_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 144)(2, "label", 145);
    \u0275\u0275text(3, "Formation associ\xE9e ");
    \u0275\u0275elementStart(4, "span", 146);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "select", 147)(7, "option", 6);
    \u0275\u0275text(8, "S\xE9lectionner une formation...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminrhSessionComponent_div_63_ng_container_15_option_9_Template, 2, 2, "option", 148);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 149)(11, "div", 150)(12, "label", 145);
    \u0275\u0275text(13, "Formateur ");
    \u0275\u0275elementStart(14, "span", 146);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 151)(17, "option", 6);
    \u0275\u0275text(18, "S\xE9lectionner...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminrhSessionComponent_div_63_ng_container_15_option_19_Template, 2, 2, "option", 148);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 150)(21, "label", 145);
    \u0275\u0275text(22, "Capacit\xE9 maximale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 152);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 144)(25, "label", 145);
    \u0275\u0275text(26, "Modalit\xE9 ");
    \u0275\u0275elementStart(27, "span", 146);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 153);
    \u0275\u0275template(30, AdminrhSessionComponent_div_63_ng_container_15_div_30_Template, 7, 7, "div", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, AdminrhSessionComponent_div_63_ng_container_15_div_31_Template, 8, 2, "div", 155)(32, AdminrhSessionComponent_div_63_ng_container_15_div_32_Template, 7, 2, "div", 155);
    \u0275\u0275elementStart(33, "div", 144)(34, "label", 145);
    \u0275\u0275text(35, "Titre personnalis\xE9 de la session");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 156);
    \u0275\u0275elementStart(37, "span", 157);
    \u0275\u0275text(38, "Laissez vide pour utiliser le titre de la formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275attribute("disabled", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formations);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("disabled", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formateurs);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.modes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardType !== "distanciel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardType !== "presentiel");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
  }
}
function AdminrhSessionComponent_div_63_ng_container_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r29);
  }
}
function AdminrhSessionComponent_div_63_ng_container_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_ng_container_16_div_18_Template_div_click_0_listener() {
      const cell_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!cell_r31.empty && ctx_r1.selectDate(cell_r31.date));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sw-cal__day--empty", cell_r31.empty)("sw-cal__day--past", !cell_r31.empty && ctx_r1.isPast(cell_r31.date))("sw-cal__day--today", ctx_r1.isToday(cell_r31.date))("sw-cal__day--sel", ctx_r1.isSelected(cell_r31.date))("sw-cal__day--has", ctx_r1.hasSession(cell_r31.date) && !ctx_r1.isSelected(cell_r31.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r31.empty ? "" : cell_r31.date.getDate(), " ");
  }
}
function AdminrhSessionComponent_div_63_ng_container_16_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150)(2, "label", 145);
    \u0275\u0275text(3, "Rappel avant la session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 197);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_63_ng_container_16_div_43_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.rappel, $event) || (ctx_r1.rappel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 198);
    \u0275\u0275text(6, "24h avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 199);
    \u0275\u0275text(8, "48h avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 200);
    \u0275\u0275text(10, "1 semaine avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 201);
    \u0275\u0275text(12, "Aucun rappel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 150)(14, "label", 145);
    \u0275\u0275text(15, "R\xE9currence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 197);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_63_ng_container_16_div_43_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.recurrence, $event) || (ctx_r1.recurrence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 201);
    \u0275\u0275text(18, "Pas de r\xE9currence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 202);
    \u0275\u0275text(20, "Hebdomadaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 203);
    \u0275\u0275text(22, "Bi-mensuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 204);
    \u0275\u0275text(24, "Mensuelle");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rappel);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c7));
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.recurrence);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c7));
  }
}
function AdminrhSessionComponent_div_63_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 144)(2, "label", 145);
    \u0275\u0275text(3, "Choisir la date ");
    \u0275\u0275elementStart(4, "span", 146);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 181)(7, "div", 182)(8, "span", 183);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 184)(12, "button", 185);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_ng_container_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calPrev());
    });
    \u0275\u0275element(13, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 185);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_ng_container_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calNext());
    });
    \u0275\u0275element(15, "i", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 186);
    \u0275\u0275template(17, AdminrhSessionComponent_div_63_ng_container_16_div_17_Template, 2, 1, "div", 187)(18, AdminrhSessionComponent_div_63_ng_container_16_div_18_Template, 2, 11, "div", 188);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 149)(20, "div", 150)(21, "label", 145);
    \u0275\u0275text(22, "Heure de d\xE9but ");
    \u0275\u0275elementStart(23, "span", 146);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 189);
    \u0275\u0275element(26, "i", 28);
    \u0275\u0275elementStart(27, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_63_ng_container_16_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.heureDebut, $event) || (ctx_r1.heureDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 150)(29, "label", 145);
    \u0275\u0275text(30, "Heure de fin ");
    \u0275\u0275elementStart(31, "span", 146);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 189);
    \u0275\u0275element(34, "i", 28);
    \u0275\u0275elementStart(35, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_63_ng_container_16_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.heureFin, $event) || (ctx_r1.heureFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 191);
    \u0275\u0275element(37, "i", 192);
    \u0275\u0275text(38, " Dur\xE9e : ");
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 193);
    \u0275\u0275text(42, "Fuseau : UTC+0 (Dakar)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, AdminrhSessionComponent_div_63_ng_container_16_div_43_Template, 25, 6, "div", 194);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, ctx_r1.calMonthLabel));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c6));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.calendarDays);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.heureDebut);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c7));
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.heureFin);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c7));
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.durationLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wizardMode !== "view");
  }
}
function AdminrhSessionComponent_div_63_ng_container_17_div_24_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 29);
  }
}
function AdminrhSessionComponent_div_63_ng_container_17_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 225);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_ng_container_17_div_24_Template_div_click_0_listener() {
      const u_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleParticipant(u_r35));
    });
    \u0275\u0275elementStart(1, "div", 226);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 227)(4, "div", 228);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 229);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 230);
    \u0275\u0275template(9, AdminrhSessionComponent_div_63_ng_container_17_div_24_i_9_Template, 1, 0, "i", 231);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r35 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sel", ctx_r1.isParticipantSelected(u_r35));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitials(u_r35));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r35.name || u_r35.prenom + " " + u_r35.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r35.fonction || u_r35.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isParticipantSelected(u_r35));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParticipantSelected(u_r35));
  }
}
function AdminrhSessionComponent_div_63_ng_container_17_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 232);
    \u0275\u0275text(1, "Aucun employ\xE9 trouv\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_63_ng_container_17_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 233);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardError, " ");
  }
}
function AdminrhSessionComponent_div_63_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 149)(2, "div", 150)(3, "label", 145);
    \u0275\u0275text(4, "Capacit\xE9 maximale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 150)(7, "label", 145);
    \u0275\u0275text(8, "Taux de remplissage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 205)(10, "div", 206);
    \u0275\u0275element(11, "div", 207);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 157);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 208)(15, "div", 209)(16, "span", 210);
    \u0275\u0275text(17, "Employ\xE9s disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 211);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 212);
    \u0275\u0275element(21, "i", 213);
    \u0275\u0275elementStart(22, "input", 214);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_63_ng_container_17_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.participantsSearch, $event) || (ctx_r1.participantsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 215);
    \u0275\u0275template(24, AdminrhSessionComponent_div_63_ng_container_17_div_24_Template, 10, 8, "div", 216)(25, AdminrhSessionComponent_div_63_ng_container_17_div_25_Template, 2, 0, "div", 217);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 218)(27, "div", 219);
    \u0275\u0275text(28, "R\xE9capitulatif de la session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 220)(30, "span", 221);
    \u0275\u0275text(31, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 222);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 220)(35, "span", 221);
    \u0275\u0275text(36, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 222);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 220)(40, "span", 221);
    \u0275\u0275text(41, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 222);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 220)(45, "span", 221);
    \u0275\u0275text(46, "Horaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 222);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 220)(50, "span", 221);
    \u0275\u0275text(51, "Modalit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 222)(53, "span", 223);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 220)(57, "span", 221);
    \u0275\u0275text(58, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 222);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, AdminrhSessionComponent_div_63_ng_container_17_div_61_Template, 3, 1, "div", 224);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.fillPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParticipants.length, "/", ctx_r1.step1Form.value.capacite_max || 20, " places");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParticipants.length, " s\xE9lectionn\xE9s");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.participantsSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredUsers.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.recapFormation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.recapFormateur);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.recapDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.recapHoraire);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("data-t", ctx_r1.wizardType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 19, ctx_r1.wizardType));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParticipants.length, " / ", ctx_r1.step1Form.value.capacite_max || 20, " places");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardError);
  }
}
function AdminrhSessionComponent_div_63_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 234);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardPrev());
    });
    \u0275\u0275text(1, "Retour");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_63_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 234);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Annuler");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_63_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 235);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardNext());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_63_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 236);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardSubmit());
    });
    \u0275\u0275element(1, "i", 237);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.wizardSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardSaving ? "Enregistrement..." : ctx_r1.wizardMode === "create" ? "Planifier la session" : "Sauvegarder", " ");
  }
}
function AdminrhSessionComponent_div_63_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 235);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Fermer");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementStart(1, "div", 121);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 122)(3, "div", 123);
    \u0275\u0275element(4, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 125)(6, "div", 126);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 127);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 128);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_63_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275element(11, "i", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 129);
    \u0275\u0275template(13, AdminrhSessionComponent_div_63_ng_container_13_Template, 8, 12, "ng-container", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 131);
    \u0275\u0275template(15, AdminrhSessionComponent_div_63_ng_container_15_Template, 39, 9, "ng-container", 71)(16, AdminrhSessionComponent_div_63_ng_container_16_Template, 44, 16, "ng-container", 71)(17, AdminrhSessionComponent_div_63_ng_container_17_Template, 62, 22, "ng-container", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 132)(19, "span", 133);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AdminrhSessionComponent_div_63_button_21_Template, 2, 0, "button", 134)(22, AdminrhSessionComponent_div_63_button_22_Template, 2, 0, "button", 134)(23, AdminrhSessionComponent_div_63_button_23_Template, 3, 0, "button", 135)(24, AdminrhSessionComponent_div_63_button_24_Template, 3, 2, "button", 136)(25, AdminrhSessionComponent_div_63_button_25_Template, 2, 0, "button", 135);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardMode === "create" ? "Planifier une session" : ctx_r1.wizardMode === "edit" ? "Modifier la session" : "D\xE9tails de la session", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.wizardMode === "view" ? "Consultation uniquement" : "Configurez la session en 3 \xE9tapes");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction3(16, _c5, \u0275\u0275pureFunction0(13, _c2), \u0275\u0275pureFunction0(14, _c3), \u0275\u0275pureFunction0(15, _c4)));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.step1Form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xC9tape ", ctx_r1.wizardStep, " sur 3");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3 && ctx_r1.wizardMode !== "view");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3 && ctx_r1.wizardMode === "view");
  }
}
function AdminrhSessionComponent_div_64_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 260);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 261);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \xB7 ");
    \u0275\u0275elementStart(5, "span", 262);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionSession.titre || (ctx_r1.inscriptionSession.formation == null ? null : ctx_r1.inscriptionSession.formation.titre) || "\u2014", " \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.inscriptionSession.date_debut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.inscriptionSession.nombre_inscrits || 0, "/", ctx_r1.inscriptionSession.capacite_max, " places");
  }
}
function AdminrhSessionComponent_div_64_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 263)(1, "div", 264);
    \u0275\u0275element(2, "div", 265);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 266);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ((ctx_r1.inscriptionSession.nombre_inscrits || 0) + ctx_r1.inscriptionSelected.length) / ctx_r1.inscriptionSession.capacite_max * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (ctx_r1.inscriptionSession.nombre_inscrits || 0) + ctx_r1.inscriptionSelected.length, " / ", ctx_r1.inscriptionSession.capacite_max, " places ");
  }
}
function AdminrhSessionComponent_div_64_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 269);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementStart(3, "i", 270);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_div_15_span_1_Template_i_click_3_listener() {
      const u_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleInscriptionUser(u_r43));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r43 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, u_r43.name || u_r43.prenom + " " + u_r43.nom, 0, 18), " ");
  }
}
function AdminrhSessionComponent_div_64_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 267);
    \u0275\u0275template(1, AdminrhSessionComponent_div_64_div_15_span_1_Template, 4, 5, "span", 268);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.inscriptionSelected);
  }
}
function AdminrhSessionComponent_div_64_div_17_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 29);
  }
}
function AdminrhSessionComponent_div_64_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 271);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_div_17_Template_div_click_0_listener() {
      const u_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleInscriptionUser(u_r45));
    });
    \u0275\u0275elementStart(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273)(4, "div", 274);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 275);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 276);
    \u0275\u0275template(9, AdminrhSessionComponent_div_64_div_17_i_9_Template, 1, 0, "i", 231);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r45 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ei-item--sel", ctx_r1.isInscriptionSelected(u_r45));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitials(u_r45));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r45.name || u_r45.prenom + " " + u_r45.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r45.fonction || u_r45.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isInscriptionSelected(u_r45));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInscriptionSelected(u_r45));
  }
}
function AdminrhSessionComponent_div_64_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 277);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun employ\xE9 disponible");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSessionComponent_div_64_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionError, " ");
  }
}
function AdminrhSessionComponent_div_64_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 279);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionSuccess, " ");
  }
}
function AdminrhSessionComponent_div_64_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 280);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionSelected.length, " employ\xE9(s) s\xE9lectionn\xE9(s) ");
  }
}
function AdminrhSessionComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 238);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInscription());
    });
    \u0275\u0275elementStart(1, "div", 239);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r41);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 240)(3, "div", 241);
    \u0275\u0275element(4, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 242)(6, "div", 243);
    \u0275\u0275text(7, "Inscrire des employ\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminrhSessionComponent_div_64_div_8_Template, 7, 4, "div", 244);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 245);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInscription());
    });
    \u0275\u0275element(10, "i", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdminrhSessionComponent_div_64_div_11_Template, 5, 4, "div", 246);
    \u0275\u0275elementStart(12, "div", 247);
    \u0275\u0275element(13, "i", 213);
    \u0275\u0275elementStart(14, "input", 248);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_64_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inscriptionSearch, $event) || (ctx_r1.inscriptionSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AdminrhSessionComponent_div_64_div_15_Template, 2, 1, "div", 249);
    \u0275\u0275elementStart(16, "div", 250);
    \u0275\u0275template(17, AdminrhSessionComponent_div_64_div_17_Template, 10, 8, "div", 251)(18, AdminrhSessionComponent_div_64_div_18_Template, 4, 0, "div", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminrhSessionComponent_div_64_div_19_Template, 3, 1, "div", 253)(20, AdminrhSessionComponent_div_64_div_20_Template, 3, 1, "div", 254);
    \u0275\u0275elementStart(21, "div", 255)(22, "button", 256);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInscription());
    });
    \u0275\u0275text(23, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "div", 257);
    \u0275\u0275template(25, AdminrhSessionComponent_div_64_span_25_Template, 2, 1, "span", 258);
    \u0275\u0275elementStart(26, "button", 259);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_64_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitInscription());
    });
    \u0275\u0275element(27, "i", 113);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSession);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSession);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inscriptionSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSelected.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.inscriptionFiltered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.inscriptionFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSuccess);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSelected.length);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.inscriptionSelected.length || ctx_r1.inscriptionSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionSaving ? "Inscription..." : "Inscrire", " ");
  }
}
function AdminrhSessionComponent_div_65_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 294);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 295);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.participantsSession.titre || (ctx_r1.participantsSession.formation == null ? null : ctx_r1.participantsSession.formation.titre) || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.participantsSession.code_session);
  }
}
function AdminrhSessionComponent_div_65_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 296)(1, "div", 297)(2, "span", 298);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 299);
    \u0275\u0275text(5, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 297)(7, "span", 300);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 299);
    \u0275\u0275text(10, "Confirm\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 297)(12, "span", 301);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 299);
    \u0275\u0275text(15, "Termin\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 297)(17, "span", 302);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 299);
    \u0275\u0275text(20, "En attente");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.participantsStats.total_participants);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.participantsStats.confirmes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.participantsStats.termines);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.participantsStats.liste_attente);
  }
}
function AdminrhSessionComponent_div_65_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 303);
    \u0275\u0275element(1, "i", 304);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_65_div_16_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 317);
    \u0275\u0275element(1, "i", 318);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_65_div_16_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 319);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r47 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r47.note_finale, "/20 ");
  }
}
function AdminrhSessionComponent_div_65_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 308)(1, "div", 309);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 310)(4, "div", 311);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 312);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 313)(9, "span", 314);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminrhSessionComponent_div_65_div_16_div_1_span_11_Template, 2, 0, "span", 315)(12, AdminrhSessionComponent_div_65_div_16_div_1_span_12_Template, 2, 1, "span", 316);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r47 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.participantInitials(p_r47));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r47.prenom, " ", p_r47.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r47.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.participantStatutClass(p_r47));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.participantStatutLabel(p_r47), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r47.certificat_obtenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r47.note_finale != null);
  }
}
function AdminrhSessionComponent_div_65_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 320);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun participant trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSessionComponent_div_65_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 305);
    \u0275\u0275template(1, AdminrhSessionComponent_div_65_div_16_div_1_Template, 13, 8, "div", 306)(2, AdminrhSessionComponent_div_65_div_16_div_2_Template, 4, 0, "div", 307);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredParticipants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredParticipants.length);
  }
}
function AdminrhSessionComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 281);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_65_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275elementStart(1, "div", 282);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_65_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r46);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 283)(3, "div", 284);
    \u0275\u0275element(4, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 285)(6, "div", 286);
    \u0275\u0275text(7, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminrhSessionComponent_div_65_div_8_Template, 4, 2, "div", 287);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 288);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_65_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275element(10, "i", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdminrhSessionComponent_div_65_div_11_Template, 21, 4, "div", 289);
    \u0275\u0275elementStart(12, "div", 290);
    \u0275\u0275element(13, "i", 213);
    \u0275\u0275elementStart(14, "input", 291);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_65_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.participantsQuery, $event) || (ctx_r1.participantsQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AdminrhSessionComponent_div_65_div_15_Template, 3, 0, "div", 292)(16, AdminrhSessionComponent_div_65_div_16_Template, 3, 2, "div", 293);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.participantsSession);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.participantsStats);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.participantsQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.participantsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.participantsLoading);
  }
}
var AdminrhSessionComponent = class _AdminrhSessionComponent {
  sessionService;
  formationService;
  userService;
  zoomService;
  fb;
  // ── List state ────────────────────────────────
  allSessions = [];
  sessions = [];
  loading = false;
  error = "";
  successMessage = "";
  searchValue = "";
  filterStatut = "";
  filterType = "";
  // ── Vue Liste / Calendrier ────────────────────
  viewMode = "list";
  // ── Calendrier principal ──────────────────────
  mainCalYear = (/* @__PURE__ */ new Date()).getFullYear();
  mainCalMonth = (/* @__PURE__ */ new Date()).getMonth();
  get mainCalMonthLabel() {
    return new Date(this.mainCalYear, this.mainCalMonth, 1).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  getMainCalendarDays() {
    const firstDay = new Date(this.mainCalYear, this.mainCalMonth, 1);
    const lastDay = new Date(this.mainCalYear, this.mainCalMonth + 1, 0);
    const offset = (firstDay.getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < offset; i++) {
      days.push({ date: new Date(this.mainCalYear, this.mainCalMonth, -offset + i + 1), sessions: [] });
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(this.mainCalYear, this.mainCalMonth, d);
      const daySessions = this.allSessions.filter((s) => {
        const sd = new Date(s.date_debut);
        return sd.getDate() === d && sd.getMonth() === this.mainCalMonth && sd.getFullYear() === this.mainCalYear;
      });
      days.push({ date, sessions: daySessions });
    }
    return days;
  }
  isCurrentMonth(d) {
    return d.getMonth() === this.mainCalMonth && d.getFullYear() === this.mainCalYear;
  }
  isTodayDate(d) {
    const t = /* @__PURE__ */ new Date();
    return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
  }
  mainCalPrev() {
    if (this.mainCalMonth === 0) {
      this.mainCalMonth = 11;
      this.mainCalYear--;
    } else
      this.mainCalMonth--;
  }
  mainCalNext() {
    if (this.mainCalMonth === 11) {
      this.mainCalMonth = 0;
      this.mainCalYear++;
    } else
      this.mainCalMonth++;
  }
  getSessionTypeClass(s) {
    return s.type === "distanciel" ? "ss-cal__event--dist" : s.type === "hybride" ? "ss-cal__event--hybr" : "";
  }
  // ── Modal inscription rapide ──────────────────
  inscriptionOpen = false;
  inscriptionSession = null;
  inscriptionSearch = "";
  inscriptionSelected = [];
  inscriptionSaving = false;
  inscriptionError = "";
  inscriptionSuccess = "";
  get inscriptionFiltered() {
    const q = this.inscriptionSearch.toLowerCase().trim();
    const alreadyIn = new Set(this.inscriptionSession?._participants?.map((p) => p.id) ?? []);
    return this.allUsers.filter((u) => !alreadyIn.has(u.id) && (!q || (u.name || u.prenom + " " + u.nom || "").toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)));
  }
  openInscription(s) {
    this.inscriptionSession = s;
    this.inscriptionSelected = [];
    this.inscriptionSearch = "";
    this.inscriptionError = "";
    this.inscriptionSuccess = "";
    this.inscriptionOpen = true;
  }
  closeInscription() {
    this.inscriptionOpen = false;
  }
  toggleInscriptionUser(u) {
    const cap = this.inscriptionSession?.capacite_max ?? 999;
    const idx = this.inscriptionSelected.findIndex((x) => x.id === u.id);
    if (idx > -1) {
      this.inscriptionSelected.splice(idx, 1);
    } else if (this.inscriptionSelected.length < cap) {
      this.inscriptionSelected.push(u);
    }
  }
  isInscriptionSelected(u) {
    return this.inscriptionSelected.some((x) => x.id === u.id);
  }
  submitInscription() {
    if (!this.inscriptionSession || !this.inscriptionSelected.length)
      return;
    this.inscriptionSaving = true;
    this.inscriptionError = "";
    const sid = this.inscriptionSession.id;
    let done = 0;
    let errors = 0;
    for (const u of this.inscriptionSelected) {
      this.sessionService.inscrireEmploye(sid, u.id).subscribe({
        next: () => {
          done++;
          if (this.inscriptionSession) {
            const s = this.allSessions.find((x) => x.id === this.inscriptionSession.id);
            if (s)
              s.nombre_inscrits = (s.nombre_inscrits || 0) + 1;
          }
          if (done + errors === this.inscriptionSelected.length) {
            this.inscriptionSaving = false;
            this.inscriptionSuccess = `${done} employ\xE9(s) inscrit(s) avec succ\xE8s.`;
            this.inscriptionSelected = [];
            this.loadSessions();
            setTimeout(() => {
              this.inscriptionSuccess = "";
              this.closeInscription();
            }, 2500);
          }
        },
        error: (err) => {
          errors++;
          if (done + errors === this.inscriptionSelected.length) {
            this.inscriptionSaving = false;
            this.inscriptionError = err.error?.message || `${errors} inscription(s) en erreur.`;
          }
        }
      });
    }
  }
  // Pagination
  currentPage = 1;
  pageSize = 10;
  get totalPages() {
    return Math.ceil(this.sessions.length / this.pageSize);
  }
  get pagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
  get pagedSessions() {
    const s = (this.currentPage - 1) * this.pageSize;
    return this.sessions.slice(s, s + this.pageSize);
  }
  // ── Wizard state ──────────────────────────────
  wizardOpen = false;
  wizardMode = "create";
  wizardStep = 1;
  wizardSaving = false;
  wizardError = "";
  wizardSelected = null;
  // Step 1 form
  step1Form;
  wizardType = "presentiel";
  // Step 2 calendar
  calYear = (/* @__PURE__ */ new Date()).getFullYear();
  calMonth = (/* @__PURE__ */ new Date()).getMonth();
  calSelectedDate = null;
  heureDebut = "09:00";
  heureFin = "12:00";
  rappel = "48h";
  recurrence = "none";
  // Step 3 participants
  participantsSearch = "";
  selectedParticipants = [];
  allUsers = [];
  // Data lists
  formations = [];
  formateurs = [];
  modes = [
    { key: "presentiel", label: "Pr\xE9sentiel", sub: "En salle, lieu physique \xE0 pr\xE9ciser", icon: "isax-building" },
    { key: "distanciel", label: "Distanciel", sub: "Visioconf\xE9rence, lien \xE0 partager", icon: "isax-video" },
    { key: "hybride", label: "Hybride", sub: "Mix pr\xE9sentiel + distanciel", icon: "isax-monitor" }
  ];
  // ── Participants popup ────────────────────────
  participantsPopupOpen = false;
  participantsSession = null;
  participantsList = [];
  participantsStats = null;
  participantsLoading = false;
  participantsQuery = "";
  get filteredParticipants() {
    const q = this.participantsQuery.toLowerCase().trim();
    if (!q)
      return this.participantsList;
    return this.participantsList.filter((p) => (p.prenom + " " + p.nom).toLowerCase().includes(q) || p.email?.toLowerCase().includes(q));
  }
  openParticipants(s) {
    this.participantsSession = s;
    this.participantsList = [];
    this.participantsStats = null;
    this.participantsQuery = "";
    this.participantsLoading = true;
    this.participantsPopupOpen = true;
    this.sessionService.getSessionParticipants(s.id).subscribe({
      next: (res) => {
        this.participantsList = res.participants || [];
        this.participantsStats = res.statistiques || null;
        this.participantsLoading = false;
      },
      error: () => {
        this.participantsLoading = false;
      }
    });
  }
  closeParticipants() {
    this.participantsPopupOpen = false;
  }
  participantInitials(p) {
    return ((p.prenom?.[0] || "") + (p.nom?.[0] || "")).toUpperCase() || "?";
  }
  participantStatutClass(p) {
    const s = p.statut_participation || p.statut_inscription;
    if (s === "termine")
      return "pp-done";
    if (s === "confirme" || s === "inscrit")
      return "pp-ok";
    return "pp-wait";
  }
  participantStatutLabel(p) {
    const s = p.statut_participation || p.statut_inscription;
    const m = {
      termine: "Termin\xE9",
      confirme: "Confirm\xE9",
      inscrit: "Inscrit",
      liste_attente: "En attente"
    };
    return m[s] || s;
  }
  // ── Zoom state ────────────────────────────────
  zoomMeetings = {};
  zoomLoading = {};
  zoomError = "";
  constructor(sessionService, formationService, userService, zoomService, fb) {
    this.sessionService = sessionService;
    this.formationService = formationService;
    this.userService = userService;
    this.zoomService = zoomService;
    this.fb = fb;
  }
  ngOnInit() {
    this.loadSessions();
    this.loadFormations();
    this.loadFormateurs();
    this.loadUsers();
    this.initStep1Form();
  }
  // ── Data loading ──────────────────────────────
  loadSessions() {
    this.loading = true;
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res) => {
        this.allSessions = res.sessions || [];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les sessions.");
        this.loading = false;
      }
    });
  }
  loadFormations() {
    this.formationService.getFormationsrh().subscribe({
      next: (res) => {
        this.formations = res.formations || [];
      },
      error: () => {
      }
    });
  }
  loadFormateurs() {
    this.userService.getFormateurs().subscribe({
      next: (res) => {
        const raw = res.formateurs || res.data || (Array.isArray(res) ? res : []);
        this.formateurs = Array.isArray(raw) ? raw : [];
      },
      error: () => {
        this.userService.getMyUsers().subscribe({
          next: (res2) => {
            const all = res2.users || res2.data || (Array.isArray(res2) ? res2 : []);
            this.formateurs = (Array.isArray(all) ? all : []).filter((u) => u.role?.name?.toLowerCase() === "formateur" || u.role_id === 3 || u.fonction?.toLowerCase().includes("formateur"));
          },
          error: () => {
          }
        });
      }
    });
  }
  loadUsers() {
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        const raw = res.users || res.data || res;
        this.allUsers = Array.isArray(raw) ? raw : [];
      },
      error: () => {
      }
    });
  }
  // ── Filters ───────────────────────────────────
  applyFilters() {
    let d = [...this.allSessions];
    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      d = d.filter((s) => s.titre?.toLowerCase().includes(q) || s.code_session?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q));
    }
    if (this.filterStatut)
      d = d.filter((s) => s.statut === this.filterStatut);
    if (this.filterType)
      d = d.filter((s) => s.type === this.filterType);
    this.sessions = d;
    this.currentPage = 1;
  }
  // ── Wizard open/close ─────────────────────────
  openCreate() {
    this.wizardMode = "create";
    this.wizardSelected = null;
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardType = "presentiel";
    this.calSelectedDate = null;
    this.heureDebut = "09:00";
    this.heureFin = "12:00";
    this.selectedParticipants = [];
    this.initStep1Form();
    this.wizardOpen = true;
  }
  openEdit(s) {
    this.wizardMode = "edit";
    this.wizardSelected = s;
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardType = s.type || "presentiel";
    this.calSelectedDate = new Date(s.date_debut);
    this.calYear = this.calSelectedDate.getFullYear();
    this.calMonth = this.calSelectedDate.getMonth();
    this.heureDebut = new Date(s.date_debut).toTimeString().slice(0, 5);
    this.heureFin = new Date(s.date_fin).toTimeString().slice(0, 5);
    this.selectedParticipants = [];
    this.initStep1Form(s);
    this.wizardOpen = true;
    if (s.type !== "presentiel")
      this.loadZoomMeeting(s, true);
  }
  openView(s) {
    this.wizardMode = "view";
    this.wizardSelected = s;
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardType = s.type || "presentiel";
    this.calSelectedDate = new Date(s.date_debut);
    this.calYear = this.calSelectedDate.getFullYear();
    this.calMonth = this.calSelectedDate.getMonth();
    this.heureDebut = new Date(s.date_debut).toTimeString().slice(0, 5);
    this.heureFin = new Date(s.date_fin).toTimeString().slice(0, 5);
    this.initStep1Form(s);
    this.wizardOpen = true;
    if (s.type !== "presentiel")
      this.loadZoomMeeting(s, true);
  }
  closeWizard() {
    this.wizardOpen = false;
  }
  // ── Step 1 form ───────────────────────────────
  initStep1Form(s) {
    this.step1Form = this.fb.group({
      formation_id: [s?.formation_id || "", [Validators.required]],
      formateur_id: [s?.formateur_id || "", [Validators.required]],
      lieu: [s?.lieu || "", []],
      lien: [s?.instructions_acces || "", []],
      code_acces: ["", []],
      titre: [s?.titre || "", []],
      capacite_max: [s?.capacite_max || 20, [Validators.required, Validators.min(1)]]
    });
  }
  setMode(m) {
    if (this.wizardMode === "view")
      return;
    this.wizardType = m;
  }
  // ── Step 2 calendar ───────────────────────────
  get calMonthLabel() {
    return new Date(this.calYear, this.calMonth, 1).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  get calendarDays() {
    const firstDay = new Date(this.calYear, this.calMonth, 1);
    const lastDay = new Date(this.calYear, this.calMonth + 1, 0);
    const offset = (firstDay.getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < offset; i++) {
      days.push({ date: new Date(this.calYear, this.calMonth, -offset + i + 1), empty: true });
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push({ date: new Date(this.calYear, this.calMonth, d), empty: false });
    }
    return days;
  }
  calPrev() {
    if (this.calMonth === 0) {
      this.calMonth = 11;
      this.calYear--;
    } else
      this.calMonth--;
  }
  calNext() {
    if (this.calMonth === 11) {
      this.calMonth = 0;
      this.calYear++;
    } else
      this.calMonth++;
  }
  selectDate(d) {
    if (this.wizardMode === "view")
      return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (d < today)
      return;
    this.calSelectedDate = d;
  }
  isToday(d) {
    const t = /* @__PURE__ */ new Date();
    return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
  }
  isPast(d) {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  }
  isSelected(d) {
    if (!this.calSelectedDate)
      return false;
    return d.getDate() === this.calSelectedDate.getDate() && d.getMonth() === this.calSelectedDate.getMonth() && d.getFullYear() === this.calSelectedDate.getFullYear();
  }
  hasSession(d) {
    return this.allSessions.some((s) => {
      const sd = new Date(s.date_debut);
      return sd.getDate() === d.getDate() && sd.getMonth() === d.getMonth() && sd.getFullYear() === d.getFullYear();
    });
  }
  get durationLabel() {
    const [sh, sm] = this.heureDebut.split(":").map(Number);
    const [eh, em] = this.heureFin.split(":").map(Number);
    const mins = eh * 60 + em - (sh * 60 + sm);
    if (mins <= 0)
      return "\u2014";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h + "h" + (m ? String(m).padStart(2, "0") : "00");
  }
  // ── Step 3 participants ───────────────────────
  get filteredUsers() {
    const q = this.participantsSearch.toLowerCase();
    return this.allUsers.filter((u) => !q || u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }
  isParticipantSelected(u) {
    return this.selectedParticipants.some((p) => p.id === u.id);
  }
  toggleParticipant(u) {
    if (this.wizardMode === "view")
      return;
    const cap = this.step1Form.value.capacite_max || 20;
    const idx = this.selectedParticipants.findIndex((p) => p.id === u.id);
    if (idx > -1) {
      this.selectedParticipants.splice(idx, 1);
    } else if (this.selectedParticipants.length < cap) {
      this.selectedParticipants.push(u);
    }
  }
  get fillPercent() {
    const cap = this.step1Form.value.capacite_max || 20;
    return Math.round(this.selectedParticipants.length / cap * 100);
  }
  userInitials(u) {
    const n = (u.name || u.prenom + " " + u.nom || "?").trim();
    return n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  }
  // ── Navigation ────────────────────────────────
  wizardNext() {
    if (this.wizardStep === 1) {
      if (this.step1Form.get("formation_id")?.invalid || this.step1Form.get("formateur_id")?.invalid) {
        this.step1Form.markAllAsTouched();
        return;
      }
    }
    if (this.wizardStep === 2 && !this.calSelectedDate) {
      this.wizardError = "Veuillez s\xE9lectionner une date.";
      return;
    }
    this.wizardError = "";
    this.wizardStep++;
  }
  wizardPrev() {
    this.wizardStep--;
    this.wizardError = "";
  }
  // ── Recap helpers ─────────────────────────────
  get recapFormation() {
    const f = this.formations.find((x) => x.id == this.step1Form.value.formation_id);
    return f?.titre || "\u2014";
  }
  get recapFormateur() {
    const f = this.formateurs.find((x) => x.id == this.step1Form.value.formateur_id);
    return f ? f.prenom ? f.prenom + " " + f.nom : f.name : "\u2014";
  }
  get recapDate() {
    if (!this.calSelectedDate)
      return "\u2014";
    return this.calSelectedDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  get recapHoraire() {
    return `${this.heureDebut} \u2013 ${this.heureFin} (${this.durationLabel})`;
  }
  // ── Submit ────────────────────────────────────
  wizardSubmit() {
    if (this.wizardMode === "view") {
      this.closeWizard();
      return;
    }
    if (!this.calSelectedDate) {
      this.wizardError = "Date manquante.";
      return;
    }
    this.wizardSaving = true;
    this.wizardError = "";
    const fv = this.step1Form.value;
    const dateBase = new Date(this.calSelectedDate);
    const [sh, sm] = this.heureDebut.split(":").map(Number);
    const [eh, em] = this.heureFin.split(":").map(Number);
    const dateDebut = new Date(dateBase);
    dateDebut.setHours(sh, sm, 0, 0);
    const dateFin = new Date(dateBase);
    dateFin.setHours(eh, em, 0, 0);
    const payload = {
      formation_id: Number(fv.formation_id),
      formateur_id: Number(fv.formateur_id),
      type: this.wizardType,
      lieu: this.wizardType !== "distanciel" ? fv.lieu || "" : fv.lien || "",
      instructions_acces: fv.lien || "",
      date_debut: dateDebut.toISOString(),
      date_fin: dateFin.toISOString(),
      capacite_max: Number(fv.capacite_max),
      titre: fv.titre || "",
      statut: "planifiee",
      participant_ids: this.selectedParticipants.map((p) => p.id)
    };
    const op = this.wizardMode === "edit" && this.wizardSelected ? this.sessionService.updateSessionRH(this.wizardSelected.id, payload) : this.sessionService.createSessionRH(payload);
    op.subscribe({
      next: () => {
        this.wizardSaving = false;
        this.successMessage = this.wizardMode === "edit" ? "Session modifi\xE9e avec succ\xE8s." : "Session planifi\xE9e avec succ\xE8s.";
        this.closeWizard();
        this.loadSessions();
      },
      error: (err) => {
        this.wizardSaving = false;
        this.wizardError = err.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }
  // ── List actions ──────────────────────────────
  cancelSession(s) {
    if (!confirm("Annuler cette session ?"))
      return;
    this.sessionService.cancelSession(s.id, "").subscribe({
      next: () => {
        this.successMessage = "Session annul\xE9e.";
        this.loadSessions();
      },
      error: () => {
        this.error = "Erreur lors de l'annulation.";
      }
    });
  }
  deleteSession(s) {
    if (!confirm("Supprimer d\xE9finitivement cette session ?"))
      return;
    this.sessionService.deleteSessionRH(s.id).subscribe({
      next: () => {
        this.successMessage = "Session supprim\xE9e.";
        this.loadSessions();
      },
      error: () => {
        this.error = "Erreur lors de la suppression.";
      }
    });
  }
  archiveSession(s) {
    if (!confirm("Archiver cette session ?"))
      return;
    this.sessionService.deleteSessionRH(s.id).subscribe({
      next: () => {
        this.successMessage = "Session archiv\xE9e.";
        this.loadSessions();
      },
      error: () => {
        this.error = "Erreur lors de l'archivage.";
      }
    });
  }
  // ── Utility ───────────────────────────────────
  formatDate(d) {
    return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  formatTime(d) {
    return new Date(d).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  statutKey(statut) {
    const m = { planifiee: "plan", en_cours: "live", terminee: "done", annulee: "cancel" };
    return m[statut] || "plan";
  }
  statutLabel(statut) {
    const m = { planifiee: "Planifi\xE9e", en_cours: "En cours", terminee: "Termin\xE9e", annulee: "Annul\xE9e" };
    return m[statut] || statut;
  }
  resolvedStatut(s) {
    if (this.isSessionPassed(s) && s.statut !== "annulee")
      return "terminee";
    return s.statut;
  }
  countByStatut(statut) {
    return this.allSessions.filter((s) => s.statut === statut).length;
  }
  trackById(_i, s) {
    return s.id;
  }
  isSessionPassed(s) {
    return !!s.date_fin && new Date(s.date_fin) < /* @__PURE__ */ new Date();
  }
  clearMessages() {
    this.error = "";
    this.successMessage = "";
  }
  // ── Zoom ──────────────────────────────────────
  loadZoomMeeting(s, force = false) {
    if (s.type === "presentiel")
      return;
    if (!force && this.zoomMeetings[s.id] !== void 0)
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
        this.successMessage = "Meeting Zoom cr\xE9\xE9 avec succ\xE8s.";
      },
      error: (err) => {
        this.zoomLoading[s.id] = false;
        this.zoomError = err.error?.message || "Erreur lors de la cr\xE9ation du meeting Zoom.";
      }
    });
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
        this.successMessage = "Meeting Zoom supprim\xE9.";
      },
      error: () => {
        this.zoomLoading[s.id] = false;
        this.zoomError = "Erreur lors de la suppression.";
      }
    });
  }
  openZoomLink(s) {
    const m = this.zoomMeetings[s.id];
    if (!m)
      return;
    window.open(m.start_url, "_blank");
  }
  copyJoinLink(s) {
    const m = this.zoomMeetings[s.id];
    if (!m)
      return;
    navigator.clipboard.writeText(m.join_url).then(() => {
      this.successMessage = "Lien participants copi\xE9 dans le presse-papier.";
      setTimeout(() => this.successMessage = "", 3e3);
    });
  }
  getZoomDelai(s) {
    const diff = new Date(s.date_debut).getTime() - Date.now();
    if (diff <= 0)
      return "En cours";
    const mins = Math.floor(diff / 6e4);
    if (mins < 60)
      return `Dans ${mins} min`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)
      return `Dans ${hrs}h`;
    return `Dans ${Math.floor(hrs / 24)} j`;
  }
  isZoomAccessible(s) {
    if (!this.zoomMeetings[s.id])
      return false;
    const now = Date.now();
    const start = new Date(s.date_debut).getTime();
    const end = new Date(s.date_fin).getTime();
    const openAt = start - 15 * 60 * 1e3;
    return now >= openAt && now <= end;
  }
  static \u0275fac = function AdminrhSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSessionComponent)(\u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ZoomMeetingService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSessionComponent, selectors: [["app-adminrh-session"]], decls: 66, vars: 21, consts: [[1, "ss-shell"], [1, "ss-toolbar"], [1, "ss-search"], [1, "isax", "isax-search-normal-1", "ss-search__icon"], ["type", "search", "placeholder", "Rechercher une session...", 1, "ss-search__input", 3, "ngModelChange", "ngModel"], [1, "ss-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "planifiee"], ["value", "en_cours"], ["value", "terminee"], ["value", "annulee"], ["value", "presentiel"], ["value", "distanciel"], ["value", "hybride"], [1, "ss-view-group"], ["type", "button", "title", "Vue liste", 1, "ss-view-toggle", 3, "click"], [1, "isax", "isax-row-vertical"], ["type", "button", "title", "Vue calendrier", 1, "ss-view-toggle", 3, "click"], [1, "isax", "isax-calendar-1"], [1, "ss-spacer"], ["type", "button", "class", "ss-add-btn", 3, "click", 4, "appHasPermission"], ["class", "ss-alert ss-alert--err", 4, "ngIf"], ["class", "ss-alert ss-alert--ok", 4, "ngIf"], [1, "ss-kpi-row"], [1, "ss-kpi"], [1, "ss-kpi__label"], [1, "ss-kpi__val"], [1, "isax", "isax-play-circle"], [1, "isax", "isax-clock"], [1, "isax", "isax-tick-circle"], ["class", "ss-skeletons", 4, "ngIf"], ["class", "ss-cal-wrap", 4, "ngIf"], ["class", "ss-table-wrap", 4, "ngIf"], ["class", "sw-overlay", 3, "click", 4, "ngIf"], ["class", "ei-overlay", 3, "click", 4, "ngIf"], ["class", "pp-overlay", 3, "click", 4, "ngIf"], ["type", "button", 1, "ss-add-btn", 3, "click"], [1, "isax", "isax-add"], [1, "ss-alert", "ss-alert--err"], [1, "isax", "isax-video-slash"], ["type", "button", 1, "ss-alert__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "isax", "isax-warning-2"], [1, "ss-alert", "ss-alert--ok"], [1, "ss-skeletons"], ["class", "ss-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ss-skeleton-row"], [1, "ss-cal-wrap"], [1, "ss-cal"], [1, "ss-cal__nav"], ["type", "button", 1, "ss-cal__nav-btn", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "ss-cal__nav-label"], [1, "isax", "isax-arrow-right-3"], [1, "ss-cal__grid"], ["class", "ss-cal__head", 4, "ngFor", "ngForOf"], ["class", "ss-cal__cell", 3, "ss-cal__cell--other", "ss-cal__cell--today", 4, "ngFor", "ngForOf"], [1, "ss-cal__legend"], [1, "ss-cal__leg-item"], [1, "ss-cal__leg-dot", "ss-cal__leg-dot--pres"], [1, "ss-cal__leg-dot", "ss-cal__leg-dot--dist"], [1, "ss-cal__leg-dot", "ss-cal__leg-dot--hybr"], [1, "ss-cal__head"], [1, "ss-cal__cell"], [1, "ss-cal__day"], [1, "ss-cal__events"], ["class", "ss-cal__event", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], [1, "ss-cal__event", 3, "ngClass", "title"], [1, "ss-table-wrap"], [1, "ss-table"], ["class", "ss-row", 3, "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "ss-pager", 4, "ngIf"], [1, "ss-row", 3, "mouseenter"], [1, "ss-row__name"], [1, "ss-row__sub"], [1, "ss-type"], [1, "ss-statut"], [1, "ss-places"], [1, "ss-places__bar"], [1, "ss-places__fill"], [1, "ss-places__txt"], [1, "ss-zoom-cell"], [1, "ss-actions"], ["type", "button", "title", "Voir", 1, "ss-act", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Voir les participants", 1, "ss-act", "ss-act--pp", 3, "click"], [1, "isax", "isax-people"], [1, "ss-zoom-na"], ["class", "ss-zoom-spin", 4, "ngIf"], [1, "ss-zoom-spin"], [1, "isax", "isax-refresh-2"], ["type", "button", "title", "Cr\xE9er meeting Zoom", 1, "ss-zoom-create", 3, "click"], [1, "isax", "isax-video-add"], [1, "ss-zoom-badge"], [1, "isax", "isax-video-circle"], [1, "ss-zoom-btns"], ["type", "button", "title", "D\xE9marrer (lien h\xF4te)", 1, "ss-zoom-btn", "ss-zoom-btn--join", 3, "click"], [1, "isax", "isax-video-play"], ["type", "button", "title", "Copier le lien participants", 1, "ss-zoom-btn", "ss-zoom-btn--copy", 3, "click"], [1, "isax", "isax-copy"], ["type", "button", "title", "Supprimer meeting", 1, "ss-zoom-btn", "ss-zoom-btn--del", 3, "click"], [1, "isax", "isax-trash"], ["class", "ss-zoom-pwd", 4, "ngIf"], [1, "ss-zoom-pwd"], [1, "isax", "isax-key"], ["type", "button", "class", "ss-act ss-act--enroll", "title", "Inscrire des employ\xE9s", 3, "click", 4, "ngIf"], ["type", "button", "title", "Modifier", 1, "ss-act", 3, "click", "disabled"], [1, "isax", "isax-edit-2"], ["type", "button", "class", "ss-act ss-act--warn", "title", "Annuler", 3, "click", 4, "ngIf"], ["title", "Archiver", 1, "ss-act", "ss-act--arch", 3, "click"], [1, "isax", "isax-archive"], ["type", "button", "title", "Inscrire des employ\xE9s", 1, "ss-act", "ss-act--enroll", 3, "click"], [1, "isax", "isax-user-add"], ["type", "button", "title", "Annuler", 1, "ss-act", "ss-act--warn", 3, "click"], ["colspan", "8", 1, "ss-empty"], [1, "ss-pager"], [1, "ss-pager__btn", 3, "click", "disabled"], ["class", "ss-pager__btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ss-pager__btn", 3, "click"], [1, "sw-overlay", 3, "click"], [1, "sw-modal", 3, "click"], [1, "sw-head"], [1, "sw-head__icon"], [1, "isax", "isax-calendar-add"], [1, "sw-head__text"], [1, "sw-head__title"], [1, "sw-head__sub"], ["type", "button", 1, "sw-close", 3, "click"], [1, "sw-stepper"], [4, "ngFor", "ngForOf"], [1, "sw-body", 3, "formGroup"], [1, "sw-foot"], [1, "sw-foot__info"], ["type", "button", "class", "sw-btn-ghost", 3, "click", 4, "ngIf"], ["type", "button", "class", "sw-btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "sw-btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "sw-step"], [1, "sw-step__circle"], ["class", "isax isax-tick-circle", "style", "font-size:11px", 4, "ngIf"], [1, "sw-step__label"], ["class", "sw-step__line", 4, "ngIf"], [1, "isax", "isax-tick-circle", 2, "font-size", "11px"], [1, "sw-step__line"], [1, "sw-field", "sw-field--full"], [1, "sw-label"], [1, "sw-req"], ["formControlName", "formation_id", 1, "sw-input"], [3, "value", 4, "ngFor", "ngForOf"], [1, "sw-row"], [1, "sw-field"], ["formControlName", "formateur_id", 1, "sw-input"], ["type", "number", "formControlName", "capacite_max", "min", "1", 1, "sw-input"], [1, "sw-mode-grid"], ["class", "sw-mode-card", 3, "on", "click", 4, "ngFor", "ngForOf"], ["class", "sw-field sw-field--full", 4, "ngIf"], ["type", "text", "formControlName", "titre", "placeholder", "Ex. : Session avanc\xE9e \u2014 groupe TechNova Jan. 2025", 1, "sw-input"], [1, "sw-hint"], [3, "value"], [1, "sw-mode-card", 3, "click"], [1, "sw-mode-card__head"], [1, "sw-mode-card__title"], [1, "sw-mode-card__sub"], ["class", "sw-req", 4, "ngIf"], [1, "sw-location-block"], [1, "sw-lb-row"], [1, "isax", "isax-building"], ["type", "text", "formControlName", "lieu", "placeholder", "Ex. : Salle B2, Immeuble Peytavin, Dakar", 1, "sw-lb-input"], ["class", "sw-zoom-info-block", 4, "ngIf"], ["class", "sw-location-block", 4, "ngIf"], [1, "sw-zoom-info-block"], [1, "sw-zoom-info-row"], [1, "isax", "isax-video-circle", 2, "color", "#2D8CFF"], [1, "sw-zoom-info-label"], ["target", "_blank", 1, "sw-zoom-info-link", 3, "href"], ["type", "button", "title", "Copier", 1, "sw-zoom-copy-btn", 3, "click"], ["class", "sw-zoom-info-row", 4, "ngIf"], [1, "isax", "isax-key", 2, "color", "#6b7280"], [1, "isax", "isax-link"], ["type", "text", "formControlName", "lien", "placeholder", "https://meet.google.com/xxx-yyyy-zzz", 1, "sw-lb-input"], ["type", "text", "formControlName", "code_acces", "placeholder", "Code d'acc\xE8s (optionnel)", 1, "sw-lb-input"], [1, "sw-cal"], [1, "sw-cal__head"], [1, "sw-cal__month"], [1, "sw-cal__nav"], ["type", "button", 1, "sw-cal__nav-btn", 3, "click"], [1, "sw-cal__grid"], ["class", "sw-cal__dow", 4, "ngFor", "ngForOf"], ["class", "sw-cal__day", 3, "sw-cal__day--empty", "sw-cal__day--past", "sw-cal__day--today", "sw-cal__day--sel", "sw-cal__day--has", "click", 4, "ngFor", "ngForOf"], [1, "sw-time-wrap"], ["type", "time", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "sw-duration-badge"], [1, "isax", "isax-timer"], [1, "sw-hint", 2, "margin-left", "8px"], ["class", "sw-row", 4, "ngIf"], [1, "sw-cal__dow"], [1, "sw-cal__day", 3, "click"], [1, "sw-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "24h"], ["value", "48h"], ["value", "1w"], ["value", "none"], ["value", "weekly"], ["value", "biweekly"], ["value", "monthly"], [1, "sw-cap-vis"], [1, "sw-cap-bar"], [1, "sw-cap-fill"], [1, "sw-participants-block"], [1, "sw-pb-head"], [1, "sw-pb-title"], [1, "sw-pb-count"], [1, "sw-pb-search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher un employ\xE9...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "sw-pb-list"], ["class", "sw-pb-item", 3, "sel", "click", 4, "ngFor", "ngForOf"], ["class", "sw-pb-empty", 4, "ngIf"], [1, "sw-recap"], [1, "sw-recap__label"], [1, "sw-recap__row"], [1, "sw-rl"], [1, "sw-rv"], [1, "sw-rv-mode"], ["class", "sw-error", 4, "ngIf"], [1, "sw-pb-item", 3, "click"], [1, "sw-pb-av"], [1, "sw-pb-info"], [1, "sw-pb-name"], [1, "sw-pb-role"], [1, "sw-pb-chk"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "sw-pb-empty"], [1, "sw-error"], ["type", "button", 1, "sw-btn-ghost", 3, "click"], ["type", "button", 1, "sw-btn-primary", 3, "click"], ["type", "button", 1, "sw-btn-success", 3, "click", "disabled"], [1, "isax", "isax-calendar-tick"], [1, "ei-overlay", 3, "click"], [1, "ei-modal", 3, "click"], [1, "ei-head"], [1, "ei-head__icon"], [1, "ei-head__text"], [1, "ei-head__title"], ["class", "ei-head__sub", 4, "ngIf"], ["type", "button", 1, "ei-close", 3, "click"], ["class", "ei-fill-bar", 4, "ngIf"], [1, "ei-search"], ["type", "search", "placeholder", "Rechercher un employ\xE9...", 3, "ngModelChange", "ngModel"], ["class", "ei-selected-strip", 4, "ngIf"], [1, "ei-list"], ["class", "ei-item", 3, "ei-item--sel", "click", 4, "ngFor", "ngForOf"], ["class", "ei-empty", 4, "ngIf"], ["class", "ei-alert ei-alert--err", 4, "ngIf"], ["class", "ei-alert ei-alert--ok", 4, "ngIf"], [1, "ei-foot"], ["type", "button", 1, "ei-btn-ghost", 3, "click"], [2, "flex", "1"], ["class", "ei-foot__count", 4, "ngIf"], ["type", "button", 1, "ei-btn-primary", 3, "click", "disabled"], [1, "ei-head__sub"], [1, "ei-head__date"], [1, "ei-head__places"], [1, "ei-fill-bar"], [1, "ei-fill-bar__track"], [1, "ei-fill-bar__fill"], [1, "ei-fill-bar__txt"], [1, "ei-selected-strip"], ["class", "ei-chip", 4, "ngFor", "ngForOf"], [1, "ei-chip"], [1, "isax", "isax-close-circle", 3, "click"], [1, "ei-item", 3, "click"], [1, "ei-av"], [1, "ei-info"], [1, "ei-name"], [1, "ei-role"], [1, "ei-chk"], [1, "ei-empty"], [1, "ei-alert", "ei-alert--err"], [1, "ei-alert", "ei-alert--ok"], [1, "ei-foot__count"], [1, "pp-overlay", 3, "click"], [1, "pp-panel", 3, "click"], [1, "pp-head"], [1, "pp-head__icon"], [1, "pp-head__text"], [1, "pp-head__title"], ["class", "pp-head__sub", 4, "ngIf"], ["type", "button", 1, "pp-close", 3, "click"], ["class", "pp-stats", 4, "ngIf"], [1, "pp-search"], ["type", "search", "placeholder", "Rechercher un participant...", 3, "ngModelChange", "ngModel"], ["class", "pp-loading", 4, "ngIf"], ["class", "pp-list", 4, "ngIf"], [1, "pp-head__sub"], [1, "pp-head__code"], [1, "pp-stats"], [1, "pp-stat"], [1, "pp-stat__val"], [1, "pp-stat__lbl"], [1, "pp-stat__val", "pp-stat__val--ok"], [1, "pp-stat__val", "pp-stat__val--done"], [1, "pp-stat__val", "pp-stat__val--warn"], [1, "pp-loading"], [1, "isax", "isax-refresh-2", "pp-spin"], [1, "pp-list"], ["class", "pp-item", 4, "ngFor", "ngForOf"], ["class", "pp-empty", 4, "ngIf"], [1, "pp-item"], [1, "pp-av"], [1, "pp-info"], [1, "pp-name"], [1, "pp-email"], [1, "pp-right"], [1, "pp-badge", 3, "ngClass"], ["class", "pp-cert", "title", "Certificat obtenu", 4, "ngIf"], ["class", "pp-score", 4, "ngIf"], ["title", "Certificat obtenu", 1, "pp-cert"], [1, "isax", "isax-medal-star"], [1, "pp-score"], [1, "pp-empty"]], template: function AdminrhSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhSessionComponent_Template_input_ngModelChange_4_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_5_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(6, "option", 6);
      \u0275\u0275text(7, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "option", 7);
      \u0275\u0275text(9, "Planifi\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 8);
      \u0275\u0275text(11, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 9);
      \u0275\u0275text(13, "Termin\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 10);
      \u0275\u0275text(15, "Annul\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_16_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(17, "option", 6);
      \u0275\u0275text(18, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Pr\xE9sentiel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Distanciel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "Hybride");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
      \u0275\u0275listener("click", function AdminrhSessionComponent_Template_button_click_26_listener() {
        return ctx.viewMode = "list";
      });
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 17);
      \u0275\u0275listener("click", function AdminrhSessionComponent_Template_button_click_28_listener() {
        return ctx.viewMode = "calendar";
      });
      \u0275\u0275element(29, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "div", 19);
      \u0275\u0275template(31, AdminrhSessionComponent_button_31_Template, 3, 0, "button", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, AdminrhSessionComponent_div_32_Template, 5, 1, "div", 21)(33, AdminrhSessionComponent_div_33_Template, 5, 1, "div", 21)(34, AdminrhSessionComponent_div_34_Template, 5, 1, "div", 22);
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24)(37, "div", 25);
      \u0275\u0275element(38, "i", 18);
      \u0275\u0275text(39, " Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 26);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 24)(43, "div", 25);
      \u0275\u0275element(44, "i", 27);
      \u0275\u0275text(45, " En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 26);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 24)(49, "div", 25);
      \u0275\u0275element(50, "i", 28);
      \u0275\u0275text(51, " Planifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 26);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 24)(55, "div", 25);
      \u0275\u0275element(56, "i", 29);
      \u0275\u0275text(57, " Termin\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 26);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(60, AdminrhSessionComponent_div_60_Template, 2, 2, "div", 30)(61, AdminrhSessionComponent_div_61_Template, 23, 6, "div", 31)(62, AdminrhSessionComponent_div_62_Template, 24, 4, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, AdminrhSessionComponent_div_63_Template, 26, 20, "div", 33)(64, AdminrhSessionComponent_div_64_Template, 29, 11, "div", 34)(65, AdminrhSessionComponent_div_65_Template, 17, 5, "div", 35);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatut);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.viewMode === "list");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode === "calendar");
      \u0275\u0275advance(3);
      \u0275\u0275property("appHasPermission", "creer sessions");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.zoomError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.allSessions.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countByStatut("en_cours"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countByStatut("planifiee"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countByStatut("terminee"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "calendar");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.wizardOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.inscriptionOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.participantsPopupOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, HasPermissionDirective, SlicePipe, TitleCasePipe], styles: ['\n\n.ss-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ss-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ss-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ss-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ss-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ss-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #BA7517;\n  background: #fff;\n}\n.ss-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  color: #4b5563;\n  outline: none;\n  cursor: pointer;\n}\n.ss-select[_ngcontent-%COMP%]:focus {\n  border-color: #BA7517;\n}\n.ss-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ss-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ss-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ss-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.ss-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  border-left: 3px solid;\n  margin: 8px 14px 0;\n  border-radius: 8px;\n}\n.ss-alert__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.ss-alert--err[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #f87171;\n  color: #991b1b;\n}\n.ss-alert--ok[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #4ade80;\n  color: #166534;\n}\n.ss-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ss-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 12px 16px;\n}\n.ss-kpi__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ss-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #111827;\n  margin-top: 2px;\n}\n.ss-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ss-skeleton-row[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.ss-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.ss-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ss-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ss-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  text-align: left;\n  white-space: nowrap;\n}\n.ss-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.ss-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #f3f4f6;\n  transition: background 0.1s;\n}\n.ss-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ss-row__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ss-row__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ss-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-type[data-t=presentiel][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ss-type[data-t=distanciel][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ss-type[data-t=hybride][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.ss-statut[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-statut[data-s=plan][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ss-statut[data-s=live][_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n}\n.ss-statut[data-s=done][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ss-statut[data-s=cancel][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-places[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ss-places__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  border-radius: 5px;\n  background: #f3f4f6;\n  overflow: hidden;\n  min-width: 50px;\n}\n.ss-places__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.ss-places__txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ss-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-act[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ss-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ss-act[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ss-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.ss-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 16px;\n  color: #9ca3af;\n}\n.ss-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ss-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ss-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border-top: 1px solid #e5e7eb;\n}\n.ss-pager__btn[_ngcontent-%COMP%] {\n  min-width: 28px;\n  height: 28px;\n  padding: 0 8px;\n  font-size: 12px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ss-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ss-pager__btn.active[_ngcontent-%COMP%] {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.ss-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.sw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.sw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #FAEEDA;\n  color: #BA7517;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.sw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.sw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.sw-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.sw-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.sw-step__circle.active[_ngcontent-%COMP%] {\n  background: #BA7517;\n  color: #fff;\n  border-color: #BA7517;\n}\n.sw-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.sw-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.sw-step__label.active[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.sw-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.sw-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.sw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.sw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.sw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.sw-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.sw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.sw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.sw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.sw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.sw-input[_ngcontent-%COMP%]:focus {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.sw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-mode-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.sw-mode-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sw-mode-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 4px;\n}\n.sw-mode-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #9ca3af;\n}\n.sw-mode-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-mode-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  line-height: 1.3;\n}\n.sw-mode-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n}\n.sw-mode-card.on[_ngcontent-%COMP%] {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.sw-mode-card.on[_ngcontent-%COMP%]   .sw-mode-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.sw-mode-card.on[_ngcontent-%COMP%]   .sw-mode-card__title[_ngcontent-%COMP%] {\n  color: #633806;\n}\n.sw-location-block[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-lb-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-lb-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sw-lb-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-lb-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n}\n.sw-lb-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.sw-lb-input[readonly][_ngcontent-%COMP%] {\n  color: #4b5563;\n  cursor: default;\n}\n.sw-cal[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-cal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-cal__month[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  flex: 1;\n  text-transform: capitalize;\n}\n.sw-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.sw-cal__nav-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.12s;\n}\n.sw-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.sw-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 8px;\n  gap: 2px;\n}\n.sw-cal__dow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: center;\n  padding: 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sw-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  padding: 5px 2px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #4b5563;\n  transition: all 0.12s;\n  position: relative;\n}\n.sw-cal__day[_ngcontent-%COMP%]:hover:not(.sw-cal__day--empty):not(.sw-cal__day--past) {\n  background: #f3f4f6;\n}\n.sw-cal__day--empty[_ngcontent-%COMP%] {\n  visibility: hidden;\n  cursor: default;\n  pointer-events: none;\n}\n.sw-cal__day--past[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.sw-cal__day--today[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.sw-cal__day--has[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #BA7517;\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sw-cal__day--sel[_ngcontent-%COMP%] {\n  background: #BA7517;\n  color: #fff;\n  font-weight: 600;\n}\n.sw-time-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.sw-time-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-time-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-time-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n  width: 100%;\n}\n.sw-duration-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 12px;\n}\n.sw-duration-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.sw-duration-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.sw-cap-vis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 6px;\n}\n.sw-cap-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.sw-cap-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.sw-participants-block[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.sw-pb-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-pb-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n  flex: 1;\n}\n.sw-pb-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #633806;\n  background: #FAEEDA;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.sw-pb-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-pb-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.sw-pb-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  outline: none;\n  color: #111827;\n  font-family: inherit;\n  flex: 1;\n}\n.sw-pb-list[_ngcontent-%COMP%] {\n  max-height: 160px;\n  overflow-y: auto;\n}\n.sw-pb-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sw-pb-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.sw-pb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.sw-pb-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sw-pb-item[_ngcontent-%COMP%]:hover, \n.sw-pb-item.sel[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n}\n.sw-pb-av[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FAEEDA;\n  color: #633806;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.sw-pb-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sw-pb-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #111827;\n}\n.sw-pb-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-pb-empty[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.sw-pb-chk[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  flex-shrink: 0;\n}\n.sw-pb-chk.on[_ngcontent-%COMP%] {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.sw-recap[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.sw-recap__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.sw-recap__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-recap__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sw-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-rv-mode[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.sw-rv-mode[data-t=presentiel][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sw-rv-mode[data-t=distanciel][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.sw-rv-mode[data-t=hybride][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.sw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.sw-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.sw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.sw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sw-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sw-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sw-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ss-act--pp[_ngcontent-%COMP%] {\n  background: #F0F7FF;\n  color: #185FA5;\n  border-color: #b3d4ff;\n}\n.ss-act--pp[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.pp-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.pp-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 520px;\n  max-width: 95vw;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.pp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pp-head__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #EBF4FF;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pp-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pp-head__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111;\n}\n.pp-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pp-head__code[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.pp-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: #9ca3af;\n}\n.pp-close[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.pp-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pp-stat[_ngcontent-%COMP%] {\n  background: #fafbfc;\n  padding: 10px 12px;\n  text-align: center;\n}\n.pp-stat__val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: #111;\n}\n.pp-stat__val--ok[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.pp-stat__val--done[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.pp-stat__val--warn[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.pp-stat__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.pp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 15px;\n}\n.pp-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #374151;\n  background: transparent;\n}\n.pp-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #c4c8cf;\n}\n.pp-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: #6b7280;\n  font-size: 13px;\n  justify-content: center;\n}\n.pp-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.pp-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 8px 0;\n}\n.pp-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  transition: background 0.12s;\n}\n.pp-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.pp-av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 13px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pp-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pp-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111;\n}\n.pp-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pp-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.pp-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.pp-badge.pp-done[_ngcontent-%COMP%] {\n  background: #EBF4FF;\n  color: #185FA5;\n}\n.pp-badge.pp-ok[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.pp-badge.pp-wait[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.pp-cert[_ngcontent-%COMP%] {\n  color: #F59E0B;\n  font-size: 15px;\n}\n.pp-score[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #374151;\n  background: #f3f4f6;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.pp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 20px;\n  color: #9ca3af;\n}\n.pp-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n}\n.pp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.ss-zoom-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ss-zoom-na[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 12px;\n}\n.ss-zoom-spin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  color: #2D8CFF;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ss-zoom-create[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #2D8CFF;\n  background: #EBF4FF;\n  border: 1px solid #b3d4ff;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ss-zoom-create[_ngcontent-%COMP%]:hover {\n  background: #d4eaff;\n}\n.ss-zoom-create[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ss-zoom-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  background: #f0f4ff;\n  color: #4b6bfb;\n  border: 1px solid #c7d2fe;\n}\n.ss-zoom-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ss-zoom-badge--live[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  border-color: #6ee7b7;\n  animation: _ngcontent-%COMP%_pulse-live 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-live {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.ss-zoom-btns[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  margin-top: 4px;\n}\n.ss-zoom-pwd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 3px;\n}\n.ss-zoom-pwd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ss-zoom-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  border: 1px solid;\n  cursor: pointer;\n  font-size: 13px;\n  transition: opacity 0.15s;\n}\n.ss-zoom-btn--join[_ngcontent-%COMP%] {\n  background: #EBF4FF;\n  color: #2D8CFF;\n  border-color: #b3d4ff;\n}\n.ss-zoom-btn--copy[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n.ss-zoom-btn--del[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n  border-color: #fecaca;\n}\n.ss-zoom-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ss-zoom-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.8;\n}\n.sw-zoom-info-block[_ngcontent-%COMP%] {\n  background: #EBF4FF;\n  border: 1px solid #b3d4ff;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 8px;\n}\n.sw-zoom-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #1e3a5f;\n  padding: 3px 0;\n}\n.sw-zoom-info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  white-space: nowrap;\n}\n.sw-zoom-info-link[_ngcontent-%COMP%] {\n  color: #2D8CFF;\n  text-decoration: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 280px;\n}\n.sw-zoom-info-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.sw-zoom-copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #2D8CFF;\n  font-size: 14px;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n.sw-zoom-copy-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(45, 140, 255, 0.1);\n}\n@media (max-width: 768px) {\n  .ss-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sw-mode-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sw-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ss-view-group[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 7px;\n  overflow: hidden;\n}\n.ss-view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ss-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ss-view-toggle.active[_ngcontent-%COMP%] {\n  background: #F0F4FF;\n  color: #185FA5;\n}\n.ss-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f3f4f6;\n}\n.ss-act--enroll[_ngcontent-%COMP%] {\n  background: #E6F1FB !important;\n  color: #185FA5 !important;\n  border-color: #B8D4F0 !important;\n}\n.ss-act--enroll[_ngcontent-%COMP%]:hover {\n  background: #C9E2F8 !important;\n}\n.ss-cal-wrap[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.ss-cal[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ss-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #F8FAFC;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ss-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ss-cal__nav-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #4b5563;\n}\n.ss-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ss-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.ss-cal__head[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n  text-align: center;\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  border-bottom: 1px solid #e5e7eb;\n  background: #FAFBFC;\n}\n.ss-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  padding: 4px;\n  border-right: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  vertical-align: top;\n}\n.ss-cal__cell[_ngcontent-%COMP%]:nth-child(7n) {\n  border-right: none;\n}\n.ss-cal__cell--other[_ngcontent-%COMP%]   .ss-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ss-cal__cell--today[_ngcontent-%COMP%]   .ss-cal__day[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.ss-cal__day[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #111827;\n  display: block;\n  margin-bottom: 3px;\n}\n.ss-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ss-cal__event[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #185FA5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ss-cal__event--dist[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ss-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ss-cal__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 8px 14px;\n  font-size: 11px;\n  color: #4b5563;\n}\n.ss-cal__leg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ss-cal__leg-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\n.ss-cal__leg-dot--pres[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.ss-cal__leg-dot--dist[_ngcontent-%COMP%] {\n  background: #534AB7;\n}\n.ss-cal__leg-dot--hybr[_ngcontent-%COMP%] {\n  background: #854F0B;\n}\n.ei-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  padding: 16px;\n}\n.ei-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.ei-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.ei-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: #E6F1FB;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.ei-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ei-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.ei-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  margin-top: 2px;\n}\n.ei-head__date[_ngcontent-%COMP%], \n.ei-head__places[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 500;\n}\n.ei-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #9ca3af;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 0;\n}\n.ei-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.ei-fill-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.ei-fill-bar__track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ei-fill-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #185FA5;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ei-fill-bar__txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n}\n.ei-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.ei-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.ei-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #111827;\n  background: transparent;\n}\n.ei-selected-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  padding: 7px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #F8FAFC;\n  flex-shrink: 0;\n}\n.ei-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #E6F1FB;\n  color: #185FA5;\n  border-radius: 99px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ei-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  cursor: pointer;\n}\n.ei-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #A32D2D;\n}\n.ei-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n.ei-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  transition: background 0.1s;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ei-item[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.ei-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ei-item--sel[_ngcontent-%COMP%] {\n  background: #EEF4FD;\n}\n.ei-av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #E6F1FB;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.ei-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ei-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.ei-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  margin-top: 1px;\n}\n.ei-chk[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n}\n.ei-chk.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.ei-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  color: #9ca3af;\n  gap: 8px;\n}\n.ei-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.ei-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ei-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.ei-alert--err[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ei-alert--ok[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ei-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #e5e7eb;\n  flex-shrink: 0;\n  background: #FAFBFC;\n}\n.ei-foot__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n}\n.ei-btn-ghost[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 7px;\n  background: #fff;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ei-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ei-btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: none;\n  background: #185FA5;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ei-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ei-btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.ei-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=adminrh-session.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSessionComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-session", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, HasPermissionDirective], template: `<div class="ss-shell">\r
\r
  <!-- \u2500\u2500 TOOLBAR \u2500\u2500 -->\r
  <div class="ss-toolbar">\r
    <div class="ss-search">\r
      <i class="isax isax-search-normal-1 ss-search__icon"></i>\r
      <input type="search" class="ss-search__input" placeholder="Rechercher une session..."\r
             [(ngModel)]="searchValue" (ngModelChange)="applyFilters()">\r
    </div>\r
\r
    <select class="ss-select" [(ngModel)]="filterStatut" (ngModelChange)="applyFilters()">\r
      <option value="">Tous les statuts</option>\r
      <option value="planifiee">Planifi\xE9e</option>\r
      <option value="en_cours">En cours</option>\r
      <option value="terminee">Termin\xE9e</option>\r
      <option value="annulee">Annul\xE9e</option>\r
    </select>\r
\r
    <select class="ss-select" [(ngModel)]="filterType" (ngModelChange)="applyFilters()">\r
      <option value="">Tous les types</option>\r
      <option value="presentiel">Pr\xE9sentiel</option>\r
      <option value="distanciel">Distanciel</option>\r
      <option value="hybride">Hybride</option>\r
    </select>\r
\r
    <div class="ss-view-group">\r
      <button type="button" class="ss-view-toggle" [class.active]="viewMode === 'list'"\r
              (click)="viewMode = 'list'" title="Vue liste">\r
        <i class="isax isax-row-vertical"></i>\r
      </button>\r
      <button type="button" class="ss-view-toggle" [class.active]="viewMode === 'calendar'"\r
              (click)="viewMode = 'calendar'" title="Vue calendrier">\r
        <i class="isax isax-calendar-1"></i>\r
      </button>\r
    </div>\r
\r
    <div class="ss-spacer"></div>\r
    <button *appHasPermission="'creer sessions'" type="button" class="ss-add-btn" (click)="openCreate()">\r
      <i class="isax isax-add"></i> Planifier une session\r
    </button>\r
  </div>\r
\r
  <!-- Alerts -->\r
  <div *ngIf="zoomError" class="ss-alert ss-alert--err">\r
    <i class="isax isax-video-slash"></i> {{ zoomError }}\r
    <button type="button" class="ss-alert__close" (click)="zoomError=''"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
  <div *ngIf="error" class="ss-alert ss-alert--err">\r
    <i class="isax isax-warning-2"></i> {{ error }}\r
    <button type="button" class="ss-alert__close" (click)="clearMessages()"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
  <div *ngIf="successMessage" class="ss-alert ss-alert--ok">\r
    <i class="isax isax-tick-circle"></i> {{ successMessage }}\r
    <button type="button" class="ss-alert__close" (click)="clearMessages()"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
\r
  <!-- KPIs -->\r
  <div class="ss-kpi-row">\r
    <div class="ss-kpi">\r
      <div class="ss-kpi__label"><i class="isax isax-calendar-1"></i> Total</div>\r
      <div class="ss-kpi__val">{{ allSessions.length }}</div>\r
    </div>\r
    <div class="ss-kpi">\r
      <div class="ss-kpi__label"><i class="isax isax-play-circle"></i> En cours</div>\r
      <div class="ss-kpi__val">{{ countByStatut('en_cours') }}</div>\r
    </div>\r
    <div class="ss-kpi">\r
      <div class="ss-kpi__label"><i class="isax isax-clock"></i> Planifi\xE9es</div>\r
      <div class="ss-kpi__val">{{ countByStatut('planifiee') }}</div>\r
    </div>\r
    <div class="ss-kpi">\r
      <div class="ss-kpi__label"><i class="isax isax-tick-circle"></i> Termin\xE9es</div>\r
      <div class="ss-kpi__val">{{ countByStatut('terminee') }}</div>\r
    </div>\r
  </div>\r
\r
  <!-- Skeleton -->\r
  <div *ngIf="loading" class="ss-skeletons">\r
    <div *ngFor="let i of [1,2,3,4]" class="ss-skeleton-row"></div>\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 VUE CALENDRIER \u2500\u2500\u2500 -->\r
  <div *ngIf="!loading && viewMode === 'calendar'" class="ss-cal-wrap">\r
    <div class="ss-cal">\r
      <div class="ss-cal__nav">\r
        <button type="button" class="ss-cal__nav-btn" (click)="mainCalPrev()">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <span class="ss-cal__nav-label">{{ mainCalMonthLabel | titlecase }}</span>\r
        <button type="button" class="ss-cal__nav-btn" (click)="mainCalNext()">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
      <div class="ss-cal__grid">\r
        <div class="ss-cal__head" *ngFor="let d of ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']">{{ d }}</div>\r
        <div *ngFor="let cell of getMainCalendarDays()"\r
             class="ss-cal__cell"\r
             [class.ss-cal__cell--other]="!isCurrentMonth(cell.date)"\r
             [class.ss-cal__cell--today]="isTodayDate(cell.date)">\r
          <span class="ss-cal__day">{{ cell.date.getDate() }}</span>\r
          <div class="ss-cal__events">\r
            <div *ngFor="let s of cell.sessions" class="ss-cal__event"\r
                 [ngClass]="getSessionTypeClass(s)"\r
                 [title]="(s.titre || s.formation?.titre || '') + ' \u2014 ' + (s.statut | titlecase)">\r
              {{ (s.titre || s.formation?.titre || '\u2014') | slice:0:18 }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- L\xE9gende -->\r
    <div class="ss-cal__legend">\r
      <span class="ss-cal__leg-item"><span class="ss-cal__leg-dot ss-cal__leg-dot--pres"></span>Pr\xE9sentiel</span>\r
      <span class="ss-cal__leg-item"><span class="ss-cal__leg-dot ss-cal__leg-dot--dist"></span>Distanciel</span>\r
      <span class="ss-cal__leg-item"><span class="ss-cal__leg-dot ss-cal__leg-dot--hybr"></span>Hybride</span>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 VUE LISTE \u2500\u2500\u2500 -->\r
  <div *ngIf="!loading && viewMode === 'list'" class="ss-table-wrap">\r
    <table class="ss-table">\r
      <thead>\r
        <tr>\r
          <th>Session</th>\r
          <th>Date</th>\r
          <th>Modalit\xE9</th>\r
          <th>Statut</th>\r
          <th>Places</th>\r
          <th>Formateur</th>\r
          <th>Zoom</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let s of pagedSessions; trackBy: trackById" class="ss-row"\r
            (mouseenter)="loadZoomMeeting(s)">\r
          <td>\r
            <div class="ss-row__name">{{ s.titre || s.formation?.titre || '\u2014' }}</div>\r
            <div class="ss-row__sub">{{ s.code_session }}</div>\r
          </td>\r
          <td>\r
            <div class="ss-row__name">{{ formatDate(s.date_debut) }}</div>\r
            <div class="ss-row__sub">{{ formatTime(s.date_debut) }} \u2013 {{ formatTime(s.date_fin) }}</div>\r
          </td>\r
          <td>\r
            <span class="ss-type" [attr.data-t]="s.type">\r
              {{ s.type_display || s.type | titlecase }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="ss-statut" [attr.data-s]="statutKey(resolvedStatut(s))">{{ statutLabel(resolvedStatut(s)) }}</span>\r
          </td>\r
          <td>\r
            <div class="ss-places">\r
              <div class="ss-places__bar">\r
                <div class="ss-places__fill"\r
                     [style.width.%]="(s.nombre_inscrits || 0) / s.capacite_max * 100"></div>\r
              </div>\r
              <span class="ss-places__txt">{{ s.nombre_inscrits || 0 }}/{{ s.capacite_max }}</span>\r
            </div>\r
          </td>\r
          <td>\r
            <div class="ss-row__name">{{ s.formateur?.name || (s.formateur?.prenom + ' ' + s.formateur?.nom) || '\u2014' }}</div>\r
          </td>\r
          <!-- Zoom -->\r
          <td class="ss-zoom-cell">\r
            <ng-container *ngIf="s.type === 'presentiel' || isSessionPassed(s)">\r
              <span class="ss-zoom-na">\u2014</span>\r
            </ng-container>\r
            <ng-container *ngIf="s.type !== 'presentiel' && !isSessionPassed(s)">\r
              <span *ngIf="zoomLoading[s.id]" class="ss-zoom-spin"><i class="isax isax-refresh-2"></i></span>\r
              <!-- Pas encore de meeting -->\r
              <ng-container *ngIf="!zoomLoading[s.id] && !zoomMeetings[s.id] && s.statut !== 'annulee'">\r
                <button type="button" class="ss-zoom-create" title="Cr\xE9er meeting Zoom" (click)="createZoomMeeting(s)">\r
                  <i class="isax isax-video-add"></i> Cr\xE9er\r
                </button>\r
              </ng-container>\r
              <!-- Meeting existant -->\r
              <ng-container *ngIf="!zoomLoading[s.id] && zoomMeetings[s.id]">\r
                <div class="ss-zoom-badge" [class.ss-zoom-badge--live]="isZoomAccessible(s)">\r
                  <i class="isax isax-video-circle"></i>\r
                  <span>{{ isZoomAccessible(s) ? 'En direct' : getZoomDelai(s) }}</span>\r
                </div>\r
                <div class="ss-zoom-btns">\r
                  <button type="button" class="ss-zoom-btn ss-zoom-btn--join"\r
                          title="D\xE9marrer (lien h\xF4te)" (click)="openZoomLink(s)">\r
                    <i class="isax isax-video-play"></i>\r
                  </button>\r
                  <button type="button" class="ss-zoom-btn ss-zoom-btn--copy"\r
                          title="Copier le lien participants" (click)="copyJoinLink(s)">\r
                    <i class="isax isax-copy"></i>\r
                  </button>\r
                  <button type="button" class="ss-zoom-btn ss-zoom-btn--del"\r
                          title="Supprimer meeting" (click)="deleteZoomMeeting(s)">\r
                    <i class="isax isax-trash"></i>\r
                  </button>\r
                </div>\r
                <div class="ss-zoom-pwd" *ngIf="zoomMeetings[s.id]?.password">\r
                  <i class="isax isax-key"></i> {{ zoomMeetings[s.id]?.password }}\r
                </div>\r
              </ng-container>\r
            </ng-container>\r
          </td>\r
\r
          <td>\r
            <div class="ss-actions">\r
              <!-- Toujours visible -->\r
              <button type="button" class="ss-act" title="Voir" (click)="openView(s)">\r
                <i class="isax isax-eye"></i>\r
              </button>\r
              <!-- Participants : visible pour toutes les sessions -->\r
              <button type="button" class="ss-act ss-act--pp" title="Voir les participants"\r
                      (click)="openParticipants(s)">\r
                <i class="isax isax-people"></i>\r
              </button>\r
              <!-- Actions uniquement sur sessions futures -->\r
              <ng-container *ngIf="!isSessionPassed(s)">\r
                <button type="button" class="ss-act ss-act--enroll" title="Inscrire des employ\xE9s"\r
                        *ngIf="s.statut === 'planifiee'" (click)="openInscription(s)">\r
                  <i class="isax isax-user-add"></i>\r
                </button>\r
                <button type="button" class="ss-act" title="Modifier" (click)="openEdit(s)"\r
                        [disabled]="s.statut === 'annulee'">\r
                  <i class="isax isax-edit-2"></i>\r
                </button>\r
                <button type="button" class="ss-act ss-act--warn" title="Annuler"\r
                        *ngIf="s.statut === 'planifiee'" (click)="cancelSession(s)">\r
                  <i class="isax isax-close-circle"></i>\r
                </button>\r
                <button class="ss-act ss-act--arch" title="Archiver" (click)="archiveSession(s)"><i class="isax isax-archive"></i></button>\r
              </ng-container>\r
            </div>\r
          </td>\r
        </tr>\r
        <tr *ngIf="!sessions.length">\r
          <td colspan="8" class="ss-empty">\r
            <i class="isax isax-calendar-1"></i>\r
            <p>Aucune session trouv\xE9e</p>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Pagination -->\r
    <div class="ss-pager" *ngIf="totalPages > 1">\r
      <button class="ss-pager__btn" [disabled]="currentPage === 1"\r
              (click)="currentPage = currentPage - 1">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <button *ngFor="let p of pagesArray; let i = index"\r
              class="ss-pager__btn" [class.active]="currentPage === i + 1"\r
              (click)="currentPage = i + 1">{{ i + 1 }}</button>\r
      <button class="ss-pager__btn" [disabled]="currentPage === totalPages"\r
              (click)="currentPage = currentPage + 1">\r
        <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
    </div>\r
  </div><!-- /ss-table-wrap -->\r
\r
</div><!-- /ss-shell -->\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     WIZARD MODAL \u2013 SESSION\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="sw-overlay" *ngIf="wizardOpen" (click)="closeWizard()">\r
  <div class="sw-modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Head -->\r
    <div class="sw-head">\r
      <div class="sw-head__icon"><i class="isax isax-calendar-add"></i></div>\r
      <div class="sw-head__text">\r
        <div class="sw-head__title">\r
          {{ wizardMode === 'create' ? 'Planifier une session' : wizardMode === 'edit' ? 'Modifier la session' : 'D\xE9tails de la session' }}\r
        </div>\r
        <div class="sw-head__sub">{{ wizardMode === 'view' ? 'Consultation uniquement' : 'Configurez la session en 3 \xE9tapes' }}</div>\r
      </div>\r
      <button type="button" class="sw-close" (click)="closeWizard()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Stepper -->\r
    <div class="sw-stepper">\r
      <ng-container *ngFor="let st of [{n:1,l:'Infos & modalit\xE9'},{n:2,l:'Date & horaire'},{n:3,l:'Participants'}]; let last=last">\r
        <div class="sw-step">\r
          <div class="sw-step__circle"\r
               [class.done]="wizardStep > st.n"\r
               [class.active]="wizardStep === st.n">\r
            <i *ngIf="wizardStep > st.n" class="isax isax-tick-circle" style="font-size:11px"></i>\r
            <span *ngIf="wizardStep <= st.n">{{ st.n }}</span>\r
          </div>\r
          <span class="sw-step__label"\r
                [class.done]="wizardStep > st.n"\r
                [class.active]="wizardStep === st.n">{{ st.l }}</span>\r
        </div>\r
        <div *ngIf="!last" class="sw-step__line"></div>\r
      </ng-container>\r
    </div>\r
\r
    <!-- Body -->\r
    <div class="sw-body" [formGroup]="step1Form">\r
\r
      <!-- \u2500\u2500 \xC9TAPE 1 : Infos & modalit\xE9 \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 1">\r
\r
        <!-- Formation -->\r
        <div class="sw-field sw-field--full">\r
          <label class="sw-label">Formation associ\xE9e <span class="sw-req">*</span></label>\r
          <select class="sw-input" formControlName="formation_id"\r
                  [attr.disabled]="wizardMode === 'view' ? '' : null">\r
            <option value="">S\xE9lectionner une formation...</option>\r
            <option *ngFor="let f of formations" [value]="f.id">{{ f.titre }}</option>\r
          </select>\r
        </div>\r
\r
        <!-- Formateur + Lieu -->\r
        <div class="sw-row">\r
          <div class="sw-field">\r
            <label class="sw-label">Formateur <span class="sw-req">*</span></label>\r
            <select class="sw-input" formControlName="formateur_id"\r
                    [attr.disabled]="wizardMode === 'view' ? '' : null">\r
              <option value="">S\xE9lectionner...</option>\r
              <option *ngFor="let f of formateurs" [value]="f.id">\r
                {{ f.prenom ? (f.prenom + ' ' + f.nom) : f.name }}\r
              </option>\r
            </select>\r
          </div>\r
          <div class="sw-field">\r
            <label class="sw-label">Capacit\xE9 maximale</label>\r
            <input type="number" class="sw-input" formControlName="capacite_max" min="1"\r
                   [attr.readonly]="wizardMode === 'view' ? '' : null">\r
          </div>\r
        </div>\r
\r
        <!-- Modalit\xE9 -->\r
        <div class="sw-field sw-field--full">\r
          <label class="sw-label">Modalit\xE9 <span class="sw-req">*</span></label>\r
          <div class="sw-mode-grid">\r
            <div *ngFor="let m of modes" class="sw-mode-card"\r
                 [class.on]="wizardType === m.key"\r
                 (click)="setMode(m.key)">\r
              <div class="sw-mode-card__head">\r
                <i class="isax {{ m.icon }}"></i>\r
                <span class="sw-mode-card__title">{{ m.label }}</span>\r
              </div>\r
              <div class="sw-mode-card__sub">{{ m.sub }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Lieu / Lien selon modalit\xE9 -->\r
        <div class="sw-field sw-field--full" *ngIf="wizardType !== 'distanciel'">\r
          <label class="sw-label">Salle / Lieu <span *ngIf="wizardType === 'presentiel'" class="sw-req">*</span></label>\r
          <div class="sw-location-block">\r
            <div class="sw-lb-row">\r
              <i class="isax isax-building"></i>\r
              <input class="sw-lb-input" type="text" formControlName="lieu"\r
                     placeholder="Ex. : Salle B2, Immeuble Peytavin, Dakar"\r
                     [attr.readonly]="wizardMode === 'view' ? '' : null">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="sw-field sw-field--full" *ngIf="wizardType !== 'presentiel'">\r
          <label class="sw-label">Lien de connexion</label>\r
\r
          <!-- Zoom meeting existant : affiche le join_url -->\r
          <div *ngIf="wizardSelected && zoomMeetings[wizardSelected.id]" class="sw-zoom-info-block">\r
            <div class="sw-zoom-info-row">\r
              <i class="isax isax-video-circle" style="color:#2D8CFF"></i>\r
              <span class="sw-zoom-info-label">Lien Zoom participants :</span>\r
              <a [href]="zoomMeetings[wizardSelected.id]!.join_url" target="_blank" class="sw-zoom-info-link">\r
                {{ zoomMeetings[wizardSelected.id]!.join_url }}\r
              </a>\r
              <button type="button" class="sw-zoom-copy-btn"\r
                      title="Copier" (click)="copyJoinLink(wizardSelected)">\r
                <i class="isax isax-copy"></i>\r
              </button>\r
            </div>\r
            <div class="sw-zoom-info-row" *ngIf="zoomMeetings[wizardSelected.id]!.password">\r
              <i class="isax isax-key" style="color:#6b7280"></i>\r
              <span class="sw-zoom-info-label">Mot de passe :</span>\r
              <span>{{ zoomMeetings[wizardSelected.id]!.password }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Champ manuel (Meet, Teams, ou si pas de Zoom) -->\r
          <div class="sw-location-block" *ngIf="!wizardSelected || !zoomMeetings[wizardSelected.id]">\r
            <div class="sw-lb-row">\r
              <i class="isax isax-link"></i>\r
              <input class="sw-lb-input" type="text" formControlName="lien"\r
                     placeholder="https://meet.google.com/xxx-yyyy-zzz"\r
                     [attr.readonly]="wizardMode === 'view' ? '' : null">\r
            </div>\r
            <div class="sw-lb-row">\r
              <i class="isax isax-key"></i>\r
              <input class="sw-lb-input" type="text" formControlName="code_acces"\r
                     placeholder="Code d'acc\xE8s (optionnel)"\r
                     [attr.readonly]="wizardMode === 'view' ? '' : null">\r
            </div>\r
          </div>\r
          <span class="sw-hint">\r
            Laissez vide si vous utilisez Zoom \u2014 le lien sera g\xE9n\xE9r\xE9 automatiquement apr\xE8s cr\xE9ation\r
          </span>\r
        </div>\r
\r
        <!-- Titre personnalis\xE9 -->\r
        <div class="sw-field sw-field--full">\r
          <label class="sw-label">Titre personnalis\xE9 de la session</label>\r
          <input type="text" class="sw-input" formControlName="titre"\r
                 placeholder="Ex. : Session avanc\xE9e \u2014 groupe TechNova Jan. 2025"\r
                 [attr.readonly]="wizardMode === 'view' ? '' : null">\r
          <span class="sw-hint">Laissez vide pour utiliser le titre de la formation</span>\r
        </div>\r
\r
      </ng-container>\r
\r
      <!-- \u2500\u2500 \xC9TAPE 2 : Date & horaire \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 2">\r
\r
        <!-- Mini-calendrier -->\r
        <div class="sw-field sw-field--full">\r
          <label class="sw-label">Choisir la date <span class="sw-req">*</span></label>\r
          <div class="sw-cal">\r
            <div class="sw-cal__head">\r
              <span class="sw-cal__month">{{ calMonthLabel | titlecase }}</span>\r
              <div class="sw-cal__nav">\r
                <button type="button" class="sw-cal__nav-btn" (click)="calPrev()">\r
                  <i class="isax isax-arrow-left-2"></i>\r
                </button>\r
                <button type="button" class="sw-cal__nav-btn" (click)="calNext()">\r
                  <i class="isax isax-arrow-right-3"></i>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="sw-cal__grid">\r
              <div class="sw-cal__dow" *ngFor="let d of ['Lu','Ma','Me','Je','Ve','Sa','Di']">{{ d }}</div>\r
              <div *ngFor="let cell of calendarDays"\r
                   class="sw-cal__day"\r
                   [class.sw-cal__day--empty]="cell.empty"\r
                   [class.sw-cal__day--past]="!cell.empty && isPast(cell.date)"\r
                   [class.sw-cal__day--today]="isToday(cell.date)"\r
                   [class.sw-cal__day--sel]="isSelected(cell.date)"\r
                   [class.sw-cal__day--has]="hasSession(cell.date) && !isSelected(cell.date)"\r
                   (click)="!cell.empty && selectDate(cell.date)">\r
                {{ cell.empty ? '' : cell.date.getDate() }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Heures -->\r
        <div class="sw-row">\r
          <div class="sw-field">\r
            <label class="sw-label">Heure de d\xE9but <span class="sw-req">*</span></label>\r
            <div class="sw-time-wrap">\r
              <i class="isax isax-clock"></i>\r
              <input type="time" [(ngModel)]="heureDebut" [ngModelOptions]="{standalone:true}"\r
                     [attr.readonly]="wizardMode === 'view' ? '' : null">\r
            </div>\r
          </div>\r
          <div class="sw-field">\r
            <label class="sw-label">Heure de fin <span class="sw-req">*</span></label>\r
            <div class="sw-time-wrap">\r
              <i class="isax isax-clock"></i>\r
              <input type="time" [(ngModel)]="heureFin" [ngModelOptions]="{standalone:true}"\r
                     [attr.readonly]="wizardMode === 'view' ? '' : null">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="sw-duration-badge">\r
          <i class="isax isax-timer"></i> Dur\xE9e : <strong>{{ durationLabel }}</strong>\r
          <span class="sw-hint" style="margin-left:8px">Fuseau : UTC+0 (Dakar)</span>\r
        </div>\r
\r
        <!-- Rappel + R\xE9currence -->\r
        <div class="sw-row" *ngIf="wizardMode !== 'view'">\r
          <div class="sw-field">\r
            <label class="sw-label">Rappel avant la session</label>\r
            <select class="sw-input" [(ngModel)]="rappel" [ngModelOptions]="{standalone:true}">\r
              <option value="24h">24h avant</option>\r
              <option value="48h">48h avant</option>\r
              <option value="1w">1 semaine avant</option>\r
              <option value="none">Aucun rappel</option>\r
            </select>\r
          </div>\r
          <div class="sw-field">\r
            <label class="sw-label">R\xE9currence</label>\r
            <select class="sw-input" [(ngModel)]="recurrence" [ngModelOptions]="{standalone:true}">\r
              <option value="none">Pas de r\xE9currence</option>\r
              <option value="weekly">Hebdomadaire</option>\r
              <option value="biweekly">Bi-mensuelle</option>\r
              <option value="monthly">Mensuelle</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
      </ng-container>\r
\r
      <!-- \u2500\u2500 \xC9TAPE 3 : Participants \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 3">\r
\r
        <!-- Capacit\xE9 + barre -->\r
        <div class="sw-row">\r
          <div class="sw-field">\r
            <label class="sw-label">Capacit\xE9 maximale</label>\r
            <input type="number" class="sw-input" formControlName="capacite_max" min="1"\r
                   [attr.readonly]="wizardMode === 'view' ? '' : null">\r
          </div>\r
          <div class="sw-field">\r
            <label class="sw-label">Taux de remplissage</label>\r
            <div class="sw-cap-vis">\r
              <div class="sw-cap-bar">\r
                <div class="sw-cap-fill" [style.width.%]="fillPercent"></div>\r
              </div>\r
              <span class="sw-hint">{{ selectedParticipants.length }}/{{ step1Form.value.capacite_max || 20 }} places</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Liste participants -->\r
        <div class="sw-participants-block">\r
          <div class="sw-pb-head">\r
            <span class="sw-pb-title">Employ\xE9s disponibles</span>\r
            <span class="sw-pb-count">{{ selectedParticipants.length }} s\xE9lectionn\xE9s</span>\r
          </div>\r
          <div class="sw-pb-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher un employ\xE9..."\r
                   [(ngModel)]="participantsSearch" [ngModelOptions]="{standalone:true}">\r
          </div>\r
          <div class="sw-pb-list">\r
            <div *ngFor="let u of filteredUsers" class="sw-pb-item"\r
                 [class.sel]="isParticipantSelected(u)"\r
                 (click)="toggleParticipant(u)">\r
              <div class="sw-pb-av">{{ userInitials(u) }}</div>\r
              <div class="sw-pb-info">\r
                <div class="sw-pb-name">{{ u.name || (u.prenom + ' ' + u.nom) }}</div>\r
                <div class="sw-pb-role">{{ u.fonction || u.email || '\u2014' }}</div>\r
              </div>\r
              <div class="sw-pb-chk" [class.on]="isParticipantSelected(u)">\r
                <i *ngIf="isParticipantSelected(u)" class="isax isax-tick-circle"></i>\r
              </div>\r
            </div>\r
            <div *ngIf="!filteredUsers.length" class="sw-pb-empty">Aucun employ\xE9 trouv\xE9</div>\r
          </div>\r
        </div>\r
\r
        <!-- R\xE9capitulatif -->\r
        <div class="sw-recap">\r
          <div class="sw-recap__label">R\xE9capitulatif de la session</div>\r
          <div class="sw-recap__row"><span class="sw-rl">Formation</span><span class="sw-rv">{{ recapFormation }}</span></div>\r
          <div class="sw-recap__row"><span class="sw-rl">Formateur</span><span class="sw-rv">{{ recapFormateur }}</span></div>\r
          <div class="sw-recap__row"><span class="sw-rl">Date</span><span class="sw-rv">{{ recapDate }}</span></div>\r
          <div class="sw-recap__row"><span class="sw-rl">Horaire</span><span class="sw-rv">{{ recapHoraire }}</span></div>\r
          <div class="sw-recap__row">\r
            <span class="sw-rl">Modalit\xE9</span>\r
            <span class="sw-rv">\r
              <span class="sw-rv-mode" [attr.data-t]="wizardType">{{ wizardType | titlecase }}</span>\r
            </span>\r
          </div>\r
          <div class="sw-recap__row">\r
            <span class="sw-rl">Participants</span>\r
            <span class="sw-rv">{{ selectedParticipants.length }} / {{ step1Form.value.capacite_max || 20 }} places</span>\r
          </div>\r
        </div>\r
\r
        <!-- Error -->\r
        <div *ngIf="wizardError" class="sw-error">\r
          <i class="isax isax-warning-2"></i> {{ wizardError }}\r
        </div>\r
\r
      </ng-container>\r
\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="sw-foot">\r
      <span class="sw-foot__info">\xC9tape {{ wizardStep }} sur 3</span>\r
      <button type="button" class="sw-btn-ghost" *ngIf="wizardStep > 1" (click)="wizardPrev()">Retour</button>\r
      <button type="button" class="sw-btn-ghost" *ngIf="wizardStep === 1" (click)="closeWizard()">Annuler</button>\r
      <button type="button" class="sw-btn-primary" *ngIf="wizardStep < 3" (click)="wizardNext()">\r
        Suivant <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
      <button type="button" *ngIf="wizardStep === 3 && wizardMode !== 'view'"\r
              class="sw-btn-success" [disabled]="wizardSaving" (click)="wizardSubmit()">\r
        <i class="isax isax-calendar-tick"></i>\r
        {{ wizardSaving ? 'Enregistrement...' : (wizardMode === 'create' ? 'Planifier la session' : 'Sauvegarder') }}\r
      </button>\r
      <button type="button" *ngIf="wizardStep === 3 && wizardMode === 'view'"\r
              class="sw-btn-primary" (click)="closeWizard()">Fermer</button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL INSCRIPTION RAPIDE\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="ei-overlay" *ngIf="inscriptionOpen" (click)="closeInscription()">\r
  <div class="ei-modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Head -->\r
    <div class="ei-head">\r
      <div class="ei-head__icon"><i class="isax isax-user-add"></i></div>\r
      <div class="ei-head__text">\r
        <div class="ei-head__title">Inscrire des employ\xE9s</div>\r
        <div class="ei-head__sub" *ngIf="inscriptionSession">\r
          {{ inscriptionSession.titre || inscriptionSession.formation?.titre || '\u2014' }}\r
          \xB7 <span class="ei-head__date">{{ formatDate(inscriptionSession.date_debut) }}</span>\r
          \xB7 <span class="ei-head__places">{{ inscriptionSession.nombre_inscrits || 0 }}/{{ inscriptionSession.capacite_max }} places</span>\r
        </div>\r
      </div>\r
      <button type="button" class="ei-close" (click)="closeInscription()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Barre de remplissage -->\r
    <div class="ei-fill-bar" *ngIf="inscriptionSession">\r
      <div class="ei-fill-bar__track">\r
        <div class="ei-fill-bar__fill"\r
             [style.width.%]="((inscriptionSession.nombre_inscrits || 0) + inscriptionSelected.length) / inscriptionSession.capacite_max * 100">\r
        </div>\r
      </div>\r
      <span class="ei-fill-bar__txt">\r
        {{ (inscriptionSession.nombre_inscrits || 0) + inscriptionSelected.length }} / {{ inscriptionSession.capacite_max }} places\r
      </span>\r
    </div>\r
\r
    <!-- Search -->\r
    <div class="ei-search">\r
      <i class="isax isax-search-normal-1"></i>\r
      <input type="search" placeholder="Rechercher un employ\xE9..."\r
             [(ngModel)]="inscriptionSearch">\r
    </div>\r
\r
    <!-- S\xE9lectionn\xE9s chips -->\r
    <div class="ei-selected-strip" *ngIf="inscriptionSelected.length">\r
      <span *ngFor="let u of inscriptionSelected" class="ei-chip">\r
        {{ (u.name || u.prenom + ' ' + u.nom) | slice:0:18 }}\r
        <i class="isax isax-close-circle" (click)="toggleInscriptionUser(u)"></i>\r
      </span>\r
    </div>\r
\r
    <!-- Liste employ\xE9s -->\r
    <div class="ei-list">\r
      <div *ngFor="let u of inscriptionFiltered" class="ei-item"\r
           [class.ei-item--sel]="isInscriptionSelected(u)"\r
           (click)="toggleInscriptionUser(u)">\r
        <div class="ei-av">{{ userInitials(u) }}</div>\r
        <div class="ei-info">\r
          <div class="ei-name">{{ u.name || (u.prenom + ' ' + u.nom) }}</div>\r
          <div class="ei-role">{{ u.fonction || u.email || '\u2014' }}</div>\r
        </div>\r
        <div class="ei-chk" [class.on]="isInscriptionSelected(u)">\r
          <i *ngIf="isInscriptionSelected(u)" class="isax isax-tick-circle"></i>\r
        </div>\r
      </div>\r
      <div *ngIf="!inscriptionFiltered.length" class="ei-empty">\r
        <i class="isax isax-people"></i>\r
        <p>Aucun employ\xE9 disponible</p>\r
      </div>\r
    </div>\r
\r
    <!-- Alerts -->\r
    <div *ngIf="inscriptionError" class="ei-alert ei-alert--err">\r
      <i class="isax isax-warning-2"></i> {{ inscriptionError }}\r
    </div>\r
    <div *ngIf="inscriptionSuccess" class="ei-alert ei-alert--ok">\r
      <i class="isax isax-tick-circle"></i> {{ inscriptionSuccess }}\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="ei-foot">\r
      <button type="button" class="ei-btn-ghost" (click)="closeInscription()">Annuler</button>\r
      <div style="flex:1"></div>\r
      <span class="ei-foot__count" *ngIf="inscriptionSelected.length">\r
        {{ inscriptionSelected.length }} employ\xE9(s) s\xE9lectionn\xE9(s)\r
      </span>\r
      <button type="button" class="ei-btn-primary"\r
              [disabled]="!inscriptionSelected.length || inscriptionSaving"\r
              (click)="submitInscription()">\r
        <i class="isax isax-user-add"></i>\r
        {{ inscriptionSaving ? 'Inscription...' : 'Inscrire' }}\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     POPUP PARTICIPANTS\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pp-overlay" *ngIf="participantsPopupOpen" (click)="closeParticipants()">\r
  <div class="pp-panel" (click)="$event.stopPropagation()">\r
\r
    <!-- Header -->\r
    <div class="pp-head">\r
      <div class="pp-head__icon"><i class="isax isax-people"></i></div>\r
      <div class="pp-head__text">\r
        <div class="pp-head__title">Participants</div>\r
        <div class="pp-head__sub" *ngIf="participantsSession">\r
          {{ participantsSession.titre || participantsSession.formation?.titre || '\u2014' }}\r
          <span class="pp-head__code">\xB7 {{ participantsSession.code_session }}</span>\r
        </div>\r
      </div>\r
      <button type="button" class="pp-close" (click)="closeParticipants()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Stats strip -->\r
    <div class="pp-stats" *ngIf="participantsStats">\r
      <div class="pp-stat">\r
        <span class="pp-stat__val">{{ participantsStats.total_participants }}</span>\r
        <span class="pp-stat__lbl">Total</span>\r
      </div>\r
      <div class="pp-stat">\r
        <span class="pp-stat__val pp-stat__val--ok">{{ participantsStats.confirmes }}</span>\r
        <span class="pp-stat__lbl">Confirm\xE9s</span>\r
      </div>\r
      <div class="pp-stat">\r
        <span class="pp-stat__val pp-stat__val--done">{{ participantsStats.termines }}</span>\r
        <span class="pp-stat__lbl">Termin\xE9s</span>\r
      </div>\r
      <div class="pp-stat">\r
        <span class="pp-stat__val pp-stat__val--warn">{{ participantsStats.liste_attente }}</span>\r
        <span class="pp-stat__lbl">En attente</span>\r
      </div>\r
    </div>\r
\r
    <!-- Search -->\r
    <div class="pp-search">\r
      <i class="isax isax-search-normal-1"></i>\r
      <input type="search" placeholder="Rechercher un participant..."\r
             [(ngModel)]="participantsQuery">\r
    </div>\r
\r
    <!-- Loading -->\r
    <div *ngIf="participantsLoading" class="pp-loading">\r
      <i class="isax isax-refresh-2 pp-spin"></i> Chargement...\r
    </div>\r
\r
    <!-- Liste -->\r
    <div class="pp-list" *ngIf="!participantsLoading">\r
      <div *ngFor="let p of filteredParticipants" class="pp-item">\r
        <div class="pp-av">{{ participantInitials(p) }}</div>\r
        <div class="pp-info">\r
          <div class="pp-name">{{ p.prenom }} {{ p.nom }}</div>\r
          <div class="pp-email">{{ p.email }}</div>\r
        </div>\r
        <div class="pp-right">\r
          <span class="pp-badge" [ngClass]="participantStatutClass(p)">\r
            {{ participantStatutLabel(p) }}\r
          </span>\r
          <span class="pp-cert" *ngIf="p.certificat_obtenu" title="Certificat obtenu">\r
            <i class="isax isax-medal-star"></i>\r
          </span>\r
          <span class="pp-score" *ngIf="p.note_finale != null">\r
            {{ p.note_finale }}/20\r
          </span>\r
        </div>\r
      </div>\r
      <div *ngIf="!filteredParticipants.length" class="pp-empty">\r
        <i class="isax isax-people"></i>\r
        <p>Aucun participant trouv\xE9</p>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-session/adminrh-session.component.scss */\n.ss-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ss-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ss-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ss-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ss-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ss-search__input:focus {\n  border-color: #BA7517;\n  background: #fff;\n}\n.ss-select {\n  padding: 5px 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  color: #4b5563;\n  outline: none;\n  cursor: pointer;\n}\n.ss-select:focus {\n  border-color: #BA7517;\n}\n.ss-spacer {\n  flex: 1;\n}\n.ss-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ss-add-btn i {\n  font-size: 14px;\n}\n.ss-add-btn:hover {\n  opacity: 0.9;\n}\n.ss-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  border-left: 3px solid;\n  margin: 8px 14px 0;\n  border-radius: 8px;\n}\n.ss-alert__close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.ss-alert--err {\n  background: #fef2f2;\n  border-color: #f87171;\n  color: #991b1b;\n}\n.ss-alert--ok {\n  background: #f0fdf4;\n  border-color: #4ade80;\n  color: #166534;\n}\n.ss-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ss-kpi {\n  background: #fff;\n  padding: 12px 16px;\n}\n.ss-kpi__label {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-kpi__label i {\n  font-size: 13px;\n}\n.ss-kpi__val {\n  font-size: 22px;\n  font-weight: 600;\n  color: #111827;\n  margin-top: 2px;\n}\n.ss-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ss-skeleton-row {\n  height: 56px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.2s infinite;\n}\n@keyframes shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.ss-table-wrap {\n  overflow-x: auto;\n}\n.ss-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ss-table thead tr {\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ss-table th {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  text-align: left;\n  white-space: nowrap;\n}\n.ss-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.ss-table tbody tr {\n  border-bottom: 0.5px solid #f3f4f6;\n  transition: background 0.1s;\n}\n.ss-table tbody tr:hover {\n  background: #f9fafb;\n}\n.ss-row__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ss-row__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ss-type {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-type[data-t=presentiel] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ss-type[data-t=distanciel] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ss-type[data-t=hybride] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.ss-statut {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-statut[data-s=plan] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ss-statut[data-s=live] {\n  background: #f0fdf4;\n  color: #166534;\n}\n.ss-statut[data-s=done] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ss-statut[data-s=cancel] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-places {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ss-places__bar {\n  flex: 1;\n  height: 5px;\n  border-radius: 5px;\n  background: #f3f4f6;\n  overflow: hidden;\n  min-width: 50px;\n}\n.ss-places__fill {\n  height: 100%;\n  border-radius: 5px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.ss-places__txt {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ss-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-act {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ss-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ss-act:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ss-act--warn:hover {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.ss-act--del:hover {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-empty {\n  text-align: center;\n  padding: 40px 16px;\n  color: #9ca3af;\n}\n.ss-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ss-empty p {\n  font-size: 13px;\n}\n.ss-pager {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border-top: 1px solid #e5e7eb;\n}\n.ss-pager__btn {\n  min-width: 28px;\n  height: 28px;\n  padding: 0 8px;\n  font-size: 12px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ss-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ss-pager__btn.active {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.ss-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.sw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.sw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #FAEEDA;\n  color: #BA7517;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sw-head__text {\n  flex: 1;\n}\n.sw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.sw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.sw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.sw-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.sw-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.sw-step__circle.active {\n  background: #BA7517;\n  color: #fff;\n  border-color: #BA7517;\n}\n.sw-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.sw-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.sw-step__label.active {\n  color: #BA7517;\n}\n.sw-step__label.done {\n  color: #3B6D11;\n}\n.sw-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.sw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.sw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.sw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.sw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.sw-field--full {\n  grid-column: 1/-1;\n}\n.sw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.sw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.sw-req {\n  color: #E24B4A;\n}\n.sw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.sw-input:focus {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.sw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-mode-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.sw-mode-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sw-mode-card__head {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 4px;\n}\n.sw-mode-card__head i {\n  font-size: 17px;\n  color: #9ca3af;\n}\n.sw-mode-card__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-mode-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  line-height: 1.3;\n}\n.sw-mode-card:hover {\n  border-color: #9ca3af;\n}\n.sw-mode-card.on {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.sw-mode-card.on .sw-mode-card__head i {\n  color: #854F0B;\n}\n.sw-mode-card.on .sw-mode-card__title {\n  color: #633806;\n}\n.sw-location-block {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-lb-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-lb-row:last-child {\n  border-bottom: none;\n}\n.sw-lb-row i {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-lb-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n}\n.sw-lb-input::placeholder {\n  color: #9ca3af;\n}\n.sw-lb-input[readonly] {\n  color: #4b5563;\n  cursor: default;\n}\n.sw-cal {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-cal__head {\n  display: flex;\n  align-items: center;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-cal__month {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  flex: 1;\n  text-transform: capitalize;\n}\n.sw-cal__nav {\n  display: flex;\n  gap: 4px;\n}\n.sw-cal__nav-btn {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.12s;\n}\n.sw-cal__nav-btn:hover {\n  background: #f3f4f6;\n}\n.sw-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 8px;\n  gap: 2px;\n}\n.sw-cal__dow {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: center;\n  padding: 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sw-cal__day {\n  font-size: 12px;\n  text-align: center;\n  padding: 5px 2px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #4b5563;\n  transition: all 0.12s;\n  position: relative;\n}\n.sw-cal__day:hover:not(.sw-cal__day--empty):not(.sw-cal__day--past) {\n  background: #f3f4f6;\n}\n.sw-cal__day--empty {\n  visibility: hidden;\n  cursor: default;\n  pointer-events: none;\n}\n.sw-cal__day--past {\n  color: #e5e7eb;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.sw-cal__day--today {\n  font-weight: 600;\n  color: #111827;\n}\n.sw-cal__day--has::after {\n  content: "";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #BA7517;\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sw-cal__day--sel {\n  background: #BA7517;\n  color: #fff;\n  font-weight: 600;\n}\n.sw-time-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.sw-time-wrap:focus-within {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-time-wrap i {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-time-wrap input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n  width: 100%;\n}\n.sw-duration-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 12px;\n}\n.sw-duration-badge i {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.sw-duration-badge strong {\n  color: #111827;\n}\n.sw-cap-vis {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 6px;\n}\n.sw-cap-bar {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.sw-cap-fill {\n  height: 100%;\n  border-radius: 6px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.sw-participants-block {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.sw-pb-head {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-pb-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n  flex: 1;\n}\n.sw-pb-count {\n  font-size: 12px;\n  font-weight: 500;\n  color: #633806;\n  background: #FAEEDA;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.sw-pb-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-pb-search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.sw-pb-search input {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  outline: none;\n  color: #111827;\n  font-family: inherit;\n  flex: 1;\n}\n.sw-pb-list {\n  max-height: 160px;\n  overflow-y: auto;\n}\n.sw-pb-list::-webkit-scrollbar {\n  width: 3px;\n}\n.sw-pb-list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.sw-pb-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.sw-pb-item:last-child {\n  border-bottom: none;\n}\n.sw-pb-item:hover,\n.sw-pb-item.sel {\n  background: #FAEEDA;\n}\n.sw-pb-av {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FAEEDA;\n  color: #633806;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.sw-pb-info {\n  flex: 1;\n}\n.sw-pb-name {\n  font-size: 12px;\n  color: #111827;\n}\n.sw-pb-role {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-pb-empty {\n  padding: 14px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.sw-pb-chk {\n  width: 17px;\n  height: 17px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  flex-shrink: 0;\n}\n.sw-pb-chk.on {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.sw-recap {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.sw-recap__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.sw-recap__row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-recap__row:last-child {\n  border-bottom: none;\n}\n.sw-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-rv-mode {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.sw-rv-mode[data-t=presentiel] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sw-rv-mode[data-t=distanciel] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.sw-rv-mode[data-t=hybride] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.sw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.sw-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.sw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.sw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-primary i {\n  font-size: 13px;\n}\n.sw-btn-primary:hover {\n  opacity: 0.9;\n}\n.sw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sw-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-success i {\n  font-size: 13px;\n}\n.sw-btn-success:hover {\n  opacity: 0.9;\n}\n.sw-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ss-act--pp {\n  background: #F0F7FF;\n  color: #185FA5;\n  border-color: #b3d4ff;\n}\n.ss-act--pp:hover {\n  background: #dbeafe;\n}\n.pp-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.15s ease;\n}\n.pp-panel {\n  background: #fff;\n  border-radius: 14px;\n  width: 520px;\n  max-width: 95vw;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  animation: slideUp 0.2s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.pp-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pp-head__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #EBF4FF;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pp-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.pp-head__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111;\n}\n.pp-head__sub {\n  font-size: 12px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pp-head__code {\n  color: #9ca3af;\n}\n.pp-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: #9ca3af;\n}\n.pp-close:hover {\n  color: #374151;\n}\n.pp-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pp-stat {\n  background: #fafbfc;\n  padding: 10px 12px;\n  text-align: center;\n}\n.pp-stat__val {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: #111;\n}\n.pp-stat__val--ok {\n  color: #059669;\n}\n.pp-stat__val--done {\n  color: #185FA5;\n}\n.pp-stat__val--warn {\n  color: #d97706;\n}\n.pp-stat__lbl {\n  font-size: 10px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.pp-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pp-search i {\n  color: #9ca3af;\n  font-size: 15px;\n}\n.pp-search input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #374151;\n  background: transparent;\n}\n.pp-search input::placeholder {\n  color: #c4c8cf;\n}\n.pp-loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: #6b7280;\n  font-size: 13px;\n  justify-content: center;\n}\n.pp-spin {\n  display: inline-block;\n  animation: spin 0.8s linear infinite;\n}\n.pp-list {\n  overflow-y: auto;\n  flex: 1;\n  padding: 8px 0;\n}\n.pp-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  transition: background 0.12s;\n}\n.pp-item:hover {\n  background: #f8fafc;\n}\n.pp-av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 13px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pp-info {\n  flex: 1;\n  min-width: 0;\n}\n.pp-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111;\n}\n.pp-email {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pp-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.pp-badge {\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.pp-badge.pp-done {\n  background: #EBF4FF;\n  color: #185FA5;\n}\n.pp-badge.pp-ok {\n  background: #ECFDF5;\n  color: #059669;\n}\n.pp-badge.pp-wait {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.pp-cert {\n  color: #F59E0B;\n  font-size: 15px;\n}\n.pp-score {\n  font-size: 11px;\n  font-weight: 600;\n  color: #374151;\n  background: #f3f4f6;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.pp-empty {\n  text-align: center;\n  padding: 32px 20px;\n  color: #9ca3af;\n}\n.pp-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n}\n.pp-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.ss-zoom-cell {\n  white-space: nowrap;\n}\n.ss-zoom-na {\n  color: #9ca3af;\n  font-size: 12px;\n}\n.ss-zoom-spin i {\n  display: inline-block;\n  font-size: 14px;\n  color: #2D8CFF;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ss-zoom-create {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #2D8CFF;\n  background: #EBF4FF;\n  border: 1px solid #b3d4ff;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ss-zoom-create:hover {\n  background: #d4eaff;\n}\n.ss-zoom-create i {\n  font-size: 13px;\n}\n.ss-zoom-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  background: #f0f4ff;\n  color: #4b6bfb;\n  border: 1px solid #c7d2fe;\n}\n.ss-zoom-badge i {\n  font-size: 12px;\n}\n.ss-zoom-badge--live {\n  background: #ecfdf5;\n  color: #059669;\n  border-color: #6ee7b7;\n  animation: pulse-live 1.5s ease-in-out infinite;\n}\n@keyframes pulse-live {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.ss-zoom-btns {\n  display: inline-flex;\n  gap: 4px;\n  margin-top: 4px;\n}\n.ss-zoom-pwd {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 3px;\n}\n.ss-zoom-pwd i {\n  font-size: 11px;\n}\n.ss-zoom-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  border: 1px solid;\n  cursor: pointer;\n  font-size: 13px;\n  transition: opacity 0.15s;\n}\n.ss-zoom-btn--join {\n  background: #EBF4FF;\n  color: #2D8CFF;\n  border-color: #b3d4ff;\n}\n.ss-zoom-btn--copy {\n  background: #F0FDF4;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n.ss-zoom-btn--del {\n  background: #FEF2F2;\n  color: #DC2626;\n  border-color: #fecaca;\n}\n.ss-zoom-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ss-zoom-btn:hover:not(:disabled) {\n  opacity: 0.8;\n}\n.sw-zoom-info-block {\n  background: #EBF4FF;\n  border: 1px solid #b3d4ff;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 8px;\n}\n.sw-zoom-info-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #1e3a5f;\n  padding: 3px 0;\n}\n.sw-zoom-info-label {\n  font-weight: 500;\n  white-space: nowrap;\n}\n.sw-zoom-info-link {\n  color: #2D8CFF;\n  text-decoration: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 280px;\n}\n.sw-zoom-info-link:hover {\n  text-decoration: underline;\n}\n.sw-zoom-copy-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #2D8CFF;\n  font-size: 14px;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n.sw-zoom-copy-btn:hover {\n  background: rgba(45, 140, 255, 0.1);\n}\n@media (max-width: 768px) {\n  .ss-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sw-mode-grid {\n    grid-template-columns: 1fr;\n  }\n  .sw-row {\n    grid-template-columns: 1fr;\n  }\n}\n.ss-view-group {\n  display: flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 7px;\n  overflow: hidden;\n}\n.ss-view-toggle {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ss-view-toggle i {\n  font-size: 14px;\n}\n.ss-view-toggle.active {\n  background: #F0F4FF;\n  color: #185FA5;\n}\n.ss-view-toggle:hover:not(.active) {\n  background: #f3f4f6;\n}\n.ss-act--enroll {\n  background: #E6F1FB !important;\n  color: #185FA5 !important;\n  border-color: #B8D4F0 !important;\n}\n.ss-act--enroll:hover {\n  background: #C9E2F8 !important;\n}\n.ss-cal-wrap {\n  padding: 12px 14px;\n}\n.ss-cal {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ss-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #F8FAFC;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ss-cal__nav-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ss-cal__nav-btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #4b5563;\n}\n.ss-cal__nav-btn:hover {\n  background: #f3f4f6;\n}\n.ss-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.ss-cal__head {\n  padding: 8px 4px;\n  text-align: center;\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  border-bottom: 1px solid #e5e7eb;\n  background: #FAFBFC;\n}\n.ss-cal__cell {\n  min-height: 80px;\n  padding: 4px;\n  border-right: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  vertical-align: top;\n}\n.ss-cal__cell:nth-child(7n) {\n  border-right: none;\n}\n.ss-cal__cell--other .ss-cal__day {\n  color: #9ca3af;\n}\n.ss-cal__cell--today .ss-cal__day {\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.ss-cal__day {\n  font-size: 11px;\n  font-weight: 600;\n  color: #111827;\n  display: block;\n  margin-bottom: 3px;\n}\n.ss-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ss-cal__event {\n  font-size: 9px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #185FA5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ss-cal__event--dist {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ss-cal__event--hybr {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ss-cal__legend {\n  display: flex;\n  gap: 14px;\n  padding: 8px 14px;\n  font-size: 11px;\n  color: #4b5563;\n}\n.ss-cal__leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ss-cal__leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n}\n.ss-cal__leg-dot--pres {\n  background: #185FA5;\n}\n.ss-cal__leg-dot--dist {\n  background: #534AB7;\n}\n.ss-cal__leg-dot--hybr {\n  background: #854F0B;\n}\n.ei-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  padding: 16px;\n}\n.ei-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.ei-head {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.ei-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: #E6F1FB;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.ei-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.ei-head__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.ei-head__sub {\n  font-size: 11px;\n  color: #4b5563;\n  margin-top: 2px;\n}\n.ei-head__date,\n.ei-head__places {\n  color: #185FA5;\n  font-weight: 500;\n}\n.ei-close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #9ca3af;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 0;\n}\n.ei-close:hover {\n  color: #111827;\n}\n.ei-fill-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.ei-fill-bar__track {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ei-fill-bar__fill {\n  height: 100%;\n  background: #185FA5;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ei-fill-bar__txt {\n  font-size: 11px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n}\n.ei-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.ei-search i {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.ei-search input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #111827;\n  background: transparent;\n}\n.ei-selected-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  padding: 7px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #F8FAFC;\n  flex-shrink: 0;\n}\n.ei-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #E6F1FB;\n  color: #185FA5;\n  border-radius: 99px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ei-chip i {\n  font-size: 12px;\n  cursor: pointer;\n}\n.ei-chip i:hover {\n  color: #A32D2D;\n}\n.ei-list {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n.ei-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  transition: background 0.1s;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ei-item:hover {\n  background: #F8FAFC;\n}\n.ei-item:last-child {\n  border-bottom: none;\n}\n.ei-item--sel {\n  background: #EEF4FD;\n}\n.ei-av {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #E6F1FB;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.ei-info {\n  flex: 1;\n  min-width: 0;\n}\n.ei-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.ei-role {\n  font-size: 11px;\n  color: #4b5563;\n  margin-top: 1px;\n}\n.ei-chk {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n}\n.ei-chk.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.ei-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  color: #9ca3af;\n  gap: 8px;\n}\n.ei-empty i {\n  font-size: 2rem;\n}\n.ei-empty p {\n  font-size: 12px;\n}\n.ei-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.ei-alert--err {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ei-alert--ok {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ei-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #e5e7eb;\n  flex-shrink: 0;\n  background: #FAFBFC;\n}\n.ei-foot__count {\n  font-size: 11px;\n  color: #4b5563;\n}\n.ei-btn-ghost {\n  padding: 6px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 7px;\n  background: #fff;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ei-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.ei-btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: none;\n  background: #185FA5;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ei-btn-primary i {\n  font-size: 13px;\n}\n.ei-btn-primary:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.ei-btn-primary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=adminrh-session.component.css.map */\n'] }]
  }], () => [{ type: SessionFormationService }, { type: FormationService }, { type: UserService }, { type: ZoomMeetingService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSessionComponent, { className: "AdminrhSessionComponent", filePath: "app/features/adminrh/adminrh-session/adminrh-session.component.ts", lineNumber: 19 });
})();
export {
  AdminrhSessionComponent
};
//# sourceMappingURL=chunk-3D3YCPIH.js.map
