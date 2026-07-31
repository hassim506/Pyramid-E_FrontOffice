import {
  CommonModule
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/settings/adminrh-social-profiles/adminrh-social-profiles.component.ts
var AdminrhSocialProfilesComponent = class _AdminrhSocialProfilesComponent {
  static \u0275fac = function AdminrhSocialProfilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSocialProfilesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSocialProfilesComponent, selectors: [["app-adminrh-social-profiles"]], decls: 41, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], [1, "position-relative", "input-icon-start"], ["type", "text", "placeholder", "https://www.twitter.com/", 1, "form-control"], [1, "social-icon"], [1, "fa-brands", "fa-x-twitter", "fs-14"], ["type", "text", "placeholder", "https://www.facebook.com/", 1, "form-control"], [1, "fa-brands", "fa-square-facebook", "fs-14"], ["type", "text", "placeholder", "https://www.instagram.com/", 1, "form-control"], [1, "fa-brands", "fa-instagram", "fs-14"], ["type", "text", "placeholder", "https://www.linkedin.com/", 1, "form-control"], [1, "fa-brands", "fa-linkedin-in", "fs-14"], ["type", "text", "placeholder", "https://www.youtube.com/", 1, "form-control"], [1, "fa-brands", "fa-youtube", "fs-14"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-secondary"]], template: function AdminrhSocialProfilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "label", 3);
      \u0275\u0275text(5, "Twitter");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 4);
      \u0275\u0275domElement(7, "input", 5);
      \u0275\u0275domElementStart(8, "span", 6);
      \u0275\u0275domElement(9, "i", 7);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 2)(11, "label", 3);
      \u0275\u0275text(12, "Facebook");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 4);
      \u0275\u0275domElement(14, "input", 8);
      \u0275\u0275domElementStart(15, "span", 6);
      \u0275\u0275domElement(16, "i", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "div", 2)(18, "label", 3);
      \u0275\u0275text(19, "Instagram");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 4);
      \u0275\u0275domElement(21, "input", 10);
      \u0275\u0275domElementStart(22, "span", 6);
      \u0275\u0275domElement(23, "i", 11);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(24, "div", 2)(25, "label", 3);
      \u0275\u0275text(26, "LinkedIn");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 4);
      \u0275\u0275domElement(28, "input", 12);
      \u0275\u0275domElementStart(29, "span", 6);
      \u0275\u0275domElement(30, "i", 13);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(31, "div", 2)(32, "label", 3);
      \u0275\u0275text(33, "YouTube");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "div", 4);
      \u0275\u0275domElement(35, "input", 14);
      \u0275\u0275domElementStart(36, "span", 6);
      \u0275\u0275domElement(37, "i", 15);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(38, "div", 16)(39, "button", 17);
      \u0275\u0275text(40, "Save Social Profile");
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSocialProfilesComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-social-profiles", imports: [CommonModule], template: '<div class="card">\r\n    <div class="card-body">\r\n        <form>\r\n            <div class="mb-3">\r\n                <label class="form-label">Twitter</label>\r\n                <div class="position-relative input-icon-start">\r\n                    <input type="text" class="form-control" placeholder="https://www.twitter.com/">\r\n                    <span class="social-icon"><i class="fa-brands fa-x-twitter fs-14"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class="mb-3">\r\n                <label class="form-label">Facebook</label>\r\n                <div class="position-relative input-icon-start">\r\n                    <input type="text" class="form-control" placeholder="https://www.facebook.com/">\r\n                    <span class="social-icon"><i class="fa-brands fa-square-facebook fs-14"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class="mb-3">\r\n                <label class="form-label">Instagram</label>\r\n                <div class="position-relative input-icon-start">\r\n                    <input type="text" class="form-control" placeholder="https://www.instagram.com/">\r\n                    <span class="social-icon"><i class="fa-brands fa-instagram fs-14"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class="mb-3">\r\n                <label class="form-label">LinkedIn</label>\r\n                <div class="position-relative input-icon-start">\r\n                    <input type="text" class="form-control" placeholder="https://www.linkedin.com/">\r\n                    <span class="social-icon"><i class="fa-brands fa-linkedin-in fs-14"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class="mb-3">\r\n                <label class="form-label">YouTube</label>\r\n                <div class="position-relative input-icon-start">\r\n                    <input type="text" class="form-control" placeholder="https://www.youtube.com/">\r\n                    <span class="social-icon"><i class="fa-brands fa-youtube fs-14"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class="mt-4">\r\n                <button class="btn btn-secondary" type="submit">Save Social Profile</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSocialProfilesComponent, { className: "AdminrhSocialProfilesComponent", filePath: "app/features/adminrh/settings/adminrh-social-profiles/adminrh-social-profiles.component.ts", lineNumber: 10 });
})();
export {
  AdminrhSocialProfilesComponent
};
//# sourceMappingURL=chunk-5HQW5QXP.js.map
