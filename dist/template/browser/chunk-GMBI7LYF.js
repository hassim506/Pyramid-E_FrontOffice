import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import {
  CommonService
} from "./chunk-SMSMPMAO.js";
import {
  AuthService
} from "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  SharedModule
} from "./chunk-YZH4WHQ7.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-AJNKO2CX.js";
import {
  DomSanitizer
} from "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-3IMMP55I.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UPBSS6WA.js";
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
    \u0275\u0275elementStart(0, "span", 46);
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
    \u0275\u0275elementStart(0, "div", 47)(1, "a", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Toutes mes formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 50);
    \u0275\u0275element(6, "i", 51);
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
    \u0275\u0275elementStart(0, "div", 47)(1, "a", 48);
    \u0275\u0275element(2, "i", 52);
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
    \u0275\u0275elementStart(0, "div", 47)(1, "a", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Tous les quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 48);
    \u0275\u0275element(6, "i", 53);
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
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.apprenantCount);
  }
}
function InstructorSidebarComponent_div_110_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275element(4, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 64);
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
function InstructorSidebarComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3, "Compl\xE9tion par formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5, "Cette semaine");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, InstructorSidebarComponent_div_110_div_6_Template, 7, 5, "div", 59);
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
  routes = routes;
  base = "";
  page = "";
  last = "";
  currentUser;
  formationsCount = 0;
  apprenantCount = 0;
  completionRate = 0;
  progressBars = [];
  openGroups = {
    formations: true,
    modules: false,
    quiz: false
  };
  constructor(common, authService, formationService) {
    this.common = common;
    this.authService = authService;
    this.formationService = formationService;
    this.common.base.subscribe((v) => this.base = v);
    this.common.page.subscribe((v) => this.page = v);
    this.common.last.subscribe((v) => this.last = v);
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.loadStats();
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
    return new (__ngFactoryType__ || _InstructorSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSidebarComponent, selectors: [["app-instructor-sidebar"]], decls: 121, vars: 30, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "isax", "isax-teacher"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-profile"], [1, "prof-row"], [1, "prof-av"], [1, "prof-name"], [1, "prof-role"], [1, "prof-stats"], [1, "pstat"], [1, "pstat-v"], [1, "pstat-l"], [1, "pstat-sep"], [1, "sb-scroll"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3", "icon"], [1, "sb-item-label"], [1, "isax", "isax-chart-2", "icon"], [1, "sb-divider"], [1, "sb-group"], [1, "sb-group-header", 3, "click"], [1, "isax", "isax-book", "icon"], ["class", "sb-badge sb-badge--purple", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "arr"], ["class", "sb-sub", 4, "ngIf"], [1, "isax", "isax-element-4", "icon"], [1, "isax", "isax-award", "icon"], [1, "isax", "isax-profile-2user", "icon"], ["class", "sb-badge sb-badge--gray", 4, "ngIf"], [1, "isax", "isax-note-21", "icon"], [1, "isax", "isax-clipboard-text", "icon"], [1, "isax", "isax-calendar-1", "icon"], [1, "isax", "isax-messages-3", "icon"], [1, "isax", "isax-volume-high", "icon"], [1, "isax", "isax-ticket", "icon"], ["class", "sb-progress-card", 4, "ngIf"], [1, "sb-bottom"], ["routerLinkActive", "active", 1, "sb-bottom-item", 3, "routerLink"], [1, "isax", "isax-user-square"], [1, "isax", "isax-setting-2"], [1, "sb-bottom-item", "logout", 3, "routerLink"], [1, "isax", "isax-logout"], [1, "sb-badge", "sb-badge--purple"], [1, "sb-sub"], ["routerLinkActive", "active", 1, "sb-sub-item", 3, "routerLink"], [1, "isax", "isax-task-square"], ["href", "/courses/instructor-course-add", "target", "_blank", 1, "sb-sub-item"], [1, "isax", "isax-add-circle"], [1, "isax", "isax-video-circle"], [1, "isax", "isax-chart-2"], [1, "sb-badge", "sb-badge--gray"], [1, "sb-progress-card"], [1, "pc-header"], [1, "pc-title"], [1, "pc-period"], ["class", "pc-row", 4, "ngFor", "ngForOf"], [1, "pc-row"], [1, "pc-name", 3, "title"], [1, "pc-bar-wrap"], [1, "pc-fill"], [1, "pc-pct"]], template: function InstructorSidebarComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "div", 22);
      \u0275\u0275elementStart(96, "div", 17);
      \u0275\u0275text(97, "Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 18);
      \u0275\u0275element(99, "i", 36);
      \u0275\u0275elementStart(100, "span", 20);
      \u0275\u0275text(101, "Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "a", 18);
      \u0275\u0275element(103, "i", 37);
      \u0275\u0275elementStart(104, "span", 20);
      \u0275\u0275text(105, "Annonces");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "a", 18);
      \u0275\u0275element(107, "i", 38);
      \u0275\u0275elementStart(108, "span", 20);
      \u0275\u0275text(109, "Tickets support");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(110, InstructorSidebarComponent_div_110_Template, 7, 1, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 40)(112, "a", 41);
      \u0275\u0275element(113, "i", 42);
      \u0275\u0275text(114, " Mon profil formateur ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "a", 41);
      \u0275\u0275element(116, "i", 43);
      \u0275\u0275text(117, " Pr\xE9f\xE9rences ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "a", 44);
      \u0275\u0275element(119, "i", 45);
      \u0275\u0275text(120, " D\xE9connexion ");
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
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: #1A1035;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 12px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.25);\n  margin-top: 1px;\n}\n.sb-profile[_ngcontent-%COMP%] {\n  margin: 10px 10px 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n  flex-shrink: 0;\n}\n.prof-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.prof-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #534AB7;\n  color: #CECBF6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.prof-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.prof-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.38);\n  margin-top: 1px;\n}\n.prof-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding-top: 7px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n}\n.pstat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n}\n.pstat-v[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #CECBF6;\n}\n.pstat-l[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 1px;\n}\n.pstat-sep[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 4px 0 8px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 6px 14px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  color: #fff;\n}\n.sb-item.active[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  font-weight: 500;\n  flex: none;\n  width: fit-content;\n  line-height: 1.4;\n}\n.sb-badge--red[_ngcontent-%COMP%] {\n  background: #791F1F;\n  color: #F7C1C1;\n}\n.sb-badge--amber[_ngcontent-%COMP%] {\n  background: #633806;\n  color: #FAC775;\n}\n.sb-badge--gray[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.55);\n}\n.sb-badge--green[_ngcontent-%COMP%] {\n  background: #27500A;\n  color: #C0DD97;\n}\n.sb-badge--purple[_ngcontent-%COMP%] {\n  background: #3C3489;\n  color: #CECBF6;\n}\n.sb-group[_ngcontent-%COMP%] {\n  margin: 1px 8px;\n}\n.sb-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-group-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sb-badge) {\n  flex: 1;\n}\n.sb-group-header[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sb-sub[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-sub-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sb-badge) {\n  flex: 1;\n}\n.sb-sub-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active[_ngcontent-%COMP%] {\n  color: #AFA9EC;\n}\n.sb-progress-card[_ngcontent-%COMP%] {\n  margin: 8px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.pc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 9px;\n}\n.pc-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pc-period[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #AFA9EC;\n  font-weight: 500;\n}\n.pc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 5px;\n}\n.pc-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pc-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pc-bar-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pc-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #7F77DD;\n}\n.pc-pct[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.4);\n  min-width: 26px;\n  text-align: right;\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n  padding: 8px 10px 12px;\n  flex-shrink: 0;\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(175, 169, 236, 0.6);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(83, 74, 183, 0.2);\n  color: #CECBF6;\n}\n/*# sourceMappingURL=instructor-sidebar.component.css.map */"] });
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
        <span *ngIf="formationsCount > 0" class="sb-badge sb-badge--purple">{{ formationsCount }}</span>
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
`, styles: ["/* src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.scss */\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: #1A1035;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 12px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-logo-mark {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.25);\n  margin-top: 1px;\n}\n.sb-profile {\n  margin: 10px 10px 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n  flex-shrink: 0;\n}\n.prof-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.prof-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #534AB7;\n  color: #CECBF6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.prof-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.prof-role {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.38);\n  margin-top: 1px;\n}\n.prof-stats {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding-top: 7px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n}\n.pstat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n}\n.pstat-v {\n  font-size: 13px;\n  font-weight: 500;\n  color: #CECBF6;\n}\n.pstat-l {\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 1px;\n}\n.pstat-sep {\n  width: 0.5px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.sb-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 4px 0 8px;\n}\n.sb-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 6px 14px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i.icon {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active {\n  background: #534AB7;\n  color: #fff;\n}\n.sb-item.active i.icon {\n  color: #fff;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  font-weight: 500;\n  flex: none;\n  width: fit-content;\n  line-height: 1.4;\n}\n.sb-badge--red {\n  background: #791F1F;\n  color: #F7C1C1;\n}\n.sb-badge--amber {\n  background: #633806;\n  color: #FAC775;\n}\n.sb-badge--gray {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.55);\n}\n.sb-badge--green {\n  background: #27500A;\n  color: #C0DD97;\n}\n.sb-badge--purple {\n  background: #3C3489;\n  color: #CECBF6;\n}\n.sb-group {\n  margin: 1px 8px;\n}\n.sb-group-header {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.52);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header i.icon {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sb-group-header span:not(.sb-badge) {\n  flex: 1;\n}\n.sb-group-header i.arr {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open i.arr {\n  transform: rotate(90deg);\n}\n.sb-sub {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item i {\n  font-size: 14px;\n}\n.sb-sub-item span:not(.sb-badge) {\n  flex: 1;\n}\n.sb-sub-item:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active {\n  color: #AFA9EC;\n}\n.sb-progress-card {\n  margin: 8px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.pc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 9px;\n}\n.pc-title {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pc-period {\n  font-size: 11px;\n  color: #AFA9EC;\n  font-weight: 500;\n}\n.pc-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 5px;\n}\n.pc-row:last-child {\n  margin-bottom: 0;\n}\n.pc-name {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pc-bar-wrap {\n  width: 64px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pc-fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #7F77DD;\n}\n.pc-pct {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.4);\n  min-width: 26px;\n  text-align: right;\n}\n.sb-bottom {\n  border-top: 0.5px solid rgba(255, 255, 255, 0.07);\n  padding: 8px 10px 12px;\n  flex-shrink: 0;\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.42);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active {\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.logout {\n  color: rgba(175, 169, 236, 0.6);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(83, 74, 183, 0.2);\n  color: #CECBF6;\n}\n/*# sourceMappingURL=instructor-sidebar.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: AuthService }, { type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSidebarComponent, { className: "InstructorSidebarComponent", filePath: "src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.ts", lineNumber: 17 });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorComponent, selectors: [["app-instructor"]], decls: 127, vars: 18, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "instructor-profile"], [1, "instructor-profile-bg"], [1, "row", "align-items-center", "row-gap-3", "instructor-profile"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], [1, "avatar-placeholder"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-md-end"], ["href", "/courses/instructor-course-add", "target", "_blank", 1, "btn", "btn-white", "rounded-pill"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "row"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-9"]], template: function InstructorComponent_Template(rf, ctx) {
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
      \u0275\u0275advance(6);
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
                      <a href="/courses/instructor-course-add" target="_blank" class="btn btn-white rounded-pill">Ajouter Formation</a>\r
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
//# sourceMappingURL=chunk-GMBI7LYF.js.map
