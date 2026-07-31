import {
  AdminRHStatsService
} from "./chunk-O2KGNNZJ.js";
import {
  MAT_INPUT_VALUE_ACCESSOR,
  MatInputModule
} from "./chunk-KPECCTDD.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-AMI7GHHH.js";
import {
  MatTooltip
} from "./chunk-QUWLSFLQ.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-EKG4GCXC.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  ErrorStateMatcher,
  FlexibleConnectedPositionStrategy,
  MAT_FORM_FIELD,
  MatFormFieldControl,
  OverlayConfig,
  OverlayModule,
  PortalModule,
  TemplatePortal,
  _ErrorStateTracker,
  createBlockScrollStrategy,
  createFlexibleConnectedPositionStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-ZO6YLGJ4.js";
import {
  CdkScrollableModule
} from "./chunk-UHG6VJUL.js";
import "./chunk-OKOPG33U.js";
import {
  coerceStringArray
} from "./chunk-5FDCLFRJ.js";
import {
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-5G2VXYOC.js";
import {
  A11yModule,
  BACKSPACE,
  CdkMonitorFocus,
  CdkTrapFocus,
  DOWN_ARROW,
  Directionality,
  END,
  ENTER,
  ESCAPE,
  HOME,
  LEFT_ARROW,
  MatCommonModule,
  PAGE_DOWN,
  PAGE_UP,
  Platform,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  _getFocusedElementPierceShadowDom,
  hasModifierKey
} from "./chunk-EOO6SK2I.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  ControlContainer,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators
} from "./chunk-ZGFJXD53.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  catchError,
  filter,
  forkJoin,
  forwardRef,
  inject,
  merge,
  of,
  setClassMetadata,
  signal,
  startWith,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BSBCM3BI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@angular/material/fesm2022/date-formats.mjs
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var NOT_IMPLEMENTED = "Method not implemented";
var DateAdapter = class {
  /** The locale to use for all dates. */
  locale;
  _localeChanges = new Subject();
  /** A stream that emits when the locale changes. */
  localeChanges = this._localeChanges;
  /**
   * Sets the time of one date to the time of another.
   * @param target Date whose time will be set.
   * @param hours New hours to set on the date object.
   * @param minutes New minutes to set on the date object.
   * @param seconds New seconds to set on the date object.
   */
  setTime(target, hours, minutes, seconds) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the hours component of the given date.
   * @param date The date to extract the hours from.
   */
  getHours(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the minutes component of the given date.
   * @param date The date to extract the minutes from.
   */
  getMinutes(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the seconds component of the given date.
   * @param date The date to extract the seconds from.
   */
  getSeconds(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Parses a date with a specific time from a user-provided value.
   * @param value The value to parse.
   * @param parseFormat The expected format of the value being parsed
   *     (type is implementation-dependent).
   */
  parseTime(value, parseFormat) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Adds an amount of seconds to the specified date.
   * @param date Date to which to add the seconds.
   * @param amount Amount of seconds to add to the date.
   */
  addSeconds(date, amount) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Compares the time values of two dates.
   * @param first First date to compare.
   * @param second Second date to compare.
   * @returns 0 if the times are equal, a number less than 0 if the first time is earlier,
   *     a number greater than 0 if the first time is later.
   */
  compareTime(first, second) {
    return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Checks if the times of two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the times of the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameTime(first, second) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");

// node_modules/@angular/material/fesm2022/datepicker.mjs
var _c0 = ["mat-calendar-body", ""];
function _forTrack0($index, $item) {
  return this._trackRow($item);
}
var _forTrack1 = ($index, $item) => $item.id;
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 0)(1, "td", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0.numCols);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0._firstRowOffset);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 6)(1, "button", 7);
    \u0275\u0275listener("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._cellClicked(item_r3, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_14_r4 = ctx.$index;
    const \u0275$index_7_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("data-mat-row", \u0275$index_7_r5)("data-mat-col", \u0275$index_14_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(\u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, \u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, \u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    \u0275\u0275property("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(\u0275$index_7_r5, \u0275$index_14_r4) ? 0 : -1);
    \u0275\u0275attribute("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue === item_r3.compareValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 1);
    \u0275\u0275conditionalCreate(1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    \u0275\u0275repeaterCreate(2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 5, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const \u0275$index_7_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_7_r5 === 0 && ctx_r0._firstRowOffset ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 2)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.long);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.narrow);
  }
}
var _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {
}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-month-view", 4);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragEnded($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-year-view", 5);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "month"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-multi-year-view", 6);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "year"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {
}
var _c2 = ["button"];
var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
var _c4 = ["[matDatepickerToggleIcon]"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 3);
    \u0275\u0275elementEnd();
  }
}
var _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275domElementEnd();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following to your app config: provideNativeDateAdapter, provideDateFnsAdapter, provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}
var MatDatepickerIntl = class _MatDatepickerIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  changes = new Subject();
  /** A label for the calendar popup (used by screen readers). */
  calendarLabel = "Calendar";
  /** A label for the button used to open the calendar popup (used by screen readers). */
  openCalendarLabel = "Open calendar";
  /** Label for the button used to close the calendar popup. */
  closeCalendarLabel = "Close calendar";
  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = "Previous month";
  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = "Next month";
  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = "Previous year";
  /** A label for the next year button (used by screen readers). */
  nextYearLabel = "Next year";
  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = "Previous 24 years";
  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = "Next 24 years";
  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = "Choose date";
  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel = "Choose month and year";
  /**
   * A label for the first date of a range of dates (used by screen readers).
   * @deprecated Provide your own internationalization string.
   * @breaking-change 17.0.0
   */
  startDateLabel = "Start date";
  /**
   * A label for the last date of a range of dates (used by screen readers).
   * @deprecated Provide your own internationalization string.
   * @breaking-change 17.0.0
   */
  endDateLabel = "End date";
  /**
   * A label for the Comparison date of a range of dates (used by screen readers).
   */
  comparisonDateLabel = "Comparison range";
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
  static \u0275fac = function MatDatepickerIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDatepickerIntl,
    factory: _MatDatepickerIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var uniqueIdCounter$1 = 0;
var MatCalendarCell = class {
  value;
  displayValue;
  ariaLabel;
  enabled;
  cssClasses;
  compareValue;
  rawValue;
  id = uniqueIdCounter$1++;
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var passiveCapturingEventOptions = {
  passive: true,
  capture: true
};
var passiveEventOptions = {
  passive: true
};
var MatCalendarBody = class _MatCalendarBody {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _intl = inject(MatDatepickerIntl);
  _eventCleanups;
  /**
   * Used to skip the next focus event when rendering the preview range.
   * We need a flag like this, because some browsers fire focus events asynchronously.
   */
  _skipNextFocus;
  /**
   * Used to focus the active cell after change detection has run.
   */
  _focusActiveCellAfterViewChecked = false;
  /** The label for the table. (e.g. "Jan 2017"). */
  label;
  /** The cells to display in the table. */
  rows;
  /** The value in the table that corresponds to today. */
  todayValue;
  /** Start value of the selected date range. */
  startValue;
  /** End value of the selected date range. */
  endValue;
  /** The minimum number of free cells needed to fit the label in the first row. */
  labelMinRequiredCells;
  /** The number of columns in the table. */
  numCols = 7;
  /** The cell number of the active cell in the table. */
  activeCell = 0;
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  /** Whether a range is being selected. */
  isRange = false;
  /**
   * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
   * maintained even as the table resizes.
   */
  cellAspectRatio = 1;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** Start of the preview range. */
  previewStart = null;
  /** End of the preview range. */
  previewEnd = null;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Emits when a new value is selected. */
  selectedValueChange = new EventEmitter();
  /** Emits when the preview has changed as a result of a user action. */
  previewChange = new EventEmitter();
  activeDateChange = new EventEmitter();
  /** Emits the date at the possible start of a drag event. */
  dragStarted = new EventEmitter();
  /** Emits the date at the conclusion of a drag, or null if mouse was not released on a date. */
  dragEnded = new EventEmitter();
  /** The number of blank cells to put at the beginning for the first row. */
  _firstRowOffset;
  /** Padding for the individual date cells. */
  _cellPadding;
  /** Width of an individual cell. */
  _cellWidth;
  /** ID for the start date label. */
  _startDateLabelId;
  /** ID for the end date label. */
  _endDateLabelId;
  /** ID for the comparison start date label. */
  _comparisonStartDateLabelId;
  /** ID for the comparison end date label. */
  _comparisonEndDateLabelId;
  _didDragSinceMouseDown = false;
  _injector = inject(Injector);
  comparisonDateAccessibleName = this._intl.comparisonDateLabel;
  /**
   * Tracking function for rows based on their identity. Ideally we would use some sort of
   * key on the row, but that would require a breaking change for the `rows` input. We don't
   * use the built-in identity tracking, because it logs warnings.
   */
  _trackRow = (row) => row;
  constructor() {
    const renderer = inject(Renderer2);
    const idGenerator = inject(_IdGenerator);
    this._startDateLabelId = idGenerator.getId("mat-calendar-body-start-");
    this._endDateLabelId = idGenerator.getId("mat-calendar-body-end-");
    this._comparisonStartDateLabelId = idGenerator.getId("mat-calendar-body-comparison-start-");
    this._comparisonEndDateLabelId = idGenerator.getId("mat-calendar-body-comparison-end-");
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      const cleanups = [
        // `touchmove` is active since we need to call `preventDefault`.
        renderer.listen(element, "touchmove", this._touchmoveHandler, activeCapturingEventOptions),
        renderer.listen(element, "mouseenter", this._enterHandler, passiveCapturingEventOptions),
        renderer.listen(element, "focus", this._enterHandler, passiveCapturingEventOptions),
        renderer.listen(element, "mouseleave", this._leaveHandler, passiveCapturingEventOptions),
        renderer.listen(element, "blur", this._leaveHandler, passiveCapturingEventOptions),
        renderer.listen(element, "mousedown", this._mousedownHandler, passiveEventOptions),
        renderer.listen(element, "touchstart", this._mousedownHandler, passiveEventOptions)
      ];
      if (this._platform.isBrowser) {
        cleanups.push(renderer.listen("window", "mouseup", this._mouseupHandler), renderer.listen("window", "touchend", this._touchendHandler));
      }
      this._eventCleanups = cleanups;
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes["numCols"];
    const {
      rows,
      numCols
    } = this;
    if (changes["rows"] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes["cellAspectRatio"] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  /**
   * Focuses the active cell after the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
   * (issue #24330).
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  _focusActiveCell(movePreview = true) {
    afterNextRender(() => {
      setTimeout(() => {
        const activeCell = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
        if (activeCell) {
          if (!movePreview) {
            this._skipNextFocus = true;
          }
          activeCell.focus();
        }
      });
    }, {
      injector: this._injector
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  /**
   * Gets whether a value is the same as the start and end of the comparison range.
   * For context, the functions that we use to determine whether something is the start/end of
   * a range don't allow for the start and end to be on the same day, because we'd have to use
   * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
   * the regular range, because when it happens, the selected styles take over and still show where
   * the range would've been, however we don't have these selected styles for a comparison range.
   * This function is used to apply a class that serves the same purpose as the one for selected
   * dates, but it only applies in the context of a comparison range.
   */
  _isComparisonIdentical(value) {
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    if (this.comparisonStart !== null && this.comparisonEnd !== null) {
      if (value === this.comparisonStart && value === this.comparisonEnd) {
        return `${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;
      } else if (value === this.comparisonStart) {
        return this._comparisonStartDateLabelId;
      } else if (value === this.comparisonEnd) {
        return this._comparisonEndDateLabelId;
      }
    }
    return null;
  }
  /**
   * Event handler for when the user enters an element
   * inside the calendar body (e.g. by hovering in or focus).
   */
  _enterHandler = (event) => {
    if (this._skipNextFocus && event.type === "focus") {
      this._skipNextFocus = false;
      return;
    }
    if (event.target && this.isRange) {
      const cell = this._getCellFromElement(event.target);
      if (cell) {
        this._ngZone.run(() => this.previewChange.emit({
          value: cell.enabled ? cell : null,
          event
        }));
      }
    }
  };
  _touchmoveHandler = (event) => {
    if (!this.isRange) return;
    const target = getActualTouchTarget(event);
    const cell = target ? this._getCellFromElement(target) : null;
    if (target !== event.target) {
      this._didDragSinceMouseDown = true;
    }
    if (getCellElement(event.target)) {
      event.preventDefault();
    }
    this._ngZone.run(() => this.previewChange.emit({
      value: cell?.enabled ? cell : null,
      event
    }));
  };
  /**
   * Event handler for when the user's pointer leaves an element
   * inside the calendar body (e.g. by hovering out or blurring).
   */
  _leaveHandler = (event) => {
    if (this.previewEnd !== null && this.isRange) {
      if (event.type !== "blur") {
        this._didDragSinceMouseDown = true;
      }
      if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
        this._ngZone.run(() => this.previewChange.emit({
          value: null,
          event
        }));
      }
    }
  };
  /**
   * Triggered on mousedown or touchstart on a date cell.
   * Respsonsible for starting a drag sequence.
   */
  _mousedownHandler = (event) => {
    if (!this.isRange) return;
    this._didDragSinceMouseDown = false;
    const cell = event.target && this._getCellFromElement(event.target);
    if (!cell || !this._isInRange(cell.compareValue)) {
      return;
    }
    this._ngZone.run(() => {
      this.dragStarted.emit({
        value: cell.rawValue,
        event
      });
    });
  };
  /** Triggered on mouseup anywhere. Respsonsible for ending a drag sequence. */
  _mouseupHandler = (event) => {
    if (!this.isRange) return;
    const cellElement = getCellElement(event.target);
    if (!cellElement) {
      this._ngZone.run(() => {
        this.dragEnded.emit({
          value: null,
          event
        });
      });
      return;
    }
    if (cellElement.closest(".mat-calendar-body") !== this._elementRef.nativeElement) {
      return;
    }
    this._ngZone.run(() => {
      const cell = this._getCellFromElement(cellElement);
      this.dragEnded.emit({
        value: cell?.rawValue ?? null,
        event
      });
    });
  };
  /** Triggered on touchend anywhere. Respsonsible for ending a drag sequence. */
  _touchendHandler = (event) => {
    const target = getActualTouchTarget(event);
    if (target) {
      this._mouseupHandler({
        target
      });
    }
  };
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute("data-mat-row");
      const col = cell.getAttribute("data-mat-col");
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
  static \u0275fac = function MatCalendarBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCalendarBody)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCalendarBody,
    selectors: [["", "mat-calendar-body", ""]],
    hostAttrs: [1, "mat-calendar-body"],
    inputs: {
      label: "label",
      rows: "rows",
      todayValue: "todayValue",
      startValue: "startValue",
      endValue: "endValue",
      labelMinRequiredCells: "labelMinRequiredCells",
      numCols: "numCols",
      activeCell: "activeCell",
      isRange: "isRange",
      cellAspectRatio: "cellAspectRatio",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      previewStart: "previewStart",
      previewEnd: "previewEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName"
    },
    outputs: {
      selectedValueChange: "selectedValueChange",
      previewChange: "previewChange",
      activeDateChange: "activeDateChange",
      dragStarted: "dragStarted",
      dragEnded: "dragEnded"
    },
    exportAs: ["matCalendarBody"],
    features: [\u0275\u0275NgOnChangesFeature],
    attrs: _c0,
    decls: 11,
    vars: 11,
    consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
    template: function MatCalendarBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
        \u0275\u0275repeaterCreate(1, MatCalendarBody_For_2_Template, 4, 1, "tr", 1, _forTrack0, true);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 2);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 2);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.rows);
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx._startDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.startDateAccessibleName, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx._endDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.endDateAccessibleName, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx._comparisonStartDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.comparisonDateAccessibleName, " ", ctx.startDateAccessibleName, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx._comparisonEndDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.comparisonDateAccessibleName, " ", ctx.endDateAccessibleName, "\n");
      }
    },
    dependencies: [NgClass],
    styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-calendar-body-disabled{opacity:.5}}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color, transparent)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media(forced-colors: active){.mat-calendar-body-cell-content{border:none}}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary))}@media(forced-colors: active){.mat-datepicker-popup:not(:empty),.mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-selected{background:none}.mat-calendar-body-in-range::before,.mat-calendar-body-comparison-bridge-start::before,.mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarBody, [{
    type: Component,
    args: [{
      selector: "[mat-calendar-body]",
      host: {
        "class": "mat-calendar-body"
      },
      exportAs: "matCalendarBody",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgClass],
      template: `<!--
  If there's not enough space in the first row, create a separate label row. We mark this row as
  aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
@if (_firstRowOffset < labelMinRequiredCells) {
  <tr aria-hidden="true">
    <td class="mat-calendar-body-label"
        [attr.colspan]="numCols"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
      {{label}}
    </td>
  </tr>
}

<!-- Create the first row separately so we can include a special spacer cell. -->
@for (row of rows; track _trackRow(row); let rowIndex = $index) {
  <tr role="row">
    <!--
      This cell is purely decorative, but we can't put \`aria-hidden\` or \`role="presentation"\` on it,
      because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the
      table cells is maintained by setting the top and bottom padding as a percentage of the width
      (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).
    -->
    @if (rowIndex === 0 && _firstRowOffset) {
      <td
        class="mat-calendar-body-label"
        [attr.colspan]="_firstRowOffset"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
        {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}
      </td>
    }
    <!--
      Each gridcell in the calendar contains a button, which signals to assistive technology that the
      cell is interactable, as well as the selection state via \`aria-pressed\`. See #23476 for
      background.
    -->
    @for (item of row; track item.id; let colIndex = $index) {
      <td
        role="gridcell"
        class="mat-calendar-body-cell-container"
        [style.width]="_cellWidth"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding"
        [attr.data-mat-row]="rowIndex"
        [attr.data-mat-col]="colIndex"
      >
        <button
            type="button"
            class="mat-calendar-body-cell"
            [ngClass]="item.cssClasses"
            [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"
            [class.mat-calendar-body-disabled]="!item.enabled"
            [class.mat-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
            [class.mat-calendar-body-range-start]="_isRangeStart(item.compareValue)"
            [class.mat-calendar-body-range-end]="_isRangeEnd(item.compareValue)"
            [class.mat-calendar-body-in-range]="_isInRange(item.compareValue)"
            [class.mat-calendar-body-comparison-bridge-start]="_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-bridge-end]="_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-start]="_isComparisonStart(item.compareValue)"
            [class.mat-calendar-body-comparison-end]="_isComparisonEnd(item.compareValue)"
            [class.mat-calendar-body-in-comparison-range]="_isInComparisonRange(item.compareValue)"
            [class.mat-calendar-body-preview-start]="_isPreviewStart(item.compareValue)"
            [class.mat-calendar-body-preview-end]="_isPreviewEnd(item.compareValue)"
            [class.mat-calendar-body-in-preview]="_isInPreview(item.compareValue)"
            [attr.aria-label]="item.ariaLabel"
            [attr.aria-disabled]="!item.enabled || null"
            [attr.aria-pressed]="_isSelected(item.compareValue)"
            [attr.aria-current]="todayValue === item.compareValue ? 'date' : null"
            [attr.aria-describedby]="_getDescribedby(item.compareValue)"
            (click)="_cellClicked(item, $event)"
            (focus)="_emitActiveDateChange(item, $event)">
            <span class="mat-calendar-body-cell-content mat-focus-indicator"
              [class.mat-calendar-body-selected]="_isSelected(item.compareValue)"
              [class.mat-calendar-body-comparison-identical]="_isComparisonIdentical(item.compareValue)"
              [class.mat-calendar-body-today]="todayValue === item.compareValue">
              {{item.displayValue}}
            </span>
            <span class="mat-calendar-body-cell-preview" aria-hidden="true"></span>
        </button>
      </td>
    }
  </tr>
}

<span [id]="_startDateLabelId" class="mat-calendar-body-hidden-label">
  {{startDateAccessibleName}}
</span>
<span [id]="_endDateLabelId" class="mat-calendar-body-hidden-label">
  {{endDateAccessibleName}}
</span>
<span [id]="_comparisonStartDateLabelId" class="mat-calendar-body-hidden-label">
  {{comparisonDateAccessibleName}} {{startDateAccessibleName}}
</span>
<span [id]="_comparisonEndDateLabelId" class="mat-calendar-body-hidden-label">
  {{comparisonDateAccessibleName}} {{endDateAccessibleName}}
</span>
`,
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-calendar-body-disabled{opacity:.5}}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color, transparent)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media(forced-colors: active){.mat-calendar-body-cell-content{border:none}}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary))}@media(forced-colors: active){.mat-datepicker-popup:not(:empty),.mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-selected{background:none}.mat-calendar-body-in-range::before,.mat-calendar-body-comparison-bridge-start::before,.mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}}\n']
    }]
  }], () => [], {
    label: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    todayValue: [{
      type: Input
    }],
    startValue: [{
      type: Input
    }],
    endValue: [{
      type: Input
    }],
    labelMinRequiredCells: [{
      type: Input
    }],
    numCols: [{
      type: Input
    }],
    activeCell: [{
      type: Input
    }],
    isRange: [{
      type: Input
    }],
    cellAspectRatio: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    previewStart: [{
      type: Input
    }],
    previewEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedValueChange: [{
      type: Output
    }],
    previewChange: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }]
  });
})();
function isTableCell(node) {
  return node?.nodeName === "TD";
}
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute("data-mat-row") != null ? cell : null;
}
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}
var DateRange = class {
  start;
  end;
  /**
   * Ensures that objects with a `start` and `end` property can't be assigned to a variable that
   * expects a `DateRange`
   */
  // tslint:disable-next-line:no-unused-variable
  _disableStructuralEquivalency;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};
var MatDateSelectionModel = class _MatDateSelectionModel {
  selection;
  _adapter;
  _selectionChanged = new Subject();
  /** Emits when the selection has changed. */
  selectionChanged = this._selectionChanged;
  constructor(selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
  static \u0275fac = function MatDateSelectionModel_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDateSelectionModel,
    factory: _MatDateSelectionModel.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: void 0
  }, {
    type: DateAdapter
  }], null);
})();
var MatSingleDateSelectionModel = class _MatSingleDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static \u0275fac = function MatSingleDateSelectionModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSingleDateSelectionModel)(\u0275\u0275inject(DateAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatSingleDateSelectionModel,
    factory: _MatSingleDateSelectionModel.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSingleDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
var MatRangeDateSelectionModel = class _MatRangeDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new DateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    if (start == null && end == null) {
      return true;
    }
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static \u0275fac = function MatRangeDateSelectionModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRangeDateSelectionModel)(\u0275\u0275inject(DateAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatRangeDateSelectionModel,
    factory: _MatRangeDateSelectionModel.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRangeDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};
var MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken("MAT_DATE_RANGE_SELECTION_STRATEGY");
var DefaultMatCalendarRangeStrategy = class _DefaultMatCalendarRangeStrategy {
  _dateAdapter;
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new DateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new DateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new DateRange(start, end);
  }
  static \u0275fac = function DefaultMatCalendarRangeStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultMatCalendarRangeStrategy)(\u0275\u0275inject(DateAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultMatCalendarRangeStrategy,
    factory: _DefaultMatCalendarRangeStrategy.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMatCalendarRangeStrategy, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
var MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new Optional(), new SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
var DAYS_PER_WEEK = 7;
var uniqueIdCounter = 0;
var MatMonthView = class _MatMonthView {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _rangeStrategy = inject(MAT_DATE_RANGE_SELECTION_STRATEGY, {
    optional: true
  });
  _rerenderSubscription = Subscription.EMPTY;
  /** Flag used to filter out space/enter keyup events that originated outside of the view. */
  _selectionKeyPressed;
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  _activeDate;
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** Function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to dates. */
  dateClass;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Origin of active drag, or null when dragging is not active. */
  activeDrag = null;
  /** Emits when a new date is selected. */
  selectedChange = new EventEmitter();
  /** Emits when any date is selected. */
  _userSelection = new EventEmitter();
  /** Emits when the user initiates a date range drag via mouse or touch. */
  dragStarted = new EventEmitter();
  /**
   * Emits when the user completes or cancels a date range drag.
   * Emits null when the drag was canceled or the newly selected date range if completed.
   */
  dragEnded = new EventEmitter();
  /** Emits when any date is activated. */
  activeDateChange = new EventEmitter();
  /** The body of calendar table */
  _matCalendarBody;
  /** The label for this month (e.g. "January 2017"). */
  _monthLabel;
  /** Grid of calendar cells representing the dates of the month. */
  _weeks;
  /** The number of blank cells in the first row before the 1st of the month. */
  _firstWeekOffset;
  /** Start value of the currently-shown date range. */
  _rangeStart;
  /** End value of the currently-shown date range. */
  _rangeEnd;
  /** Start value of the currently-shown comparison date range. */
  _comparisonRangeStart;
  /** End value of the currently-shown comparison date range. */
  _comparisonRangeEnd;
  /** Start of the preview range. */
  _previewStart;
  /** End of the preview range. */
  _previewEnd;
  /** Whether the user is currently selecting a range of dates. */
  _isRange;
  /** The date of the month that today falls on. Null if today is in another month. */
  _todayDate;
  /** The names of the weekdays. */
  _weekdays;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes["comparisonStart"] || changes["comparisonEnd"];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes["activeDrag"] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof DateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          event.preventDefault();
        }
        return;
      case ESCAPE:
        if (this._previewEnd != null && !hasModifierKey(event)) {
          this._clearPreview();
          if (this.activeDrag) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag) return;
    if (event.value) {
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._dateAdapter.getDayOfWeekNames("long");
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i],
        id: uniqueIdCounter++
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, "month") : void 0;
      this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof DateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
  static \u0275fac = function MatMonthView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMonthView)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMonthView,
    selectors: [["mat-month-view"]],
    viewQuery: function MatMonthView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName",
      activeDrag: "activeDrag"
    },
    outputs: {
      selectedChange: "selectedChange",
      _userSelection: "_userSelection",
      dragStarted: "dragStarted",
      dragEnded: "dragEnded",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matMonthView"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 8,
    vars: 14,
    consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]],
    template: function MatMonthView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
        \u0275\u0275repeaterCreate(3, MatMonthView_For_4_Template, 5, 2, "th", 2, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "tr", 3);
        \u0275\u0275element(6, "th", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "tbody", 5);
        \u0275\u0275listener("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
          return ctx._dateSelected($event);
        })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
          return ctx._updateActiveDate($event);
        })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
          return ctx._previewChanged($event);
        })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
          return ctx.dragStarted.emit($event);
        })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
          return ctx._dragEnded($event);
        })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx._weekdays);
        \u0275\u0275advance(4);
        \u0275\u0275property("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMonthView, [{
    type: Component,
    args: [{
      selector: "mat-month-view",
      exportAs: "matMonthView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead class="mat-calendar-table-header">\n    <tr>\n      @for (day of _weekdays; track day.id) {\n        <th scope="col">\n          <span class="cdk-visually-hidden">{{day.long}}</span>\n          <span aria-hidden="true">{{day.narrow}}</span>\n        </th>\n      }\n    </tr>\n    <tr aria-hidden="true"><th class="mat-calendar-table-header-divider" colspan="7"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_monthLabel"\n         [rows]="_weeks"\n         [todayValue]="_todayDate!"\n         [startValue]="_rangeStart!"\n         [endValue]="_rangeEnd!"\n         [comparisonStart]="_comparisonRangeStart"\n         [comparisonEnd]="_comparisonRangeEnd"\n         [previewStart]="_previewStart"\n         [previewEnd]="_previewEnd"\n         [isRange]="_isRange"\n         [labelMinRequiredCells]="3"\n         [activeCell]="_dateAdapter.getDate(activeDate) - 1"\n         [startDateAccessibleName]="startDateAccessibleName"\n         [endDateAccessibleName]="endDateAccessibleName"\n         (selectedValueChange)="_dateSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (previewChange)="_previewChanged($event)"\n         (dragStarted)="dragStarted.emit($event)"\n         (dragEnded)="_dragEnded($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    activeDrag: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var yearsPerPage = 24;
var yearsPerRow = 4;
var MatMultiYearView = class _MatMultiYearView {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _rerenderSubscription = Subscription.EMPTY;
  /** Flag used to filter out space/enter keyup events that originated outside of the view. */
  _selectionKeyPressed;
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  _activeDate;
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** A function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to date cells. */
  dateClass;
  /** Emits when a new year is selected. */
  selectedChange = new EventEmitter();
  /** Emits the selected year. This doesn't imply a change on the selected date */
  yearSelected = new EventEmitter();
  /** Emits when any date is activated. */
  activeDateChange = new EventEmitter();
  /** The body of calendar table */
  _matCalendarBody;
  /** Grid of calendar cells representing the currently displayed years. */
  _years;
  /** The year that today falls on. */
  _todayYear;
  /** The year of the selected date. Null if the selected date is null. */
  _selectedYear;
  constructor() {
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, "multi-year") : void 0;
    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof DateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
  static \u0275fac = function MatMultiYearView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMultiYearView)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMultiYearView,
    selectors: [["mat-multi-year-view"]],
    viewQuery: function MatMultiYearView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass"
    },
    outputs: {
      selectedChange: "selectedChange",
      yearSelected: "yearSelected",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matMultiYearView"],
    decls: 5,
    vars: 7,
    consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
    template: function MatMultiYearView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
        \u0275\u0275element(3, "th", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "tbody", 3);
        \u0275\u0275listener("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
          return ctx._yearSelected($event);
        })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
          return ctx._updateActiveDate($event);
        })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMultiYearView, [{
    type: Component,
    args: [{
      selector: "mat-multi-year-view",
      exportAs: "matMultiYearView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]="_years"\n         [todayValue]="_todayYear"\n         [startValue]="_selectedYear!"\n         [endValue]="_selectedYear!"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_getActiveCell()"\n         (selectedValueChange)="_yearSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
var MatYearView = class _MatYearView {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _rerenderSubscription = Subscription.EMPTY;
  /** Flag used to filter out space/enter keyup events that originated outside of the view. */
  _selectionKeyPressed;
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  _activeDate;
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** A function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to date cells. */
  dateClass;
  /** Emits when a new month is selected. */
  selectedChange = new EventEmitter();
  /** Emits the selected month. This doesn't imply a change on the selected date */
  monthSelected = new EventEmitter();
  /** Emits when any date is activated. */
  activeDateChange = new EventEmitter();
  /** The body of calendar table */
  _matCalendarBody;
  /** Grid of calendar cells representing the months of the year. */
  _months;
  /** The label for this year (e.g. "2017"). */
  _yearLabel;
  /** The month in this year that today falls on. Null if today is in a different year. */
  _todayMonth;
  /**
   * The month in this year that the selected Date falls on.
   * Null if the selected Date is in a different year.
   */
  _selectedMonth;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames("short");
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, "year") : void 0;
    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === void 0 || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof DateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
  static \u0275fac = function MatYearView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatYearView)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatYearView,
    selectors: [["mat-year-view"]],
    viewQuery: function MatYearView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass"
    },
    outputs: {
      selectedChange: "selectedChange",
      monthSelected: "monthSelected",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matYearView"],
    decls: 5,
    vars: 9,
    consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
    template: function MatYearView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
        \u0275\u0275element(3, "th", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "tbody", 3);
        \u0275\u0275listener("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
          return ctx._monthSelected($event);
        })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
          return ctx._updateActiveDate($event);
        })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatYearView, [{
    type: Component,
    args: [{
      selector: "mat-year-view",
      exportAs: "matYearView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_yearLabel"\n         [rows]="_months"\n         [todayValue]="_todayMonth!"\n         [startValue]="_selectedMonth!"\n         [endValue]="_selectedMonth!"\n         [labelMinRequiredCells]="2"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_dateAdapter.getMonth(activeDate)"\n         (selectedValueChange)="_monthSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var MatCalendarHeader = class _MatCalendarHeader {
  _intl = inject(MatDatepickerIntl);
  calendar = inject(MatCalendar);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _periodButtonText;
  _periodButtonDescription;
  _periodButtonLabel;
  _prevButtonLabel;
  _nextButtonLabel;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    const changeDetectorRef = inject(ChangeDetectorRef);
    this._updateLabels();
    this.calendar.stateChanges.subscribe(() => {
      this._updateLabels();
      changeDetectorRef.markForCheck();
    });
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    return this._periodButtonText;
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    return this._periodButtonDescription;
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this._periodButtonLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return this._prevButtonLabel;
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return this._nextButtonLabel;
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month";
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    if (this.previousEnabled()) {
      this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -yearsPerPage);
    }
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    if (this.nextEnabled()) {
      this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : yearsPerPage);
    }
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Updates the labels for the various sections of the header. */
  _updateLabels() {
    const calendar = this.calendar;
    const intl = this._intl;
    const adapter = this._dateAdapter;
    if (calendar.currentView === "month") {
      this._periodButtonText = adapter.format(calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      this._periodButtonDescription = adapter.format(calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      this._periodButtonLabel = intl.switchToMultiYearViewLabel;
      this._prevButtonLabel = intl.prevMonthLabel;
      this._nextButtonLabel = intl.nextMonthLabel;
    } else if (calendar.currentView === "year") {
      this._periodButtonText = adapter.getYearName(calendar.activeDate);
      this._periodButtonDescription = adapter.getYearName(calendar.activeDate);
      this._periodButtonLabel = intl.switchToMonthViewLabel;
      this._prevButtonLabel = intl.prevYearLabel;
      this._nextButtonLabel = intl.nextYearLabel;
    } else {
      this._periodButtonText = intl.formatYearRange(...this._formatMinAndMaxYearLabels());
      this._periodButtonDescription = intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
      this._periodButtonLabel = intl.switchToMonthViewLabel;
      this._prevButtonLabel = intl.prevMultiYearLabel;
      this._nextButtonLabel = intl.nextMultiYearLabel;
    }
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
  _periodButtonLabelId = inject(_IdGenerator).getId("mat-calendar-period-label-");
  static \u0275fac = function MatCalendarHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCalendarHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCalendarHeader,
    selectors: [["mat-calendar-header"]],
    exportAs: ["matCalendarHeader"],
    ngContentSelectors: _c1,
    decls: 17,
    vars: 13,
    consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["aria-live", "polite", 1, "cdk-visually-hidden", 3, "id"], ["matButton", "", "type", "button", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["matIconButton", "", "type", "button", "disabledInteractive", "", 1, "mat-calendar-previous-button", 3, "click", "disabled", "matTooltip"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "disabledInteractive", "", 1, "mat-calendar-next-button", 3, "click", "disabled", "matTooltip"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],
    template: function MatCalendarHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_4_listener() {
          return ctx.currentPeriodClicked();
        });
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 5);
        \u0275\u0275element(8, "polygon", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(9, "div", 7);
        \u0275\u0275projection(10);
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_11_listener() {
          return ctx.previousClicked();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 9);
        \u0275\u0275element(13, "path", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "button", 11);
        \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_14_listener() {
          return ctx.nextClicked();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 9);
        \u0275\u0275element(16, "path", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx._periodButtonLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.periodButtonDescription);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.periodButtonText);
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-calendar-invert", ctx.calendar.currentView !== "month");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.previousEnabled())("matTooltip", ctx.prevButtonLabel);
        \u0275\u0275attribute("aria-label", ctx.prevButtonLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.nextEnabled())("matTooltip", ctx.nextButtonLabel);
        \u0275\u0275attribute("aria-label", ctx.nextButtonLabel);
      }
    },
    dependencies: [MatButton, MatIconButton, MatTooltip],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarHeader, [{
    type: Component,
    args: [{
      selector: "mat-calendar-header",
      exportAs: "matCalendarHeader",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MatIconButton, MatTooltip],
      template: `<div class="mat-calendar-header">
  <div class="mat-calendar-controls">
    <!-- [Firefox Issue: https://bugzilla.mozilla.org/show_bug.cgi?id=1880533]
      Relocated label next to related button and made visually hidden via cdk-visually-hidden
      to enable label to appear in a11y tree for SR when using Firefox -->
    <span [id]="_periodButtonLabelId" class="cdk-visually-hidden" aria-live="polite">{{periodButtonDescription}}</span>
    <button matButton type="button" class="mat-calendar-period-button"
            (click)="currentPeriodClicked()" [attr.aria-label]="periodButtonLabel"
            [attr.aria-describedby]="_periodButtonLabelId">
      <span aria-hidden="true">{{periodButtonText}}</span>
      <svg class="mat-calendar-arrow" [class.mat-calendar-invert]="calendar.currentView !== 'month'"
           viewBox="0 0 10 5" focusable="false" aria-hidden="true">
           <polygon points="0,0 5,5 10,0"/>
      </svg>
    </button>

    <div class="mat-calendar-spacer"></div>

    <ng-content></ng-content>

    <button matIconButton type="button" class="mat-calendar-previous-button"
            [disabled]="!previousEnabled()" (click)="previousClicked()"
            [matTooltip]="prevButtonLabel" [attr.aria-label]="prevButtonLabel" disabledInteractive>
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
       </svg>
    </button>

    <button matIconButton type="button" class="mat-calendar-next-button"
            [disabled]="!nextEnabled()" (click)="nextClicked()"
            [matTooltip]="nextButtonLabel" [attr.aria-label]="nextButtonLabel" disabledInteractive>
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>
  </div>
</div>
`
    }]
  }], () => [], null);
})();
var MatCalendar = class _MatCalendar {
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /** An input indicating the type of the header component, if set. */
  headerComponent;
  /** A portal containing the header component type for this calendar. */
  _calendarHeaderPortal;
  _intlChanges;
  /**
   * Used for scheduling that focus should be moved to the active cell on the next tick.
   * We need to schedule it, rather than do it immediately, because we have to wait
   * for Angular to re-evaluate the view children.
   */
  _moveFocusOnNextTick = false;
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _startAt;
  /** Whether the calendar should be started in month or year view. */
  startView = "month";
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** Function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to dates. */
  dateClass;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Emits when the currently selected date changes. */
  selectedChange = new EventEmitter();
  /**
   * Emits the year chosen in multiyear view.
   * This doesn't imply a change on the selected date.
   */
  yearSelected = new EventEmitter();
  /**
   * Emits the month chosen in year view.
   * This doesn't imply a change on the selected date.
   */
  monthSelected = new EventEmitter();
  /**
   * Emits when the current view changes.
   */
  viewChanged = new EventEmitter(true);
  /** Emits when any date is selected. */
  _userSelection = new EventEmitter();
  /** Emits a new date range value when the user completes a drag drop operation. */
  _userDragDrop = new EventEmitter();
  /** Reference to the current month view component. */
  monthView;
  /** Reference to the current year view component. */
  yearView;
  /** Reference to the current multi-year view component. */
  multiYearView;
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  _clampedActiveDate;
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.stateChanges.next();
      this.viewChanged.emit(viewChangedResult);
    }
  }
  _currentView;
  /** Origin of active drag, or null when dragging is not active. */
  _activeDrag = null;
  /**
   * Emits whenever there is a state change that the header may need to respond to.
   */
  stateChanges = new Subject();
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._intlChanges = inject(MatDatepickerIntl).changes.subscribe(() => {
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || MatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    const minDateChange = changes["minDate"] && !this._dateAdapter.sameDate(changes["minDate"].previousValue, changes["minDate"].currentValue) ? changes["minDate"] : void 0;
    const maxDateChange = changes["maxDate"] && !this._dateAdapter.sameDate(changes["maxDate"].previousValue, changes["maxDate"].currentValue) ? changes["maxDate"] : void 0;
    const changeRequiringRerender = minDateChange || maxDateChange || changes["dateFilter"];
    if (changeRequiringRerender && !changeRequiringRerender.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        if (this._elementRef.nativeElement.contains(_getFocusedElementPierceShadowDom())) {
          this._moveFocusOnNextTick = true;
        }
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    const date = event.value;
    if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag) return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView;
  }
  static \u0275fac = function MatCalendar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCalendar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCalendar,
    selectors: [["mat-calendar"]],
    viewQuery: function MatCalendar_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMonthView, 5);
        \u0275\u0275viewQuery(MatYearView, 5);
        \u0275\u0275viewQuery(MatMultiYearView, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthView = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yearView = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiYearView = _t.first);
      }
    },
    hostAttrs: [1, "mat-calendar"],
    inputs: {
      headerComponent: "headerComponent",
      startAt: "startAt",
      startView: "startView",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName"
    },
    outputs: {
      selectedChange: "selectedChange",
      yearSelected: "yearSelected",
      monthSelected: "monthSelected",
      viewChanged: "viewChanged",
      _userSelection: "_userSelection",
      _userDragDrop: "_userDragDrop"
    },
    exportAs: ["matCalendar"],
    features: [\u0275\u0275ProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), \u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 2,
    consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
    template: function MatCalendar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatCalendar_Case_2_Template, 1, 11, "mat-month-view", 2)(3, MatCalendar_Case_3_Template, 1, 6, "mat-year-view", 3)(4, MatCalendar_Case_4_Template, 1, 6, "mat-multi-year-view", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("cdkPortalOutlet", ctx._calendarHeaderPortal);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_1_0 = ctx.currentView) === "month" ? 2 : tmp_1_0 === "year" ? 3 : tmp_1_0 === "multi-year" ? 4 : -1);
      }
    },
    dependencies: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
    styles: ['.mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));--mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}@media(forced-colors: active){.mat-calendar-arrow{fill:CanvasText}}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color, transparent)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendar, [{
    type: Component,
    args: [{
      selector: "mat-calendar",
      host: {
        "class": "mat-calendar"
      },
      exportAs: "matCalendar",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      imports: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
      template: `<ng-template [cdkPortalOutlet]="_calendarHeaderPortal"></ng-template>

<div class="mat-calendar-content" cdkMonitorSubtreeFocus tabindex="-1">
  @switch (currentView) {
    @case ('month') {
        <mat-month-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            [comparisonStart]="comparisonStart"
            [comparisonEnd]="comparisonEnd"
            [startDateAccessibleName]="startDateAccessibleName"
            [endDateAccessibleName]="endDateAccessibleName"
            (_userSelection)="_dateSelected($event)"
            (dragStarted)="_dragStarted($event)"
            (dragEnded)="_dragEnded($event)"
            [activeDrag]="_activeDrag"></mat-month-view>
    }

    @case ('year') {
        <mat-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (monthSelected)="_monthSelectedInYearView($event)"
            (selectedChange)="_goToDateInView($event, 'month')"></mat-year-view>
    }

    @case ('multi-year') {
        <mat-multi-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (yearSelected)="_yearSelectedInMultiYearView($event)"
            (selectedChange)="_goToDateInView($event, 'year')"></mat-multi-year-view>
    }
  }
</div>
`,
      styles: ['.mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));--mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}@media(forced-colors: active){.mat-calendar-arrow{fill:CanvasText}}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color, transparent)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    headerComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    _userDragDrop: [{
      type: Output
    }],
    monthView: [{
      type: ViewChild,
      args: [MatMonthView]
    }],
    yearView: [{
      type: ViewChild,
      args: [MatYearView]
    }],
    multiYearView: [{
      type: ViewChild,
      args: [MatMultiYearView]
    }]
  });
})();
var MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken("mat-datepicker-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
var MatDatepickerContent = class _MatDatepickerContent {
  _elementRef = inject(ElementRef);
  _animationsDisabled = _animationsDisabled();
  _changeDetectorRef = inject(ChangeDetectorRef);
  _globalModel = inject(MatDateSelectionModel);
  _dateAdapter = inject(DateAdapter);
  _ngZone = inject(NgZone);
  _rangeSelectionStrategy = inject(MAT_DATE_RANGE_SELECTION_STRATEGY, {
    optional: true
  });
  _stateChanges;
  _model;
  _eventCleanups;
  _animationFallback;
  /** Reference to the internal calendar component. */
  _calendar;
  /**
   * Theme color of the internal calendar. This API is supported in M2 themes
   * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/datepicker/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to the datepicker that created the overlay. */
  datepicker;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Whether the datepicker is above or below the input. */
  _isAbove;
  /** Emits when an animation has finished. */
  _animationDone = new Subject();
  /** Whether there is an in-progress animation. */
  _isAnimating = false;
  /** Text for the close button. */
  _closeButtonText;
  /** Whether the close button currently has focus. */
  _closeButtonFocused;
  /** Portal with projected action buttons. */
  _actionsPortal = null;
  /** Id of the label for the `role="dialog"` element. */
  _dialogLabelId;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    this._closeButtonText = inject(MatDatepickerIntl).closeCalendarLabel;
    if (!this._animationsDisabled) {
      const element = this._elementRef.nativeElement;
      const renderer = inject(Renderer2);
      this._eventCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "animationstart", this._handleAnimationEvent), renderer.listen(element, "animationend", this._handleAnimationEvent), renderer.listen(element, "animationcancel", this._handleAnimationEvent)]);
    }
  }
  ngAfterViewInit() {
    this._stateChanges = this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    clearTimeout(this._animationFallback);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._stateChanges?.unsubscribe();
    this._animationDone.complete();
  }
  _handleUserSelection(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof DateRange;
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
      this._model.add(value);
    }
    if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
      this.datepicker.close();
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit");
    if (this._animationsDisabled) {
      this._animationDone.next();
    } else {
      clearTimeout(this._animationFallback);
      this._animationFallback = setTimeout(() => {
        if (!this._isAnimating) {
          this._animationDone.next();
        }
      }, 200);
    }
  }
  _handleAnimationEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target !== element || !event.animationName.startsWith("_mat-datepicker-content")) {
      return;
    }
    clearTimeout(this._animationFallback);
    this._isAnimating = event.type === "animationstart";
    element.classList.toggle("mat-datepicker-content-animating", this._isAnimating);
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  };
  _getSelected() {
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
  static \u0275fac = function MatDatepickerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepickerContent,
    selectors: [["mat-datepicker-content"]],
    viewQuery: function MatDatepickerContent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendar, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._calendar = _t.first);
      }
    },
    hostAttrs: [1, "mat-datepicker-content"],
    hostVars: 6,
    hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-datepicker-content-touch", ctx.datepicker.touchUi)("mat-datepicker-content-animations-enabled", !ctx._animationsDisabled);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matDatepickerContent"],
    decls: 5,
    vars: 26,
    consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "matButton", "elevated", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]],
    template: function MatDatepickerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-calendar", 1);
        \u0275\u0275listener("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
          return ctx.datepicker._selectYear($event);
        })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
          return ctx.datepicker._selectMonth($event);
        })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
          return ctx.datepicker._viewChanged($event);
        })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
          return ctx._handleUserSelection($event);
        })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
          return ctx._handleUserDragDrop($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
          return ctx._closeButtonFocused = true;
        })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
          return ctx._closeButtonFocused = false;
        })("click", function MatDatepickerContent_Template_button_click_3_listener() {
          return ctx.datepicker.close();
        });
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
        \u0275\u0275attribute("aria-modal", true)("aria-labelledby", ctx._dialogLabelId ?? void 0);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.datepicker.panelClass);
        \u0275\u0275property("id", ctx.datepicker.id)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
        \u0275\u0275advance();
        \u0275\u0275property("cdkPortalOutlet", ctx._actionsPortal);
        \u0275\u0275advance();
        \u0275\u0275classProp("cdk-visually-hidden", !ctx._closeButtonFocused);
        \u0275\u0275property("color", ctx.color || "primary");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx._closeButtonText);
      }
    },
    dependencies: [CdkTrapFocus, MatCalendar, CdkPortalOutlet, MatButton],
    styles: ["@keyframes _mat-datepicker-content-dropdown-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-dialog-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-exit{from{opacity:1}to{opacity:0}}.mat-datepicker-content{display:block;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large))}.mat-datepicker-content.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-exit 100ms linear}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerContent, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-content",
      host: {
        "class": "mat-datepicker-content",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-datepicker-content-touch]": "datepicker.touchUi",
        "[class.mat-datepicker-content-animations-enabled]": "!_animationsDisabled"
      },
      exportAs: "matDatepickerContent",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkTrapFocus, MatCalendar, CdkPortalOutlet, MatButton],
      template: `<div
  cdkTrapFocus
  role="dialog"
  [attr.aria-modal]="true"
  [attr.aria-labelledby]="_dialogLabelId ?? undefined"
  class="mat-datepicker-content-container"
  [class.mat-datepicker-content-container-with-custom-header]="datepicker.calendarHeaderComponent"
  [class.mat-datepicker-content-container-with-actions]="_actionsPortal">
  <mat-calendar
    [id]="datepicker.id"
    [class]="datepicker.panelClass"
    [startAt]="datepicker.startAt"
    [startView]="datepicker.startView"
    [minDate]="datepicker._getMinDate()"
    [maxDate]="datepicker._getMaxDate()"
    [dateFilter]="datepicker._getDateFilter()"
    [headerComponent]="datepicker.calendarHeaderComponent"
    [selected]="_getSelected()"
    [dateClass]="datepicker.dateClass"
    [comparisonStart]="comparisonStart"
    [comparisonEnd]="comparisonEnd"
    [startDateAccessibleName]="startDateAccessibleName"
    [endDateAccessibleName]="endDateAccessibleName"
    (yearSelected)="datepicker._selectYear($event)"
    (monthSelected)="datepicker._selectMonth($event)"
    (viewChanged)="datepicker._viewChanged($event)"
    (_userSelection)="_handleUserSelection($event)"
    (_userDragDrop)="_handleUserDragDrop($event)"></mat-calendar>

  <ng-template [cdkPortalOutlet]="_actionsPortal"></ng-template>

  <!-- Invisible close button for screen reader users. -->
  <button
    type="button"
    matButton="elevated"
    [color]="color || 'primary'"
    class="mat-datepicker-close-button"
    [class.cdk-visually-hidden]="!_closeButtonFocused"
    (focus)="_closeButtonFocused = true"
    (blur)="_closeButtonFocused = false"
    (click)="datepicker.close()">{{ _closeButtonText }}</button>
</div>
`,
      styles: ["@keyframes _mat-datepicker-content-dropdown-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-dialog-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-exit{from{opacity:1}to{opacity:0}}.mat-datepicker-content{display:block;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large))}.mat-datepicker-content.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-exit 100ms linear}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"]
    }]
  }], () => [], {
    _calendar: [{
      type: ViewChild,
      args: [MatCalendar]
    }],
    color: [{
      type: Input
    }]
  });
})();
var MatDatepickerBase = class _MatDatepickerBase {
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _model = inject(MatDateSelectionModel);
  _animationsDisabled = _animationsDisabled();
  _scrollStrategy = inject(MAT_DATEPICKER_SCROLL_STRATEGY);
  _inputStateChanges = Subscription.EMPTY;
  _document = inject(DOCUMENT);
  /** An input indicating the type of the custom header component for the calendar, if set. */
  calendarHeaderComponent;
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _startAt;
  /** The view that the calendar should start in. */
  startView = "month";
  /**
   * Theme color of the datepicker's calendar. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/datepicker/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  _color;
  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a dropdown and elements have more padding to allow for bigger touch targets.
   */
  touchUi = false;
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this.stateChanges.next(void 0);
    }
  }
  _disabled;
  /** Preferred position of the datepicker in the X axis. */
  xPosition = "start";
  /** Preferred position of the datepicker in the Y axis. */
  yPosition = "below";
  /**
   * Whether to restore focus to the previously-focused element when the calendar is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  restoreFocus = true;
  /**
   * Emits selected year in multiyear view.
   * This doesn't imply a change on the selected date.
   */
  yearSelected = new EventEmitter();
  /**
   * Emits selected month in year view.
   * This doesn't imply a change on the selected date.
   */
  monthSelected = new EventEmitter();
  /**
   * Emits when the current view changes.
   */
  viewChanged = new EventEmitter(true);
  /** Function that can be used to add custom CSS classes to dates. */
  dateClass;
  /** Emits when the datepicker has been opened. */
  openedStream = new EventEmitter();
  /** Emits when the datepicker has been closed. */
  closedStream = new EventEmitter();
  /** Classes to be passed to the date picker panel. */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  _panelClass;
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }
  _opened = false;
  /** The id for the datepicker calendar. */
  id = inject(_IdGenerator).getId("mat-datepicker-");
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  /** A reference to the overlay into which we've rendered the calendar. */
  _overlayRef;
  /** Reference to the component instance rendered in the overlay. */
  _componentRef;
  /** The element that was focused before the datepicker was opened. */
  _focusedElementBeforeOpen = null;
  /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
  _backdropHarnessClass = `${this.id}-backdrop`;
  /** Currently-registered actions portal. */
  _actionsPortal;
  /** The input element this datepicker is associated with. */
  datepickerInput;
  /** Emits when the datepicker's state changes. */
  stateChanges = new Subject();
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._model.selectionChanged.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const positionChange = changes["xPosition"] || changes["yPosition"];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(void 0);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single input.");
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(void 0));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempted to open an MatDatepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
      instance._startExitAnimation();
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new ComponentPortal(MatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = createOverlayRef(this._injector, new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
      direction: this._dir || "ltr",
      scrollStrategy: isDialog ? createBlockScrollStrategy(this._injector) : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? "dialog" : "popup"}`,
      disableAnimations: this._animationsDisabled
    }));
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === PAGE_UP || keyCode === PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      afterNextRender(() => {
        overlayRef.updatePosition();
      }, {
        injector: this._injector
      });
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    })));
  }
  static \u0275fac = function MatDatepickerBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerBase,
    inputs: {
      calendarHeaderComponent: "calendarHeaderComponent",
      startAt: "startAt",
      startView: "startView",
      color: "color",
      touchUi: [2, "touchUi", "touchUi", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      xPosition: "xPosition",
      yPosition: "yPosition",
      restoreFocus: [2, "restoreFocus", "restoreFocus", booleanAttribute],
      dateClass: "dateClass",
      panelClass: "panelClass",
      opened: [2, "opened", "opened", booleanAttribute]
    },
    outputs: {
      yearSelected: "yearSelected",
      monthSelected: "monthSelected",
      viewChanged: "viewChanged",
      openedStream: "opened",
      closedStream: "closed"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerBase, [{
    type: Directive
  }], () => [], {
    calendarHeaderComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    touchUi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    dateClass: [{
      type: Input
    }],
    openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    panelClass: [{
      type: Input
    }],
    opened: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatDatepicker = class _MatDatepicker extends MatDatepickerBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDatepicker_BaseFactory;
    return function MatDatepicker_Factory(__ngFactoryType__) {
      return (\u0275MatDatepicker_BaseFactory || (\u0275MatDatepicker_BaseFactory = \u0275\u0275getInheritedFactory(_MatDatepicker)))(__ngFactoryType__ || _MatDatepicker);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepicker,
    selectors: [["mat-datepicker"]],
    exportAs: ["matDatepicker"],
    features: [\u0275\u0275ProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
      provide: MatDatepickerBase,
      useExisting: _MatDatepicker
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function MatDatepicker_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepicker, [{
    type: Component,
    args: [{
      selector: "mat-datepicker",
      template: "",
      exportAs: "matDatepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDatepicker
      }]
    }]
  }], null, null);
})();
var MatDatepickerInputEvent = class {
  target;
  targetElement;
  /** The new value for the target datepicker input. */
  value;
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var MatDatepickerInputBase = class _MatDatepickerInputBase {
  _elementRef = inject(ElementRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  /** Whether the component has been initialized. */
  _isInitialized;
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  _model;
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = value;
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
    if (newValue && this._isInitialized && element.blur) {
      element.blur();
    }
  }
  _disabled;
  /** Emits when a `change` event is fired on this `<input>`. */
  dateChange = new EventEmitter();
  /** Emits when an `input` event is fired on this `<input>`. */
  dateInput = new EventEmitter();
  /** Emits when the internal state has changed */
  stateChanges = new Subject();
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _cvaOnChange = () => {
  };
  _valueChangesSubscription = Subscription.EMPTY;
  _localeSubscription = Subscription.EMPTY;
  /**
   * Since the value is kept on the model which is assigned in an Input,
   * we might get a value before we have a model. This property keeps track
   * of the value until we have somewhere to assign it.
   */
  _pendingValue;
  /** The form control validator for whether the input parses. */
  _parseValidator = () => {
    return this._lastValueValid ? null : {
      "matDatepickerParse": {
        "text": this._elementRef.nativeElement.value
      }
    };
  };
  /** The form control validator for the date filter. */
  _filterValidator = (control) => {
    const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    return !controlValue || this._matchesFilter(controlValue) ? null : {
      "matDatepickerFilter": true
    };
  };
  /** The form control validator for the min date. */
  _minValidator = (control) => {
    const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const min = this._getMinDate();
    return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
      "matDatepickerMin": {
        "min": min,
        "actual": controlValue
      }
    };
  };
  /** The form control validator for the max date. */
  _maxValidator = (control) => {
    const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const max = this._getMaxDate();
    return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
      "matDatepickerMax": {
        "max": max,
        "actual": controlValue
      }
    };
  };
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe((event) => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  /** Whether the last value set on the input was valid. */
  _lastValueValid = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._localeSubscription = this._dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    const isAltDownArrow = hasModifierKey(event, "altKey") && event.keyCode === DOWN_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(event) {
    const value = event.target.value;
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const hasChanged = !this._dateAdapter.sameDate(date, this.value);
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : "";
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter2 = this._getDateFilter();
    return !filter2 || filter2(value);
  }
  static \u0275fac = function MatDatepickerInputBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerInputBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerInputBase,
    inputs: {
      value: "value",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInputBase, [{
    type: Directive
  }], () => [], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateChange: [{
      type: Output
    }],
    dateInput: [{
      type: Output
    }]
  });
})();
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}
var MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MAT_DATEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MatDatepickerInput = class _MatDatepickerInput extends MatDatepickerInputBase {
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _closedSubscription = Subscription.EMPTY;
  _openedSubscription = Subscription.EMPTY;
  /** The datepicker that this input is associated with. */
  set matDatepicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._ariaOwns.set(datepicker.opened ? datepicker.id : null);
      this._closedSubscription = datepicker.closedStream.subscribe(() => {
        this._onTouched();
        this._ariaOwns.set(null);
      });
      this._openedSubscription = datepicker.openedStream.subscribe(() => {
        this._ariaOwns.set(datepicker.id);
      });
      this._registerModel(datepicker.registerInput(this));
    }
  }
  _datepicker;
  /** The id of the panel owned by this input. */
  _ariaOwns = signal(null, ...ngDevMode ? [{
    debugName: "_ariaOwns"
  }] : []);
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  _min;
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  _max;
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  _dateFilter;
  /** The combined form control validator for this input. */
  _validator;
  constructor() {
    super();
    this._validator = Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
    this._openedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
  static \u0275fac = function MatDatepickerInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerInput,
    selectors: [["input", "matDatepicker", ""]],
    hostAttrs: [1, "mat-datepicker-input"],
    hostVars: 6,
    hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function MatDatepickerInput_input_HostBindingHandler($event) {
          return ctx._onInput($event);
        })("change", function MatDatepickerInput_change_HostBindingHandler() {
          return ctx._onChange();
        })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", ctx._ariaOwns())("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
      }
    },
    inputs: {
      matDatepicker: "matDatepicker",
      min: "min",
      max: "max",
      dateFilter: [0, "matDatepickerFilter", "dateFilter"]
    },
    exportAs: ["matDatepickerInput"],
    features: [\u0275\u0275ProvidersFeature([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
      provide: MAT_INPUT_VALUE_ACCESSOR,
      useExisting: _MatDatepickerInput
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[matDatepicker]",
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MatDatepickerInput
      }],
      host: {
        "class": "mat-datepicker-input",
        "[attr.aria-haspopup]": '_datepicker ? "dialog" : null',
        "[attr.aria-owns]": "_ariaOwns()",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "_datepicker ? _datepicker.id : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "matDatepickerInput"
    }]
  }], () => [], {
    matDatepicker: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    dateFilter: [{
      type: Input,
      args: ["matDatepickerFilter"]
    }]
  });
})();
var MatDatepickerToggleIcon = class _MatDatepickerToggleIcon {
  static \u0275fac = function MatDatepickerToggleIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerToggleIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerToggleIcon,
    selectors: [["", "matDatepickerToggleIcon", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerToggleIcon]"
    }]
  }], null, null);
})();
var MatDatepickerToggle = class _MatDatepickerToggle {
  _intl = inject(MatDatepickerIntl);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _stateChanges = Subscription.EMPTY;
  /** Datepicker instance that the button will toggle. */
  datepicker;
  /** Tabindex for the toggle. */
  tabIndex;
  /** Screen-reader label for the button. */
  ariaLabel;
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === void 0 && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled;
  /** Whether ripples on the toggle should be disabled. */
  disableRipple;
  /** Custom icon set by the consumer. */
  _customIcon;
  /** Underlying button element. */
  _button;
  constructor() {
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes["datepicker"]) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : of();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : of();
    const datepickerToggled = this.datepicker ? merge(this.datepicker.openedStream, this.datepicker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  static \u0275fac = function MatDatepickerToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepickerToggle,
    selectors: [["mat-datepicker-toggle"]],
    contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDatepickerToggleIcon, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
      }
    },
    viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button = _t.first);
      }
    },
    hostAttrs: [1, "mat-datepicker-toggle"],
    hostVars: 8,
    hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
          return ctx._open($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
        \u0275\u0275classProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
      }
    },
    inputs: {
      datepicker: [0, "for", "datepicker"],
      tabIndex: "tabIndex",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: "disableRipple"
    },
    exportAs: ["matDatepickerToggle"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 7,
    consts: [["button", ""], ["matIconButton", "", "type", "button", 3, "tabIndex", "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
    template: function MatDatepickerToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275conditionalCreate(2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("tabIndex", ctx.disabled ? -1 : ctx.tabIndex)("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        \u0275\u0275attribute("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("aria-expanded", ctx.datepicker ? ctx.datepicker.opened : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._customIcon ? 2 : -1);
      }
    },
    dependencies: [MatIconButton],
    styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant))}.mat-datepicker-toggle button{color:inherit}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-datepicker-toggle-default-icon{color:CanvasText}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggle, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-toggle",
      host: {
        "class": "mat-datepicker-toggle",
        "[attr.tabindex]": "null",
        "[class.mat-datepicker-toggle-active]": "datepicker && datepicker.opened",
        "[class.mat-accent]": 'datepicker && datepicker.color === "accent"',
        "[class.mat-warn]": 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        "[attr.data-mat-calendar]": "datepicker ? datepicker.id : null",
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        "(click)": "_open($event)"
      },
      exportAs: "matDatepickerToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatIconButton],
      template: `<button
  #button
  matIconButton
  type="button"
  [attr.aria-haspopup]="datepicker ? 'dialog' : null"
  [attr.aria-label]="ariaLabel || _intl.openCalendarLabel"
  [tabIndex]="disabled ? -1 : tabIndex"
  [attr.aria-expanded]="datepicker ? datepicker.opened : null"
  [disabled]="disabled"
  [disableRipple]="disableRipple">

  @if (!_customIcon) {
    <svg
      class="mat-datepicker-toggle-default-icon"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="currentColor"
      focusable="false"
      aria-hidden="true">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  }

  <ng-content select="[matDatepickerToggleIcon]"></ng-content>
</button>
`,
      styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant))}.mat-datepicker-toggle button{color:inherit}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-datepicker-toggle-default-icon{color:CanvasText}}\n"]
    }]
  }], () => [], {
    datepicker: [{
      type: Input,
      args: ["for"]
    }],
    tabIndex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input
    }],
    _customIcon: [{
      type: ContentChild,
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: ViewChild,
      args: ["button"]
    }]
  });
})();
var MatDateRangeInput = class _MatDateRangeInput {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _closedSubscription = Subscription.EMPTY;
  _openedSubscription = Subscription.EMPTY;
  _startInput;
  _endInput;
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Unique ID for the group. */
  id = inject(_IdGenerator).getId("mat-date-range-input-");
  /** Whether the control is focused. */
  focused = false;
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /** Name of the form control. */
  controlType = "mat-date-range-input";
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || "";
    const end = this._endInput?._getPlaceholder() || "";
    return start || end ? `${start} ${this.separator} ${end}` : "";
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._openedSubscription.unsubscribe();
      this._ariaOwns.set(this.rangePicker.opened ? rangePicker.id : null);
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
        this._ariaOwns.set(null);
      });
      this._openedSubscription = rangePicker.openedStream.subscribe(() => {
        this._ariaOwns.set(rangePicker.id);
      });
      this._registerModel(this._model);
    }
  }
  _rangePicker;
  /** The id of the panel owned by this input. */
  _ariaOwns = signal(null, ...ngDevMode ? [{
    debugName: "_ariaOwns"
  }] : []);
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = value;
  }
  _required;
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  _dateFilter;
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  _min;
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  _max;
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    if (value !== this._groupDisabled) {
      this._groupDisabled = value;
      this.stateChanges.next(void 0);
    }
  }
  _groupDisabled = false;
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  /** Value for the `aria-describedby` attribute of the inputs. */
  _ariaDescribedBy = null;
  /** Date selection model currently registered with the input. */
  _model;
  /** Separator text to be shown between the inputs. */
  separator = "\u2013";
  /** Start of the comparison range that should be shown in the calendar. */
  comparisonStart = null;
  /** End of the comparison range that should be shown in the calendar. */
  comparisonEnd = null;
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * TODO(crisbeto): change type to `AbstractControlDirective` after #18206 lands.
   * @docs-private
   */
  ngControl;
  /** Emits when the input's state has changed. */
  stateChanges = new Subject();
  /**
   * Disable the automatic labeling to avoid issues like #27241.
   * @docs-private
   */
  disableAutomaticLabeling = true;
  constructor() {
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    if (this._formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")) {
      this._elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input");
    }
    this.ngControl = inject(ControlContainer, {
      optional: true,
      self: true
    });
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(" ") : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._startInput) {
        throw Error("mat-date-range-input must contain a matStartDate input");
      }
      if (!this._endInput) {
        throw Error("mat-date-range-input must contain a matEndDate input");
      }
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    merge(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(void 0);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this._openedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === "start" ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : "";
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(void 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(Validators.required);
  }
  static \u0275fac = function MatDateRangeInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDateRangeInput)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDateRangeInput,
    selectors: [["mat-date-range-input"]],
    hostAttrs: ["role", "group", 1, "mat-date-range-input"],
    hostVars: 8,
    hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
        \u0275\u0275classProp("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
      }
    },
    inputs: {
      rangePicker: "rangePicker",
      required: [2, "required", "required", booleanAttribute],
      dateFilter: "dateFilter",
      min: "min",
      max: "max",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      separator: "separator",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd"
    },
    exportAs: ["matDateRangeInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatDateRangeInput
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c6,
    decls: 11,
    vars: 5,
    consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
    template: function MatDateRangeInput_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c5);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
          return ctx._updateFocus($event);
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275projection(8, 1);
        \u0275\u0275elementStart(9, "span", 2);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._getInputMirrorValue("start"));
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.separator);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._getInputMirrorValue("end"));
      }
    },
    dependencies: [CdkMonitorFocus],
    styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface))}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInput, [{
    type: Component,
    args: [{
      selector: "mat-date-range-input",
      exportAs: "matDateRangeInput",
      host: {
        "class": "mat-date-range-input",
        "[class.mat-date-range-input-hide-placeholders]": "_shouldHidePlaceholders()",
        "[class.mat-date-range-input-required]": "required",
        "[attr.id]": "id",
        "role": "group",
        "[attr.aria-labelledby]": "_getAriaLabelledby()",
        "[attr.aria-describedby]": "_ariaDescribedBy",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "rangePicker ? rangePicker.id : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatDateRangeInput
      }],
      imports: [CdkMonitorFocus],
      template: `<div
  class="mat-date-range-input-container"
  cdkMonitorSubtreeFocus
  (cdkFocusChange)="_updateFocus($event)">
  <div class="mat-date-range-input-wrapper">
    <ng-content select="input[matStartDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('start')}}</span>
  </div>

  <span
    class="mat-date-range-input-separator"
    [class.mat-date-range-input-separator-hidden]="_shouldHideSeparator()">{{separator}}</span>

  <div class="mat-date-range-input-wrapper mat-date-range-input-end-wrapper">
    <ng-content select="input[matEndDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('end')}}</span>
  </div>
</div>

`,
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface))}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}\n"]
    }]
  }], () => [], {
    rangePicker: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateFilter: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    separator: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }]
  });
})();
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === "INPUT";
}
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === "TEXTAREA";
}
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.("aria-labelledby")?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map((idRef) => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(" ");
    }
  }
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute("aria-label")?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map((x) => _computeAriaAccessibleNameInternal(x, false)).join(" ");
    }
    const placeholder = currentNode.getAttribute("placeholder")?.trim();
    if (placeholder) {
      return placeholder;
    }
    const title = currentNode.getAttribute("title")?.trim();
    if (title) {
      return title;
    }
  }
  return (currentNode.textContent || "").replace(/\s+/g, " ").trim();
}
var MatDateRangeInputPartBase = class _MatDateRangeInputPartBase extends MatDatepickerInputBase {
  _rangeInput = inject(MatDateRangeInput);
  _elementRef = inject(ElementRef);
  _defaultErrorStateMatcher = inject(ErrorStateMatcher);
  _injector = inject(Injector);
  _rawValue = signal("", ...ngDevMode ? [{
    debugName: "_rawValue"
  }] : []);
  _parentForm = inject(NgForm, {
    optional: true
  });
  _parentFormGroup = inject(FormGroupDirective, {
    optional: true
  });
  /**
   * Form control bound to this input part.
   * @docs-private
   */
  ngControl;
  _dir = inject(Directionality, {
    optional: true
  });
  _errorStateTracker;
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor() {
    super();
    this._errorStateTracker = new _ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
  }
  ngOnInit() {
    const ngControl = this._injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
      this._errorStateTracker.ngControl = ngControl;
    }
  }
  ngAfterContentInit() {
    this._register();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
    this._rawValue.set(this._elementRef.nativeElement.value);
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._rawValue().length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const value = this._rawValue();
    return value.length > 0 ? value : this._getPlaceholder();
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Handles `input` events on the input element. */
  _onInput(event) {
    super._onInput(event);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
    this._rawValue.set(this._elementRef.nativeElement.value);
  }
  _formatValue(value) {
    super._formatValue(value);
    this._rangeInput._handleChildValueChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
  static \u0275fac = function MatDateRangeInputPartBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDateRangeInputPartBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDateRangeInputPartBase,
    inputs: {
      errorStateMatcher: "errorStateMatcher"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInputPartBase, [{
    type: Directive
  }], () => [], {
    errorStateMatcher: [{
      type: Input
    }]
  });
})();
var MatStartDate = class _MatStartDate extends MatDateRangeInputPartBase {
  /** Validator that checks that the start date isn't after the end date. */
  _startValidator = (control) => {
    const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const end = this._model ? this._model.selection.end : null;
    return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
      "matStartDateInvalid": {
        "end": end,
        "actual": start
      }
    };
  };
  _validator = Validators.compose([...super._getValidators(), this._startValidator]);
  _register() {
    this._rangeInput._startInput = this;
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range2 = new DateRange(value, this._model.selection.end);
      this._model.updateSelection(range2, this);
      this._rangeInput._handleChildValueChange();
    }
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if ((event.keyCode === RIGHT_ARROW && isLtr || event.keyCode === LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStartDate_BaseFactory;
    return function MatStartDate_Factory(__ngFactoryType__) {
      return (\u0275MatStartDate_BaseFactory || (\u0275MatStartDate_BaseFactory = \u0275\u0275getInheritedFactory(_MatStartDate)))(__ngFactoryType__ || _MatStartDate);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStartDate,
    selectors: [["input", "matStartDate", ""]],
    hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
    hostVars: 5,
    hostBindings: function MatStartDate_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function MatStartDate_input_HostBindingHandler($event) {
          return ctx._onInput($event);
        })("change", function MatStartDate_change_HostBindingHandler() {
          return ctx._onChange();
        })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        })("blur", function MatStartDate_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns() || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
      }
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _MatStartDate,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatStartDate,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStartDate, [{
    type: Directive,
    args: [{
      selector: "input[matStartDate]",
      host: {
        "class": "mat-start-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "_rangeInput._ariaOwns() || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()!) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()!) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"]
    }]
  }], null, null);
})();
var MatEndDate = class _MatEndDate extends MatDateRangeInputPartBase {
  /** Validator that checks that the end date isn't before the start date. */
  _endValidator = (control) => {
    const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const start = this._model ? this._model.selection.start : null;
    return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
      "matEndDateInvalid": {
        "start": start,
        "actual": end
      }
    };
  };
  _register() {
    this._rangeInput._endInput = this;
  }
  _validator = Validators.compose([...super._getValidators(), this._endValidator]);
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range2 = new DateRange(this._model.selection.start, value);
      this._model.updateSelection(range2, this);
    }
  }
  _moveCaretToEndOfStartInput() {
    const startInput = this._rangeInput._startInput._elementRef.nativeElement;
    const value = startInput.value;
    if (value.length > 0) {
      startInput.setSelectionRange(value.length, value.length);
    }
    startInput.focus();
  }
  _onKeydown(event) {
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if (event.keyCode === BACKSPACE && !element.value) {
      this._moveCaretToEndOfStartInput();
    } else if ((event.keyCode === LEFT_ARROW && isLtr || event.keyCode === RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      this._moveCaretToEndOfStartInput();
    } else {
      super._onKeydown(event);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatEndDate_BaseFactory;
    return function MatEndDate_Factory(__ngFactoryType__) {
      return (\u0275MatEndDate_BaseFactory || (\u0275MatEndDate_BaseFactory = \u0275\u0275getInheritedFactory(_MatEndDate)))(__ngFactoryType__ || _MatEndDate);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatEndDate,
    selectors: [["input", "matEndDate", ""]],
    hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
    hostVars: 5,
    hostBindings: function MatEndDate_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function MatEndDate_input_HostBindingHandler($event) {
          return ctx._onInput($event);
        })("change", function MatEndDate_change_HostBindingHandler() {
          return ctx._onChange();
        })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        })("blur", function MatEndDate_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns() || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
      }
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _MatEndDate,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatEndDate,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatEndDate, [{
    type: Directive,
    args: [{
      selector: "input[matEndDate]",
      host: {
        "class": "mat-end-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "_rangeInput._ariaOwns() || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()!) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()!) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"]
    }]
  }], null, null);
})();
var MatDateRangePicker = class _MatDateRangePicker extends MatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDateRangePicker_BaseFactory;
    return function MatDateRangePicker_Factory(__ngFactoryType__) {
      return (\u0275MatDateRangePicker_BaseFactory || (\u0275MatDateRangePicker_BaseFactory = \u0275\u0275getInheritedFactory(_MatDateRangePicker)))(__ngFactoryType__ || _MatDateRangePicker);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDateRangePicker,
    selectors: [["mat-date-range-picker"]],
    exportAs: ["matDateRangePicker"],
    features: [\u0275\u0275ProvidersFeature([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
      provide: MatDatepickerBase,
      useExisting: _MatDateRangePicker
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function MatDateRangePicker_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangePicker, [{
    type: Component,
    args: [{
      selector: "mat-date-range-picker",
      template: "",
      exportAs: "matDateRangePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDateRangePicker
      }]
    }]
  }], null, null);
})();
var MatDatepickerApply = class _MatDatepickerApply {
  _datepicker = inject(MatDatepickerBase);
  constructor() {
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
  static \u0275fac = function MatDatepickerApply_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerApply)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerApply,
    selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
    hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDatepickerApply_click_HostBindingHandler() {
          return ctx._applySelection();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerApply, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerApply], [matDateRangePickerApply]",
      host: {
        "(click)": "_applySelection()"
      }
    }]
  }], () => [], null);
})();
var MatDatepickerCancel = class _MatDatepickerCancel {
  _datepicker = inject(MatDatepickerBase);
  constructor() {
  }
  static \u0275fac = function MatDatepickerCancel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerCancel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerCancel,
    selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
    hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDatepickerCancel_click_HostBindingHandler() {
          return ctx._datepicker.close();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerCancel], [matDateRangePickerCancel]",
      host: {
        "(click)": "_datepicker.close()"
      }
    }]
  }], () => [], null);
})();
var MatDatepickerActions = class _MatDatepickerActions {
  _datepicker = inject(MatDatepickerBase);
  _viewContainerRef = inject(ViewContainerRef);
  _template;
  _portal;
  constructor() {
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
  static \u0275fac = function MatDatepickerActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerActions)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepickerActions,
    selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
    viewQuery: function MatDatepickerActions_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._template = _t.first);
      }
    },
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    consts: [[1, "mat-datepicker-actions"]],
    template: function MatDatepickerActions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
      }
    },
    styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerActions, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-actions, mat-date-range-picker-actions",
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    _template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var MatDatepickerModule = class _MatDatepickerModule {
  static \u0275fac = function MatDatepickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDatepickerModule,
    imports: [MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
    exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/core.mjs
var VERSION = new Version("20.2.1");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 14.0.0
   */
  useUtcForDisplay = false;
  /** The injected locale. */
  _matDateLocale = inject(MAT_DATE_LOCALE, {
    optional: true
  });
  constructor() {
    super();
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  setTime(target, hours, minutes, seconds) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!inRange(hours, 0, 23)) {
        throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
      }
      if (!inRange(minutes, 0, 59)) {
        throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
      }
      if (!inRange(seconds, 0, 59)) {
        throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
      }
    }
    const clone = this.clone(target);
    clone.setHours(hours, minutes, seconds, 0);
    return clone;
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  parseTime(userValue, parseFormat) {
    if (typeof userValue !== "string") {
      return userValue instanceof Date ? new Date(userValue.getTime()) : null;
    }
    const value = userValue.trim();
    if (value.length === 0) {
      return null;
    }
    let result = this._parseTimeString(value);
    if (result === null) {
      const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
      if (withoutExtras.length > 0) {
        result = this._parseTimeString(withoutExtras);
      }
    }
    return result || this.invalid();
  }
  addSeconds(date, amount) {
    return new Date(date.getTime() + amount * 1e3);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  /**
   * Attempts to parse a time string into a date object. Returns null if it cannot be parsed.
   * @param value Time string to parse.
   */
  _parseTimeString(value) {
    const parsed = value.toUpperCase().match(TIME_REGEX);
    if (parsed) {
      let hours = parseInt(parsed[1]);
      const minutes = parseInt(parsed[2]);
      let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
      const amPm = parsed[4];
      if (hours === 12) {
        hours = amPm === "AM" ? 0 : hours;
      } else if (amPm === "PM") {
        hours += 12;
      }
      if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
        return this.setTime(this.today(), hours, minutes, seconds || 0);
      }
    }
    return null;
  }
  static \u0275fac = function NativeDateAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateAdapter)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NativeDateAdapter,
    factory: _NativeDateAdapter.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [], null);
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    timeInput: {
      hour: "numeric",
      minute: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    },
    timeOptionLabel: {
      hour: "numeric",
      minute: "numeric"
    }
  }
};
var NativeDateModule = class _NativeDateModule {
  static \u0275fac = function NativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NativeDateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: DateAdapter,
      useClass: NativeDateAdapter
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
  static \u0275fac = function MatNativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNativeDateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatNativeDateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [provideNativeDateAdapter()]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

// src/app/shared/service/stat/superadmin-dashboard.service.ts
var SuperAdminDashboardService = class _SuperAdminDashboardService {
  http;
  base = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ Authorization: `Bearer ${token}`, "Content-Type": "application/json" });
  }
  getStats() {
    return this.http.get(`${this.base}/superadmin/dashboard/stats`, { headers: this.headers() });
  }
  static \u0275fac = function SuperAdminDashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminDashboardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperAdminDashboardService, factory: _SuperAdminDashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminDashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.ts
var _c02 = (a0) => [a0];
var _c12 = (a0, a1, a2) => ({ "bg-success text-white": a0, "bg-warning text-dark": a1, "bg-danger text-white": a2 });
var _c22 = (a0, a1) => [a0, a1];
var _c32 = (a0, a1, a2, a3) => ({ "bg-success text-white": a0, "bg-warning text-dark": a1, "bg-info text-white": a2, "bg-secondary text-white": a3 });
var _c42 = (a0, a1, a2, a3) => ({ "fa-check-circle": a0, "fa-edit": a1, "fa-play-circle": a2, "fa-archive": a3 });
var _c52 = (a0, a1) => ({ "text-success": a0, "text-danger": a1 });
var _c62 = (a0, a1) => ({ "text-success": a0, "text-warning": a1 });
var _c7 = (a0, a1) => ({ "bg-success": a0, "bg-warning": a1 });
var _c8 = (a0, a1) => ({ "text-danger": a0, "text-success": a1 });
var _c9 = (a0, a1, a2) => ({ "text-danger": a0, "text-warning": a1, "text-success": a2 });
var _c10 = () => ["/superadmin/audit-logs"];
function SuperAdminDashboardComponent_div_23_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 122);
  }
}
function SuperAdminDashboardComponent_div_23_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 123);
  }
}
function SuperAdminDashboardComponent_div_23_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 124);
  }
}
function SuperAdminDashboardComponent_div_23_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 125);
  }
}
function SuperAdminDashboardComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_23_h4_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 128);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", stat_r3.label + ": " + stat_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, stat_r3.value), " ");
  }
}
function SuperAdminDashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 107)(2, "div", 108)(3, "div", 109)(4, "div", 110)(5, "span", 111);
    \u0275\u0275template(6, SuperAdminDashboardComponent_div_23_img_6_Template, 1, 0, "img", 112)(7, SuperAdminDashboardComponent_div_23_img_7_Template, 1, 0, "img", 113)(8, SuperAdminDashboardComponent_div_23_img_8_Template, 1, 0, "img", 114)(9, SuperAdminDashboardComponent_div_23_img_9_Template, 1, 0, "img", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19)(11, "p", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SuperAdminDashboardComponent_div_23_div_13_Template, 2, 0, "div", 57)(14, SuperAdminDashboardComponent_div_23_h4_14_Template, 3, 4, "h4", 116);
    \u0275\u0275elementStart(15, "small", 117);
    \u0275\u0275element(16, "i", 118);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 119)(19, "div", 120);
    \u0275\u0275element(20, "div", 121);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("stat-card-" + stat_r3.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "bg-" + stat_r3.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r3.type === "companies");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r3.type === "clients");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r3.type === "formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r3.type === "users");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", stat_r3.growth, "% ce mois ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("bg-" + stat_r3.color);
    \u0275\u0275styleProp("width", stat_r3.progress, "%");
    \u0275\u0275attribute("aria-valuenow", stat_r3.progress);
  }
}
function SuperAdminDashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "span", 130);
    \u0275\u0275elementStart(2, "small", 131);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const serie_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", serie_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serie_r5.name);
  }
}
function SuperAdminDashboardComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275element(1, "apx-chart", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.Statisticschart.series)("chart", ctx_r3.Statisticschart.chart)("xaxis", ctx_r3.Statisticschart.xaxis)("yaxis", ctx_r3.Statisticschart.yaxis)("stroke", ctx_r3.Statisticschart.stroke)("tooltip", ctx_r3.Statisticschart.tooltip)("dataLabels", ctx_r3.Statisticschart.dataLabels)("fill", ctx_r3.Statisticschart.fill)("plotOptions", ctx_r3.Statisticschart.plotOptions)("grid", ctx_r3.Statisticschart.grid)("colors", ctx_r3.Statisticschart.colors);
  }
}
function SuperAdminDashboardComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 136);
    \u0275\u0275text(3, "Chargement du graphique...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 137);
    \u0275\u0275text(5, "Chargement des statistiques...");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminDashboardComponent_div_54_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "div", 109);
    \u0275\u0275element(3, "img", 146);
    \u0275\u0275elementStart(4, "div")(5, "h6", 147);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 148);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 149)(10, "span", 150);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 149)(13, "span", 151);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 152);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 153)(19, "a", 154);
    \u0275\u0275element(20, "i", 155);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entreprise_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", entreprise_r6.logo || "assets/img/default-company.svg", \u0275\u0275sanitizeUrl)("alt", "Logo " + entreprise_r6.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entreprise_r6.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entreprise_r6.secteur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", entreprise_r6.nombreClients, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(12, _c12, entreprise_r6.statut === "active", entreprise_r6.statut === "pending", entreprise_r6.statut === "inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusLabel(entreprise_r6.statut), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 9, entreprise_r6.dateCreation, "dd/MM/yy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(16, _c22, ctx_r3.routes.superadminCompanydetails, entreprise_r6.id));
  }
}
function SuperAdminDashboardComponent_div_54_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 156);
    \u0275\u0275element(2, "i", 157);
    \u0275\u0275text(3, " Aucune entreprise r\xE9cente ");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminDashboardComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "table", 139)(2, "thead", 140)(3, "tr")(4, "th", 141);
    \u0275\u0275text(5, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 142);
    \u0275\u0275text(7, "Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 142);
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 142);
    \u0275\u0275text(11, "Cr\xE9\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 143)(13, "span", 136);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, SuperAdminDashboardComponent_div_54_tr_16_Template, 21, 19, "tr", 144)(17, SuperAdminDashboardComponent_div_54_tr_17_Template, 4, 0, "tr", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r3.recentEntreprises)("ngForTrackBy", ctx_r3.trackByCompanyId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.recentEntreprises.length === 0);
  }
}
function SuperAdminDashboardComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 136);
    \u0275\u0275text(3, "Chargement des entreprises...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 137);
    \u0275\u0275text(5, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminDashboardComponent_div_64_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 125);
  }
}
function SuperAdminDashboardComponent_div_64_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 161);
  }
}
function SuperAdminDashboardComponent_div_64_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 124);
  }
}
function SuperAdminDashboardComponent_div_64_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 162);
  }
}
function SuperAdminDashboardComponent_div_64_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_64_h4_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 128);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, stat_r7.value));
  }
}
function SuperAdminDashboardComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 158)(2, "div", 108)(3, "div", 109)(4, "div", 110)(5, "span", 111);
    \u0275\u0275template(6, SuperAdminDashboardComponent_div_64_img_6_Template, 1, 0, "img", 115)(7, SuperAdminDashboardComponent_div_64_img_7_Template, 1, 0, "img", 159)(8, SuperAdminDashboardComponent_div_64_img_8_Template, 1, 0, "img", 114)(9, SuperAdminDashboardComponent_div_64_img_9_Template, 1, 0, "img", 160);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19)(11, "p", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SuperAdminDashboardComponent_div_64_div_13_Template, 2, 0, "div", 57)(14, SuperAdminDashboardComponent_div_64_h4_14_Template, 3, 3, "h4", 116);
    \u0275\u0275elementStart(15, "small", 117);
    \u0275\u0275element(16, "i", 118);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 119)(19, "div", 120);
    \u0275\u0275element(20, "div", 121);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("stat-card-" + stat_r7.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "bg-" + stat_r7.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r7.type === "utilisateurs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r7.type === "formateurs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r7.type === "formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r7.type === "demandes");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r7.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", stat_r7.growth, "% ce mois ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("bg-" + stat_r7.color);
    \u0275\u0275styleProp("width", stat_r7.progress, "%");
    \u0275\u0275attribute("aria-valuenow", stat_r7.progress);
  }
}
function SuperAdminDashboardComponent_div_70_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_70_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r8.suffix);
  }
}
function SuperAdminDashboardComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "div")(5, "p", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SuperAdminDashboardComponent_div_70_div_7_Template, 2, 0, "div", 57)(8, SuperAdminDashboardComponent_div_70_h4_8_Template, 4, 2, "h4", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 111);
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r8.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bg-" + card_r8.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r8.icon + " fs-24 text-" + card_r8.color);
  }
}
function SuperAdminDashboardComponent_div_76_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_76_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r9.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r9.suffix);
  }
}
function SuperAdminDashboardComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "div")(5, "p", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SuperAdminDashboardComponent_div_76_div_7_Template, 2, 0, "div", 57)(8, SuperAdminDashboardComponent_div_76_h4_8_Template, 4, 2, "h4", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 111);
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r9.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bg-" + card_r9.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r9.icon + " fs-24 text-" + card_r9.color);
  }
}
function SuperAdminDashboardComponent_div_89_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 176)(1, "td", 177)(2, "div", 109);
    \u0275\u0275element(3, "img", 178);
    \u0275\u0275elementStart(4, "h6", 179);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 180)(7, "span", 181);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 180)(10, "div", 182);
    \u0275\u0275element(11, "div", 183);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 180)(13, "span", 184);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 180)(16, "span", 185);
    \u0275\u0275element(17, "i", 186);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 180)(20, "div", 187);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "small", 131);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 188)(26, "button", 189);
    \u0275\u0275element(27, "i", 190);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const formation_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", formation_r10.image || "assets/img/default-course.svg", \u0275\u0275sanitizeUrl)("alt", formation_r10.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r10.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r10.inscrits);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", formation_r10.progression, "%");
    \u0275\u0275attribute("aria-valuenow", formation_r10.progression)("aria-label", "Progression : " + formation_r10.progression + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r10.completes || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(17, _c32, formation_r10.statut === "publie", formation_r10.statut === "brouillon", formation_r10.statut === "en_cours", formation_r10.statut === "archive"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(22, _c42, formation_r10.statut === "publie", formation_r10.statut === "brouillon", formation_r10.statut === "en_cours", formation_r10.statut === "archive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getRhStatutLabel(formation_r10.statut), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 14, formation_r10.dateCreation, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getRelativeDate(formation_r10.dateCreation));
  }
}
function SuperAdminDashboardComponent_div_89_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 191);
    \u0275\u0275element(2, "i", 192);
    \u0275\u0275elementStart(3, "h6", 193);
    \u0275\u0275text(4, "Aucune formation disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 194);
    \u0275\u0275text(6, "Les formations appara\xEEtront ici d\xE8s leur cr\xE9ation.");
    \u0275\u0275elementEnd()()();
  }
}
function SuperAdminDashboardComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "table", 165)(2, "thead", 140)(3, "tr")(4, "th", 166);
    \u0275\u0275element(5, "i", 167);
    \u0275\u0275text(6, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 168);
    \u0275\u0275element(8, "i", 169);
    \u0275\u0275text(9, "Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 168);
    \u0275\u0275element(11, "i", 170);
    \u0275\u0275text(12, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 168);
    \u0275\u0275element(14, "i", 171);
    \u0275\u0275text(15, "Compl\xE9t\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 168);
    \u0275\u0275element(17, "i", 172);
    \u0275\u0275text(18, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 168);
    \u0275\u0275element(20, "i", 173);
    \u0275\u0275text(21, "Depuis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 174)(23, "span", 136);
    \u0275\u0275text(24, "Actions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, SuperAdminDashboardComponent_div_89_tr_26_Template, 28, 27, "tr", 175)(27, SuperAdminDashboardComponent_div_89_tr_27_Template, 7, 0, "tr", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r3.rhFormationsRecentes)("ngForTrackBy", ctx_r3.trackByRhFormationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.rhFormationsRecentes.length === 0);
  }
}
function SuperAdminDashboardComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 136);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 137);
    \u0275\u0275text(5, "Chargement des formations...");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminDashboardComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "span", 164);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.mau) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r3.superStats == null ? null : ctx_r3.superStats.wau) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.taux_activation) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.taux_engagement) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "apx-chart", 195);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.inscriptionsChart.series)("chart", ctx_r3.inscriptionsChart.chart)("xaxis", ctx_r3.inscriptionsChart.xaxis)("yaxis", ctx_r3.inscriptionsChart.yaxis)("plotOptions", ctx_r3.inscriptionsChart.plotOptions)("dataLabels", ctx_r3.inscriptionsChart.dataLabels)("colors", ctx_r3.inscriptionsChart.colors)("grid", ctx_r3.inscriptionsChart.grid)("tooltip", ctx_r3.inscriptionsChart.tooltip);
  }
}
function SuperAdminDashboardComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275element(1, "div", 197);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_ng_container_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 131);
    \u0275\u0275text(4, "ce mois-ci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c52, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.croissance_inscriptions) ?? 0) >= 0, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.croissance_inscriptions) ?? 0) < 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ((ctx_r3.superStats == null ? null : ctx_r3.superStats.croissance_inscriptions) ?? 0) >= 0 ? "+" : "", "", (ctx_r3.superStats == null ? null : ctx_r3.superStats.croissance_inscriptions) ?? "\u2014", "% ");
  }
}
function SuperAdminDashboardComponent_div_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r3.superStats == null ? null : ctx_r3.superStats.total_formations_publiees) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "% actifs");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_actifs_vs_obsoletes) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "div", 200);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", (ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_actifs_vs_obsoletes) ?? 0, "%");
  }
}
function SuperAdminDashboardComponent_div_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.taux_completion_global) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "div", 201);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", (ctx_r3.superStats == null ? null : ctx_r3.superStats.taux_completion_global) ?? 0, "%");
  }
}
function SuperAdminDashboardComponent_div_213_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "h");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.total_heures_consommees) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_225_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_226_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "/100");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.score_satisfaction) != null ? ctx_r3.superStats.score_satisfaction : "\u2014", " ");
  }
}
function SuperAdminDashboardComponent_div_236_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_237_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.taux_mise_a_jour_contenu) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_small_238_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 131);
    \u0275\u0275text(1, "formations mises \xE0 jour ces 3 mois");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "div", 202);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", (ctx_r3.superStats == null ? null : ctx_r3.superStats.taux_mise_a_jour_contenu) ?? 0, "%");
  }
}
function SuperAdminDashboardComponent_div_254_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_255_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c62, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.uptime_pct) ?? 0) >= 99, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.uptime_pct) ?? 0) < 99));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.uptime_pct) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_258_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "div", 203);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", (ctx_r3.superStats == null ? null : ctx_r3.superStats.uptime_pct) ?? 0, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c7, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.uptime_pct) ?? 0) >= 99, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.uptime_pct) ?? 0) < 99));
  }
}
function SuperAdminDashboardComponent_div_266_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_267_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "ms");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.avg_load_time_ms) != null ? ctx_r3.superStats.avg_load_time_ms : "\u2014", " ");
  }
}
function SuperAdminDashboardComponent_div_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c8, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.error_rate_pct) ?? 0) > 1, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.error_rate_pct) ?? 0) <= 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.error_rate_pct) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_288_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_289_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c8, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.security_incidents) ?? 0) > 0, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.security_incidents) ?? 0) === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.security_incidents) ?? 0, " ");
  }
}
function SuperAdminDashboardComponent_div_304_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_305_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c9, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.tickets_ouverts) ?? 0) > 10, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.tickets_ouverts) ?? 0) > 0, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.tickets_ouverts) ?? 0) === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.tickets_ouverts) ?? 0, " ");
  }
}
function SuperAdminDashboardComponent_div_315_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_316_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 204);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.tickets_resolus) ?? 0, " ");
  }
}
function SuperAdminDashboardComponent_div_326_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_327_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "h");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.delai_moyen_resolution_h) != null ? ctx_r3.superStats.delai_moyen_resolution_h : "\u2014", " ");
  }
}
function SuperAdminDashboardComponent_div_337_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_338_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c62, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.sla_respecte_pct) ?? 0) >= 90, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.sla_respecte_pct) ?? 0) < 90));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.sla_respecte_pct) != null ? ctx_r3.superStats.sla_respecte_pct : "\u2014", " ");
  }
}
function SuperAdminDashboardComponent_div_341_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "div", 203);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.superStats.sla_respecte_pct, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c7, ctx_r3.superStats.sla_respecte_pct >= 90, ctx_r3.superStats.sla_respecte_pct < 90));
  }
}
function SuperAdminDashboardComponent_div_354_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_355_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 164);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c62, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_conformite_formations_obligatoires) ?? 0) >= 80, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_conformite_formations_obligatoires) ?? 0) < 80));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_conformite_formations_obligatoires) ?? "\u2014");
  }
}
function SuperAdminDashboardComponent_div_358_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "div", 203);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", (ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_conformite_formations_obligatoires) ?? 0, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c7, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_conformite_formations_obligatoires) ?? 0) >= 80, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.pct_conformite_formations_obligatoires) ?? 0) < 80));
  }
}
function SuperAdminDashboardComponent_div_366_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_367_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c8, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.nb_ecarts_conformite) ?? 0) > 0, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.nb_ecarts_conformite) ?? 0) === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.nb_ecarts_conformite) ?? 0, " ");
  }
}
function SuperAdminDashboardComponent_small_368_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 131);
    \u0275\u0275text(1, "utilisateurs n'ayant pas termin\xE9 une formation obligatoire");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_378_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "div", 127);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_h4_379_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 198);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c8, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.security_incidents) ?? 0) > 0, ((ctx_r3.superStats == null ? null : ctx_r3.superStats.security_incidents) ?? 0) === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.superStats == null ? null : ctx_r3.superStats.security_incidents) ?? 0, " ");
  }
}
function SuperAdminDashboardComponent_small_380_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 131);
    \u0275\u0275text(1, "ces 30 derniers jours");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboardComponent_div_383_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "a", 206);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275text(3, "Voir les logs ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c10));
  }
}
function SuperAdminDashboardComponent_div_394_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "span", 207);
    \u0275\u0275elementStart(2, "small", 131);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const serie_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", serie_r11.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serie_r11.name);
  }
}
function SuperAdminDashboardComponent_div_396_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 208);
    \u0275\u0275element(1, "apx-chart", 209);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.rhChartData.series)("chart", ctx_r3.rhChartData.chart)("xaxis", ctx_r3.rhChartData.xaxis)("yaxis", ctx_r3.rhChartData.yaxis)("stroke", ctx_r3.rhChartData.stroke)("tooltip", ctx_r3.rhChartData.tooltip)("dataLabels", ctx_r3.rhChartData.dataLabels)("fill", ctx_r3.rhChartData.fill)("grid", ctx_r3.rhChartData.grid)("colors", ctx_r3.rhChartData.colors);
  }
}
function SuperAdminDashboardComponent_ng_template_397_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 136);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 137);
    \u0275\u0275text(5, "Chargement des statistiques...");
    \u0275\u0275elementEnd()();
  }
}
var SuperAdminDashboardComponent = class _SuperAdminDashboardComponent {
  router;
  adminRHStatsService;
  superAdminDashboardService;
  destroy$ = new Subject();
  routes = routes;
  dashboardData = {
    totalEntreprises: 0,
    totalClients: 0,
    totalFormations: 0,
    totalUtilisateurs: 0,
    statistiquesMensuelles: []
  };
  selectedRange = null;
  recentEntreprises = [];
  isLoading = true;
  // ── Données AdminRH ──────────────────────────────────────────
  rhMetrics = {
    totalUtilisateurs: 0,
    totalFormateurs: 0,
    totalFormations: 0,
    totalDemandesFormation: 0,
    totalSessionsFormation: 0,
    formationsPubliees: 0,
    tauxCompletionGlobal: 75,
    sessionsMoisCourant: 0,
    heuresConsommees: 0,
    scoreMoyenFormations: 4.2,
    tauxSatisfaction: 88,
    nombreCertifies: 0,
    nombreIncidents: 2
  };
  rhStatisticsCards = [
    { type: "utilisateurs", label: "Total Utilisateurs", value: 0, icon: "fas fa-users", color: "primary", growth: 12, progress: 75 },
    { type: "formateurs", label: "Total Formateurs", value: 0, icon: "fas fa-user-tie", color: "success", growth: 8, progress: 60 },
    { type: "formations", label: "Total Formations", value: 0, icon: "fas fa-graduation-cap", color: "info", growth: 15, progress: 85 },
    { type: "demandes", label: "Demandes Formation", value: 0, icon: "fas fa-file-alt", color: "warning", growth: 5, progress: 45 }
  ];
  get rhMetricsRow1() {
    return [
      { label: "Formations publi\xE9es", value: this.rhMetrics.formationsPubliees, icon: "isax isax-book", color: "success", suffix: "" },
      { label: "Taux compl\xE9tion global", value: this.rhMetrics.tauxCompletionGlobal, icon: "isax isax-chart-2", color: "info", suffix: "%" },
      { label: "Sessions ce mois", value: this.rhMetrics.sessionsMoisCourant, icon: "isax isax-calendar", color: "primary", suffix: "" },
      { label: "Heures consomm\xE9es", value: this.rhMetrics.heuresConsommees, icon: "isax isax-clock", color: "warning", suffix: "h" }
    ];
  }
  get rhMetricsRow2() {
    return [
      { label: "Score moyen formations", value: this.rhMetrics.scoreMoyenFormations, icon: "isax isax-star", color: "warning", suffix: "/5" },
      { label: "Taux satisfaction", value: this.rhMetrics.tauxSatisfaction, icon: "isax isax-smiley", color: "success", suffix: "%" },
      { label: "Total certifi\xE9s", value: this.rhMetrics.nombreCertifies, icon: "isax isax-award", color: "primary", suffix: "" },
      { label: "Incidents signal\xE9s", value: this.rhMetrics.nombreIncidents, icon: "isax isax-warning-2", color: "danger", suffix: "" }
    ];
  }
  rhFormationsRecentes = [];
  rhChartLegend = [
    { name: "Formations", color: "#1D9CFD" },
    { name: "Utilisateurs", color: "#00BFA5" },
    { name: "Formateurs", color: "#FFB64D" },
    { name: "Sessions", color: "#E91E63" }
  ];
  rhChartData = {
    series: [
      { name: "Formations", data: [] },
      { name: "Utilisateurs", data: [] },
      { name: "Formateurs", data: [] },
      { name: "Sessions", data: [] }
    ],
    chart: { height: 350, type: "area", toolbar: { show: true } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    xaxis: { categories: [], axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { title: { text: "Nombre" } },
    fill: {
      type: "gradient",
      gradient: { shade: "light", type: "vertical", shadeIntensity: 0.1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] }
    },
    colors: ["#1D9CFD", "#00BFA5", "#FFB64D", "#E91E63"],
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
      row: { colors: ["transparent", "transparent"], opacity: 0.5 },
      column: { colors: ["#f8f9fa", "transparent"], opacity: 1 }
    },
    tooltip: { shared: true, intersect: false, theme: "light" }
  };
  statisticsCards = [
    {
      type: "companies",
      label: "Total Entreprises",
      value: 0,
      icon: "fas fa-building",
      color: "primary",
      growth: 12,
      progress: 75
    },
    {
      type: "clients",
      label: "Total Clients",
      value: 0,
      icon: "fas fa-user-tie",
      color: "info",
      growth: 8,
      progress: 60
    },
    {
      type: "formations",
      label: "Total Formations",
      value: 0,
      icon: "fas fa-graduation-cap",
      color: "success",
      growth: 15,
      progress: 85
    },
    {
      type: "users",
      label: "Total Utilisateurs",
      value: 0,
      icon: "fas fa-users",
      color: "warning",
      growth: 5,
      progress: 45
    }
  ];
  chartLegend = [
    { name: "Entreprises", color: "#D4AF37" },
    { name: "Clients", color: "#006F78" },
    { name: "Formations", color: "#c45c3e" },
    { name: "Utilisateurs", color: "#2d5a3d" }
  ];
  Statisticschart = {
    series: [
      { name: "Entreprises", data: [] },
      { name: "Clients", data: [] },
      { name: "Formations", data: [] },
      { name: "Utilisateurs", data: [] }
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2
    },
    xaxis: {
      categories: [],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      title: { text: "Nombre" },
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        gradientToColors: void 0,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      }
    },
    colors: ["#C8B8A0", "#A8D5BA", "#F7D9C4", "#B4C7E7"],
    // Couleurs soft et elegantes
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5
      },
      column: {
        colors: ["#f8f9fa", "transparent"],
        opacity: 1
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "light",
      style: {
        fontSize: "12px"
      },
      x: {
        show: true
      }
    },
    plotOptions: {
      area: {
        fillTo: "end"
      }
    }
  };
  // ── Nouvelles métriques superadmin ───────────────────────────────────────
  superStats = null;
  superStatsLoading = true;
  // Graphique croissance mensuelle inscriptions
  inscriptionsChart = {
    series: [{ name: "Inscriptions", data: [] }],
    chart: { height: 160, type: "bar", toolbar: { show: false }, sparkline: { enabled: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "55%" } },
    dataLabels: { enabled: false },
    xaxis: { categories: [], labels: { style: { fontSize: "11px" } } },
    yaxis: { labels: { style: { fontSize: "11px" } } },
    colors: ["#1D9CFD"],
    grid: { borderColor: "#f1f1f1" },
    tooltip: { theme: "light" }
  };
  constructor(router, adminRHStatsService, superAdminDashboardService) {
    this.router = router;
    this.adminRHStatsService = adminRHStatsService;
    this.superAdminDashboardService = superAdminDashboardService;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadDashboardData() {
    this.isLoading = true;
    this.superStatsLoading = true;
    forkJoin({
      rhStats: this.adminRHStatsService.getAllStats().pipe(catchError(() => of(null))),
      rhFormations: this.adminRHStatsService.getFormationsRecentes().pipe(catchError(() => of([]))),
      superStats: this.superAdminDashboardService.getStats().pipe(catchError(() => of(null)))
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.processRhData(data);
        this.processSuperStats(data.superStats);
        this.buildCountsFromStats(data);
        this.isLoading = false;
      },
      error: () => {
        this.setDefaultData();
        this.isLoading = false;
        this.superStatsLoading = false;
      }
    });
  }
  buildCountsFromStats(data) {
    const rh = data.rhStats;
    const su = data.superStats?.data;
    this.dashboardData.totalUtilisateurs = rh?.totalUtilisateurs ?? su?.total_utilisateurs ?? 0;
    this.dashboardData.totalFormations = rh?.totalFormations ?? su?.total_formations ?? 0;
    this.dashboardData.totalEntreprises = su?.total_entreprises ?? 0;
    this.dashboardData.totalClients = su?.total_clients ?? 0;
    this.updateStatisticsCards();
    this.generateMonthlyStats([], [], [], []);
  }
  processSuperStats(res) {
    this.superStatsLoading = false;
    if (!res?.data)
      return;
    this.superStats = res.data;
    const cm = res.data.croissance_mensuelle ?? [];
    this.inscriptionsChart = __spreadProps(__spreadValues({}, this.inscriptionsChart), {
      series: [{ name: "Inscriptions", data: cm.map((m) => m.total) }],
      xaxis: __spreadProps(__spreadValues({}, this.inscriptionsChart.xaxis), { categories: cm.map((m) => m.mois) })
    });
  }
  processRhData(data) {
    if (data.rhStats) {
      this.rhMetrics.totalUtilisateurs = data.rhStats.totalUtilisateurs || 0;
      this.rhMetrics.totalFormateurs = data.rhStats.totalFormateurs || 0;
      this.rhMetrics.totalFormations = data.rhStats.totalFormations || 0;
      this.rhMetrics.totalDemandesFormation = data.rhStats.totalDemandesFormation || 0;
      this.rhMetrics.totalSessionsFormation = data.rhStats.totalSessionsFormation || 0;
      this.rhMetrics.formationsPubliees = data.rhStats.totalFormations || 0;
      this.rhMetrics.sessionsMoisCourant = data.rhStats.totalSessionsFormation || 0;
      this.rhMetrics.heuresConsommees = (data.rhStats.totalSessionsFormation || 0) * 2;
      this.rhMetrics.nombreCertifies = Math.floor((data.rhStats.totalUtilisateurs || 0) * 0.35);
    }
    this.rhStatisticsCards[0].value = this.rhMetrics.totalUtilisateurs;
    this.rhStatisticsCards[1].value = this.rhMetrics.totalFormateurs;
    this.rhStatisticsCards[2].value = this.rhMetrics.totalFormations;
    this.rhStatisticsCards[3].value = this.rhMetrics.totalDemandesFormation;
    if (Array.isArray(data.rhFormations)) {
      this.rhFormationsRecentes = data.rhFormations.slice(0, 5).map((f) => ({
        id: f.id,
        titre: f.titre || "Formation sans titre",
        image: f.image || "assets/img/default-course.svg",
        inscrits: f.inscrits || 0,
        completes: Math.floor((f.inscrits || 0) * 0.6),
        progression: 60,
        statut: f.statut || "publie",
        dateCreation: new Date(f.dateCreation || Date.now())
      }));
    }
    this.updateRhChart(data.rhMensuel);
  }
  updateRhChart(mensuelData) {
    const now = /* @__PURE__ */ new Date();
    const apiData = Array.isArray(mensuelData) ? mensuelData : [];
    const stats = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = date.toLocaleDateString("fr-FR", { month: "short" });
      const monthKey = date.toISOString().slice(0, 7);
      const entry = apiData.find((m) => (m.mois || "").startsWith(monthKey));
      stats.push({
        mois: label.charAt(0).toUpperCase() + label.slice(1),
        formations: entry?.formations ?? 0,
        utilisateurs: entry?.utilisateurs ?? 0,
        formateurs: entry?.formateurs ?? 0,
        sessions: entry?.sessions ?? 0
      });
    }
    this.rhChartData = __spreadProps(__spreadValues({}, this.rhChartData), {
      series: [
        { name: "Formations", data: stats.map((s) => s.formations) },
        { name: "Utilisateurs", data: stats.map((s) => s.utilisateurs) },
        { name: "Formateurs", data: stats.map((s) => s.formateurs) },
        { name: "Sessions", data: stats.map((s) => s.sessions) }
      ],
      xaxis: __spreadProps(__spreadValues({}, this.rhChartData.xaxis), { categories: stats.map((s) => s.mois) })
    });
  }
  getRhStatutLabel(statut) {
    return { publie: "Publi\xE9", brouillon: "Brouillon", en_cours: "En cours", archive: "Archiv\xE9" }[statut] || statut;
  }
  trackByRhFormationId(_index, f) {
    return f.id;
  }
  extractArray(data, ...keys) {
    if (!data)
      return [];
    if (Array.isArray(data))
      return data;
    for (const key of keys) {
      if (Array.isArray(data[key]))
        return data[key];
    }
    return [];
  }
  processRealData(data) {
    const companies = this.extractArray(data.companies, "entreprises", "companies", "data", "results", "items", "dataList", "hydra:member");
    const clients = this.extractArray(data.clients, "clients", "data", "results");
    const formations = this.extractArray(data.formations, "formations", "data", "results");
    const users = this.extractArray(data.users, "users", "data", "results");
    this.dashboardData.totalEntreprises = companies.length;
    this.dashboardData.totalClients = clients.length;
    this.dashboardData.totalFormations = formations.length;
    this.dashboardData.totalUtilisateurs = users.length;
    this.updateStatisticsCards();
    this.generateRecentEntreprises(companies, clients, formations);
    this.generateMonthlyStats(companies, clients, formations, users);
  }
  updateStatisticsCards() {
    this.statisticsCards[0].value = this.dashboardData.totalEntreprises;
    this.statisticsCards[1].value = this.dashboardData.totalClients;
    this.statisticsCards[2].value = this.dashboardData.totalFormations;
    this.statisticsCards[3].value = this.dashboardData.totalUtilisateurs;
  }
  generateRecentEntreprises(companies, clients, formations) {
    if (!companies || companies.length === 0) {
      this.recentEntreprises = [];
      return;
    }
    const sortedCompanies = [...companies].filter((company) => company && company.id).sort((a, b) => {
      const dateA = new Date(a.dateCreation || a.created_at || a.createdAt || a.date_creation || Date.now()).getTime();
      const dateB = new Date(b.dateCreation || b.created_at || b.createdAt || b.date_creation || Date.now()).getTime();
      return dateB - dateA;
    }).slice(0, 5);
    this.recentEntreprises = sortedCompanies.map((company) => {
      const companyId = company.id?.toString();
      const nombreClients = clients.filter((c) => c.entreprise_id === companyId || c.company_id === companyId || c.companyId === companyId).length;
      const nombreFormations = formations.filter((f) => f.entreprise_id === companyId || f.company_id === companyId || f.companyId === companyId).length;
      return {
        id: companyId,
        nom: company.nom || company.name || company.company_name || "Entreprise sans nom",
        logo: company.logo || company.avatar,
        secteur: company.secteur || company.industry || company.sector || "Non sp\xE9cifi\xE9",
        nombreClients,
        nombreFormations,
        statut: company.statut || company.status || company.state || "active",
        dateCreation: new Date(company.dateCreation || company.created_at || company.createdAt || company.date_creation)
      };
    });
  }
  generateMonthlyStats(companies, clients, formations, users) {
    const currentDate = /* @__PURE__ */ new Date();
    const stats = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthName = date.toLocaleDateString("fr-FR", { month: "short" });
      const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
      const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const entreprisesCount = companies.filter((c) => {
        const createdDate = new Date(c.dateCreation || c.created_at || c.createdAt || c.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;
      const clientsCount = clients.filter((c) => {
        const createdDate = new Date(c.dateCreation || c.created_at || c.createdAt || c.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;
      const formationsCount = formations.filter((f) => {
        const createdDate = new Date(f.dateCreation || f.created_at || f.createdAt || f.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;
      const utilisateursCount = users.filter((u) => {
        const createdDate = new Date(u.dateCreation || u.created_at || u.createdAt || u.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;
      stats.push({
        mois: monthName.charAt(0).toUpperCase() + monthName.slice(1),
        entreprises: entreprisesCount,
        clients: clientsCount,
        formations: formationsCount,
        utilisateurs: utilisateursCount
      });
    }
    this.dashboardData.statistiquesMensuelles = stats;
    this.updateChart(stats);
  }
  updateChart(stats) {
    this.Statisticschart = __spreadProps(__spreadValues({}, this.Statisticschart), {
      series: [
        { name: "Entreprises", data: stats.map((s) => s.entreprises) },
        { name: "Clients", data: stats.map((s) => s.clients) },
        { name: "Formations", data: stats.map((s) => s.formations) },
        { name: "Utilisateurs", data: stats.map((s) => s.utilisateurs) }
      ],
      xaxis: __spreadProps(__spreadValues({}, this.Statisticschart.xaxis), { categories: stats.map((s) => s.mois) })
    });
  }
  setDefaultData() {
    this.dashboardData = {
      totalEntreprises: 0,
      totalClients: 0,
      totalFormations: 0,
      totalUtilisateurs: 0,
      statistiquesMensuelles: []
    };
    this.updateStatisticsCards();
    this.recentEntreprises = [];
    this.Statisticschart = __spreadProps(__spreadValues({}, this.Statisticschart), {
      series: [
        { name: "Entreprises", data: [] },
        { name: "Clients", data: [] },
        { name: "Formations", data: [] },
        { name: "Utilisateurs", data: [] }
      ],
      xaxis: { categories: [] }
    });
  }
  trackByCompanyId(index, company) {
    return company.id;
  }
  getStatusLabel(status) {
    const labels = {
      "active": "Actif",
      "pending": "En attente",
      "inactive": "Inactif"
    };
    return labels[status] || status;
  }
  getRelativeDate(date) {
    const now = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(now.getTime() - new Date(date).getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays === 0)
      return "Aujourd'hui";
    if (diffDays === 1)
      return "Hier";
    if (diffDays < 7)
      return `Il y a ${diffDays} jours`;
    if (diffDays < 30)
      return `Il y a ${Math.ceil(diffDays / 7)} semaines`;
    return `Il y a ${Math.ceil(diffDays / 30)} mois`;
  }
  onDateRangeChange(dateRange) {
    this.selectedRange = dateRange;
    console.log("\u{1F4C5} Filtrage des donn\xE9es pour la p\xE9riode:", dateRange);
  }
  refreshData() {
    this.loadDashboardData();
  }
  static \u0275fac = function SuperAdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminDashboardComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminRHStatsService), \u0275\u0275directiveInject(SuperAdminDashboardService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminDashboardComponent, selectors: [["app-superadmin-dashboard"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe])], decls: 399, vars: 78, consts: [["range", "matDateRangeInput"], ["picker", ""], ["chartLoading", ""], ["tableLoading", ""], ["rhTableLoadingTpl", ""], ["rhChartLoadingTpl", ""], [1, "d-flex", "align-items-start", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "fas", "fa-tachometer-alt", "text-primary", "me-2"], [1, "text-muted", "mb-0", "small"], [1, "d-flex", "gap-2", "align-items-center", "flex-wrap"], [3, "rangePicker", "disabled"], ["matStartDate", "", "placeholder", "Date de d\xE9but", 3, "dateChange"], ["matEndDate", "", "placeholder", "Date de fin", 3, "dateChange"], ["type", "button", "aria-label", "Actualiser les donn\xE9es", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "fas", "fa-sync-alt", "me-1"], [1, "d-flex", "align-items-center", "mb-3"], [1, "badge", "bg-primary", "px-3", "py-2", "me-3", "fs-12", "fw-semibold"], [1, "fas", "fa-globe", "me-1"], [1, "flex-grow-1"], [1, "row", "g-3", "mb-4"], ["class", "col-md-6 col-xl-3", 4, "ngFor", "ngForOf"], [1, "row", "g-4", "mb-4"], [1, "col-lg-7"], [1, "card", "shadow-sm", "border-0", "h-100"], [1, "card-header", "bg-white", "border-bottom"], [1, "fw-bold", "mb-1", "text-dark"], [1, "fas", "fa-chart-line", "text-primary", "me-2"], [1, "card-body", "p-0"], [1, "chart-legend", "p-3", "border-bottom", "bg-light"], [1, "row", "text-center"], ["class", "col-3", 4, "ngFor", "ngForOf"], [2, "min-height", "300px"], ["class", "p-3", "role", "img", "aria-label", "Graphique des statistiques mensuelles", 4, "ngIf", "ngIfElse"], [1, "col-lg-5"], [1, "card-header", "bg-white", "border-bottom", "d-flex", "align-items-center", "justify-content-between"], [1, "fas", "fa-building", "text-primary", "me-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "fas", "fa-eye", "me-1"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "my-4"], [1, "px-3", "fw-bold", "text-muted", "small", "text-uppercase"], [1, "fas", "fa-user-cog", "me-2", "text-primary"], [1, "fw-bold", "mb-0", "text-dark"], [1, "isax", "isax-book", "me-2", "text-success"], [1, "isax", "isax-monitor", "me-2", "text-info"], [1, "card", "shadow-sm", "border-0", "mb-4"], [1, "isax", "isax-book-1", "text-success", "me-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-eye", "me-1"], [1, "fas", "fa-chart-bar", "me-2", "text-warning"], [1, "isax", "isax-people", "me-2", "text-primary"], [1, "col-md-6", "col-xl-3"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-muted", "mb-1", "small", "fw-medium"], ["class", "skeleton-loader", 4, "ngIf"], ["class", "fw-bold mb-0", 4, "ngIf"], [1, "icon-box", "bg-primary-transparent"], [1, "isax", "isax-people", "fs-24", "text-primary"], [1, "icon-box", "bg-info-transparent"], [1, "isax", "isax-user-tick", "fs-24", "text-info"], [1, "icon-box", "bg-success-transparent"], [1, "isax", "isax-verify", "fs-24", "text-success"], [1, "icon-box", "bg-warning-transparent"], [1, "isax", "isax-chart-2", "fs-24", "text-warning"], [1, "col-lg-8"], [1, "fas", "fa-user-plus", "text-primary", "me-2"], [4, "ngIf"], ["class", "d-flex justify-content-center align-items-center", "style", "height:160px", 4, "ngIf"], [1, "col-lg-4"], [1, "card-body", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center"], [1, "icon-box", "bg-primary-transparent", "mb-3"], [1, "fas", "fa-arrow-trend-up", "fs-24", "text-primary"], [1, "text-muted", "small", "fw-medium", "mb-1"], [1, "isax", "isax-book", "fs-24", "text-success"], [1, "isax", "isax-archive", "fs-24", "text-info"], ["class", "progress mt-2", "style", "height:4px", 4, "ngIf"], [1, "isax", "isax-chart-2", "fs-24", "text-primary"], [1, "isax", "isax-clock", "fs-24", "text-warning"], [1, "col-md-6", "col-xl-4"], [1, "isax", "isax-star", "fs-24", "text-warning"], ["class", "text-muted", 4, "ngIf"], [1, "icon-box", "bg-teal-transparent"], [1, "isax", "isax-refresh", "fs-24", "text-teal"], [1, "isax", "isax-monitor", "me-2", "text-teal"], ["class", "fw-bold mb-0", 3, "ngClass", 4, "ngIf"], [1, "isax", "isax-cpu", "fs-24", "text-success"], [1, "isax", "isax-timer", "fs-24", "text-info"], [1, "icon-box", "bg-danger-transparent"], [1, "isax", "isax-danger", "fs-24", "text-danger"], [1, "isax", "isax-shield-slash", "fs-24", "text-danger"], [1, "isax", "isax-message-question", "me-2", "text-warning"], [1, "isax", "isax-message-question", "fs-24", "text-warning"], ["class", "fw-bold mb-0 text-success", 4, "ngIf"], [1, "isax", "isax-tick-circle", "fs-24", "text-success"], [1, "isax", "isax-clock", "fs-24", "text-info"], [1, "isax", "isax-shield-tick", "fs-24", "text-primary"], [1, "isax", "isax-shield", "me-2", "text-danger"], [1, "row", "g-3", "mb-5"], [1, "isax", "isax-shield-tick", "fs-24", "text-success"], [1, "isax", "isax-warning-2", "fs-24", "text-danger"], ["class", "mt-2", 4, "ngIf"], [1, "fas", "fa-chart-area", "text-info", "me-2"], [1, "chart-container", "rh-chart-min-height"], ["class", "p-3", 4, "ngIf", "ngIfElse"], [1, "card", "h-100", "shadow-sm", "border-0", "stat-card"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "icon-box", 3, "ngClass"], ["src", "assets/img/icon/icon-23.svg", "alt", "Entreprises", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/user-octagon.svg", "alt", "Clients", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/graduation.svg", "alt", "Formations", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/users.svg", "alt", "Utilisateurs", "class", "icon-img", 4, "ngIf"], ["class", "fs-24 mb-0 fw-bold text-dark", 4, "ngIf"], [1, "text-success", "d-flex", "align-items-center", "mt-1"], [1, "fas", "fa-arrow-up", "me-1"], [1, "card-footer", "bg-transparent", "border-0", "p-2"], [1, "progress", 2, "height", "4px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["src", "assets/img/icon/icon-23.svg", "alt", "Entreprises", 1, "icon-img"], ["src", "assets/img/icon/user-octagon.svg", "alt", "Clients", 1, "icon-img"], ["src", "assets/img/icon/graduation.svg", "alt", "Formations", 1, "icon-img"], ["src", "assets/img/icon/users.svg", "alt", "Utilisateurs", 1, "icon-img"], [1, "skeleton-loader"], [1, "skeleton", "skeleton-text"], [1, "fs-24", "mb-0", "fw-bold", "text-dark"], [1, "col-3"], [1, "legend-color", "d-inline-block", "rounded-circle", "me-2"], [1, "text-muted"], ["role", "img", "aria-label", "Graphique des statistiques mensuelles", 1, "p-3"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "tooltip", "dataLabels", "fill", "plotOptions", "grid", "colors"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "p-5"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "visually-hidden"], [1, "text-muted", "mb-0"], [1, "table-responsive"], ["role", "table", "aria-label", "Entreprises r\xE9cemment cr\xE9\xE9es", 1, "table", "table-hover", "mb-0"], [1, "table-light"], ["scope", "col", 1, "border-0", "ps-3"], ["scope", "col", 1, "border-0", "text-center"], ["scope", "col", 1, "border-0"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ps-3", "py-2"], ["loading", "lazy", 1, "rounded-3", "me-2", "shadow-sm", 2, "width", "36px", "height", "36px", "object-fit", "cover", 3, "src", "alt"], [1, "fw-semibold", "mb-0", "small", "text-dark"], [1, "text-muted", 2, "font-size", "11px"], [1, "text-center", "py-2"], [1, "badge", "bg-primary-light", "text-primary", "fw-semibold"], [1, "badge", 3, "ngClass"], [1, "text-center", "py-2", "small", "text-muted"], [1, "text-end", "pe-3", "py-2"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "fas", "fa-eye"], ["colspan", "5", 1, "text-center", "py-5", "text-muted"], [1, "fas", "fa-building", "fa-2x", "d-block", "mb-2"], [1, "card", "h-100", "shadow-sm", "border-0"], ["src", "assets/img/icon/user-octagon.svg", "alt", "Formateurs", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/icon-23.svg", "alt", "Demandes", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/user-octagon.svg", "alt", "Formateurs", 1, "icon-img"], ["src", "assets/img/icon/icon-23.svg", "alt", "Demandes", 1, "icon-img"], [1, "fw-bold", "mb-0"], [1, "fs-14", "text-muted", "ms-1"], ["aria-label", "Formations actives", 1, "table", "table-hover", "mb-0"], [1, "ps-3", "border-0"], [1, "isax", "isax-book-1", "me-1", "text-muted"], [1, "text-center", "border-0"], [1, "isax", "isax-people", "me-1", "text-muted"], [1, "isax", "isax-chart-2", "me-1", "text-muted"], [1, "isax", "isax-user-tick", "me-1", "text-muted"], [1, "isax", "isax-info-circle", "me-1", "text-muted"], [1, "isax", "isax-calendar", "me-1", "text-muted"], [1, "border-0"], ["class", "align-middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "align-middle"], [1, "ps-3", "py-3"], ["loading", "lazy", 1, "rh-formation-avatar", "rounded-3", "shadow-sm", "me-3", 3, "src", "alt"], [1, "fw-semibold", "mb-0", "text-dark"], [1, "text-center"], [1, "fw-semibold"], [1, "rh-progress-bar", "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info"], [1, "badge", "bg-success-transparent", "text-success", "fw-semibold"], [1, "badge", "fw-medium", 3, "ngClass"], [1, "fas", "me-1", 3, "ngClass"], [1, "text-dark", "fw-medium", "small"], [1, "text-end", "pe-3"], ["title", "Voir les d\xE9tails", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "isax", "isax-eye"], ["colspan", "7", 1, "text-center", "py-5"], [1, "isax", "isax-book-1", "display-4", "text-muted", "d-block", "mb-3"], [1, "text-muted", "mb-1"], [1, "text-muted", "small", "mb-0"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "colors", "grid", "tooltip"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "160px"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "fw-bold", "mb-0", 3, "ngClass"], [1, "progress", "mt-2", 2, "height", "4px"], ["role", "progressbar", 1, "progress-bar", "bg-success"], ["role", "progressbar", 1, "progress-bar", "bg-primary"], ["role", "progressbar", 1, "progress-bar", "bg-teal"], ["role", "progressbar", 1, "progress-bar", 3, "ngClass"], [1, "fw-bold", "mb-0", "text-success"], [1, "mt-2"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "routerLink"], [1, "rh-legend-dot", "rounded-circle", "me-2", "d-inline-block"], [1, "p-3"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "tooltip", "dataLabels", "fill", "grid", "colors"]], template: function SuperAdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "h4", 7);
      \u0275\u0275element(3, "i", 8);
      \u0275\u0275text(4, "Dashboard Super Administrateur ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 9);
      \u0275\u0275text(6, "Vue d'ensemble de la plateforme \u2014 supervision globale & m\xE9triques RH");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 10)(8, "mat-date-range-input", 11, 0)(10, "input", 12);
      \u0275\u0275listener("dateChange", function SuperAdminDashboardComponent_Template_input_dateChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        const range_r2 = \u0275\u0275reference(9);
        return \u0275\u0275resetView(ctx.onDateRangeChange({ startDate: $event.value, endDate: (range_r2.value == null ? null : range_r2.value.end) || null }));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 13);
      \u0275\u0275listener("dateChange", function SuperAdminDashboardComponent_Template_input_dateChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        const range_r2 = \u0275\u0275reference(9);
        return \u0275\u0275resetView(ctx.onDateRangeChange({ startDate: (range_r2.value == null ? null : range_r2.value.start) || null, endDate: $event.value }));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(12, "mat-date-range-picker", null, 1);
      \u0275\u0275elementStart(14, "button", 14);
      \u0275\u0275listener("click", function SuperAdminDashboardComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshData());
      });
      \u0275\u0275element(15, "i", 15);
      \u0275\u0275text(16, "Actualiser ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 16)(18, "span", 17);
      \u0275\u0275element(19, "i", 18);
      \u0275\u0275text(20, "Vue Globale ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "hr", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 20);
      \u0275\u0275template(23, SuperAdminDashboardComponent_div_23_Template, 21, 16, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 22)(25, "div", 23)(26, "div", 24)(27, "div", 25)(28, "h5", 26);
      \u0275\u0275element(29, "i", 27);
      \u0275\u0275text(30, "\xC9volution Mensuelle ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 9);
      \u0275\u0275text(32, "Suivi des performances sur 7 mois");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 28)(34, "div", 29)(35, "div", 30);
      \u0275\u0275template(36, SuperAdminDashboardComponent_div_36_Template, 4, 3, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 32);
      \u0275\u0275template(38, SuperAdminDashboardComponent_div_38_Template, 2, 11, "div", 33)(39, SuperAdminDashboardComponent_ng_template_39_Template, 6, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 34)(42, "div", 24)(43, "div", 35)(44, "div")(45, "h5", 26);
      \u0275\u0275element(46, "i", 36);
      \u0275\u0275text(47, "Entreprises R\xE9centes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 9);
      \u0275\u0275text(49, "Derni\xE8res entreprises cr\xE9\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "a", 37);
      \u0275\u0275element(51, "i", 38);
      \u0275\u0275text(52, "Voir toutes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 28);
      \u0275\u0275template(54, SuperAdminDashboardComponent_div_54_Template, 18, 3, "div", 39)(55, SuperAdminDashboardComponent_ng_template_55_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 40);
      \u0275\u0275element(58, "hr", 19);
      \u0275\u0275elementStart(59, "span", 41);
      \u0275\u0275element(60, "i", 42);
      \u0275\u0275text(61, "M\xE9triques RH & Formation ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "hr", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 20);
      \u0275\u0275template(64, SuperAdminDashboardComponent_div_64_Template, 21, 16, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 16)(66, "h6", 43);
      \u0275\u0275element(67, "i", 44);
      \u0275\u0275text(68, "Formations & Sessions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 20);
      \u0275\u0275template(70, SuperAdminDashboardComponent_div_70_Template, 11, 6, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 16)(72, "h6", 43);
      \u0275\u0275element(73, "i", 45);
      \u0275\u0275text(74, "Qualit\xE9 & Performance ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 20);
      \u0275\u0275template(76, SuperAdminDashboardComponent_div_76_Template, 11, 6, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 46)(78, "div", 35)(79, "div")(80, "h5", 26);
      \u0275\u0275element(81, "i", 47);
      \u0275\u0275text(82, "Formations actives ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 9);
      \u0275\u0275text(84, "Aper\xE7u des formations : inscrits & progression");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "button", 48);
      \u0275\u0275listener("click", function SuperAdminDashboardComponent_Template_button_click_85_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshData());
      });
      \u0275\u0275element(86, "i", 49);
      \u0275\u0275text(87, "Voir toutes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 28);
      \u0275\u0275template(89, SuperAdminDashboardComponent_div_89_Template, 28, 3, "div", 39)(90, SuperAdminDashboardComponent_ng_template_90_Template, 6, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 40);
      \u0275\u0275element(93, "hr", 19);
      \u0275\u0275elementStart(94, "span", 41);
      \u0275\u0275element(95, "i", 50);
      \u0275\u0275text(96, "M\xE9triques Avanc\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "hr", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 16)(99, "h6", 43);
      \u0275\u0275element(100, "i", 51);
      \u0275\u0275text(101, "Activit\xE9 Utilisateurs ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 20)(103, "div", 52)(104, "div", 53)(105, "div", 54)(106, "div", 55)(107, "div")(108, "p", 56);
      \u0275\u0275text(109, "Utilisateurs actifs / mois (MAU)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(110, SuperAdminDashboardComponent_div_110_Template, 2, 0, "div", 57)(111, SuperAdminDashboardComponent_h4_111_Template, 3, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span", 59);
      \u0275\u0275element(113, "i", 60);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(114, "div", 52)(115, "div", 53)(116, "div", 54)(117, "div", 55)(118, "div")(119, "p", 56);
      \u0275\u0275text(120, "Utilisateurs actifs / semaine (WAU)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(121, SuperAdminDashboardComponent_div_121_Template, 2, 0, "div", 57)(122, SuperAdminDashboardComponent_h4_122_Template, 2, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "span", 61);
      \u0275\u0275element(124, "i", 62);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(125, "div", 52)(126, "div", 53)(127, "div", 54)(128, "div", 55)(129, "div")(130, "p", 56);
      \u0275\u0275text(131, "Taux d'activation des comptes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(132, SuperAdminDashboardComponent_div_132_Template, 2, 0, "div", 57)(133, SuperAdminDashboardComponent_h4_133_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span", 63);
      \u0275\u0275element(135, "i", 64);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(136, "div", 52)(137, "div", 53)(138, "div", 54)(139, "div", 55)(140, "div")(141, "p", 56);
      \u0275\u0275text(142, "Taux d'engagement global");
      \u0275\u0275elementEnd();
      \u0275\u0275template(143, SuperAdminDashboardComponent_div_143_Template, 2, 0, "div", 57)(144, SuperAdminDashboardComponent_h4_144_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "span", 65);
      \u0275\u0275element(146, "i", 66);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 22)(148, "div", 67)(149, "div", 24)(150, "div", 25)(151, "h6", 43);
      \u0275\u0275element(152, "i", 68);
      \u0275\u0275text(153, "Croissance mensuelle des inscriptions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 54);
      \u0275\u0275template(155, SuperAdminDashboardComponent_div_155_Template, 2, 9, "div", 69)(156, SuperAdminDashboardComponent_div_156_Template, 2, 0, "div", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "div", 71)(158, "div", 24)(159, "div", 72)(160, "span", 73);
      \u0275\u0275element(161, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 75);
      \u0275\u0275text(163, "Croissance vs mois pr\xE9c\xE9dent");
      \u0275\u0275elementEnd();
      \u0275\u0275template(164, SuperAdminDashboardComponent_div_164_Template, 2, 0, "div", 57)(165, SuperAdminDashboardComponent_ng_container_165_Template, 5, 6, "ng-container", 69);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 16)(167, "h6", 43);
      \u0275\u0275element(168, "i", 44);
      \u0275\u0275text(169, "M\xE9triques Formation Avanc\xE9es ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 20)(171, "div", 52)(172, "div", 53)(173, "div", 54)(174, "div", 55)(175, "div")(176, "p", 56);
      \u0275\u0275text(177, "Cours publi\xE9s (total)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(178, SuperAdminDashboardComponent_div_178_Template, 2, 0, "div", 57)(179, SuperAdminDashboardComponent_h4_179_Template, 2, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span", 63);
      \u0275\u0275element(181, "i", 76);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(182, "div", 52)(183, "div", 53)(184, "div", 54)(185, "div", 55)(186, "div")(187, "p", 56);
      \u0275\u0275text(188, "Cours actifs vs obsol\xE8tes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(189, SuperAdminDashboardComponent_div_189_Template, 2, 0, "div", 57)(190, SuperAdminDashboardComponent_h4_190_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "span", 61);
      \u0275\u0275element(192, "i", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(193, SuperAdminDashboardComponent_div_193_Template, 2, 2, "div", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "div", 52)(195, "div", 53)(196, "div", 54)(197, "div", 55)(198, "div")(199, "p", 56);
      \u0275\u0275text(200, "Taux moyen de compl\xE9tion global");
      \u0275\u0275elementEnd();
      \u0275\u0275template(201, SuperAdminDashboardComponent_div_201_Template, 2, 0, "div", 57)(202, SuperAdminDashboardComponent_h4_202_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "span", 59);
      \u0275\u0275element(204, "i", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(205, SuperAdminDashboardComponent_div_205_Template, 2, 2, "div", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(206, "div", 52)(207, "div", 53)(208, "div", 54)(209, "div", 55)(210, "div")(211, "p", 56);
      \u0275\u0275text(212, "Heures de formation consomm\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275template(213, SuperAdminDashboardComponent_div_213_Template, 2, 0, "div", 57)(214, SuperAdminDashboardComponent_h4_214_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "span", 65);
      \u0275\u0275element(216, "i", 80);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(217, "div", 20)(218, "div", 81)(219, "div", 53)(220, "div", 54)(221, "div", 55)(222, "div")(223, "p", 56);
      \u0275\u0275text(224, "Score moyen satisfaction (NPS formation)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(225, SuperAdminDashboardComponent_div_225_Template, 2, 0, "div", 57)(226, SuperAdminDashboardComponent_h4_226_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "span", 65);
      \u0275\u0275element(228, "i", 82);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(229, "div", 81)(230, "div", 53)(231, "div", 54)(232, "div", 55)(233, "div")(234, "p", 56);
      \u0275\u0275text(235, "Taux de mise \xE0 jour des contenus");
      \u0275\u0275elementEnd();
      \u0275\u0275template(236, SuperAdminDashboardComponent_div_236_Template, 2, 0, "div", 57)(237, SuperAdminDashboardComponent_h4_237_Template, 4, 1, "h4", 58)(238, SuperAdminDashboardComponent_small_238_Template, 2, 0, "small", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "span", 84);
      \u0275\u0275element(240, "i", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(241, SuperAdminDashboardComponent_div_241_Template, 2, 2, "div", 78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(242, "div", 16)(243, "h6", 43);
      \u0275\u0275element(244, "i", 86);
      \u0275\u0275text(245, "Disponibilit\xE9 & Performance Technique ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 20)(247, "div", 52)(248, "div", 53)(249, "div", 54)(250, "div", 55)(251, "div")(252, "p", 56);
      \u0275\u0275text(253, "Disponibilit\xE9 plateforme (30j)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(254, SuperAdminDashboardComponent_div_254_Template, 2, 0, "div", 57)(255, SuperAdminDashboardComponent_h4_255_Template, 4, 5, "h4", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "span", 63);
      \u0275\u0275element(257, "i", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(258, SuperAdminDashboardComponent_div_258_Template, 2, 6, "div", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(259, "div", 52)(260, "div", 53)(261, "div", 54)(262, "div", 55)(263, "div")(264, "p", 56);
      \u0275\u0275text(265, "Temps moyen de chargement");
      \u0275\u0275elementEnd();
      \u0275\u0275template(266, SuperAdminDashboardComponent_div_266_Template, 2, 0, "div", 57)(267, SuperAdminDashboardComponent_h4_267_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "span", 61);
      \u0275\u0275element(269, "i", 89);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(270, "div", 52)(271, "div", 53)(272, "div", 54)(273, "div", 55)(274, "div")(275, "p", 56);
      \u0275\u0275text(276, "Taux d'erreurs techniques");
      \u0275\u0275elementEnd();
      \u0275\u0275template(277, SuperAdminDashboardComponent_div_277_Template, 2, 0, "div", 57)(278, SuperAdminDashboardComponent_h4_278_Template, 4, 5, "h4", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "span", 90);
      \u0275\u0275element(280, "i", 91);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(281, "div", 52)(282, "div", 53)(283, "div", 54)(284, "div", 55)(285, "div")(286, "p", 56);
      \u0275\u0275text(287, "Incidents s\xE9curit\xE9 / acc\xE8s (30j)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(288, SuperAdminDashboardComponent_div_288_Template, 2, 0, "div", 57)(289, SuperAdminDashboardComponent_h4_289_Template, 2, 5, "h4", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "span", 90);
      \u0275\u0275element(291, "i", 92);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(292, "div", 16)(293, "h6", 43);
      \u0275\u0275element(294, "i", 93);
      \u0275\u0275text(295, "Support Utilisateur ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "div", 20)(297, "div", 52)(298, "div", 53)(299, "div", 54)(300, "div", 55)(301, "div")(302, "p", 56);
      \u0275\u0275text(303, "Tickets ouverts");
      \u0275\u0275elementEnd();
      \u0275\u0275template(304, SuperAdminDashboardComponent_div_304_Template, 2, 0, "div", 57)(305, SuperAdminDashboardComponent_h4_305_Template, 2, 6, "h4", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "span", 65);
      \u0275\u0275element(307, "i", 94);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(308, "div", 52)(309, "div", 53)(310, "div", 54)(311, "div", 55)(312, "div")(313, "p", 56);
      \u0275\u0275text(314, "Tickets r\xE9solus");
      \u0275\u0275elementEnd();
      \u0275\u0275template(315, SuperAdminDashboardComponent_div_315_Template, 2, 0, "div", 57)(316, SuperAdminDashboardComponent_h4_316_Template, 2, 1, "h4", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "span", 63);
      \u0275\u0275element(318, "i", 96);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(319, "div", 52)(320, "div", 53)(321, "div", 54)(322, "div", 55)(323, "div")(324, "p", 56);
      \u0275\u0275text(325, "D\xE9lai moyen de r\xE9solution (SLA)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(326, SuperAdminDashboardComponent_div_326_Template, 2, 0, "div", 57)(327, SuperAdminDashboardComponent_h4_327_Template, 4, 1, "h4", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "span", 61);
      \u0275\u0275element(329, "i", 97);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(330, "div", 52)(331, "div", 53)(332, "div", 54)(333, "div", 55)(334, "div")(335, "p", 56);
      \u0275\u0275text(336, "SLA respect\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275template(337, SuperAdminDashboardComponent_div_337_Template, 2, 0, "div", 57)(338, SuperAdminDashboardComponent_h4_338_Template, 4, 5, "h4", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "span", 59);
      \u0275\u0275element(340, "i", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(341, SuperAdminDashboardComponent_div_341_Template, 2, 6, "div", 78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(342, "div", 16)(343, "h6", 43);
      \u0275\u0275element(344, "i", 99);
      \u0275\u0275text(345, "Conformit\xE9 & S\xE9curit\xE9 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "div", 100)(347, "div", 81)(348, "div", 53)(349, "div", 54)(350, "div", 55)(351, "div")(352, "p", 56);
      \u0275\u0275text(353, "Utilisateurs conformes formations obligatoires");
      \u0275\u0275elementEnd();
      \u0275\u0275template(354, SuperAdminDashboardComponent_div_354_Template, 2, 0, "div", 57)(355, SuperAdminDashboardComponent_h4_355_Template, 4, 5, "h4", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "span", 63);
      \u0275\u0275element(357, "i", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(358, SuperAdminDashboardComponent_div_358_Template, 2, 6, "div", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(359, "div", 81)(360, "div", 53)(361, "div", 54)(362, "div", 55)(363, "div")(364, "p", 56);
      \u0275\u0275text(365, "\xC9carts de conformit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275template(366, SuperAdminDashboardComponent_div_366_Template, 2, 0, "div", 57)(367, SuperAdminDashboardComponent_h4_367_Template, 2, 5, "h4", 87)(368, SuperAdminDashboardComponent_small_368_Template, 2, 0, "small", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "span", 90);
      \u0275\u0275element(370, "i", 102);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(371, "div", 81)(372, "div", 53)(373, "div", 54)(374, "div", 55)(375, "div")(376, "p", 56);
      \u0275\u0275text(377, "Incidents s\xE9curit\xE9 / acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275template(378, SuperAdminDashboardComponent_div_378_Template, 2, 0, "div", 57)(379, SuperAdminDashboardComponent_h4_379_Template, 2, 5, "h4", 87)(380, SuperAdminDashboardComponent_small_380_Template, 2, 0, "small", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "span", 90);
      \u0275\u0275element(382, "i", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(383, SuperAdminDashboardComponent_div_383_Template, 4, 2, "div", 103);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(384, "div", 46)(385, "div", 25)(386, "h5", 26);
      \u0275\u0275element(387, "i", 104);
      \u0275\u0275text(388, "\xC9volution Mensuelle RH ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "p", 9);
      \u0275\u0275text(390, "Suivi des formations sur 7 mois");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "div", 28)(392, "div", 29)(393, "div", 30);
      \u0275\u0275template(394, SuperAdminDashboardComponent_div_394_Template, 4, 3, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(395, "div", 105);
      \u0275\u0275template(396, SuperAdminDashboardComponent_div_396_Template, 2, 10, "div", 106)(397, SuperAdminDashboardComponent_ng_template_397_Template, 6, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const picker_r12 = \u0275\u0275reference(13);
      const chartLoading_r13 = \u0275\u0275reference(40);
      const tableLoading_r14 = \u0275\u0275reference(56);
      const rhTableLoadingTpl_r15 = \u0275\u0275reference(91);
      const rhChartLoadingTpl_r16 = \u0275\u0275reference(398);
      \u0275\u0275advance(8);
      \u0275\u0275property("rangePicker", picker_r12)("disabled", ctx.isLoading);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.isLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.statisticsCards);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.chartLegend);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", chartLoading_r13);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(76, _c02, ctx.routes.superadminCompanyManagement));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", tableLoading_r14);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.rhStatisticsCards);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.rhMetricsRow1);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.rhMetricsRow2);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", rhTableLoadingTpl_r15);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading && (ctx.superStats == null ? null : ctx.superStats.sla_respecte_pct) != null);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.superStatsLoading);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.rhChartLegend);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", rhChartLoadingTpl_r16);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    MatDatepickerModule,
    MatDateRangeInput,
    MatStartDate,
    MatEndDate,
    MatDateRangePicker,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    NgApexchartsModule,
    ChartComponent,
    RouterModule,
    RouterLink,
    DecimalPipe,
    DatePipe
  ], styles: ["\n\n.stat-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.icon-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  position: relative;\n}\n.icon-box[_ngcontent-%COMP%]   .icon-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n}\n.icon-box.bg-primary-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(13, 110, 253, 0.1);\n}\n.icon-box.bg-info-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(23, 162, 184, 0.1);\n}\n.icon-box.bg-success-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(40, 167, 69, 0.1);\n}\n.icon-box.bg-warning-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(255, 193, 7, 0.1);\n}\n.progress[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  transition: width 0.3s ease;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar.bg-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar.bg-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  height: 28px;\n  border-radius: 4px;\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton.skeleton-text[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.icon-box.bg-danger-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.rh-formation-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n}\n.rh-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 60px;\n  margin: 0 auto;\n}\n.rh-legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.rh-chart-min-height[_ngcontent-%COMP%] {\n  min-height: 350px;\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n}\n/*# sourceMappingURL=superadmin-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-dashboard", standalone: true, imports: [
      CommonModule,
      MatDatepickerModule,
      MatInputModule,
      MatNativeDateModule,
      FormsModule,
      NgApexchartsModule,
      RouterModule
    ], providers: [DecimalPipe], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  EN-T\xCATE DE PAGE                                         -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">\r
  <div>\r
    <h4 class="fw-bold text-dark mb-1">\r
      <i class="fas fa-tachometer-alt text-primary me-2"></i>Dashboard Super Administrateur\r
    </h4>\r
    <p class="text-muted mb-0 small">Vue d'ensemble de la plateforme \u2014 supervision globale &amp; m\xE9triques RH</p>\r
  </div>\r
  <div class="d-flex gap-2 align-items-center flex-wrap">\r
    <mat-date-range-input [rangePicker]="picker" [disabled]="isLoading" #range="matDateRangeInput">\r
      <input matStartDate placeholder="Date de d\xE9but"\r
             (dateChange)="onDateRangeChange({ startDate: $event.value, endDate: range.value?.end || null })">\r
      <input matEndDate placeholder="Date de fin"\r
             (dateChange)="onDateRangeChange({ startDate: range.value?.start || null, endDate: $event.value })">\r
    </mat-date-range-input>\r
    <mat-date-range-picker #picker></mat-date-range-picker>\r
    <button class="btn btn-sm btn-outline-secondary"\r
            (click)="refreshData()"\r
            [disabled]="isLoading"\r
            type="button"\r
            aria-label="Actualiser les donn\xE9es">\r
      <i class="fas fa-sync-alt me-1" [class.fa-spin]="isLoading"></i>Actualiser\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION : VUE GLOBALE                                   -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <span class="badge bg-primary px-3 py-2 me-3 fs-12 fw-semibold">\r
    <i class="fas fa-globe me-1"></i>Vue Globale\r
  </span>\r
  <hr class="flex-grow-1">\r
</div>\r
\r
<!-- KPI Entreprises / Clients / Formations / Utilisateurs -->\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let stat of statisticsCards">\r
    <div class="card h-100 shadow-sm border-0 stat-card" [class]="'stat-card-' + stat.type">\r
      <div class="card-body p-3">\r
        <div class="d-flex align-items-center">\r
          <div class="flex-shrink-0 me-3">\r
            <span class="icon-box" [ngClass]="'bg-' + stat.color + '-transparent'">\r
              <img *ngIf="stat.type === 'companies'"   src="assets/img/icon/icon-23.svg"      alt="Entreprises" class="icon-img">\r
              <img *ngIf="stat.type === 'clients'"     src="assets/img/icon/user-octagon.svg" alt="Clients"     class="icon-img">\r
              <img *ngIf="stat.type === 'formations'"  src="assets/img/icon/graduation.svg"   alt="Formations"  class="icon-img">\r
              <img *ngIf="stat.type === 'users'"       src="assets/img/icon/users.svg"        alt="Utilisateurs" class="icon-img">\r
            </span>\r
          </div>\r
          <div class="flex-grow-1">\r
            <p class="text-muted mb-1 small fw-medium">{{ stat.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fs-24 mb-0 fw-bold text-dark"\r
                [attr.aria-label]="stat.label + ': ' + stat.value">\r
              {{ stat.value | number }}\r
            </h4>\r
            <small class="text-success d-flex align-items-center mt-1">\r
              <i class="fas fa-arrow-up me-1"></i>+{{ stat.growth }}% ce mois\r
            </small>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="card-footer bg-transparent border-0 p-2">\r
        <div class="progress" style="height: 4px;">\r
          <div class="progress-bar" [class]="'bg-' + stat.color"\r
               [style.width.%]="stat.progress" role="progressbar"\r
               [attr.aria-valuenow]="stat.progress" aria-valuemin="0" aria-valuemax="100"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \xC9volution Mensuelle (gauche) + Entreprises R\xE9centes (droite) -->\r
<div class="row g-4 mb-4">\r
\r
  <!-- \u2500\u2500 Graphique \xC9volution Mensuelle \u2500\u2500 -->\r
  <div class="col-lg-7">\r
    <div class="card shadow-sm border-0 h-100">\r
      <div class="card-header bg-white border-bottom">\r
        <h5 class="fw-bold mb-1 text-dark">\r
          <i class="fas fa-chart-line text-primary me-2"></i>\xC9volution Mensuelle\r
        </h5>\r
        <p class="text-muted mb-0 small">Suivi des performances sur 7 mois</p>\r
      </div>\r
      <div class="card-body p-0">\r
        <!-- L\xE9gende -->\r
        <div class="chart-legend p-3 border-bottom bg-light">\r
          <div class="row text-center">\r
            <div class="col-3" *ngFor="let serie of chartLegend">\r
              <span class="legend-color d-inline-block rounded-circle me-2"\r
                    [style.background-color]="serie.color"></span>\r
              <small class="text-muted">{{ serie.name }}</small>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Graphique -->\r
        <div style="min-height: 300px;">\r
          <div *ngIf="!isLoading; else chartLoading" class="p-3"\r
               role="img" aria-label="Graphique des statistiques mensuelles">\r
            <apx-chart\r
              [series]="Statisticschart.series"\r
              [chart]="Statisticschart.chart"\r
              [xaxis]="Statisticschart.xaxis"\r
              [yaxis]="Statisticschart.yaxis"\r
              [stroke]="Statisticschart.stroke"\r
              [tooltip]="Statisticschart.tooltip"\r
              [dataLabels]="Statisticschart.dataLabels"\r
              [fill]="Statisticschart.fill"\r
              [plotOptions]="Statisticschart.plotOptions"\r
              [grid]="Statisticschart.grid"\r
              [colors]="Statisticschart.colors">\r
            </apx-chart>\r
          </div>\r
          <ng-template #chartLoading>\r
            <div class="d-flex flex-column align-items-center justify-content-center p-5">\r
              <div class="spinner-border text-primary mb-3" role="status">\r
                <span class="visually-hidden">Chargement du graphique...</span>\r
              </div>\r
              <p class="text-muted mb-0">Chargement des statistiques...</p>\r
            </div>\r
          </ng-template>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Entreprises R\xE9centes \u2500\u2500 -->\r
  <div class="col-lg-5">\r
    <div class="card shadow-sm border-0 h-100">\r
      <div class="card-header bg-white border-bottom d-flex align-items-center justify-content-between">\r
        <div>\r
          <h5 class="fw-bold mb-1 text-dark">\r
            <i class="fas fa-building text-primary me-2"></i>Entreprises R\xE9centes\r
          </h5>\r
          <p class="text-muted mb-0 small">Derni\xE8res entreprises cr\xE9\xE9es</p>\r
        </div>\r
        <a class="btn btn-sm btn-outline-primary"\r
           [routerLink]="[routes.superadminCompanyManagement]"\r
           type="button">\r
          <i class="fas fa-eye me-1"></i>Voir toutes\r
        </a>\r
      </div>\r
      <div class="card-body p-0">\r
        <div *ngIf="!isLoading; else tableLoading" class="table-responsive">\r
          <table class="table table-hover mb-0"\r
                 role="table" aria-label="Entreprises r\xE9cemment cr\xE9\xE9es">\r
            <thead class="table-light">\r
              <tr>\r
                <th scope="col" class="border-0 ps-3">Entreprise</th>\r
                <th scope="col" class="border-0 text-center">Clients</th>\r
                <th scope="col" class="border-0 text-center">Statut</th>\r
                <th scope="col" class="border-0 text-center">Cr\xE9\xE9e le</th>\r
                <th scope="col" class="border-0"><span class="visually-hidden">Actions</span></th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let entreprise of recentEntreprises; trackBy: trackByCompanyId">\r
                <td class="ps-3 py-2">\r
                  <div class="d-flex align-items-center">\r
                    <img [src]="entreprise.logo || 'assets/img/default-company.svg'"\r
                         [alt]="'Logo ' + entreprise.nom"\r
                         class="rounded-3 me-2 shadow-sm"\r
                         style="width: 36px; height: 36px; object-fit: cover;"\r
                         loading="lazy">\r
                    <div>\r
                      <h6 class="fw-semibold mb-0 small text-dark">{{ entreprise.nom }}</h6>\r
                      <span class="text-muted" style="font-size: 11px;">{{ entreprise.secteur }}</span>\r
                    </div>\r
                  </div>\r
                </td>\r
                <td class="text-center py-2">\r
                  <span class="badge bg-primary-light text-primary fw-semibold">\r
                    {{ entreprise.nombreClients }}\r
                  </span>\r
                </td>\r
                <td class="text-center py-2">\r
                  <span class="badge"\r
                        [ngClass]="{\r
                          'bg-success text-white': entreprise.statut === 'active',\r
                          'bg-warning text-dark':  entreprise.statut === 'pending',\r
                          'bg-danger text-white':  entreprise.statut === 'inactive'\r
                        }">\r
                    {{ getStatusLabel(entreprise.statut) }}\r
                  </span>\r
                </td>\r
                <td class="text-center py-2 small text-muted">\r
                  {{ entreprise.dateCreation | date:'dd/MM/yy' }}\r
                </td>\r
                <td class="text-end pe-3 py-2">\r
                  <a class="btn btn-sm btn-outline-secondary"\r
                     [routerLink]="[routes.superadminCompanydetails, entreprise.id]"\r
                     title="Voir les d\xE9tails">\r
                    <i class="fas fa-eye"></i>\r
                  </a>\r
                </td>\r
              </tr>\r
              <tr *ngIf="recentEntreprises.length === 0">\r
                <td colspan="5" class="text-center py-5 text-muted">\r
                  <i class="fas fa-building fa-2x d-block mb-2"></i>\r
                  Aucune entreprise r\xE9cente\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
        <ng-template #tableLoading>\r
          <div class="d-flex flex-column align-items-center justify-content-center p-5">\r
            <div class="spinner-border text-primary mb-3" role="status">\r
              <span class="visually-hidden">Chargement des entreprises...</span>\r
            </div>\r
            <p class="text-muted mb-0">Chargement...</p>\r
          </div>\r
        </ng-template>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div><!-- /row Vue Globale -->\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  S\xC9PARATEUR \u2014 RH & Formation                             -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center my-4">\r
  <hr class="flex-grow-1">\r
  <span class="px-3 fw-bold text-muted small text-uppercase">\r
    <i class="fas fa-user-cog me-2 text-primary"></i>M\xE9triques RH &amp; Formation\r
  </span>\r
  <hr class="flex-grow-1">\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION : RH \u2014 KPI Cards                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let stat of rhStatisticsCards">\r
    <div class="card h-100 shadow-sm border-0" [class]="'stat-card-' + stat.type">\r
      <div class="card-body p-3">\r
        <div class="d-flex align-items-center">\r
          <div class="flex-shrink-0 me-3">\r
            <span class="icon-box" [ngClass]="'bg-' + stat.color + '-transparent'">\r
              <img *ngIf="stat.type === 'utilisateurs'"  src="assets/img/icon/users.svg"         alt="Utilisateurs" class="icon-img">\r
              <img *ngIf="stat.type === 'formateurs'"    src="assets/img/icon/user-octagon.svg"  alt="Formateurs"   class="icon-img">\r
              <img *ngIf="stat.type === 'formations'"    src="assets/img/icon/graduation.svg"    alt="Formations"   class="icon-img">\r
              <img *ngIf="stat.type === 'demandes'"      src="assets/img/icon/icon-23.svg"       alt="Demandes"     class="icon-img">\r
            </span>\r
          </div>\r
          <div class="flex-grow-1">\r
            <p class="text-muted mb-1 small fw-medium">{{ stat.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fs-24 mb-0 fw-bold text-dark">{{ stat.value | number }}</h4>\r
            <small class="text-success d-flex align-items-center mt-1">\r
              <i class="fas fa-arrow-up me-1"></i>+{{ stat.growth }}% ce mois\r
            </small>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="card-footer bg-transparent border-0 p-2">\r
        <div class="progress" style="height: 4px;">\r
          <div class="progress-bar" [class]="'bg-' + stat.color"\r
               [style.width.%]="stat.progress" role="progressbar"\r
               [attr.aria-valuenow]="stat.progress" aria-valuemin="0" aria-valuemax="100"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  RH \u2014 Formations & Sessions                              -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-book me-2 text-success"></i>Formations &amp; Sessions\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let card of rhMetricsRow1">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">{{ card.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fw-bold mb-0">\r
              {{ card.value }}<span class="fs-14 text-muted ms-1">{{ card.suffix }}</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box" [ngClass]="'bg-' + card.color + '-transparent'">\r
            <i [class]="card.icon + ' fs-24 text-' + card.color"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  RH \u2014 Qualit\xE9 & Performance                              -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-monitor me-2 text-info"></i>Qualit\xE9 &amp; Performance\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let card of rhMetricsRow2">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">{{ card.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fw-bold mb-0">\r
              {{ card.value }}<span class="fs-14 text-muted ms-1">{{ card.suffix }}</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box" [ngClass]="'bg-' + card.color + '-transparent'">\r
            <i [class]="card.icon + ' fs-24 text-' + card.color"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  RH \u2014 Tableau des formations actives                     -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="card shadow-sm border-0 mb-4">\r
  <div class="card-header bg-white border-bottom d-flex align-items-center justify-content-between">\r
    <div>\r
      <h5 class="fw-bold mb-1 text-dark">\r
        <i class="isax isax-book-1 text-success me-2"></i>Formations actives\r
      </h5>\r
      <p class="text-muted mb-0 small">Aper\xE7u des formations : inscrits &amp; progression</p>\r
    </div>\r
    <button class="btn btn-sm btn-outline-primary" type="button" (click)="refreshData()">\r
      <i class="isax isax-eye me-1"></i>Voir toutes\r
    </button>\r
  </div>\r
  <div class="card-body p-0">\r
    <div *ngIf="!isLoading; else rhTableLoadingTpl" class="table-responsive">\r
      <table class="table table-hover mb-0" aria-label="Formations actives">\r
        <thead class="table-light">\r
          <tr>\r
            <th class="ps-3 border-0"><i class="isax isax-book-1 me-1 text-muted"></i>Formation</th>\r
            <th class="text-center border-0"><i class="isax isax-people me-1 text-muted"></i>Inscrits</th>\r
            <th class="text-center border-0"><i class="isax isax-chart-2 me-1 text-muted"></i>Progression</th>\r
            <th class="text-center border-0"><i class="isax isax-user-tick me-1 text-muted"></i>Compl\xE9t\xE9s</th>\r
            <th class="text-center border-0"><i class="isax isax-info-circle me-1 text-muted"></i>Statut</th>\r
            <th class="text-center border-0"><i class="isax isax-calendar me-1 text-muted"></i>Depuis</th>\r
            <th class="border-0"><span class="visually-hidden">Actions</span></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let formation of rhFormationsRecentes; trackBy: trackByRhFormationId" class="align-middle">\r
            <td class="ps-3 py-3">\r
              <div class="d-flex align-items-center">\r
                <img [src]="formation.image || 'assets/img/default-course.svg'"\r
                     [alt]="formation.titre"\r
                     class="rh-formation-avatar rounded-3 shadow-sm me-3"\r
                     loading="lazy">\r
                <h6 class="fw-semibold mb-0 text-dark">{{ formation.titre }}</h6>\r
              </div>\r
            </td>\r
            <td class="text-center">\r
              <span class="fw-semibold">{{ formation.inscrits }}</span>\r
            </td>\r
            <td class="text-center">\r
              <div class="rh-progress-bar progress">\r
                <div class="progress-bar bg-info" [style.width.%]="formation.progression"\r
                     role="progressbar"\r
                     [attr.aria-valuenow]="formation.progression"\r
                     aria-valuemin="0" aria-valuemax="100"\r
                     [attr.aria-label]="'Progression : ' + formation.progression + '%'"></div>\r
              </div>\r
            </td>\r
            <td class="text-center">\r
              <span class="badge bg-success-transparent text-success fw-semibold">\r
                {{ formation.completes || 0 }}\r
              </span>\r
            </td>\r
            <td class="text-center">\r
              <span class="badge fw-medium"\r
                    [ngClass]="{\r
                      'bg-success text-white':   formation.statut === 'publie',\r
                      'bg-warning text-dark':    formation.statut === 'brouillon',\r
                      'bg-info text-white':      formation.statut === 'en_cours',\r
                      'bg-secondary text-white': formation.statut === 'archive'\r
                    }">\r
                <i class="fas me-1"\r
                   [ngClass]="{\r
                     'fa-check-circle': formation.statut === 'publie',\r
                     'fa-edit':         formation.statut === 'brouillon',\r
                     'fa-play-circle':  formation.statut === 'en_cours',\r
                     'fa-archive':      formation.statut === 'archive'\r
                   }"></i>\r
                {{ getRhStatutLabel(formation.statut) }}\r
              </span>\r
            </td>\r
            <td class="text-center">\r
              <div class="text-dark fw-medium small">{{ formation.dateCreation | date:'dd/MM/yyyy' }}</div>\r
              <small class="text-muted">{{ getRelativeDate(formation.dateCreation) }}</small>\r
            </td>\r
            <td class="text-end pe-3">\r
              <button class="btn btn-sm btn-outline-secondary" title="Voir les d\xE9tails" type="button">\r
                <i class="isax isax-eye"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="rhFormationsRecentes.length === 0">\r
            <td colspan="7" class="text-center py-5">\r
              <i class="isax isax-book-1 display-4 text-muted d-block mb-3"></i>\r
              <h6 class="text-muted mb-1">Aucune formation disponible</h6>\r
              <p class="text-muted small mb-0">Les formations appara\xEEtront ici d\xE8s leur cr\xE9ation.</p>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <ng-template #rhTableLoadingTpl>\r
      <div class="d-flex flex-column align-items-center justify-content-center p-5">\r
        <div class="spinner-border text-primary mb-3" role="status">\r
          <span class="visually-hidden">Chargement...</span>\r
        </div>\r
        <p class="text-muted mb-0">Chargement des formations...</p>\r
      </div>\r
    </ng-template>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  S\xC9PARATEUR \u2014 M\xE9triques Avanc\xE9es                                     -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center my-4">\r
  <hr class="flex-grow-1">\r
  <span class="px-3 fw-bold text-muted small text-uppercase">\r
    <i class="fas fa-chart-bar me-2 text-warning"></i>M\xE9triques Avanc\xE9es\r
  </span>\r
  <hr class="flex-grow-1">\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION 1 \u2014 Utilisateurs Actifs (MAU / WAU / Activation / Engagement) -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-people me-2 text-primary"></i>Activit\xE9 Utilisateurs\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
\r
  <!-- MAU -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Utilisateurs actifs / mois (MAU)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.mau ?? '\u2014' }}<span class="fs-14 text-muted ms-1"></span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-primary-transparent">\r
            <i class="isax isax-people fs-24 text-primary"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- WAU -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Utilisateurs actifs / semaine (WAU)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">{{ superStats?.wau ?? '\u2014' }}</h4>\r
          </div>\r
          <span class="icon-box bg-info-transparent">\r
            <i class="isax isax-user-tick fs-24 text-info"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Taux activation -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Taux d'activation des comptes</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.taux_activation ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-success-transparent">\r
            <i class="isax isax-verify fs-24 text-success"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Taux engagement -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Taux d'engagement global</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.taux_engagement ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-warning-transparent">\r
            <i class="isax isax-chart-2 fs-24 text-warning"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- Croissance mensuelle inscriptions (graphique + valeur) -->\r
<div class="row g-4 mb-4">\r
  <div class="col-lg-8">\r
    <div class="card shadow-sm border-0 h-100">\r
      <div class="card-header bg-white border-bottom">\r
        <h6 class="fw-bold mb-0 text-dark">\r
          <i class="fas fa-user-plus text-primary me-2"></i>Croissance mensuelle des inscriptions\r
        </h6>\r
      </div>\r
      <div class="card-body">\r
        <div *ngIf="!superStatsLoading">\r
          <apx-chart\r
            [series]="inscriptionsChart.series"\r
            [chart]="inscriptionsChart.chart"\r
            [xaxis]="inscriptionsChart.xaxis"\r
            [yaxis]="inscriptionsChart.yaxis"\r
            [plotOptions]="inscriptionsChart.plotOptions"\r
            [dataLabels]="inscriptionsChart.dataLabels"\r
            [colors]="inscriptionsChart.colors"\r
            [grid]="inscriptionsChart.grid"\r
            [tooltip]="inscriptionsChart.tooltip">\r
          </apx-chart>\r
        </div>\r
        <div *ngIf="superStatsLoading" class="d-flex justify-content-center align-items-center" style="height:160px">\r
          <div class="spinner-border text-primary" role="status"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-lg-4">\r
    <div class="card shadow-sm border-0 h-100">\r
      <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">\r
        <span class="icon-box bg-primary-transparent mb-3">\r
          <i class="fas fa-arrow-trend-up fs-24 text-primary"></i>\r
        </span>\r
        <p class="text-muted small fw-medium mb-1">Croissance vs mois pr\xE9c\xE9dent</p>\r
        <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
        <ng-container *ngIf="!superStatsLoading">\r
          <h2 class="fw-bold mb-0"\r
              [ngClass]="{\r
                'text-success': (superStats?.croissance_inscriptions ?? 0) >= 0,\r
                'text-danger':  (superStats?.croissance_inscriptions ?? 0) < 0\r
              }">\r
            {{ (superStats?.croissance_inscriptions ?? 0) >= 0 ? '+' : '' }}{{ superStats?.croissance_inscriptions ?? '\u2014' }}%\r
          </h2>\r
          <small class="text-muted">ce mois-ci</small>\r
        </ng-container>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION 2 \u2014 Formation : cours, compl\xE9tion, heures, satisfaction      -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-book me-2 text-success"></i>M\xE9triques Formation Avanc\xE9es\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
\r
  <!-- Cours publi\xE9s -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Cours publi\xE9s (total)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">{{ superStats?.total_formations_publiees ?? '\u2014' }}</h4>\r
          </div>\r
          <span class="icon-box bg-success-transparent">\r
            <i class="isax isax-book fs-24 text-success"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- % Actifs vs Obsol\xE8tes -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Cours actifs vs obsol\xE8tes</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.pct_actifs_vs_obsoletes ?? '\u2014' }}<span class="fs-14 text-muted ms-1">% actifs</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-info-transparent">\r
            <i class="isax isax-archive fs-24 text-info"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading" class="progress mt-2" style="height:4px">\r
          <div class="progress-bar bg-success" [style.width.%]="superStats?.pct_actifs_vs_obsoletes ?? 0"\r
               role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Taux compl\xE9tion global -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Taux moyen de compl\xE9tion global</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.taux_completion_global ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-primary-transparent">\r
            <i class="isax isax-chart-2 fs-24 text-primary"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading" class="progress mt-2" style="height:4px">\r
          <div class="progress-bar bg-primary" [style.width.%]="superStats?.taux_completion_global ?? 0"\r
               role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Heures consomm\xE9es -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Heures de formation consomm\xE9es</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.total_heures_consommees ?? '\u2014' }}<span class="fs-14 text-muted ms-1">h</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-warning-transparent">\r
            <i class="isax isax-clock fs-24 text-warning"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
<div class="row g-3 mb-4">\r
\r
  <!-- Score satisfaction NPS -->\r
  <div class="col-md-6 col-xl-4">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Score moyen satisfaction (NPS formation)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.score_satisfaction != null ? superStats!.score_satisfaction : '\u2014' }}\r
              <span class="fs-14 text-muted ms-1">/100</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-warning-transparent">\r
            <i class="isax isax-star fs-24 text-warning"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Taux MAJ contenus -->\r
  <div class="col-md-6 col-xl-4">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Taux de mise \xE0 jour des contenus</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.taux_mise_a_jour_contenu ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
            <small *ngIf="!superStatsLoading" class="text-muted">formations mises \xE0 jour ces 3 mois</small>\r
          </div>\r
          <span class="icon-box bg-teal-transparent">\r
            <i class="isax isax-refresh fs-24 text-teal"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading" class="progress mt-2" style="height:4px">\r
          <div class="progress-bar bg-teal" [style.width.%]="superStats?.taux_mise_a_jour_contenu ?? 0"\r
               role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION 3 \u2014 Technique : Uptime / Perf / Erreurs                      -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-monitor me-2 text-teal"></i>Disponibilit\xE9 &amp; Performance Technique\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
\r
  <!-- Uptime -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Disponibilit\xE9 plateforme (30j)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-success': (superStats?.uptime_pct ?? 0) >= 99, 'text-warning': (superStats?.uptime_pct ?? 0) < 99}">\r
              {{ superStats?.uptime_pct ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-success-transparent">\r
            <i class="isax isax-cpu fs-24 text-success"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading" class="progress mt-2" style="height:4px">\r
          <div class="progress-bar"\r
               [ngClass]="{'bg-success': (superStats?.uptime_pct ?? 0) >= 99, 'bg-warning': (superStats?.uptime_pct ?? 0) < 99}"\r
               [style.width.%]="superStats?.uptime_pct ?? 0"\r
               role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Temps de chargement -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Temps moyen de chargement</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.avg_load_time_ms != null ? superStats!.avg_load_time_ms : '\u2014' }}\r
              <span class="fs-14 text-muted ms-1">ms</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-info-transparent">\r
            <i class="isax isax-timer fs-24 text-info"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Taux d'erreurs -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Taux d'erreurs techniques</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-danger': (superStats?.error_rate_pct ?? 0) > 1, 'text-success': (superStats?.error_rate_pct ?? 0) <= 1}">\r
              {{ superStats?.error_rate_pct ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-danger-transparent">\r
            <i class="isax isax-danger fs-24 text-danger"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Incidents s\xE9curit\xE9 -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Incidents s\xE9curit\xE9 / acc\xE8s (30j)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-danger': (superStats?.security_incidents ?? 0) > 0, 'text-success': (superStats?.security_incidents ?? 0) === 0}">\r
              {{ superStats?.security_incidents ?? 0 }}\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-danger-transparent">\r
            <i class="isax isax-shield-slash fs-24 text-danger"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION 4 \u2014 Support Tickets                                          -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-message-question me-2 text-warning"></i>Support Utilisateur\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
\r
  <!-- Tickets ouverts -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Tickets ouverts</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-danger': (superStats?.tickets_ouverts ?? 0) > 10, 'text-warning': (superStats?.tickets_ouverts ?? 0) > 0, 'text-success': (superStats?.tickets_ouverts ?? 0) === 0}">\r
              {{ superStats?.tickets_ouverts ?? 0 }}\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-warning-transparent">\r
            <i class="isax isax-message-question fs-24 text-warning"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Tickets r\xE9solus -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Tickets r\xE9solus</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0 text-success">\r
              {{ superStats?.tickets_resolus ?? 0 }}\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-success-transparent">\r
            <i class="isax isax-tick-circle fs-24 text-success"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- D\xE9lai moyen r\xE9solution -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">D\xE9lai moyen de r\xE9solution (SLA)</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0">\r
              {{ superStats?.delai_moyen_resolution_h != null ? superStats!.delai_moyen_resolution_h : '\u2014' }}\r
              <span class="fs-14 text-muted ms-1">h</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-info-transparent">\r
            <i class="isax isax-clock fs-24 text-info"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- SLA respect\xE9 % -->\r
  <div class="col-md-6 col-xl-3">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">SLA respect\xE9</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-success': (superStats?.sla_respecte_pct ?? 0) >= 90, 'text-warning': (superStats?.sla_respecte_pct ?? 0) < 90}">\r
              {{ superStats?.sla_respecte_pct != null ? superStats!.sla_respecte_pct : '\u2014' }}\r
              <span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-primary-transparent">\r
            <i class="isax isax-shield-tick fs-24 text-primary"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading && superStats?.sla_respecte_pct != null" class="progress mt-2" style="height:4px">\r
          <div class="progress-bar"\r
               [ngClass]="{'bg-success': superStats!.sla_respecte_pct! >= 90, 'bg-warning': superStats!.sla_respecte_pct! < 90}"\r
               [style.width.%]="superStats!.sla_respecte_pct!"\r
               role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  SECTION 5 \u2014 Conformit\xE9 R\xE9glementaire                                 -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-shield me-2 text-danger"></i>Conformit\xE9 &amp; S\xE9curit\xE9\r
  </h6>\r
</div>\r
<div class="row g-3 mb-5">\r
\r
  <!-- % conformit\xE9 formations obligatoires -->\r
  <div class="col-md-6 col-xl-4">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Utilisateurs conformes formations obligatoires</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-success': (superStats?.pct_conformite_formations_obligatoires ?? 0) >= 80, 'text-warning': (superStats?.pct_conformite_formations_obligatoires ?? 0) < 80}">\r
              {{ superStats?.pct_conformite_formations_obligatoires ?? '\u2014' }}<span class="fs-14 text-muted ms-1">%</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box bg-success-transparent">\r
            <i class="isax isax-shield-tick fs-24 text-success"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading" class="progress mt-2" style="height:4px">\r
          <div class="progress-bar"\r
               [ngClass]="{'bg-success': (superStats?.pct_conformite_formations_obligatoires ?? 0) >= 80, 'bg-warning': (superStats?.pct_conformite_formations_obligatoires ?? 0) < 80}"\r
               [style.width.%]="superStats?.pct_conformite_formations_obligatoires ?? 0"\r
               role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \xC9carts de conformit\xE9 -->\r
  <div class="col-md-6 col-xl-4">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">\xC9carts de conformit\xE9</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-danger': (superStats?.nb_ecarts_conformite ?? 0) > 0, 'text-success': (superStats?.nb_ecarts_conformite ?? 0) === 0}">\r
              {{ superStats?.nb_ecarts_conformite ?? 0 }}\r
            </h4>\r
            <small *ngIf="!superStatsLoading" class="text-muted">utilisateurs n'ayant pas termin\xE9 une formation obligatoire</small>\r
          </div>\r
          <span class="icon-box bg-danger-transparent">\r
            <i class="isax isax-warning-2 fs-24 text-danger"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Incidents s\xE9curit\xE9 (rappel avec lien audit) -->\r
  <div class="col-md-6 col-xl-4">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">Incidents s\xE9curit\xE9 / acc\xE8s</p>\r
            <div *ngIf="superStatsLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!superStatsLoading" class="fw-bold mb-0"\r
                [ngClass]="{'text-danger': (superStats?.security_incidents ?? 0) > 0, 'text-success': (superStats?.security_incidents ?? 0) === 0}">\r
              {{ superStats?.security_incidents ?? 0 }}\r
            </h4>\r
            <small *ngIf="!superStatsLoading" class="text-muted">ces 30 derniers jours</small>\r
          </div>\r
          <span class="icon-box bg-danger-transparent">\r
            <i class="isax isax-shield-slash fs-24 text-danger"></i>\r
          </span>\r
        </div>\r
        <div *ngIf="!superStatsLoading" class="mt-2">\r
          <a [routerLink]="['/superadmin/audit-logs']" class="btn btn-sm btn-outline-danger">\r
            <i class="isax isax-eye me-1"></i>Voir les logs\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  RH \u2014 Graphique \xC9volution Mensuelle RH                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="card shadow-sm border-0 mb-4">\r
  <div class="card-header bg-white border-bottom">\r
    <h5 class="fw-bold mb-1 text-dark">\r
      <i class="fas fa-chart-area text-info me-2"></i>\xC9volution Mensuelle RH\r
    </h5>\r
    <p class="text-muted mb-0 small">Suivi des formations sur 7 mois</p>\r
  </div>\r
  <div class="card-body p-0">\r
    <!-- L\xE9gende -->\r
    <div class="chart-legend p-3 border-bottom bg-light">\r
      <div class="row text-center">\r
        <div class="col-3" *ngFor="let serie of rhChartLegend">\r
          <span class="rh-legend-dot rounded-circle me-2 d-inline-block"\r
                [style.background-color]="serie.color"></span>\r
          <small class="text-muted">{{ serie.name }}</small>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- Graphique -->\r
    <div class="chart-container rh-chart-min-height">\r
      <div *ngIf="!isLoading; else rhChartLoadingTpl" class="p-3">\r
        <apx-chart\r
          [series]="rhChartData.series"\r
          [chart]="rhChartData.chart"\r
          [xaxis]="rhChartData.xaxis"\r
          [yaxis]="rhChartData.yaxis"\r
          [stroke]="rhChartData.stroke"\r
          [tooltip]="rhChartData.tooltip"\r
          [dataLabels]="rhChartData.dataLabels"\r
          [fill]="rhChartData.fill"\r
          [grid]="rhChartData.grid"\r
          [colors]="rhChartData.colors">\r
        </apx-chart>\r
      </div>\r
      <ng-template #rhChartLoadingTpl>\r
        <div class="d-flex flex-column align-items-center justify-content-center p-5">\r
          <div class="spinner-border text-primary mb-3" role="status">\r
            <span class="visually-hidden">Chargement...</span>\r
          </div>\r
          <p class="text-muted mb-0">Chargement des statistiques...</p>\r
        </div>\r
      </ng-template>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.scss */\n.stat-card {\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  position: relative;\n}\n.icon-box .icon-img {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n}\n.icon-box.bg-primary-transparent {\n  background-color: rgba(13, 110, 253, 0.1);\n}\n.icon-box.bg-info-transparent {\n  background-color: rgba(23, 162, 184, 0.1);\n}\n.icon-box.bg-success-transparent {\n  background-color: rgba(40, 167, 69, 0.1);\n}\n.icon-box.bg-warning-transparent {\n  background-color: rgba(255, 193, 7, 0.1);\n}\n.progress {\n  background-color: #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.progress .progress-bar {\n  border-radius: 10px;\n  transition: width 0.3s ease;\n}\n.progress .progress-bar.bg-primary {\n  background-color: #0d6efd;\n}\n.progress .progress-bar.bg-info {\n  background-color: #17a2b8;\n}\n.progress .progress-bar.bg-success {\n  background-color: #28a745;\n}\n.progress .progress-bar.bg-warning {\n  background-color: #ffc107;\n}\n.skeleton-loader .skeleton {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  height: 28px;\n  border-radius: 4px;\n}\n.skeleton-loader .skeleton.skeleton-text {\n  margin-bottom: 8px;\n}\n@keyframes loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.icon-box.bg-danger-transparent {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.rh-formation-avatar {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n}\n.rh-progress-bar {\n  height: 6px;\n  width: 60px;\n  margin: 0 auto;\n}\n.rh-legend-dot {\n  width: 10px;\n  height: 10px;\n}\n.rh-chart-min-height {\n  min-height: 350px;\n}\n.legend-color {\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n}\n/*# sourceMappingURL=superadmin-dashboard.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AdminRHStatsService }, { type: SuperAdminDashboardService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminDashboardComponent, { className: "SuperAdminDashboardComponent", filePath: "app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.ts", lineNumber: 58 });
})();
export {
  SuperAdminDashboardComponent
};
//# sourceMappingURL=chunk-CFOQY5UY.js.map
