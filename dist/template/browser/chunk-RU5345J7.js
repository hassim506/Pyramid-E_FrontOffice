import {
  CommonService
} from "./chunk-UYSR4AJV.js";
import {
  SharedModule
} from "./chunk-FT5Q6NE3.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-LFLGGSY5.js";
import {
  DomSanitizer
} from "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgClass,
  TitleCasePipe
} from "./chunk-GWJREDC5.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2JCHGHJA.js";
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
var _c02 = (a0) => ({ "active": a0 });
var InstructorSidebarComponent = class _InstructorSidebarComponent {
  common;
  routes = routes;
  base = "";
  page = "";
  last = "";
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
  }
  static \u0275fac = function InstructorSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSidebarComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSidebarComponent, selectors: [["app-instructor-sidebar"]], decls: 77, vars: 29, consts: [[1, "settings-sidebar", "mb-lg-0"], [1, "mb-3"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "fa-solid", "fa-user", "me-2"], [1, "isax", "isax-teacher5", "me-2"], [1, "isax", "isax-volume-high5", "me-2"], [1, "isax", "isax-clipboard-text5", "me-2"], [1, "d-inline-flex", "align-items-center", 3, "routerLink", "ngClass"], [1, "isax", "isax-profile-2user5", "me-2"], [1, "isax", "isax-award5", "me-2"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink", "ngClass"], [1, "isax", "isax-medal-star5", "me-2"], [1, "isax", "isax-note-215", "me-2"], [1, "isax", "isax-wallet-add5", "me-2"], [1, "isax", "isax-coin-15", "me-2"], [1, "isax", "isax-shopping-cart5", "me-2"], [1, "isax", "isax-messages-35", "me-2"], [1, "isax", "isax-ticket5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], [1, "isax", "isax-logout5", "me-2"]], template: function InstructorSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h6", 1);
      \u0275\u0275text(3, "Main Menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul", 2)(5, "li")(6, "a", 3);
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 3);
      \u0275\u0275element(11, "i", 5);
      \u0275\u0275text(12, "Mon Profil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 3);
      \u0275\u0275element(15, "i", 6);
      \u0275\u0275text(16, "Formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 3);
      \u0275\u0275element(19, "i", 6);
      \u0275\u0275text(20, "Sessions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 3);
      \u0275\u0275element(23, "i", 7);
      \u0275\u0275text(24, "Annonces");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 3);
      \u0275\u0275element(27, "i", 8);
      \u0275\u0275text(28, "Devoirs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 9);
      \u0275\u0275element(31, "i", 10);
      \u0275\u0275text(32, "\xC9tudiants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 9);
      \u0275\u0275element(35, "i", 11);
      \u0275\u0275text(36, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 12);
      \u0275\u0275element(39, "i", 13);
      \u0275\u0275text(40, "R\xE9sultats Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 3);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275text(44, "Certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 3);
      \u0275\u0275element(47, "i", 15);
      \u0275\u0275text(48, "Revenus");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 3);
      \u0275\u0275element(51, "i", 16);
      \u0275\u0275text(52, "Paiements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 3);
      \u0275\u0275element(55, "i", 17);
      \u0275\u0275text(56, "Relev\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 3);
      \u0275\u0275element(59, "i", 18);
      \u0275\u0275text(60, "Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 3);
      \u0275\u0275element(63, "i", 19);
      \u0275\u0275text(64, "Support Tickets");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(65, "hr");
      \u0275\u0275elementStart(66, "h6", 1);
      \u0275\u0275text(67, "Param\xE8tres du compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "ul")(69, "li")(70, "a", 9);
      \u0275\u0275element(71, "i", 20);
      \u0275\u0275text(72, "Param\xE8tres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 3);
      \u0275\u0275element(75, "i", 21);
      \u0275\u0275text(76, "D\xE9connexion");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorCourse);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorSession);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorAnnouncements);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorAssignment);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsGrid)("ngClass", \u0275\u0275pureFunction1(21, _c02, ctx.page === "students-list" || ctx.page === "students-grid"));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorQuiz)("ngClass", \u0275\u0275pureFunction1(23, _c02, ctx.page === "instructor-quiz" || ctx.page === "instructor-quiz-questions"));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorQuizResult)("ngClass", \u0275\u0275pureFunction1(25, _c02, ctx.page === "instructor-quiz-result"));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorCertificate);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorEarning);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructor_payouts);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorStatements);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructor_tickets);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettings)("ngClass", \u0275\u0275pureFunction1(27, _c02, ctx.last === "instructor-settings" || ctx.last === "instructor-change-password" || ctx.last === "instructor-plans" || ctx.last === "instructor-social-profiles" || ctx.last === "instructor-linked-accounts" || ctx.last === "instructor-setting-notifications" || ctx.last === "instructor-integrations" || ctx.last === "instructor-setting-withdraw"));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive], template: ` <div class="settings-sidebar mb-lg-0 ">\r
    <div>\r
        <h6 class="mb-3">Main Menu</h6>\r
        <ul class="mb-3 pb-1">\r
            <li>\r
                <a [routerLink]="routes.instructor_dashboard" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-grid-35 me-2"></i>Dashboard</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorProfile" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="fa-solid fa-user me-2"></i>Mon Profil</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorCourse" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-teacher5 me-2"></i>Formations</a>\r
\r
            </li>\r
            <li>  \r
                <a [routerLink]="routes.instructorSession" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-teacher5 me-2"></i>Sessions</a>\r
\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorAnnouncements" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-volume-high5 me-2"></i>Annonces</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorAssignment" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-clipboard-text5 me-2"></i>Devoirs</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.studentsGrid" [ngClass]="{'active':page==='students-list' || page==='students-grid'}" class="d-inline-flex align-items-center" ><i class="isax isax-profile-2user5 me-2"></i>\xC9tudiants</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorQuiz" [ngClass]="{'active':page==='instructor-quiz' || page==='instructor-quiz-questions'}" class="d-inline-flex align-items-center"><i class="isax isax-award5 me-2"></i>Quiz</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorQuizResult" [ngClass]="{'active':page==='instructor-quiz-result' }" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-medal-star5 me-2"></i>R\xE9sultats Quiz</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorCertificate" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-note-215 me-2"></i>Certificats</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorEarning" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-wallet-add5 me-2"></i>Revenus</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructor_payouts" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-coin-15 me-2"></i>Paiements</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorStatements" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-shopping-cart5 me-2"></i>Relev\xE9s</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructorMessage" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-messages-35 me-2"></i>Messages</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.instructor_tickets" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-ticket5 me-2"></i>Support Tickets</a>\r
            </li>\r
        </ul>\r
        <hr>\r
        <h6 class="mb-3">Param\xE8tres du compte</h6>\r
        <ul>\r
            <li>\r
                <a [routerLink]="routes.instructorSettings" \r
                [ngClass]="{'active':last==='instructor-settings' || last==='instructor-change-password' || last==='instructor-plans' \r
                || last === 'instructor-social-profiles' || last === 'instructor-linked-accounts' || last === 'instructor-setting-notifications' || last === 'instructor-integrations' || last === 'instructor-setting-withdraw'\r
                }" \r
                class="d-inline-flex align-items-center"><i class="isax isax-setting-25 me-2"></i>Param\xE8tres</a>\r
            </li>\r
            <li>\r
                <a [routerLink]="routes.login" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-logout5 me-2"></i>D\xE9connexion</a>\r
            </li>\r
        </ul>\r
    </div>\r
</div>` }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSidebarComponent, { className: "InstructorSidebarComponent", filePath: "src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.ts", lineNumber: 13 });
})();

// src/app/features/instructor/instructor.component.ts
function InstructorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 18)(3, "div", 55)(4, "div", 56)(5, "h2", 57);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nav", 58)(9, "ol", 59)(10, "li", 60)(11, "a", 37);
    \u0275\u0275text(12, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 61);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r0.last));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 5, ctx_r0.last));
  }
}
function InstructorComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-instructor-sidebar", 34);
    \u0275\u0275elementStart(2, "div", 62);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}
function InstructorComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var InstructorComponent = class _InstructorComponent {
  router;
  routes = routes;
  last = "";
  instructorProfile = null;
  constructor(router) {
    this.router = router;
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split("/")[data.url.split("/").length - 1];
      }
    });
  }
  ngOnInit() {
    this.loadInstructorProfile();
  }
  loadInstructorProfile() {
    try {
      const userDataString = localStorage.getItem("pyramide_user");
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        if (!currentUser.role && currentUser.role_id === 3) {
          currentUser.role = "Instructeur";
        }
        this.instructorProfile = currentUser;
      }
    } catch (error) {
      console.error("Erreur lors du chargement du profil:", error);
    }
  }
  getFullName() {
    if (!this.instructorProfile)
      return "Utilisateur";
    return `${this.instructorProfile.prenom} ${this.instructorProfile.nom}`;
  }
  getRoleName(user) {
    if (!user.role) {
      return "Non d\xE9fini";
    }
    if (typeof user.role === "object" && user.role !== null && "name" in user.role) {
      return user.role.name;
    }
    if (typeof user.role === "string") {
      return user.role;
    }
    return "Non d\xE9fini";
  }
  getInitials() {
    if (!this.instructorProfile)
      return "U";
    const firstNameInitial = this.instructorProfile.prenom?.charAt(0) || "";
    const lastNameInitial = this.instructorProfile.nom?.charAt(0) || "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }
  getUserAvatar() {
    if (this.instructorProfile && this.instructorProfile.avatar) {
      return this.instructorProfile.avatar;
    }
    return "assets/img/user/user-01.jpg";
  }
  static \u0275fac = function InstructorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorComponent, selectors: [["app-instructor"]], decls: 127, vars: 19, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "instructor-profile"], [1, "instructor-profile-bg"], [1, "row", "align-items-center", "row-gap-3", "instructor-profile"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], [1, "avatar-placeholder"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-md-end"], [1, "btn", "btn-white", "rounded-pill", 3, "routerLink"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "row"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-9"]], template: function InstructorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, InstructorComponent_Conditional_0_Template, 16, 7, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8)(9, "div", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "h5", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementStart(16, "a", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 15)(20, "a", 16);
      \u0275\u0275text(21, "Ajouter Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 17);
      \u0275\u0275text(23, "Tableau de bords");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(24, InstructorComponent_Conditional_24_Template, 4, 0, "div", 18);
      \u0275\u0275conditionalCreate(25, InstructorComponent_Conditional_25_Template, 1, 0, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "footer", 19)(27, "div", 20);
      \u0275\u0275element(28, "img", 21)(29, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 2)(32, "div", 24)(33, "div", 25)(34, "div", 26)(35, "div", 27);
      \u0275\u0275element(36, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 7)(40, "a", 29);
      \u0275\u0275element(41, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 31);
      \u0275\u0275element(43, "img", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 33)(45, "div", 24)(46, "div", 34)(47, "div", 35)(48, "h5", 36);
      \u0275\u0275text(49, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul")(51, "li")(52, "a", 37);
      \u0275\u0275text(53, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 37);
      \u0275\u0275text(56, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 37);
      \u0275\u0275text(59, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 37);
      \u0275\u0275text(62, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 37);
      \u0275\u0275text(65, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(66, "div", 34)(67, "div", 35)(68, "h5", 36);
      \u0275\u0275text(69, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul")(71, "li")(72, "a", 31);
      \u0275\u0275text(73, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 37);
      \u0275\u0275text(76, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 37);
      \u0275\u0275text(79, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 37);
      \u0275\u0275text(82, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 37);
      \u0275\u0275text(85, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "div", 38)(87, "div", 39)(88, "h5", 36);
      \u0275\u0275text(89, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 40)(91, "form", 41);
      \u0275\u0275element(92, "input", 42);
      \u0275\u0275elementStart(93, "button", 43);
      \u0275\u0275element(94, "i", 44);
      \u0275\u0275text(95, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 45)(97, "div", 46);
      \u0275\u0275element(98, "img", 47);
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(101, "br");
      \u0275\u0275text(102, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 46);
      \u0275\u0275element(104, "img", 48);
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 46);
      \u0275\u0275element(108, "img", 49);
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(111, "div", 50)(112, "div", 2)(113, "div", 51)(114, "div", 6)(115, "div", 52)(116, "p", 53);
      \u0275\u0275text(117, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 6)(119, "div")(120, "ul", 54)(121, "li")(122, "a", 37);
      \u0275\u0275text(123, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "li")(125, "a", 37);
      \u0275\u0275text(126, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.getInitials(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getFullName(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorCourseAdd);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.last !== "students-details" ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last === "students-details" ? 25 : -1);
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
    FeatherIconModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    SharedModule,
    InstructorSidebarComponent,
    TitleCasePipe
  ], styles: ["\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.instructor-profile[_ngcontent-%COMP%] {\n  background: #fad6d6 !important;\n  border-radius: 16px;\n  padding: 5px 10px;\n  margin-bottom: 24px;\n}\n.instructor-profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid white;\n}\n.instructor-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000000 !important;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.instructor-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.7) !important;\n  font-weight: 400;\n}\n.instructor-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #D4AF37;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.instructor-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 10px;\n}\n.instructor-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  background: #fad6d6;\n  color: #333333;\n  border: 1px solid #d120a3;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.instructor-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #000000;\n  border-color: #d120a3;\n}\n.instructor-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #d120a3;\n  color: white;\n  border: 1px solid #f4d9af;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.instructor-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #fad6d6;\n  border-color: #5a6268;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  .instructor-profile[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    border-radius: 12px;\n  }\n  .instructor-profile[_ngcontent-%COMP%]   .avatar-xxl[_ngcontent-%COMP%] {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .instructor-profile[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .instructor-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .instructor-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%], \n   .instructor-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 576px) {\n  .instructor-profile[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .instructor-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .instructor-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%], \n   .instructor-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=instructor.component.css.map */"] });
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
    ], template: `<!-- Breadcrumb -->\r
@if (last !== 'view') {\r
  <div class="breadcrumb-bar text-center">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-md-12 col-12">\r
          <div class="breadcrumb-list">\r
            <h2 class="breadcrumb-title">{{ last | titlecase }}</h2>\r
            <nav aria-label="breadcrumb" class="page-breadcrumb">\r
              <ol class="breadcrumb justify-content-center mb-0">\r
                <li class="breadcrumb-item"><a [routerLink] = "routes.home">Home</a></li>\r
                <li class="breadcrumb-item active" aria-current="page">{{ last | titlecase }}</li>\r
              </ol>\r
            </nav>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
<!-- /Breadcrumb -->\r
\r
<div class="content">\r
  <div class="container">\r
      <!-- Banni\xE8re profil instructor - Toujours visible -->\r
      <div class="instructor-profile">\r
          <div class="instructor-profile-bg">\r
              <!-- <img src="assets/img/bg/card-bg-01.png" class="instructor-profile-bg-1" alt=""> -->\r
          </div>\r
          <div class="row align-items-center row-gap-3 instructor-profile">\r
              <div class="col-md-6">\r
                  <div class="d-flex align-items-center">\r
                      <span class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">\r
                          <div class="avatar-placeholder">\r
                            {{ getInitials() }}\r
                          </div>\r
                          <span class="verify-tick"><i class="isax isax-verify5"></i></span>\r
                      </span>\r
                      <div>\r
                          <h5 class="mb-1 text-white d-inline-flex align-items-center">\r
                            {{ getFullName() }}\r
                            <a [routerLink]="routes.instructorProfile" class="link-light fs-16 ms-2">\r
                              <i class="isax isax-edit-2"></i>\r
                            </a>\r
                          </h5>\r
                          <!-- <p class="text-light">{{ getRoleName() }}</p> -->\r
                      </div>\r
                  </div>\r
              </div>\r
              <div class="col-md-6">\r
                  <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">\r
                      <a [routerLink]="routes.instructorCourseAdd" class="btn btn-white rounded-pill">Ajouter Formation</a>\r
                      <a [routerLink]="routes.instructor_dashboard" class="btn btn-secondary rounded-pill">Tableau de bords</a>\r
                  </div>\r
              </div>\r
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
<!-- /Footer -->`, styles: ["/* src/app/features/instructor/instructor.component.scss */\n.avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.instructor-profile {\n  background: #fad6d6 !important;\n  border-radius: 16px;\n  padding: 5px 10px;\n  margin-bottom: 24px;\n}\n.instructor-profile .avatar {\n  border: 2px solid white;\n}\n.instructor-profile h5 {\n  color: #000000 !important;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.instructor-profile p {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.7) !important;\n  font-weight: 400;\n}\n.instructor-profile .verify-tick {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #D4AF37;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.instructor-profile .verify-tick i {\n  color: white;\n  font-size: 10px;\n}\n.instructor-profile .btn-white {\n  background: #fad6d6;\n  color: #333333;\n  border: 1px solid #d120a3;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.instructor-profile .btn-white:hover {\n  background: #f8f9fa;\n  color: #000000;\n  border-color: #d120a3;\n}\n.instructor-profile .btn-secondary {\n  background: #d120a3;\n  color: white;\n  border: 1px solid #f4d9af;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.instructor-profile .btn-secondary:hover {\n  background: #fad6d6;\n  border-color: #5a6268;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  .instructor-profile {\n    padding: 5px 10px;\n    border-radius: 12px;\n  }\n  .instructor-profile .avatar-xxl {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .instructor-profile .avatar-placeholder {\n    font-size: 20px;\n  }\n  .instructor-profile h5 {\n    font-size: 1rem;\n  }\n  .instructor-profile .btn-white,\n  .instructor-profile .btn-secondary {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 576px) {\n  .instructor-profile {\n    padding: 16px 20px;\n  }\n  .instructor-profile .d-flex.align-items-center.flex-wrap {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .instructor-profile .d-flex.align-items-center.flex-wrap .btn-white,\n  .instructor-profile .d-flex.align-items-center.flex-wrap .btn-secondary {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=instructor.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorComponent, { className: "InstructorComponent", filePath: "src/app/features/instructor/instructor.component.ts", lineNumber: 23 });
})();
export {
  InstructorComponent
};
//# sourceMappingURL=chunk-RU5345J7.js.map
