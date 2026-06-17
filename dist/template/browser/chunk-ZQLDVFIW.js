import {
  AutoFocus,
  BaseEditableHolder,
  BaseStyle,
  InputText
} from "./chunk-GPI6RZV7.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-FW2F7SSM.js";
import {
  DataService
} from "./chunk-L2JYRU5M.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-RAWGSTJW.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-HLA233IM.js";
import {
  Router,
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/inputotp/index.mjs
var style = "\n    .p-inputotp {\n        display: flex;\n        align-items: center;\n        gap: dt('inputotp.gap');\n    }\n\n    .p-inputotp-input {\n        text-align: center;\n        width: dt('inputotp.input.width');\n    }\n\n    .p-inputotp-input.p-inputtext-sm {\n        text-align: center;\n        width: dt('inputotp.input.sm.width');\n    }\n\n    .p-inputotp-input.p-inputtext-lg {\n        text-align: center;\n        width: dt('inputotp.input.lg.width');\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputotp.mjs
var _c0 = ["input"];
var _c1 = (a0, a1, a2) => ({
  $implicit: a0,
  events: a1,
  index: a2
});
function InputOtp_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 2);
    \u0275\u0275listener("input", function InputOtp_ng_container_0_ng_container_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event, i_r2 - 1));
    })("focus", function InputOtp_ng_container_0_ng_container_1_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function InputOtp_ng_container_0_ng_container_1_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("paste", function InputOtp_ng_container_0_ng_container_1_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPaste($event));
    })("keydown", function InputOtp_ng_container_0_ng_container_1_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("pcInputText"), ctx_r2.styleClass));
    \u0275\u0275property("value", ctx_r2.getModelValue(i_r2))("pSize", ctx_r2.size())("variant", ctx_r2.$variant())("invalid", ctx_r2.invalid())("pAutoFocus", ctx_r2.getAutofocus(i_r2));
    \u0275\u0275attribute("maxlength", i_r2 === 1 ? ctx_r2.length : 1)("type", ctx_r2.inputType)("name", ctx_r2.name())("tabindex", ctx_r2.tabindex)("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0);
  }
}
function InputOtp_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function InputOtp_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputOtp_ng_container_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.inputTemplate || ctx_r2._inputTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c1, ctx_r2.getToken(i_r2 - 1), ctx_r2.getTemplateEvents(i_r2 - 1), i_r2));
  }
}
function InputOtp_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputOtp_ng_container_0_ng_container_1_Template, 2, 14, "ng-container", 1)(2, InputOtp_ng_container_0_ng_container_2_Template, 2, 6, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.inputTemplate && !ctx_r2._inputTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputTemplate || ctx_r2._inputTemplate);
  }
}
var classes = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
};
var InputOtpStyle = class _InputOtpStyle extends BaseStyle {
  name = "inputotp";
  theme = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputOtpStyle_BaseFactory;
    return function InputOtpStyle_Factory(__ngFactoryType__) {
      return (\u0275InputOtpStyle_BaseFactory || (\u0275InputOtpStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputOtpStyle)))(__ngFactoryType__ || _InputOtpStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputOtpStyle,
    factory: _InputOtpStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtpStyle, [{
    type: Injectable
  }], null, null);
})();
var InputOtpClasses;
(function(InputOtpClasses2) {
  InputOtpClasses2["root"] = "p-inputotp";
  InputOtpClasses2["pcInputText"] = "p-inputotp-input";
})(InputOtpClasses || (InputOtpClasses = {}));
var INPUT_OTP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputOtp),
  multi: true
};
var InputOtp = class _InputOtp extends BaseEditableHolder {
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = null;
  /**
   * Number of characters to initiate.
   * @group Props
   */
  length = 4;
  /**
   * Style class of the input element.
   * @group Props
   */
  styleClass;
  /**
   * Mask pattern.
   * @group Props
   */
  mask = false;
  /**
   * When present, it specifies that an input field is integer-only.
   * @group Props
   */
  integerOnly = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Callback to invoke on value change.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Input template.
   * @param {InputOtpInputTemplateContext} context - Context of the template
   * @see {@link InputOtpInputTemplateContext}
   * @group Templates
   */
  inputTemplate;
  templates;
  _inputTemplate;
  tokens = [];
  value;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  get inputMode() {
    return this.integerOnly ? "numeric" : "text";
  }
  get inputType() {
    return this.mask ? "password" : "text";
  }
  _componentStyle = inject(InputOtpStyle);
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this._inputTemplate = item.template;
          break;
        default:
          this._inputTemplate = item.template;
          break;
      }
    });
  }
  getToken(index) {
    return this.tokens[index];
  }
  getTemplateEvents(index) {
    return {
      input: (event) => this.onInput(event, index),
      keydown: (event) => this.onKeyDown(event),
      focus: (event) => this.onFocus.emit(event),
      blur: (event) => this.onBlur.emit(event),
      paste: (event) => this.onPaste(event)
    };
  }
  onInput(event, index) {
    const value = event.target.value;
    if (index === 0 && value.length > 1) {
      this.handleOnPaste(value, event);
      event.stopPropagation();
      return;
    }
    this.tokens[index] = value;
    this.updateModel(event);
    if (event.inputType === "deleteContentBackward") {
      this.moveToPrev(event);
    } else if (event.inputType === "insertText" || event.inputType === "deleteContentForward") {
      this.moveToNext(event);
    }
  }
  updateModel(event) {
    const newValue = this.tokens.join("");
    this.writeModelValue(newValue);
    this.onModelChange(newValue);
    this.onChange.emit({
      originalEvent: event,
      value: newValue
    });
  }
  updateTokens() {
    if (this.value !== null && this.value !== void 0) {
      if (Array.isArray(this.value)) {
        this.tokens = [...this.value];
      } else {
        this.tokens = this.value.toString().split("");
      }
    } else {
      this.tokens = [];
    }
  }
  getModelValue(i) {
    return this.tokens[i - 1] || "";
  }
  getAutofocus(i) {
    if (i === 1) {
      return this.autofocus;
    }
    return false;
  }
  moveToPrev(event) {
    let prevInput = this.findPrevInput(event.target);
    if (prevInput) {
      prevInput.focus();
      prevInput.select();
    }
  }
  moveToNext(event) {
    let nextInput = this.findNextInput(event.target);
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  }
  findNextInput(element) {
    let nextElement = element.nextElementSibling;
    if (!nextElement) return;
    return nextElement.nodeName === "INPUT" ? nextElement : this.findNextInput(nextElement);
  }
  findPrevInput(element) {
    let prevElement = element.previousElementSibling;
    if (!prevElement) return;
    return prevElement.nodeName === "INPUT" ? prevElement : this.findPrevInput(prevElement);
  }
  onInputFocus(event) {
    event.target.select();
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.onBlur.emit(event);
  }
  onKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    switch (event.code) {
      case "ArrowLeft":
        this.moveToPrev(event);
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
      case "Backspace":
        if (event.target.value.length === 0) {
          this.moveToPrev(event);
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        this.moveToNext(event);
        event.preventDefault();
        break;
      default:
        if (this.integerOnly && !(Number(event.key) >= 0 && Number(event.key) <= 9) || this.tokens.join("").length >= this.length && event.code !== "Delete") {
          event.preventDefault();
        }
        break;
    }
  }
  onPaste(event) {
    if (!this.$disabled() && !this.readonly) {
      let paste = event.clipboardData.getData("text");
      if (paste.length) {
        this.handleOnPaste(paste, event);
      }
      event.preventDefault();
    }
  }
  handleOnPaste(paste, event) {
    let pastedCode = paste.substring(0, this.length + 1);
    if (!this.integerOnly || !isNaN(pastedCode)) {
      this.tokens = pastedCode.split("");
      this.updateModel(event);
    }
  }
  getRange(n) {
    return Array.from({
      length: n
    }, (_, index) => index + 1);
  }
  trackByFn(index) {
    return index;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        this.value = value.slice(0, this.length);
      } else {
        this.value = value.toString().split("").slice(0, this.length);
      }
    } else {
      this.value = value;
    }
    setModelValue(this.value);
    this.updateTokens();
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputOtp_BaseFactory;
    return function InputOtp_Factory(__ngFactoryType__) {
      return (\u0275InputOtp_BaseFactory || (\u0275InputOtp_BaseFactory = \u0275\u0275getInheritedFactory(_InputOtp)))(__ngFactoryType__ || _InputOtp);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputOtp,
    selectors: [["p-inputOtp"], ["p-inputotp"], ["p-input-otp"]],
    contentQueries: function InputOtp_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function InputOtp_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      readonly: [2, "readonly", "readonly", booleanAttribute],
      tabindex: "tabindex",
      length: "length",
      styleClass: "styleClass",
      mask: "mask",
      integerOnly: "integerOnly",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([INPUT_OTP_VALUE_ACCESSOR, InputOtpStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 2,
    consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["type", "text", "pInputText", "", 3, "input", "focus", "blur", "paste", "keydown", "value", "pSize", "variant", "invalid", "pAutoFocus"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function InputOtp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InputOtp_ng_container_0_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.getRange(ctx.length))("ngForTrackBy", ctx.trackByFn);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, InputText, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtp, [{
    type: Component,
    args: [{
      selector: "p-inputOtp, p-inputotp, p-input-otp",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, SharedModule],
      template: `
        <ng-container *ngFor="let i of getRange(length); trackBy: trackByFn">
            <ng-container *ngIf="!inputTemplate && !_inputTemplate">
                <input
                    type="text"
                    pInputText
                    [value]="getModelValue(i)"
                    [attr.maxlength]="i === 1 ? length : 1"
                    [attr.type]="inputType"
                    [class]="cn(cx('pcInputText'), styleClass)"
                    [pSize]="size()"
                    [variant]="$variant()"
                    [invalid]="invalid()"
                    [attr.name]="name()"
                    [attr.tabindex]="tabindex"
                    [attr.required]="required() ? '' : undefined"
                    [attr.readonly]="readonly ? '' : undefined"
                    [attr.disabled]="$disabled() ? '' : undefined"
                    (input)="onInput($event, i - 1)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (paste)="onPaste($event)"
                    (keydown)="onKeyDown($event)"
                    [pAutoFocus]="getAutofocus(i)"
                />
            </ng-container>
            <ng-container *ngIf="inputTemplate || _inputTemplate">
                <ng-container *ngTemplateOutlet="inputTemplate || _inputTemplate; context: { $implicit: getToken(i - 1), events: getTemplateEvents(i - 1), index: i }"> </ng-container>
            </ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [INPUT_OTP_VALUE_ACCESSOR, InputOtpStyle],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, {
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    length: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    integerOnly: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputTemplate: [{
      type: ContentChild,
      args: ["input", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var InputOtpModule = class _InputOtpModule {
  static \u0275fac = function InputOtpModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputOtpModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputOtpModule,
    imports: [InputOtp, SharedModule],
    exports: [InputOtp, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputOtp, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtpModule, [{
    type: NgModule,
    args: [{
      imports: [InputOtp, SharedModule],
      exports: [InputOtp, SharedModule]
    }]
  }], null, null);
})();

// src/app/auth/otp/otp.component.ts
var _c02 = () => ({ standalone: true });
function OtpComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 30)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "h3", 34);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", slide_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", slide_r1.content1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r1.content4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.paragraph);
  }
}
var OtpComponent = class _OtpComponent {
  DataService;
  router;
  routes = routes;
  value;
  welcomeLogin = [];
  password = false;
  // Add more as needed
  togglePassword() {
    this.password = !this.password;
  }
  authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(DataService2, router) {
    this.DataService = DataService2;
    this.router = router;
    this.welcomeLogin = this.DataService.welcomeLogin;
  }
  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }
  static \u0275fac = function OtpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], decls: 39, vars: 6, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "topic"], [1, "fs-32", "fw-bold", "mb-3"], [1, "fs-14", "fw-normal", "mb-0"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], [3, "ngModelChange", "ngModel", "integerOnly", "ngModelOptions"], [1, "timer-cover", "d-flex", "align-items-center", "justify-content-center"], [1, "badge", "badge-soft-danger", "rounded-pill", "d-flex", "align-items-center"], [1, "isax", "isax-clock", "me-1"], ["id", "otp_timer"], [1, "ms-1"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "link-2", "ms-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"]], template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, OtpComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "h1", 15);
      \u0275\u0275text(18, "Email OTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 16);
      \u0275\u0275text(20, "OTP sent to your Email Address ending\xA0******doe@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 17);
      \u0275\u0275listener("ngSubmit", function OtpComponent_Template_form_ngSubmit_21_listener() {
        return ctx.directIndex();
      });
      \u0275\u0275elementStart(22, "div", 18)(23, "p-inputotp", 19);
      \u0275\u0275twoWayListener("ngModelChange", function OtpComponent_Template_p_inputotp_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 20)(25, "div", 21);
      \u0275\u0275element(26, "i", 22);
      \u0275\u0275elementStart(27, "span", 23);
      \u0275\u0275text(28, "09:59");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 24);
      \u0275\u0275text(30, "s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 25)(32, "button", 26);
      \u0275\u0275text(33, "Verify & Proceed");
      \u0275\u0275element(34, "i", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 28);
      \u0275\u0275text(36, " Didn\u2019t get the OTP?");
      \u0275\u0275elementStart(37, "a", 29);
      \u0275\u0275text(38, " Resend OTP");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275property("integerOnly", true)("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, InputOtpModule, InputOtp, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpComponent, [{
    type: Component,
    args: [{ selector: "app-otp", imports: [CommonModule, FormsModule, RouterLink, InputOtpModule, SlickCarouselModule], template: '<div class="main-wrapper">\r\n    <div class="login-content">\r\n        <div class="row">\r\n            <!-- Login Banner -->\r\n            <div class="col-md-6 login-bg d-none d-lg-flex">\r\n                <div class="login-carousel">\r\n                  <ngx-slick-carousel [config]="authSlider">\r\n                    @for (slide of welcomeLogin; track slide) {\r\n                      <div ngxSlickItem>\r\n                        <div class="login-carousel-section mb-3">\r\n                            <div class="login-banner">\r\n                                <img [src]="slide.img" class="img-fluid" alt="Logo">\r\n                            </div>\r\n                            <div class="mentor-course text-center">\r\n                                <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>\r\n                                <p>{{slide.paragraph}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    }\r\n                  </ngx-slick-carousel>\r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n            <!-- /Login Banner -->\r\n\r\n            <div class="col-md-6 login-wrap-bg">\r\n                <!-- Login -->\r\n                <div class="login-wrapper">\r\n                    <div class="loginbox">\r\n                        <div class="w-100">\r\n                            <div class="d-flex align-items-center justify-content-between login-header">\r\n                                <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">\r\n                                <a [routerLink]="routes.home" class="link-1">Back to Home</a>\r\n                            </div>\r\n                            <div class="topic">\r\n                                <h1 class="fs-32 fw-bold mb-3">Email OTP</h1>\r\n                                <p class="fs-14 fw-normal mb-0">OTP sent to your Email Address ending\xA0******doe&#64;example.com</p>\r\n                            </div>\r\n                            <form (ngSubmit)="directIndex()" class="mb-3 pb-3">\r\n                                <div class="d-flex align-items-center justify-content-center mb-3">\r\n                                    <p-inputotp [(ngModel)]="value" [integerOnly]="true" [ngModelOptions]="{standalone: true}"/>\r\n                                </div>\r\n                                <div class="timer-cover d-flex align-items-center justify-content-center">\r\n                                    <div class="badge badge-soft-danger rounded-pill d-flex align-items-center"><i class="isax isax-clock me-1"></i><span id="otp_timer">09:59</span> <span class="ms-1">s</span></div>\r\n                                </div>\r\n                                <div class="d-grid">\r\n                                    <button class="btn btn-secondary btn-lg" type="submit">Verify & Proceed<i class="isax isax-arrow-right-3 ms-1"></i></button>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class="fs-14 fw-normal d-flex align-items-center justify-content-center">\r\n                                Didn\u2019t get the OTP?<a href="javascript:void(0);" class="link-2 ms-1"> Resend OTP</a>\r\n                            </div>\r\n\r\n                            <!-- /Login -->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>' }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent", filePath: "app/auth/otp/otp.component.ts", lineNumber: 17 });
})();
export {
  OtpComponent
};
//# sourceMappingURL=chunk-ZQLDVFIW.js.map
