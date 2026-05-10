import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgClass
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-message/adminrh-message.component.ts
var _c0 = (a0) => ({ "visible-chat": a0 });
var AdminrhMessageComponent = class _AdminrhMessageComponent {
  routes = routes;
  isSearch = false;
  openSearch() {
    this.isSearch = !this.isSearch;
  }
  static \u0275fac = function AdminrhMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhMessageComponent, selectors: [["app-adminrh-message"]], decls: 298, vars: 4, consts: [[1, "instructor-message"], [1, "page-title"], [1, "row"], [1, "col-lg-5"], [1, "chat-cont-left"], [1, "chat-card", "mb-0", "flex-fill"], [1, "chat-header"], [1, "input-icon"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-1", "fs-14"], ["type", "email", "placeholder", "Search", 1, "form-control", "form-control-md"], [1, "chat-body", "chat-users-list", "chat-scroll"], ["href", "javascript:void(0);", 1, "d-flex", "justify-content-between", "align-items-center", "chat-member"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "online", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/user/user-29.jpg", "alt", "User Image"], [1, "fs-16", "fw-medium", "mb-1", "d-flex", "align-items-center"], [1, "msg-count", "badge", "badge-secondary", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "ms-2"], [1, "flex-grow-1"], [1, "text-end"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "fa-solid", "fa-check"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "chat-member"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/user/user-31.jpg", "alt", "User Image"], [1, "fs-16", "fw-medium", "mb-1"], [1, "fs-14", "text-gray-6", "text-truncate"], [1, "fa-solid", "fa-check-double", "text-success"], ["src", "assets/img/user/user-32.jpg", "alt", "User Image"], ["src", "assets/img/user/user-33.jpg", "alt", "User Image"], ["src", "assets/img/user/user-34.jpg", "alt", "User Image"], ["src", "assets/img/user/user-35.jpg", "alt", "User Image"], [1, "col-lg-7", "chat-cont-right", "chat-window-long"], [1, "chat-two-card", "chat-window", "mb-0", "shadow-none", "flex-fill"], [1, "border-0", "p-0", "position-relative"], [1, "msg_head"], [1, "d-flex", "bd-highlight", "align-items-center"], ["id", "back_user_list", "href", "javascript:void(0)", 1, "back-user-list"], [1, "fas", "fa-chevron-left"], ["src", "assets/img/user/user-02.jpg", "alt", "User"], [1, "fs-16", "mb-1"], [1, "d-flex", "align-items-center", "send-action"], ["href", "javascript:void(0);", "matTooltip", "Search", "matTooltipPosition", "below", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "aria-label", "Search", "data-bs-original-title", "Search", 1, "btn", "chat-search-btn", "send-action-btn", 3, "click"], [1, "isax", "isax-search-normal-14"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "no-bg", "send-action-btn", "rounded-circle"], [1, "fa-solid", "fa-ellipsis-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], [1, "dropdown-item", 3, "routerLink"], [1, "isax", "isax-close-circle", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "fa-solid", "fa-volume-xmark", "me-2"], [1, "isax", "isax-clock", "me-2"], [1, "isax", "isax-refresh", "me-2"], [1, "isax", "isax-trash", "me-2"], [1, "fa-regular", "fa-thumbs-down", "me-2"], [1, "fa-solid", "fa-ban", "me-2"], [1, "chat-search", "search-wrap", "contact-search", 3, "ngClass"], [1, "input-group"], ["type", "text", "placeholder", "Search Contacts", 1, "form-control"], [1, "input-group-text"], [1, "msg_card_body", "chat-scroll"], [1, "list-unstyled", "p-0"], [1, "sent-message-group"], [1, "media", "sent", "d-flex", "align-items-end"], [1, "media-body", "flex-grow-1"], [1, "msg-box"], [1, "d-flex", "align-items-end", "justify-content-end", "mb-1"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "ms-2"], ["src", "assets/img/user/user-01.jpg", "alt", "User Image "], [1, "position-relative"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-1"], [1, "fa-solid", "fa-check-double", "me-2", "text-success", "fs-12"], [1, "mb-0"], [1, "fa-solid", "fa-circle", "text-gray-1", "fs-7", "mx-1"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center"], [1, "sent-message"], [1, "media", "received"], [1, "d-flex", "align-items-end", "mb-1"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/user/user-02.jpg", "alt", "User Image "], [1, "d-flex", "align-items-center", "mb-1"], [1, "received-message", "me-2"], [1, "chat-footer", "border-0", "pt-0"], [1, "d-flex", "align-items-center", "chat-input-icons"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "no-bg"], [1, "text-gray-5", "fa-solid", "fa-ellipsis-vertical"], [1, "isax", "isax-camera", "me-2"], [1, "isax", "isax-gallery", "me-2"], [1, "isax", "isax-audio-square", "me-2"], [1, "isax", "isax-location", "me-2"], [1, "isax", "isax-user-cirlce-add", "me-2"], [1, "form-item", "emoj-action-foot"], ["href", "javascrip:void(0);", 1, "action-circle"], [1, "text-gray-5", "fa-regular", "fa-face-smile"], [1, "emoj-group-list-foot", "down-emoji-circle"], ["href", "javascript:void(0);"], [1, "isax", "isax-microphone-2", "text-gray-5"], [1, "chat-input", "me-2"], ["placeholder", "Type your message here...", 1, "form-control"], [1, "btn", "btn-secondary", "btn_send"], ["aria-hidden", "true", 1, "isax", "isax-send-1", "text-white"]], template: function AdminrhMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "a", 12)(14, "div", 13)(15, "div", 14);
      \u0275\u0275element(16, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "h6", 16);
      \u0275\u0275text(19, "Andrea Jermian ");
      \u0275\u0275elementStart(20, "span", 17);
      \u0275\u0275text(21, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Just Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 18)(25, "div", 19)(26, "div", 20);
      \u0275\u0275element(27, "i", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "a", 22)(29, "div", 13)(30, "div", 23);
      \u0275\u0275element(31, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "h6", 25);
      \u0275\u0275text(34, "Samuel James");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 26);
      \u0275\u0275text(36, "12:30 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 18)(38, "div", 19)(39, "div", 20);
      \u0275\u0275element(40, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "a", 12)(42, "div", 13)(43, "div", 14);
      \u0275\u0275element(44, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div")(46, "h6", 16);
      \u0275\u0275text(47, "Adrian Marshall ");
      \u0275\u0275elementStart(48, "span", 17);
      \u0275\u0275text(49, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "Just Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 18)(53, "div", 19)(54, "div", 20);
      \u0275\u0275element(55, "i", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "a", 22)(57, "div", 13)(58, "div", 23);
      \u0275\u0275element(59, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div")(61, "h6", 25);
      \u0275\u0275text(62, "Peter Anderson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 26);
      \u0275\u0275text(64, "23/03/24");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 18)(66, "div", 19)(67, "div", 20);
      \u0275\u0275element(68, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "a", 22)(70, "div", 13)(71, "div", 23);
      \u0275\u0275element(72, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div")(74, "h6", 25);
      \u0275\u0275text(75, "Anderson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 26);
      \u0275\u0275text(77, "23/03/24");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 18)(79, "div", 19)(80, "div", 20);
      \u0275\u0275element(81, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "a", 22)(83, "div", 13)(84, "div", 23);
      \u0275\u0275element(85, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div")(87, "h6", 25);
      \u0275\u0275text(88, "Andrea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 26);
      \u0275\u0275text(90, "23/03/24");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 18)(92, "div", 19)(93, "div", 20);
      \u0275\u0275element(94, "i", 27);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(95, "div", 32)(96, "div", 33)(97, "div", 34)(98, "div", 35)(99, "div", 36)(100, "a", 37);
      \u0275\u0275element(101, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 23);
      \u0275\u0275element(103, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div")(105, "h6", 40);
      \u0275\u0275text(106, "Ronald Richard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 41)(108, "a", 42);
      \u0275\u0275listener("click", function AdminrhMessageComponent_Template_a_click_108_listener() {
        return ctx.openSearch();
      });
      \u0275\u0275element(109, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "a", 44);
      \u0275\u0275element(111, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "ul", 46)(113, "li")(114, "a", 47);
      \u0275\u0275element(115, "i", 48);
      \u0275\u0275text(116, "Close Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "li")(118, "a", 49);
      \u0275\u0275element(119, "i", 50);
      \u0275\u0275text(120, "Mute Notification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "li")(122, "a", 49);
      \u0275\u0275element(123, "i", 51);
      \u0275\u0275text(124, "Disappearing Message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "li")(126, "a", 49);
      \u0275\u0275element(127, "i", 52);
      \u0275\u0275text(128, "Clear Message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "li")(130, "a", 49);
      \u0275\u0275element(131, "i", 53);
      \u0275\u0275text(132, "Delete Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "li")(134, "a", 49);
      \u0275\u0275element(135, "i", 54);
      \u0275\u0275text(136, "Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "li")(138, "a", 49);
      \u0275\u0275element(139, "i", 55);
      \u0275\u0275text(140, "Block");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(141, "div", 56)(142, "form")(143, "div", 57);
      \u0275\u0275element(144, "input", 58);
      \u0275\u0275elementStart(145, "span", 59);
      \u0275\u0275element(146, "i", 43);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(147, "div", 60)(148, "ul", 61)(149, "li", 62)(150, "ul")(151, "li", 63)(152, "div", 64)(153, "div", 65)(154, "div", 66)(155, "div", 67);
      \u0275\u0275element(156, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 69)(158, "div", 70)(159, "div", 13);
      \u0275\u0275element(160, "i", 71);
      \u0275\u0275elementStart(161, "p", 72);
      \u0275\u0275text(162, "02:39 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(163, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "h6", 74);
      \u0275\u0275text(165, "You");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div")(167, "div", 75)(168, "p");
      \u0275\u0275text(169, "How\u2019s the assignment coming along?");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(170, "li", 76)(171, "div", 77)(172, "div", 78);
      \u0275\u0275element(173, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 64)(175, "div", 80)(176, "h6", 74);
      \u0275\u0275text(177, "Ronald Richard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 13);
      \u0275\u0275element(179, "i", 73);
      \u0275\u0275elementStart(180, "p");
      \u0275\u0275text(181, "02:40 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 65)(183, "div", 69)(184, "div", 13)(185, "div", 81)(186, "p");
      \u0275\u0275text(187, "t\u2019s going okay, but I\u2019m stuck on the analysis part.");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(188, "li", 62)(189, "ul")(190, "li", 63)(191, "div", 64)(192, "div", 65)(193, "div", 66)(194, "div", 67);
      \u0275\u0275element(195, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 69)(197, "div", 70)(198, "div", 13);
      \u0275\u0275element(199, "i", 71);
      \u0275\u0275elementStart(200, "p", 72);
      \u0275\u0275text(201, "02:39 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(202, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "h6", 74);
      \u0275\u0275text(204, "You");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div")(206, "div", 75)(207, "p");
      \u0275\u0275text(208, "Which part exactly?");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(209, "li", 76)(210, "div", 77)(211, "div", 78);
      \u0275\u0275element(212, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 64)(214, "div", 80)(215, "h6", 74);
      \u0275\u0275text(216, "Ronald Richard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 13);
      \u0275\u0275element(218, "i", 73);
      \u0275\u0275elementStart(219, "p");
      \u0275\u0275text(220, "02:40 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 65)(222, "div", 69)(223, "div", 13)(224, "div", 81)(225, "p");
      \u0275\u0275text(226, "Understanding the variable relationships.");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(227, "li", 62)(228, "ul")(229, "li", 63)(230, "div", 64)(231, "div", 65)(232, "div", 66)(233, "div", 67);
      \u0275\u0275element(234, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "div", 69)(236, "div", 70)(237, "div", 13);
      \u0275\u0275element(238, "i", 71);
      \u0275\u0275elementStart(239, "p", 72);
      \u0275\u0275text(240, "02:39 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(241, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "h6", 74);
      \u0275\u0275text(243, "You");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "div")(245, "div", 75)(246, "p");
      \u0275\u0275text(247, "Try plotting them. Let\u2019s check together.");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(248, "li", 76)(249, "div", 77)(250, "div", 78);
      \u0275\u0275element(251, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "div", 64)(253, "div", 80)(254, "h6", 74);
      \u0275\u0275text(255, "Ronald Richard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 13);
      \u0275\u0275element(257, "i", 73);
      \u0275\u0275elementStart(258, "p");
      \u0275\u0275text(259, "02:40 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div", 65)(261, "div", 69)(262, "div", 13)(263, "div", 81)(264, "p");
      \u0275\u0275text(265, "Sure!");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(266, "div", 82)(267, "div", 13)(268, "div", 83)(269, "a", 84);
      \u0275\u0275element(270, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 46)(272, "a", 49);
      \u0275\u0275element(273, "i", 86);
      \u0275\u0275text(274, "Camera");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "a", 49);
      \u0275\u0275element(276, "i", 87);
      \u0275\u0275text(277, "Gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "a", 49);
      \u0275\u0275element(279, "i", 88);
      \u0275\u0275text(280, "Audio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "a", 49);
      \u0275\u0275element(282, "i", 89);
      \u0275\u0275text(283, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "a", 49);
      \u0275\u0275element(285, "i", 90);
      \u0275\u0275text(286, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 91)(288, "a", 92);
      \u0275\u0275element(289, "i", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275element(290, "div", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "a", 95);
      \u0275\u0275element(292, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(293, "div", 97);
      \u0275\u0275element(294, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "div")(296, "button", 99);
      \u0275\u0275element(297, "i", 100);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(114);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(27);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx.isSearch));
    }
  }, dependencies: [CommonModule, NgClass, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhMessageComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-message", imports: [CommonModule, RouterLink], template: `
    <div class="instructor-message">
    <h5 class="page-title">Messages</h5>
    <div class="row">

        <!-- Chat User List -->
        <div class="col-lg-5">
        <div class="chat-cont-left">
            <div class="chat-card  mb-0 flex-fill">
                <div class="chat-header">
                    <div class="input-icon">
                        <span class="input-icon-addon">
                            <i class="isax isax-search-normal-1 fs-14"></i>
                        </span>
                        <input type="email" class="form-control form-control-md" placeholder="Search">
                    </div>
                </div>
                <div class="chat-body chat-users-list chat-scroll">
                    <a href="javascript:void(0);" class="d-flex justify-content-between align-items-center chat-member">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg online avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-29.jpg" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1 d-flex align-items-center">Andrea Jermian <span class="msg-count badge badge-secondary d-flex align-items-center justify-content-center rounded-circle ms-2">3</span></h6>
                                <p>Just Now</p>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="text-end">
                                <div class="d-flex align-items-center justify-content-end">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between chat-member">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-31.jpg" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1">Samuel James</h6>
                                <p class="fs-14 text-gray-6 text-truncate">12:30 PM</p>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="text-end">
                                <div class="d-flex align-items-center justify-content-end">
                                    <i class="fa-solid fa-check-double text-success"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex justify-content-between align-items-center chat-member">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg online avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-32.jpg" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1 d-flex align-items-center">Adrian Marshall <span class="msg-count badge badge-secondary d-flex align-items-center justify-content-center rounded-circle ms-2">3</span></h6>
                                <p>Just Now</p>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="text-end">
                                <div class="d-flex align-items-center justify-content-end">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between chat-member">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-33.jpg" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1">Peter Anderson</h6>
                                <p class="fs-14 text-gray-6 text-truncate">23/03/24</p>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="text-end">
                                <div class="d-flex align-items-center justify-content-end">
                                    <i class="fa-solid fa-check-double text-success"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between chat-member">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-34.jpg" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1">Anderson</h6>
                                <p class="fs-14 text-gray-6 text-truncate">23/03/24</p>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="text-end">
                                <div class="d-flex align-items-center justify-content-end">
                                    <i class="fa-solid fa-check-double text-success"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between chat-member">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-35.jpg" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1">Andrea</h6>
                                <p class="fs-14 text-gray-6 text-truncate">23/03/24</p>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="text-end">
                                <div class="d-flex align-items-center justify-content-end">
                                    <i class="fa-solid fa-check-double text-success"></i>
                                </div>
                            </div>
                        </div>
                    </a>
        
                </div>
            </div>
        </div>
        </div>
        <!-- Chat User List -->

        <!-- Chat Content -->
        <div class="col-lg-7 chat-cont-right chat-window-long">

            <!-- Chat History -->
            <div class="chat-two-card chat-window mb-0 shadow-none flex-fill">
                <div class="border-0 p-0 position-relative">
                    <div class="msg_head">
                        <div class="d-flex bd-highlight align-items-center">
                            <a id="back_user_list" href="javascript:void(0)" class="back-user-list">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img src="assets/img/user/user-02.jpg" alt="User">
                            </div>
                            <div>
                                <h6 class="fs-16 mb-1">Ronald Richard</h6>
                            </div>
                        </div>
                        <div class="d-flex align-items-center send-action">
                            <a href="javascript:void(0);" class="btn chat-search-btn send-action-btn" (click)="openSearch()" matTooltip="Search" matTooltipPosition="below" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Search" data-bs-original-title="Search">
                                <i class="isax isax-search-normal-14"></i>
                            </a>
                            <a class="btn no-bg send-action-btn rounded-circle" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li><a [routerLink]="routes.home" class="dropdown-item"><i class="isax isax-close-circle me-2"></i>Close Chat</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item"><i class="fa-solid fa-volume-xmark me-2"></i>Mute Notification</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-clock me-2"></i>Disappearing Message</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-refresh me-2"></i>Clear Message</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-trash me-2"></i>Delete Chat</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item"><i class="fa-regular fa-thumbs-down me-2"></i>Report</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item"><i class="fa-solid fa-ban me-2"></i>Block</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- Chat Search -->
                    <div class="chat-search search-wrap contact-search" [ngClass]="{'visible-chat':isSearch}">
                        <form>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search Contacts">
                                <span class="input-group-text"><i class="isax isax-search-normal-14"></i></span>
                            </div>
                        </form>
                    </div>
                    <!-- /Chat Search -->
                </div>
                <div class="msg_card_body chat-scroll">

                    <ul class="list-unstyled p-0">
                        <li class="sent-message-group">
                            <ul>
                                <li class="media sent d-flex align-items-end">
                                    <div class="media-body flex-grow-1">
                                        <div class="msg-box">
                                            <div class="d-flex align-items-end justify-content-end mb-1">
                                                <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                                    <img src="assets/img/user/user-01.jpg" alt="User Image ">
                                                </div>
                                                <div class="position-relative">
                                                    <div class="d-flex align-items-center justify-content-end mb-1">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fa-solid fa-check-double me-2 text-success fs-12"></i>
                                                            <p class="mb-0">02:39 PM</p>
                                                            <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                                        </div>
                                                        <h6 class="fs-14 fw-normal d-flex align-items-center">You</h6>
                                                    </div>
                                                    <div>
                                                        <div class="sent-message">
                                                            <p>How\u2019s the assignment coming along?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="media received">
                            <div class="d-flex align-items-end mb-1">
                                <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                    <img src="assets/img/user/user-02.jpg" alt="User Image ">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center mb-1">
                                        <h6 class="fs-14 fw-normal d-flex align-items-center">Ronald Richard</h6>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                            <p>02:40 PM</p>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div class="position-relative">
                                            <div class="d-flex align-items-center ">
                                                <div class="received-message me-2">
                                                    <p>t\u2019s going okay, but I\u2019m stuck on the analysis part.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="sent-message-group">
                            <ul>
                                <li class="media sent d-flex align-items-end">
                                    <div class="media-body flex-grow-1">
                                        <div class="msg-box">
                                            <div class="d-flex align-items-end justify-content-end mb-1">
                                                <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                                    <img src="assets/img/user/user-01.jpg" alt="User Image ">
                                                </div>
                                                <div class="position-relative">
                                                    <div class="d-flex align-items-center justify-content-end mb-1">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fa-solid fa-check-double me-2 text-success fs-12"></i>
                                                            <p class="mb-0">02:39 PM</p>
                                                            <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                                        </div>
                                                        <h6 class="fs-14 fw-normal d-flex align-items-center">You</h6>
                                                    </div>
                                                    <div>
                                                        <div class="sent-message">
                                                            <p>Which part exactly?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="media received">
                            <div class="d-flex align-items-end mb-1">
                                <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                    <img src="assets/img/user/user-02.jpg" alt="User Image ">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center mb-1">
                                        <h6 class="fs-14 fw-normal d-flex align-items-center">Ronald Richard</h6>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                            <p>02:40 PM</p>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div class="position-relative">
                                            <div class="d-flex align-items-center ">
                                                <div class="received-message me-2">
                                                    <p>Understanding the variable relationships.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="sent-message-group">
                            <ul>
                                <li class="media sent d-flex align-items-end">
                                    <div class="media-body flex-grow-1">
                                        <div class="msg-box">
                                            <div class="d-flex align-items-end justify-content-end mb-1">
                                                <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                                    <img src="assets/img/user/user-01.jpg" alt="User Image ">
                                                </div>
                                                <div class="position-relative">
                                                    <div class="d-flex align-items-center justify-content-end mb-1">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fa-solid fa-check-double me-2 text-success fs-12"></i>
                                                            <p class="mb-0">02:39 PM</p>
                                                            <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                                        </div>
                                                        <h6 class="fs-14 fw-normal d-flex align-items-center">You</h6>
                                                    </div>
                                                    <div>
                                                        <div class="sent-message">
                                                            <p>Try plotting them. Let\u2019s check together.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="media received">
                            <div class="d-flex align-items-end mb-1">
                                <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                    <img src="assets/img/user/user-02.jpg" alt="User Image ">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="d-flex align-items-center mb-1">
                                        <h6 class="fs-14 fw-normal d-flex align-items-center">Ronald Richard</h6>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                            <p>02:40 PM</p>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div class="position-relative">
                                            <div class="d-flex align-items-center ">
                                                <div class="received-message me-2">
                                                    <p>Sure!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                                            
                    </ul>
                </div>
                <div class="chat-footer border-0 pt-0">
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center chat-input-icons">
                            <a class="btn no-bg" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i class="text-gray-5 fa-solid fa-ellipsis-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end p-3">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-camera me-2"></i>Camera</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-gallery me-2"></i>Gallery</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-audio-square me-2"></i>Audio</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-location me-2"></i>Location</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="isax isax-user-cirlce-add me-2"></i>Contact</a>
                            </div>
                            <div class="form-item emoj-action-foot">
                                <a href="javascrip:void(0);" class="action-circle"><i class="text-gray-5  fa-regular fa-face-smile"></i></a>
                                <div class="emoj-group-list-foot down-emoji-circle">
                                    <!-- <ul>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/emonji-02.svg" alt="Icon"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/emonji-05.svg" alt="Icon"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/emonji-06.svg" alt="Icon"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/emonji-07.svg" alt="Icon"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/emonji-08.svg" alt="Icon"></a>
                                        </li>
                                        <li class="add-emoj"><a href="javascript:void(0);"><i class="isax isax-add"></i></a></li>
                                    </ul> -->
                                </div>
                            </div>
                            <a href="javascript:void(0);"><i class="isax isax-microphone-2 text-gray-5"></i></a>
                        </div>
                        <div class="chat-input me-2">
                            <input class="form-control" placeholder="Type your message here...">
                        </div>
                        <div>
                            <button class="btn btn-secondary btn_send"><i class="isax isax-send-1 text-white" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Chat Content -->
    </div>

    </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhMessageComponent, { className: "AdminrhMessageComponent", filePath: "src/app/features/adminrh/adminrh-message/adminrh-message.component.ts", lineNumber: 12 });
})();
export {
  AdminrhMessageComponent
};
//# sourceMappingURL=chunk-5F657U3E.js.map
