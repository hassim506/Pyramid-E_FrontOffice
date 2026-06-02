import {
  SessionFormationService
} from "./chunk-XOAIMG5H.js";
import {
  FormationService
} from "./chunk-2O6NHTWJ.js";
import {
  CommonService
} from "./chunk-NVY3W4TG.js";
import {
  AuthService
} from "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  SharedModule
} from "./chunk-FW2F7SSM.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-I4S43CN7.js";
import {
  DomSanitizer
} from "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  NgModule,
  Optional,
  SecurityContext,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// node_modules/angular-feather/fesm2015/angular-feather.js
var _c0 = ["*"];
var Icons = class {
  constructor(icons2) {
    this.icons = icons2;
  }
};
function uppercamelcase(str) {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (firstLetter) => {
    return firstLetter.toUpperCase();
  }).replace(/[-_]/g, "");
}
var FeatherComponent = class {
  constructor(elem, changeDetector, icons2, sanitizer) {
    this.elem = elem;
    this.changeDetector = changeDetector;
    this.icons = icons2;
    this.sanitizer = sanitizer;
  }
  ngOnChanges(changes) {
    const icons2 = Object.assign({}, ...this.icons);
    const svg = icons2[uppercamelcase(changes.name.currentValue)] || "";
    if (!svg) {
      console.warn(`Icon not found: ${changes.name.currentValue}
Refer to documentation on https://github.com/michaelbazos/angular-feather`);
    }
    this.elem.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(svg));
    this.changeDetector.markForCheck();
  }
};
FeatherComponent.\u0275fac = function FeatherComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FeatherComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Icons), \u0275\u0275directiveInject(DomSanitizer));
};
FeatherComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FeatherComponent,
  selectors: [["i-feather"], ["feather-icon"]],
  inputs: {
    name: "name"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FeatherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:inline-block;width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatherComponent, [{
    type: Component,
    args: [{
      selector: "i-feather, feather-icon",
      templateUrl: "./feather.component.html",
      styleUrls: ["./feather.component.scss"]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: Icons,
      decorators: [{
        type: Inject,
        args: [Icons]
      }]
    }, {
      type: DomSanitizer,
      decorators: [{
        type: Inject,
        args: [DomSanitizer]
      }]
    }];
  }, {
    name: [{
      type: Input
    }]
  });
})();
var FeatherModule = class _FeatherModule {
  constructor(icons2) {
    this.icons = icons2;
    if (!this.icons) {
      throw new Error(`No icon provided. Make sure to use 'FeatherModule.pick({ ... })' when importing the module
Refer to documentation on https://github.com/michaelbazos/angular-feather`);
    }
  }
  static pick(icons2) {
    return {
      ngModule: _FeatherModule,
      providers: [{
        provide: Icons,
        multi: true,
        useValue: icons2
      }]
    };
  }
};
FeatherModule.\u0275fac = function FeatherModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FeatherModule)(\u0275\u0275inject(Icons, 8));
};
FeatherModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: FeatherModule,
  declarations: [FeatherComponent],
  exports: [FeatherComponent]
});
FeatherModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatherModule, [{
    type: NgModule,
    args: [{
      declarations: [FeatherComponent],
      exports: [FeatherComponent]
    }]
  }], function() {
    return [{
      type: Icons,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();

// node_modules/angular-feather/fesm2015/angular-feather-icons.js
var Bell = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>`;
var BookOpen = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book-open">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>`;
var Book = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
</svg>`;
var Calendar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-calendar">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
</svg>`;
var Check = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;
var Clipboard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clipboard">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
</svg>`;
var CornerUpLeft = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-left">
    <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
</svg>`;
var CreditCard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-credit-card">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
</svg>`;
var DollarSign = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-dollar-sign">
    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>`;
var Download = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
</svg>`;
var Edit = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>`;
var EyeOff = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye-off">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`;
var Eye = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
</svg>`;
var Facebook = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>`;
var Filter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-filter">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>`;
var Grid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-grid">
    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
</svg>`;
var Heart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-heart">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>`;
var Home = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-home">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>`;
var Instagram = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg>`;
var Linkedin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
</svg>`;
var List = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-list">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
</svg>`;
var Lock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-lock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>`;
var LogOut = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
</svg>`;
var MapPin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map-pin">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
</svg>`;
var Moon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;
var MoreVertical = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-more-vertical">
    <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
</svg>`;
var PieChart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pie-chart">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>`;
var Power = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-power">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
</svg>`;
var RefreshCw = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-refresh-cw">
    <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
</svg>`;
var Search = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-search">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`;
var Server = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-server">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>
</svg>`;
var Settings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-settings">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>`;
var Share2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share-2">
    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
</svg>`;
var ShoppingBag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-bag">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>`;
var Star = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`;
var Trash2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trash-2">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
</svg>`;
var Twitter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitter">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>`;
var UserPlus = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-plus">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
</svg>`;
var User = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>`;
var Users = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-users">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>`;
var Youtube = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-youtube">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
</svg>`;

// src/app/shared/module/feather.module.ts
var icons = {
  Home,
  Book,
  Star,
  PieChart,
  ShoppingBag,
  Users,
  DollarSign,
  Server,
  Settings,
  User,
  RefreshCw,
  Bell,
  Lock,
  Trash2,
  Power,
  Eye,
  EyeOff,
  CornerUpLeft,
  Grid,
  List,
  Search,
  Filter,
  Heart,
  Share2,
  UserPlus,
  Calendar,
  CreditCard,
  Clipboard,
  LogOut,
  Moon,
  Check,
  MoreVertical,
  Download,
  Edit,
  MapPin,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
};
var FeatherIconModule = class _FeatherIconModule {
  static \u0275fac = function FeatherIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatherIconModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeatherIconModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [FeatherModule.pick(icons), FeatherModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatherIconModule, [{
    type: NgModule,
    args: [{
      imports: [FeatherModule.pick(icons)],
      exports: [FeatherModule]
    }]
  }], null, null);
})();

// src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.ts
function InstructorSidebarComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formationsCount);
  }
}
function InstructorSidebarComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Toutes mes formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 51);
    \u0275\u0275element(6, "i", 52);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Cr\xE9er une formation");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourse);
  }
}
function InstructorSidebarComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Vid\xE9os & ressources");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourse);
  }
}
function InstructorSidebarComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "a", 49);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Tous les quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 49);
    \u0275\u0275element(6, "i", 54);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "R\xE9sultats & scores");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorQuiz);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorQuizResult);
  }
}
function InstructorSidebarComponent_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.apprenantCount);
  }
}
function InstructorSidebarComponent_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.sessionsAVenir, " \xE0 venir");
  }
}
function InstructorSidebarComponent_div_118_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63);
    \u0275\u0275element(4, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", bar_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r2.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bar_r2.pct, "%");
  }
}
function InstructorSidebarComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3, "Compl\xE9tion par formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5, "Cette semaine");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, InstructorSidebarComponent_div_118_div_6_Template, 7, 5, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.progressBars);
  }
}
var InstructorSidebarComponent = class _InstructorSidebarComponent {
  common;
  authService;
  formationService;
  sessionService;
  routes = routes;
  base = "";
  page = "";
  last = "";
  currentUser;
  formationsCount = 0;
  apprenantCount = 0;
  completionRate = 0;
  sessionsAVenir = 0;
  progressBars = [];
  openGroups = {
    formations: true,
    modules: false,
    quiz: false
  };
  constructor(common, authService, formationService, sessionService) {
    this.common = common;
    this.authService = authService;
    this.formationService = formationService;
    this.sessionService = sessionService;
    this.common.base.subscribe((v) => this.base = v);
    this.common.page.subscribe((v) => this.page = v);
    this.common.last.subscribe((v) => this.last = v);
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.loadStats();
    this.loadSessionsAVenir();
  }
  loadStats() {
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        const formations = res.formations || [];
        this.formationsCount = formations.length;
        let totalApprenants = 0;
        let totalCompletion = 0;
        let completionCount = 0;
        formations.forEach((f) => {
          totalApprenants += f.nb_participants ?? 0;
          const pct = Math.round(f.taux_completion ?? f.completion ?? 0);
          if (pct > 0) {
            totalCompletion += pct;
            completionCount++;
          }
        });
        this.apprenantCount = totalApprenants;
        this.completionRate = completionCount > 0 ? Math.round(totalCompletion / completionCount) : 0;
        this.progressBars = formations.filter((f) => (f.nb_participants ?? 0) > 0).slice(0, 4).map((f) => ({
          name: f.titre || "Formation",
          pct: Math.round(f.taux_completion ?? f.completion ?? 0)
        }));
      },
      error: () => {
      }
    });
  }
  loadSessionsAVenir() {
    const user = this.authService.getUser();
    const formateurId = user?.id;
    const params = formateurId ? { formateur_id: formateurId, statut: "planifiee" } : { statut: "planifiee" };
    this.sessionService.getAllSessionsRH(params).subscribe({
      next: (res) => {
        if (res?.status && res.sessions) {
          const now = /* @__PURE__ */ new Date();
          this.sessionsAVenir = res.sessions.filter((s) => s.statut === "planifiee" && new Date(s.date_debut) >= now).length;
        }
      },
      error: () => {
      }
    });
  }
  toggleGroup(key) {
    this.openGroups[key] = !this.openGroups[key];
  }
  getInitials() {
    const u = this.currentUser;
    if (!u)
      return "F";
    const n = u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "";
    return n.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase() || "F";
  }
  getDisplayName() {
    const u = this.currentUser;
    if (!u)
      return "Formateur";
    return u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "Formateur";
  }
  getRoleLabel() {
    const u = this.currentUser;
    return u?.fonction || u?.role?.name || "Formateur";
  }
  static \u0275fac = function InstructorSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(SessionFormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSidebarComponent, selectors: [["app-instructor-sidebar"]], decls: 129, vars: 32, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "isax", "isax-teacher"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-profile"], [1, "prof-row"], [1, "prof-av"], [1, "prof-name"], [1, "prof-role"], [1, "prof-stats"], [1, "pstat"], [1, "pstat-v"], [1, "pstat-l"], [1, "pstat-sep"], [1, "sb-scroll"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3", "icon"], [1, "sb-item-label"], [1, "isax", "isax-chart-2", "icon"], [1, "sb-divider"], [1, "sb-group"], [1, "sb-group-header", 3, "click"], [1, "isax", "isax-book", "icon"], ["class", "sb-badge sb-badge--caramel", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "arr"], ["class", "sb-sub", 4, "ngIf"], [1, "isax", "isax-element-4", "icon"], [1, "isax", "isax-award", "icon"], [1, "isax", "isax-profile-2user", "icon"], ["class", "sb-badge sb-badge--gray", 4, "ngIf"], [1, "isax", "isax-note-21", "icon"], [1, "isax", "isax-clipboard-text", "icon"], [1, "isax", "isax-calendar-1", "icon"], [1, "isax", "isax-receipt-item", "icon"], [1, "isax", "isax-messages-3", "icon"], [1, "isax", "isax-volume-high", "icon"], [1, "isax", "isax-ticket", "icon"], ["class", "sb-progress-card", 4, "ngIf"], [1, "sb-bottom"], ["routerLinkActive", "active", 1, "sb-bottom-item", 3, "routerLink"], [1, "isax", "isax-user-square"], [1, "isax", "isax-setting-2"], [1, "sb-bottom-item", "logout", 3, "routerLink"], [1, "isax", "isax-logout"], [1, "sb-badge", "sb-badge--caramel"], [1, "sb-sub"], ["routerLinkActive", "active", 1, "sb-sub-item", 3, "routerLink"], [1, "isax", "isax-task-square"], ["href", "/courses/instructor-course-add", "target", "_blank", 1, "sb-sub-item"], [1, "isax", "isax-add-circle"], [1, "isax", "isax-video-circle"], [1, "isax", "isax-chart-2"], [1, "sb-badge", "sb-badge--gray"], [1, "sb-progress-card"], [1, "pc-header"], [1, "pc-title"], [1, "pc-period"], ["class", "pc-row", 4, "ngFor", "ngForOf"], [1, "pc-row"], [1, "pc-name", 3, "title"], [1, "pc-bar-wrap"], [1, "pc-fill"], [1, "pc-pct"]], template: function InstructorSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "LMS Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Espace Formateur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div")(14, "div", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "div", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275text(23, "Formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "div", 15);
      \u0275\u0275elementStart(25, "div", 12)(26, "div", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275text(29, "Apprenants");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "div", 15);
      \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 14);
      \u0275\u0275text(35, "Compl\xE9tion");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 16)(37, "div", 17);
      \u0275\u0275text(38, "Vue d'ensemble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 18);
      \u0275\u0275element(40, "i", 19);
      \u0275\u0275elementStart(41, "span", 20);
      \u0275\u0275text(42, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 18);
      \u0275\u0275element(44, "i", 21);
      \u0275\u0275elementStart(45, "span", 20);
      \u0275\u0275text(46, "Mes performances");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "div", 22);
      \u0275\u0275elementStart(48, "div", 17);
      \u0275\u0275text(49, "Contenu p\xE9dagogique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 23)(51, "div", 24);
      \u0275\u0275listener("click", function InstructorSidebarComponent_Template_div_click_51_listener() {
        return ctx.toggleGroup("formations");
      });
      \u0275\u0275element(52, "i", 25);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Mes formations");
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, InstructorSidebarComponent_span_55_Template, 2, 1, "span", 26);
      \u0275\u0275element(56, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, InstructorSidebarComponent_div_57_Template, 9, 1, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 23)(59, "div", 24);
      \u0275\u0275listener("click", function InstructorSidebarComponent_Template_div_click_59_listener() {
        return ctx.toggleGroup("modules");
      });
      \u0275\u0275element(60, "i", 29);
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "Modules & contenus");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, InstructorSidebarComponent_div_64_Template, 5, 1, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 23)(66, "div", 24);
      \u0275\u0275listener("click", function InstructorSidebarComponent_Template_div_click_66_listener() {
        return ctx.toggleGroup("quiz");
      });
      \u0275\u0275element(67, "i", 30);
      \u0275\u0275elementStart(68, "span");
      \u0275\u0275text(69, "Quiz & \xE9valuations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, InstructorSidebarComponent_div_71_Template, 9, 2, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "div", 22);
      \u0275\u0275elementStart(73, "div", 17);
      \u0275\u0275text(74, "Mes apprenants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 18);
      \u0275\u0275element(76, "i", 31);
      \u0275\u0275elementStart(77, "span", 20);
      \u0275\u0275text(78, "Liste des apprenants");
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, InstructorSidebarComponent_span_79_Template, 2, 1, "span", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "a", 18);
      \u0275\u0275element(81, "i", 33);
      \u0275\u0275elementStart(82, "span", 20);
      \u0275\u0275text(83, "Certificats d\xE9livr\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "a", 18);
      \u0275\u0275element(85, "i", 34);
      \u0275\u0275elementStart(86, "span", 20);
      \u0275\u0275text(87, "Assignments");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(88, "div", 22);
      \u0275\u0275elementStart(89, "div", 17);
      \u0275\u0275text(90, "Sessions & planning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "a", 18);
      \u0275\u0275element(92, "i", 35);
      \u0275\u0275elementStart(93, "span", 20);
      \u0275\u0275text(94, "Mes sessions");
      \u0275\u0275elementEnd();
      \u0275\u0275template(95, InstructorSidebarComponent_span_95_Template, 2, 1, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "div", 22);
      \u0275\u0275elementStart(97, "div", 17);
      \u0275\u0275text(98, "Analyse & rapports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "a", 18);
      \u0275\u0275element(100, "i", 36);
      \u0275\u0275elementStart(101, "span", 20);
      \u0275\u0275text(102, "Rapports");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(103, "div", 22);
      \u0275\u0275elementStart(104, "div", 17);
      \u0275\u0275text(105, "Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "a", 18);
      \u0275\u0275element(107, "i", 37);
      \u0275\u0275elementStart(108, "span", 20);
      \u0275\u0275text(109, "Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "a", 18);
      \u0275\u0275element(111, "i", 38);
      \u0275\u0275elementStart(112, "span", 20);
      \u0275\u0275text(113, "Annonces");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "a", 18);
      \u0275\u0275element(115, "i", 39);
      \u0275\u0275elementStart(116, "span", 20);
      \u0275\u0275text(117, "Tickets support");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(118, InstructorSidebarComponent_div_118_Template, 7, 1, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 41)(120, "a", 42);
      \u0275\u0275element(121, "i", 43);
      \u0275\u0275text(122, " Mon profil formateur ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "a", 42);
      \u0275\u0275element(124, "i", 44);
      \u0275\u0275text(125, " Pr\xE9f\xE9rences ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "a", 45);
      \u0275\u0275element(127, "i", 46);
      \u0275\u0275text(128, " D\xE9connexion ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getDisplayName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getRoleLabel());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.formationsCount);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.apprenantCount);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.completionRate, "%");
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("open", ctx.openGroups["formations"]);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.formationsCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.openGroups["formations"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.openGroups["modules"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["modules"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.openGroups["quiz"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["quiz"]);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.apprenantCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.instructorCertificate);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorAssignment);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorSession);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.sessionsAVenir > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorStatements);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorAnnouncements);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructor_tickets);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.progressBars.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: #3D2B1F;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 12px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #C17B3A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(193, 123, 58, 0.4);\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.28);\n  margin-top: 1px;\n}\n.sb-profile[_ngcontent-%COMP%] {\n  margin: 10px 10px 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n  flex-shrink: 0;\n}\n.prof-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.prof-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #C17B3A;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  flex-shrink: 0;\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n}\n.prof-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.prof-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.38);\n  margin-top: 1px;\n}\n.prof-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding-top: 7px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n}\n.pstat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n}\n.pstat-v[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 220, 160, 0.9);\n}\n.pstat-l[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 1px;\n}\n.pstat-sep[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 4px 0 8px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 6px 14px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: #C17B3A;\n  color: #fff;\n  font-weight: 500;\n}\n.sb-item.active[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  font-weight: 500;\n  flex: none;\n  width: fit-content;\n  line-height: 1.4;\n}\n.sb-badge--red[_ngcontent-%COMP%] {\n  background: #791F1F;\n  color: #F7C1C1;\n}\n.sb-badge--amber[_ngcontent-%COMP%] {\n  background: rgba(193, 123, 58, 0.35);\n  color: #FAC775;\n}\n.sb-badge--gray[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.55);\n}\n.sb-badge--green[_ngcontent-%COMP%] {\n  background: #27500A;\n  color: #C0DD97;\n}\n.sb-badge--purple[_ngcontent-%COMP%] {\n  background: rgba(193, 123, 58, 0.25);\n  color: rgba(255, 220, 160, 0.9);\n}\n.sb-badge--caramel[_ngcontent-%COMP%] {\n  background: rgba(193, 123, 58, 0.3);\n  color: rgba(255, 220, 160, 0.95);\n}\n.sb-group[_ngcontent-%COMP%] {\n  margin: 1px 8px;\n}\n.sb-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-group-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sb-badge) {\n  flex: 1;\n}\n.sb-group-header[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sb-sub[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-sub-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sb-badge) {\n  flex: 1;\n}\n.sb-sub-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active[_ngcontent-%COMP%] {\n  color: #AFA9EC;\n}\n.sb-progress-card[_ngcontent-%COMP%] {\n  margin: 8px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.pc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 9px;\n}\n.pc-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pc-period[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #AFA9EC;\n  font-weight: 500;\n}\n.pc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 5px;\n}\n.pc-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pc-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pc-bar-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pc-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #7F77DD;\n}\n.pc-pct[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.4);\n  min-width: 26px;\n  text-align: right;\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n  padding: 8px 10px 12px;\n  flex-shrink: 0;\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(255, 200, 150, 0.5);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(193, 123, 58, 0.15);\n  color: rgba(255, 220, 160, 0.85);\n}\n/*# sourceMappingURL=instructor-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive], template: `<div class="sb-shell">

  <!-- LOGO -->
  <div class="sb-logo">
    <div class="sb-logo-mark"><i class="isax isax-teacher"></i></div>
    <div>
      <div class="sb-logo-text">LMS Pro</div>
      <div class="sb-logo-sub">Espace Formateur</div>
    </div>
  </div>

  <!-- PROFILE -->
  <div class="sb-profile">
    <div class="prof-row">
      <div class="prof-av">{{ getInitials() }}</div>
      <div>
        <div class="prof-name">{{ getDisplayName() }}</div>
        <div class="prof-role">{{ getRoleLabel() }}</div>
      </div>
    </div>
    <div class="prof-stats">
      <div class="pstat">
        <div class="pstat-v">{{ formationsCount }}</div>
        <div class="pstat-l">Formations</div>
      </div>
      <div class="pstat-sep"></div>
      <div class="pstat">
        <div class="pstat-v">{{ apprenantCount }}</div>
        <div class="pstat-l">Apprenants</div>
      </div>
      <div class="pstat-sep"></div>
      <div class="pstat">
        <div class="pstat-v">{{ completionRate }}%</div>
        <div class="pstat-l">Compl\xE9tion</div>
      </div>
    </div>
  </div>

  <!-- NAV -->
  <div class="sb-scroll">

    <!-- VUE D'ENSEMBLE -->
    <div class="sb-section-label">Vue d'ensemble</div>
    <a [routerLink]="routes.instructor_dashboard" routerLinkActive="active" class="sb-item">
      <i class="isax isax-grid-3 icon"></i>
      <span class="sb-item-label">Tableau de bord</span>
    </a>
    <a [routerLink]="routes.instructorProfile" routerLinkActive="active" class="sb-item">
      <i class="isax isax-chart-2 icon"></i>
      <span class="sb-item-label">Mes performances</span>
    </a>

    <div class="sb-divider"></div>

    <!-- CONTENU P\xC9DAGOGIQUE -->
    <div class="sb-section-label">Contenu p\xE9dagogique</div>

    <!-- Mes formations (accordion) -->
    <div class="sb-group">
      <div class="sb-group-header" [class.open]="openGroups['formations']"
           (click)="toggleGroup('formations')">
        <i class="isax isax-book icon"></i>
        <span>Mes formations</span>
        <span *ngIf="formationsCount > 0" class="sb-badge sb-badge--caramel">{{ formationsCount }}</span>
        <i class="isax isax-arrow-right-3 arr"></i>
      </div>
      <div class="sb-sub" *ngIf="openGroups['formations']">
        <a [routerLink]="routes.instructorCourse" routerLinkActive="active" class="sb-sub-item">
          <i class="isax isax-task-square"></i>
          <span>Toutes mes formations</span>
        </a>
        <a href="/courses/instructor-course-add" target="_blank" class="sb-sub-item">
          <i class="isax isax-add-circle"></i>
          <span>Cr\xE9er une formation</span>
        </a>
      </div>
    </div>

    <!-- Modules & contenus -->
    <div class="sb-group">
      <div class="sb-group-header" [class.open]="openGroups['modules']"
           (click)="toggleGroup('modules')">
        <i class="isax isax-element-4 icon"></i>
        <span>Modules & contenus</span>
        <i class="isax isax-arrow-right-3 arr"></i>
      </div>
      <div class="sb-sub" *ngIf="openGroups['modules']">
        <a [routerLink]="routes.instructorCourse" routerLinkActive="active" class="sb-sub-item">
          <i class="isax isax-video-circle"></i>
          <span>Vid\xE9os & ressources</span>
        </a>
      </div>
    </div>

    <!-- Quiz & \xE9valuations -->
    <div class="sb-group">
      <div class="sb-group-header" [class.open]="openGroups['quiz']"
           (click)="toggleGroup('quiz')">
        <i class="isax isax-award icon"></i>
        <span>Quiz & \xE9valuations</span>
        <i class="isax isax-arrow-right-3 arr"></i>
      </div>
      <div class="sb-sub" *ngIf="openGroups['quiz']">
        <a [routerLink]="routes.instructorQuiz" routerLinkActive="active" class="sb-sub-item">
          <i class="isax isax-task-square"></i>
          <span>Tous les quiz</span>
        </a>
        <a [routerLink]="routes.instructorQuizResult" routerLinkActive="active" class="sb-sub-item">
          <i class="isax isax-chart-2"></i>
          <span>R\xE9sultats & scores</span>
        </a>
      </div>
    </div>

    <div class="sb-divider"></div>

    <!-- MES APPRENANTS -->
    <div class="sb-section-label">Mes apprenants</div>

    <a [routerLink]="routes.studentsList" routerLinkActive="active" class="sb-item">
      <i class="isax isax-profile-2user icon"></i>
      <span class="sb-item-label">Liste des apprenants</span>
      <span *ngIf="apprenantCount > 0" class="sb-badge sb-badge--gray">{{ apprenantCount }}</span>
    </a>
    <a [routerLink]="routes.instructorCertificate" routerLinkActive="active" class="sb-item">
      <i class="isax isax-note-21 icon"></i>
      <span class="sb-item-label">Certificats d\xE9livr\xE9s</span>
    </a>
    <a [routerLink]="routes.instructorAssignment" routerLinkActive="active" class="sb-item">
      <i class="isax isax-clipboard-text icon"></i>
      <span class="sb-item-label">Assignments</span>
    </a>

    <div class="sb-divider"></div>

    <!-- SESSIONS & PLANNING -->
    <div class="sb-section-label">Sessions & planning</div>

    <a [routerLink]="routes.instructorSession" routerLinkActive="active" class="sb-item">
      <i class="isax isax-calendar-1 icon"></i>
      <span class="sb-item-label">Mes sessions</span>
      <span *ngIf="sessionsAVenir > 0" class="sb-badge sb-badge--caramel">{{ sessionsAVenir }} \xE0 venir</span>
    </a>

    <div class="sb-divider"></div>

    <!-- ANALYSE & RAPPORTS -->
    <div class="sb-section-label">Analyse & rapports</div>

    <a [routerLink]="routes.instructorStatements" routerLinkActive="active" class="sb-item">
      <i class="isax isax-receipt-item icon"></i>
      <span class="sb-item-label">Rapports</span>
    </a>

    <div class="sb-divider"></div>

    <!-- COMMUNICATION -->
    <div class="sb-section-label">Communication</div>

    <a [routerLink]="routes.instructorMessage" routerLinkActive="active" class="sb-item">
      <i class="isax isax-messages-3 icon"></i>
      <span class="sb-item-label">Messages</span>
    </a>
    <a [routerLink]="routes.instructorAnnouncements" routerLinkActive="active" class="sb-item">
      <i class="isax isax-volume-high icon"></i>
      <span class="sb-item-label">Annonces</span>
    </a>
    <a [routerLink]="routes.instructor_tickets" routerLinkActive="active" class="sb-item">
      <i class="isax isax-ticket icon"></i>
      <span class="sb-item-label">Tickets support</span>
    </a>

    <!-- Barre de compl\xE9tion -->
    <div class="sb-progress-card" *ngIf="progressBars.length > 0">
      <div class="pc-header">
        <span class="pc-title">Compl\xE9tion par formation</span>
        <span class="pc-period">Cette semaine</span>
      </div>
      <div *ngFor="let bar of progressBars" class="pc-row">
        <div class="pc-name" [title]="bar.name">{{ bar.name }}</div>
        <div class="pc-bar-wrap"><div class="pc-fill" [style.width.%]="bar.pct"></div></div>
        <div class="pc-pct">{{ bar.pct }}%</div>
      </div>
    </div>

  </div><!-- /sb-scroll -->

  <!-- BOTTOM -->
  <div class="sb-bottom">
    <a [routerLink]="routes.instructorProfile" routerLinkActive="active" class="sb-bottom-item">
      <i class="isax isax-user-square"></i> Mon profil formateur
    </a>
    <a [routerLink]="routes.instructorSettings" routerLinkActive="active" class="sb-bottom-item">
      <i class="isax isax-setting-2"></i> Pr\xE9f\xE9rences
    </a>
    <a [routerLink]="routes.login" class="sb-bottom-item logout">
      <i class="isax isax-logout"></i> D\xE9connexion
    </a>
  </div>

</div>
`, styles: ["/* src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.scss */\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: #3D2B1F;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 12px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-logo-mark {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #C17B3A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(193, 123, 58, 0.4);\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.28);\n  margin-top: 1px;\n}\n.sb-profile {\n  margin: 10px 10px 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n  flex-shrink: 0;\n}\n.prof-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.prof-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #C17B3A;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  flex-shrink: 0;\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n}\n.prof-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.prof-role {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.38);\n  margin-top: 1px;\n}\n.prof-stats {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding-top: 7px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n}\n.pstat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n}\n.pstat-v {\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 220, 160, 0.9);\n}\n.pstat-l {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 1px;\n}\n.pstat-sep {\n  width: 0.5px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.sb-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 4px 0 8px;\n}\n.sb-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 6px 14px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i.icon {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active {\n  background: #C17B3A;\n  color: #fff;\n  font-weight: 500;\n}\n.sb-item.active i.icon {\n  color: #fff;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  font-weight: 500;\n  flex: none;\n  width: fit-content;\n  line-height: 1.4;\n}\n.sb-badge--red {\n  background: #791F1F;\n  color: #F7C1C1;\n}\n.sb-badge--amber {\n  background: rgba(193, 123, 58, 0.35);\n  color: #FAC775;\n}\n.sb-badge--gray {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.55);\n}\n.sb-badge--green {\n  background: #27500A;\n  color: #C0DD97;\n}\n.sb-badge--purple {\n  background: rgba(193, 123, 58, 0.25);\n  color: rgba(255, 220, 160, 0.9);\n}\n.sb-badge--caramel {\n  background: rgba(193, 123, 58, 0.3);\n  color: rgba(255, 220, 160, 0.95);\n}\n.sb-group {\n  margin: 1px 8px;\n}\n.sb-group-header {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header i.icon {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-group-header span:not(.sb-badge) {\n  flex: 1;\n}\n.sb-group-header i.arr {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open i.arr {\n  transform: rotate(90deg);\n}\n.sb-sub {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item i {\n  font-size: 14px;\n}\n.sb-sub-item span:not(.sb-badge) {\n  flex: 1;\n}\n.sb-sub-item:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active {\n  color: #AFA9EC;\n}\n.sb-progress-card {\n  margin: 8px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.pc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 9px;\n}\n.pc-title {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.28);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pc-period {\n  font-size: 11px;\n  color: #AFA9EC;\n  font-weight: 500;\n}\n.pc-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 5px;\n}\n.pc-row:last-child {\n  margin-bottom: 0;\n}\n.pc-name {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pc-bar-wrap {\n  width: 64px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pc-fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #7F77DD;\n}\n.pc-pct {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.4);\n  min-width: 26px;\n  text-align: right;\n}\n.sb-bottom {\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n  padding: 8px 10px 12px;\n  flex-shrink: 0;\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active {\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.logout {\n  color: rgba(255, 200, 150, 0.5);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(193, 123, 58, 0.15);\n  color: rgba(255, 220, 160, 0.85);\n}\n/*# sourceMappingURL=instructor-sidebar.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: AuthService }, { type: FormationService }, { type: SessionFormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSidebarComponent, { className: "InstructorSidebarComponent", filePath: "src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.ts", lineNumber: 18 });
})();

// src/app/features/instructor/instructor.component.ts
function InstructorComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.getEntrepriseName());
  }
}
function InstructorComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tag_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", tag_r2.label, " ");
  }
}
function InstructorComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Prochaine session \u2014 ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.nextSession.titre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.nextSession.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nextSession.delai);
  }
}
function InstructorComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "app-instructor-sidebar", 44);
    \u0275\u0275elementStart(2, "div", 71);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}
function InstructorComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var InstructorComponent = class _InstructorComponent {
  router;
  sessionService;
  formationService;
  routes = routes;
  last = "";
  instructorProfile = null;
  headerStats = { formations: 0, apprenants: 0, enDifficulte: 0, sessionsAVenir: 0 };
  nextSession = null;
  constructor(router, sessionService, formationService) {
    this.router = router;
    this.sessionService = sessionService;
    this.formationService = formationService;
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split("/").pop() || "";
      }
    });
  }
  ngOnInit() {
    this.loadInstructorProfile();
    this.loadFormationStats();
    this.loadSessionStats();
  }
  loadInstructorProfile() {
    try {
      const raw = localStorage.getItem("pyramide_user");
      if (raw) {
        const user = JSON.parse(raw);
        if (!user.role && user.role_id === 3)
          user.role = "Formateur";
        this.instructorProfile = user;
      }
    } catch (e) {
      console.error("Erreur profil instructor:", e);
    }
  }
  loadFormationStats() {
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        const formations = res.formations || [];
        this.headerStats.formations = formations.length;
        this.headerStats.apprenants = formations.reduce((s, f) => s + (f.nb_participants ?? 0), 0);
        this.headerStats.enDifficulte = formations.reduce((s, f) => s + (f.nb_en_difficulte ?? 0), 0);
      },
      error: () => {
      }
    });
  }
  loadSessionStats() {
    const user = this.instructorProfile;
    const params = { statut: "planifiee" };
    if (user?.id)
      params["formateur_id"] = user.id;
    this.sessionService.getAllSessionsRH(params).subscribe({
      next: (res) => {
        if (res?.status && res.sessions) {
          const now = /* @__PURE__ */ new Date();
          const upcoming = res.sessions.filter((s) => s.statut === "planifiee" && new Date(s.date_debut) >= now).sort((a, b) => new Date(a.date_debut).getTime() - new Date(b.date_debut).getTime());
          this.headerStats.sessionsAVenir = upcoming.length;
          if (upcoming.length > 0) {
            const s = upcoming[0];
            const d = new Date(s.date_debut);
            const diffDays = Math.ceil((d.getTime() - now.getTime()) / 864e5);
            this.nextSession = {
              titre: s.titre,
              date: d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }),
              delai: diffDays === 0 ? "Aujourd'hui" : diffDays === 1 ? "Demain" : `Dans ${diffDays} jours`
            };
          }
        }
      },
      error: () => {
      }
    });
  }
  getFullName() {
    if (!this.instructorProfile)
      return "Utilisateur";
    return `${this.instructorProfile.prenom || ""} ${this.instructorProfile.nom || ""}`.trim();
  }
  getInitials() {
    if (!this.instructorProfile)
      return "U";
    return ((this.instructorProfile.prenom?.[0] ?? "") + (this.instructorProfile.nom?.[0] ?? "")).toUpperCase() || "U";
  }
  getFonction() {
    return this.instructorProfile?.fonction || "Formateur";
  }
  getEntrepriseName() {
    return this.instructorProfile?.entreprise?.nom || this.instructorProfile?.client?.nom || "";
  }
  getSpecialites() {
    const tags = [];
    const fn = this.instructorProfile?.fonction?.toLowerCase() || "";
    if (fn.includes("tech") || fn.includes("info") || fn.includes("dev")) {
      tags.push({ icon: "isax-cpu", label: "Technologie" });
    }
    if (fn.includes("cyber") || fn.includes("s\xE9cur")) {
      tags.push({ icon: "isax-shield-tick", label: "Cybers\xE9curit\xE9" });
    }
    if (this.instructorProfile?.entreprise?.nom || this.instructorProfile?.client?.nom) {
      tags.push({ icon: "isax-note-21", label: "Certifiant" });
    }
    return tags.length ? tags : [
      { icon: "isax-book-1", label: "Formation" },
      { icon: "isax-note-21", label: "Certifiant" }
    ];
  }
  getRoleName(user) {
    if (!user.role)
      return "Non d\xE9fini";
    if (typeof user.role === "object" && "name" in user.role)
      return user.role.name;
    if (typeof user.role === "string")
      return user.role;
    return "Non d\xE9fini";
  }
  getUserAvatar() {
    return this.instructorProfile?.avatar || "assets/img/user/user-01.jpg";
  }
  static \u0275fac = function InstructorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorComponent, selectors: [["app-instructor"]], decls: 150, vars: 25, consts: [[1, "content"], [1, "container"], [1, "ins-header"], [1, "ins-header-label"], [1, "ins-card"], [1, "ins-card-top"], [1, "ins-identity"], [1, "ins-av"], [1, "ins-info"], [1, "ins-name"], [1, "ins-sub"], [4, "ngIf"], [1, "ins-tags"], ["class", "ins-tag", 4, "ngFor", "ngForOf"], [1, "ins-actions"], ["title", "Statistiques", 1, "ins-btn-icon", 3, "routerLink"], [1, "isax", "isax-chart-2"], ["href", "/courses/instructor-course-add", "target", "_blank", 1, "ins-btn-primary"], [1, "isax", "isax-add"], [1, "ins-stats"], [1, "ins-stat"], [1, "isax", "isax-book-1"], [1, "ins-stat-val"], [1, "ins-stat-lbl"], [1, "isax", "isax-profile-2user"], [1, "isax", "isax-clock"], ["class", "ins-next", 4, "ngIf"], [1, "row"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "ins-tag"], [1, "isax", 3, "ngClass"], [1, "ins-next"], [1, "isax", "isax-video"], [1, "ins-next-badge"], [1, "col-lg-9"]], template: function InstructorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "FORMATEUR \u2014 ESPACE P\xC9DAGOGIQUE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "h5", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14);
      \u0275\u0275template(15, InstructorComponent_ng_container_15_Template, 2, 1, "ng-container", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275template(17, InstructorComponent_span_17_Template, 3, 2, "span", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 14)(19, "a", 15);
      \u0275\u0275element(20, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 17);
      \u0275\u0275element(22, "i", 18);
      \u0275\u0275text(23, "Nouvelle formation ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 19)(25, "div", 20);
      \u0275\u0275element(26, "i", 21);
      \u0275\u0275elementStart(27, "div")(28, "div", 22);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23);
      \u0275\u0275text(31, "Formations actives");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 20);
      \u0275\u0275element(33, "i", 24);
      \u0275\u0275elementStart(34, "div")(35, "div", 22);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 23);
      \u0275\u0275text(38, "Apprenants");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 20);
      \u0275\u0275element(40, "i", 25);
      \u0275\u0275elementStart(41, "div")(42, "div", 22);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 23);
      \u0275\u0275text(45, "En difficult\xE9");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(46, InstructorComponent_div_46_Template, 9, 3, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(47, InstructorComponent_Conditional_47_Template, 4, 0, "div", 27);
      \u0275\u0275conditionalCreate(48, InstructorComponent_Conditional_48_Template, 1, 0, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "footer", 28)(50, "div", 29);
      \u0275\u0275element(51, "img", 30)(52, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 32)(54, "div", 1)(55, "div", 33)(56, "div", 34)(57, "div", 35)(58, "div", 36);
      \u0275\u0275element(59, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 38)(63, "a", 39);
      \u0275\u0275element(64, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "a", 41);
      \u0275\u0275element(66, "img", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 43)(68, "div", 33)(69, "div", 44)(70, "div", 45)(71, "h5", 46);
      \u0275\u0275text(72, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "ul")(74, "li")(75, "a", 47);
      \u0275\u0275text(76, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 47);
      \u0275\u0275text(79, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 47);
      \u0275\u0275text(82, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 47);
      \u0275\u0275text(85, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 47);
      \u0275\u0275text(88, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(89, "div", 44)(90, "div", 45)(91, "h5", 46);
      \u0275\u0275text(92, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "ul")(94, "li")(95, "a", 41);
      \u0275\u0275text(96, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "li")(98, "a", 47);
      \u0275\u0275text(99, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "li")(101, "a", 47);
      \u0275\u0275text(102, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "a", 47);
      \u0275\u0275text(105, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "li")(107, "a", 47);
      \u0275\u0275text(108, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(109, "div", 48)(110, "div", 49)(111, "h5", 46);
      \u0275\u0275text(112, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 50)(114, "form", 51);
      \u0275\u0275element(115, "input", 52);
      \u0275\u0275elementStart(116, "button", 53);
      \u0275\u0275element(117, "i", 54);
      \u0275\u0275text(118, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 55)(120, "div", 56);
      \u0275\u0275element(121, "img", 57);
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(124, "br");
      \u0275\u0275text(125, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 56);
      \u0275\u0275element(127, "img", 58);
      \u0275\u0275elementStart(128, "p");
      \u0275\u0275text(129, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 56);
      \u0275\u0275element(131, "img", 59);
      \u0275\u0275elementStart(132, "p");
      \u0275\u0275text(133, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(134, "div", 60)(135, "div", 1)(136, "div", 61)(137, "div", 62)(138, "div", 63)(139, "p", 64);
      \u0275\u0275text(140, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "div", 62)(142, "div")(143, "ul", 65)(144, "li")(145, "a", 47);
      \u0275\u0275text(146, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "li")(148, "a", 47);
      \u0275\u0275text(149, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getFullName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getFonction());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getEntrepriseName());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getSpecialites());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorStatements);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.headerStats.formations);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.headerStats.apprenants);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("ins-stat--warn", ctx.headerStats.enDifficulte > 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.headerStats.enDifficulte);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.nextSession);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last !== "students-details" ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last === "students-details" ? 48 : -1);
      \u0275\u0275advance(27);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.instructorMessage);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FeatherIconModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    SharedModule,
    InstructorSidebarComponent
  ], styles: ["\n\n.content[_ngcontent-%COMP%] {\n  padding: 21px 0 !important;\n}\n.ins-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.ins-header-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #9ca3af;\n  text-transform: uppercase;\n  padding: 14px 20px 0;\n}\n.ins-card[_ngcontent-%COMP%] {\n  padding: 14px 20px 0;\n}\n.ins-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.ins-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.ins-av[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 1.5px solid #85B7EB;\n  font-size: 17px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ins-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 3px;\n}\n.ins-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin: 0 0 8px;\n}\n.ins-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ins-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 0.5px solid #85B7EB;\n}\n.ins-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ins-tag[_ngcontent-%COMP%]:nth-child(2) {\n  background: #EEF2FF;\n  color: #3730A3;\n  border-color: #a5b4fc;\n}\n.ins-tag[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%] {\n  color: #3730A3;\n}\n.ins-tag[_ngcontent-%COMP%]:nth-child(3) {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.ins-tag[_ngcontent-%COMP%]:nth-child(3)   i[_ngcontent-%COMP%] {\n  color: #27500A;\n}\n.ins-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.ins-btn-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #4b5563;\n  font-size: 15px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ins-btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ins-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ins-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ins-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ins-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px 20px 18px;\n  border-top: 1px solid #f3f4f6;\n  background: #fafbfc;\n}\n.ins-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 14px;\n  border-left: 3px solid #85B7EB;\n  transition: box-shadow 0.15s;\n}\n.ins-stat[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.ins-stat[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #185FA5;\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ins-stat--warn[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.ins-stat--warn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  background: #fff8ee;\n  color: #b45309;\n}\n.ins-stat--warn[_ngcontent-%COMP%]   .ins-stat-val[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.ins-stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n}\n.ins-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 3px;\n}\n.ins-next[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 20px;\n  background: #f0f7ff;\n  border-top: 1px solid #d4e8fa;\n  font-size: 12px;\n  color: #4b5563;\n}\n.ins-next[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n}\n.ins-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ins-next[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.ins-next-badge[_ngcontent-%COMP%] {\n  flex: none !important;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  border: 0.5px solid #93c5fd;\n}\n@media (max-width: 768px) {\n  .ins-card-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ins-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .ins-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .ins-stat[_ngcontent-%COMP%] {\n    min-width: 50%;\n    border-bottom: 1px solid #f3f4f6;\n  }\n}\n/*# sourceMappingURL=instructor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorComponent, [{
    type: Component,
    args: [{ selector: "app-instructor", imports: [
      CommonModule,
      FeatherIconModule,
      RouterModule,
      SharedModule,
      InstructorSidebarComponent
    ], template: `<div class="content">\r
  <div class="container">\r
\r
    <!-- \u2500\u2500 Header Formateur \u2500\u2500 -->\r
    <div class="ins-header">\r
      <div class="ins-header-label">FORMATEUR \u2014 ESPACE P\xC9DAGOGIQUE</div>\r
\r
      <div class="ins-card">\r
        <!-- Identit\xE9 + Actions -->\r
        <div class="ins-card-top">\r
          <div class="ins-identity">\r
            <div class="ins-av">{{ getInitials() }}</div>\r
            <div class="ins-info">\r
              <h5 class="ins-name">{{ getFullName() }}</h5>\r
              <p class="ins-sub">\r
                {{ getFonction() }}<ng-container *ngIf="getEntrepriseName()"> \xB7 {{ getEntrepriseName() }}</ng-container>\r
              </p>\r
              <div class="ins-tags">\r
                <span class="ins-tag" *ngFor="let tag of getSpecialites()">\r
                  <i class="isax" [ngClass]="tag.icon"></i>{{ tag.label }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="ins-actions">\r
            <a [routerLink]="routes.instructorStatements" class="ins-btn-icon" title="Statistiques">\r
              <i class="isax isax-chart-2"></i>\r
            </a>\r
            <a href="/courses/instructor-course-add" target="_blank" class="ins-btn-primary">\r
              <i class="isax isax-add"></i>Nouvelle formation\r
            </a>\r
          </div>\r
        </div>\r
\r
        <!-- Stats strip -->\r
        <div class="ins-stats">\r
          <div class="ins-stat">\r
            <i class="isax isax-book-1"></i>\r
            <div>\r
              <div class="ins-stat-val">{{ headerStats.formations }}</div>\r
              <div class="ins-stat-lbl">Formations actives</div>\r
            </div>\r
          </div>\r
          <div class="ins-stat">\r
            <i class="isax isax-profile-2user"></i>\r
            <div>\r
              <div class="ins-stat-val">{{ headerStats.apprenants }}</div>\r
              <div class="ins-stat-lbl">Apprenants</div>\r
            </div>\r
          </div>\r
          <div class="ins-stat" [class.ins-stat--warn]="headerStats.enDifficulte > 0">\r
            <i class="isax isax-clock"></i>\r
            <div>\r
              <div class="ins-stat-val">{{ headerStats.enDifficulte }}</div>\r
              <div class="ins-stat-lbl">En difficult\xE9</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Prochaine session -->\r
      <div class="ins-next" *ngIf="nextSession">\r
        <i class="isax isax-video"></i>\r
        <span>Prochaine session \u2014 <strong>{{ nextSession.titre }}</strong> \xB7 {{ nextSession.date }}</span>\r
        <span class="ins-next-badge">{{ nextSession.delai }}</span>\r
      </div>\r
    </div>\r
\r
      <!-- Contenu selon la route -->\r
      @if(last !== 'students-details') {\r
        <div class="row">\r
            <!-- sidebar -->\r
            <app-instructor-sidebar class="col-lg-3"></app-instructor-sidebar>\r
            <!-- /Sidebar -->\r
\r
            <!-- Instructor Dashboard -->\r
            <div class="col-lg-9">\r
              <router-outlet></router-outlet>\r
            </div>\r
            <!-- Instructor Dashboard -->\r
        </div>\r
      }\r
\r
      @if(last === 'students-details') {\r
        <router-outlet></router-outlet>\r
      }\r
  </div>\r
</div>\r
<!-- Footer -->\r
<footer class="footer">\r
  <div class="footer-bg">\r
      <img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">\r
      <img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">\r
  </div>\r
  <div class="footer-top">\r
      <div class="container">\r
          <div class="row row-gap-4">\r
              <div class="col-lg-4">\r
                  <div class="footer-about">\r
                      <div class="footer-logo">\r
                          <img src="assets/img/logo.svg" alt="">\r
                      </div>\r
                      <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\r
                      <div class="d-flex align-items-center">\r
                          <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\r
                          <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\r
                      </div>\r
                  </div>\r
              </div>\r
              <div class="col-lg-8">\r
                  <div class="row row-gap-4">\r
                      <div class="col-lg-3">\r
                          <div class="footer-widget footer-menu">\r
                              <h5 class="footer-title">For Instructor</h5>\r
                              <ul>\r
                                <li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>\r
                                <li><a [routerLink]="routes.login">Login</a></li>\r
                                <li><a [routerLink]="routes.register">Register</a></li>\r
                                <li><a [routerLink]="routes.courseList">Booking</a></li>\r
                                <li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>\r
                            </ul>\r
                          </div>\r
                      </div>\r
                      <div class="col-lg-3">\r
                          <div class="footer-widget footer-menu">\r
                              <h5 class="footer-title">For Student</h5>\r
                              <ul>\r
                                <li><a href="javascript:void(0);">Appointments</a></li>\r
                                <li><a [routerLink]="routes.instructorMessage">Chat</a></li>\r
                                <li><a [routerLink]="routes.login">Login</a></li>\r
                                <li><a [routerLink]="routes.register">Register</a></li>\r
                                <li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>\r
                            </ul>\r
                          </div>\r
                      </div>\r
                      <div class="col-lg-6">\r
                          <div class="footer-widget footer-contact">\r
                              <h5 class="footer-title">Newsletter</h5>\r
                              <div class="subscribe-input">\r
                                  <form action="javascript:void(0);">\r
                                      <input type="email" class="form-control" placeholder="Enter your Email Address">\r
                                      <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>\r
                                  </form>\r
                              </div>\r
                              <div class="footer-contact-info">\r
                                  <div class="footer-address d-flex align-items-center">\r
                                      <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\r
                                      <p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\r
                                  </div>\r
                                  <div class="footer-address d-flex align-items-center">\r
                                      <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\r
                                      <p>dreamslms&#64;example.com</p>\r
                                  </div>\r
                                  <div class="footer-address d-flex align-items-center">\r
                                      <img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">\r
                                      <p>+19 123-456-7890</p>\r
                                  </div>\r
                              </div>\r
                          </div>\r
                      </div>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div>\r
  <div class="footer-bottom">\r
      <div class="container">\r
          <div class="row row-gap-2">\r
              <div class="col-md-6">\r
                  <div class="text-center text-md-start">\r
                      <p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>\r
                  </div>\r
              </div>\r
              <div class="col-md-6">\r
                  <div>\r
                      <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\r
                        <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\r
                        <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\r
                      </ul>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div>\r
</footer>\r
<!-- /Footer -->`, styles: ["/* src/app/features/instructor/instructor.component.scss */\n.content {\n  padding: 21px 0 !important;\n}\n.ins-header {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n.ins-header-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #9ca3af;\n  text-transform: uppercase;\n  padding: 14px 20px 0;\n}\n.ins-card {\n  padding: 14px 20px 0;\n}\n.ins-card-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.ins-identity {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.ins-av {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 1.5px solid #85B7EB;\n  font-size: 17px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ins-name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 3px;\n}\n.ins-sub {\n  font-size: 12px;\n  color: #9ca3af;\n  margin: 0 0 8px;\n}\n.ins-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ins-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 0.5px solid #85B7EB;\n}\n.ins-tag i {\n  font-size: 12px;\n}\n.ins-tag:nth-child(2) {\n  background: #EEF2FF;\n  color: #3730A3;\n  border-color: #a5b4fc;\n}\n.ins-tag:nth-child(2) i {\n  color: #3730A3;\n}\n.ins-tag:nth-child(3) {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.ins-tag:nth-child(3) i {\n  color: #27500A;\n}\n.ins-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.ins-btn-icon {\n  width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #4b5563;\n  font-size: 15px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ins-btn-icon:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ins-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ins-btn-primary i {\n  font-size: 14px;\n}\n.ins-btn-primary:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ins-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px 20px 18px;\n  border-top: 1px solid #f3f4f6;\n  background: #fafbfc;\n}\n.ins-stat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 14px;\n  border-left: 3px solid #85B7EB;\n  transition: box-shadow 0.15s;\n}\n.ins-stat:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.ins-stat > i {\n  font-size: 20px;\n  color: #185FA5;\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ins-stat--warn {\n  border-left-color: #f59e0b;\n}\n.ins-stat--warn > i {\n  background: #fff8ee;\n  color: #b45309;\n}\n.ins-stat--warn .ins-stat-val {\n  color: #b45309;\n}\n.ins-stat-val {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n}\n.ins-stat-lbl {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 3px;\n}\n.ins-next {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 20px;\n  background: #f0f7ff;\n  border-top: 1px solid #d4e8fa;\n  font-size: 12px;\n  color: #4b5563;\n}\n.ins-next > i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n}\n.ins-next span {\n  flex: 1;\n}\n.ins-next strong {\n  color: #111827;\n}\n.ins-next-badge {\n  flex: none !important;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  border: 0.5px solid #93c5fd;\n}\n@media (max-width: 768px) {\n  .ins-card-top {\n    flex-direction: column;\n  }\n  .ins-actions {\n    width: 100%;\n  }\n  .ins-stats {\n    flex-wrap: wrap;\n  }\n  .ins-stat {\n    min-width: 50%;\n    border-bottom: 1px solid #f3f4f6;\n  }\n}\n/*# sourceMappingURL=instructor.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: SessionFormationService }, { type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorComponent, { className: "InstructorComponent", filePath: "src/app/features/instructor/instructor.component.ts", lineNumber: 24 });
})();
export {
  InstructorComponent
};
//# sourceMappingURL=chunk-LZDT4IET.js.map
