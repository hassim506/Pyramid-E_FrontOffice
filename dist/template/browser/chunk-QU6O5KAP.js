import {
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-PFI4JPHC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-AK2M3J6O.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";

// src/app/features/layouts/date-range-picker/date-range-picker.component.ts
var _c0 = () => ({ adaptivePosition: true });
var DateRangePickerComponent = class _DateRangePickerComponent {
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  static \u0275fac = function DateRangePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangePickerComponent, selectors: [["app-date-range-picker"]], decls: 4, vars: 3, consts: [[1, "input-icon", "position-relative", "input-range-picker", "ngx-dates"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], ["type", "text", "container", ".ngx-dates", "placeholder", "dd/mm/yyyy - dd/mm/yyyy", "bsDaterangepicker", "", "name", "time", 1, "form-control", "date-range", "bookingrange", 3, "ngModelChange", "ngModel", "bsConfig"]], template: function DateRangePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function DateRangePickerComponent_Template_input_ngModelChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.bsRangeValue, $event) || (ctx.bsRangeValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.bsRangeValue);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(2, _c0));
    }
  }, dependencies: [BsDatepickerModule, BsDaterangepickerDirective, BsDaterangepickerInputDirective, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePickerComponent, [{
    type: Component,
    args: [{ selector: "app-date-range-picker", imports: [BsDatepickerModule, FormsModule], template: '<div class="input-icon position-relative input-range-picker ngx-dates">\n  <span class="input-icon-addon">\n      <i class="isax isax-calendar"></i>\n  </span>\n  <input type="text" class="form-control date-range bookingrange" container=".ngx-dates" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue" name="time" [bsConfig]="{ adaptivePosition: true }">\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangePickerComponent, { className: "DateRangePickerComponent", filePath: "src/app/features/layouts/date-range-picker/date-range-picker.component.ts", lineNumber: 11 });
})();

export {
  DateRangePickerComponent
};
//# sourceMappingURL=chunk-QU6O5KAP.js.map
