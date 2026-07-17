import {
  TicketService
} from "./chunk-SLJU2SMA.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-F53JZPBU.js";
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
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-tickets/superadmin-tickets.component.ts
var _c0 = () => [];
function SuperadminTicketsComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function SuperadminTicketsComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, "Aucun ticket trouv\xE9.");
    \u0275\u0275elementEnd();
  }
}
function SuperadminTicketsComponent_div_71_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "Escalad\xE9");
    \u0275\u0275elementEnd();
  }
}
function SuperadminTicketsComponent_div_71_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", t_r2.agent_assigne.name);
  }
}
function SuperadminTicketsComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_div_71_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTicket(t_r2));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 45)(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SuperadminTicketsComponent_div_71_span_13_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 48)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, SuperadminTicketsComponent_div_71_span_17_Template, 2, 1, "span", 37);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", (ctx_r2.selectedTicket == null ? null : ctx_r2.selectedTicket.id) === t_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(t_r2.createur == null ? null : t_r2.createur.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", t_r2.reference, " \xB7 ", t_r2.entreprise == null ? null : t_r2.entreprise.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.sujet);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getSClass(t_r2.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getSLabel(t_r2.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getPClass(t_r2.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPLabel(t_r2.priorite));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.est_escalade);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.categorie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.agent_assigne);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", t_r2.nombre_reponses, " r\xE9p.");
  }
}
function SuperadminTicketsComponent_div_72_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_div_72_button_6_Template_button_click_0_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r6 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6);
  }
}
function SuperadminTicketsComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "button", 53);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_div_72_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SuperadminTicketsComponent_div_72_button_6_Template, 2, 3, "button", 55);
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_div_72_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.totalItems, " ticket", ctx_r2.totalItems > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function SuperadminTicketsComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "S\xE9lectionnez un ticket pour voir le d\xE9tail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminTicketsComponent_ng_container_75_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "Escalad\xE9");
    \u0275\u0275elementEnd();
  }
}
function SuperadminTicketsComponent_ng_container_75_div_26_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "div", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 89);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(m_r8.auteur == null ? null : m_r8.auteur.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r8.auteur == null ? null : m_r8.auteur.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.contenu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, m_r8.created_at, "dd/MM/yyyy HH:mm"));
  }
}
function SuperadminTicketsComponent_ng_container_75_div_26_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1, "Aucun message pour l'instant.");
    \u0275\u0275elementEnd();
  }
}
function SuperadminTicketsComponent_ng_container_75_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "span")(3, "b");
    \u0275\u0275text(4, "Cr\xE9\xE9 par:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span")(7, "b");
    \u0275\u0275text(8, "Agent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span")(11, "b");
    \u0275\u0275text(12, "Cat\xE9gorie:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "b");
    \u0275\u0275text(16, "Cr\xE9\xE9 le:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 79);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 80);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 81);
    \u0275\u0275template(24, SuperadminTicketsComponent_ng_container_75_div_26_div_24_Template, 11, 7, "div", 82)(25, SuperadminTicketsComponent_ng_container_75_div_26_div_25_Template, 2, 0, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.selectedTicket.createur == null ? null : ctx_r2.selectedTicket.createur.name) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.selectedTicket.agent_assigne == null ? null : ctx_r2.selectedTicket.agent_assigne.name) || "Non assign\xE9");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedTicket.categorie);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 8, ctx_r2.selectedTicket.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedTicket.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Conversation (", ctx_r2.selectedTicket.nombre_reponses || 0, " r\xE9ponses)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.selectedTicket.messages || \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r2.selectedTicket.messages == null ? null : ctx_r2.selectedTicket.messages.length));
  }
}
function SuperadminTicketsComponent_ng_container_75_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function SuperadminTicketsComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61)(3, "div", 62)(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 65)(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SuperadminTicketsComponent_ng_container_75_span_13_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 66);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_ng_container_75_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275element(15, "i", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 68)(17, "button", 69);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_ng_container_75_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changerStatut("en_cours"));
    });
    \u0275\u0275element(18, "i", 13);
    \u0275\u0275text(19, " Prendre en charge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 70);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_ng_container_75_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changerStatut("resolu"));
    });
    \u0275\u0275element(21, "i", 15);
    \u0275\u0275text(22, " R\xE9soudre ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 71);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_ng_container_75_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changerStatut("ferme"));
    });
    \u0275\u0275element(24, "i", 67);
    \u0275\u0275text(25, " Fermer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, SuperadminTicketsComponent_ng_container_75_div_26_Template, 26, 12, "div", 72)(27, SuperadminTicketsComponent_ng_container_75_div_27_Template, 2, 0, "div", 32);
    \u0275\u0275elementStart(28, "div", 73)(29, "textarea", 74);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminTicketsComponent_ng_container_75_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 75);
    \u0275\u0275listener("click", function SuperadminTicketsComponent_ng_container_75_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.envoyerMessage());
    });
    \u0275\u0275element(31, "i", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedTicket.sujet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedTicket.reference, " \xB7 ", ctx_r2.selectedTicket.entreprise == null ? null : ctx_r2.selectedTicket.entreprise.nom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getSClass(ctx_r2.selectedTicket.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getSLabel(ctx_r2.selectedTicket.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getPClass(ctx_r2.selectedTicket.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPLabel(ctx_r2.selectedTicket.priorite));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedTicket.est_escalade);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", !ctx_r2.loadingDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingDetail);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.sendingMessage || !ctx_r2.newMessage.trim());
  }
}
var SuperadminTicketsComponent = class _SuperadminTicketsComponent {
  ticketService;
  routes = routes;
  tickets = [];
  selectedTicket = null;
  loading = false;
  loadingDetail = false;
  stats = { total: 0, ouvert: 0, en_cours: 0, resolu: 0 };
  searchQuery = "";
  filterStatut = "";
  filterPriorite = "";
  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  pageSize = 15;
  newMessage = "";
  sendingMessage = false;
  searchTimeout;
  constructor(ticketService) {
    this.ticketService = ticketService;
  }
  ngOnInit() {
    this.loadTickets();
  }
  loadTickets() {
    this.loading = true;
    const p = { page: this.currentPage, par_page: this.pageSize };
    if (this.filterStatut)
      p["statut"] = this.filterStatut;
    if (this.filterPriorite)
      p["priorite"] = this.filterPriorite;
    if (this.searchQuery)
      p["search"] = this.searchQuery;
    this.ticketService.getTickets(p).subscribe({
      next: (res) => {
        const paginated = res.data;
        this.tickets = paginated.data || [];
        this.totalItems = paginated.total || 0;
        this.totalPages = paginated.last_page || 1;
        this.currentPage = paginated.current_page || 1;
        this.computeStats();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  computeStats() {
    this.stats.total = this.totalItems;
    this.stats.ouvert = this.tickets.filter((t) => t.statut === "ouvert").length;
    this.stats.en_cours = this.tickets.filter((t) => t.statut === "en_cours").length;
    this.stats.resolu = this.tickets.filter((t) => t.statut === "resolu").length;
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.loadTickets();
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.loadTickets();
    }, 400);
  }
  applyFilter() {
    this.currentPage = 1;
    this.loadTickets();
  }
  get pageNumbers() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  selectTicket(ticket) {
    if (this.selectedTicket?.id === ticket.id)
      return;
    this.loadingDetail = true;
    this.selectedTicket = ticket;
    this.newMessage = "";
    this.ticketService.getTicketById(ticket.id).subscribe({
      next: (res) => {
        this.selectedTicket = res.data || res;
        this.loadingDetail = false;
      },
      error: () => {
        this.loadingDetail = false;
      }
    });
  }
  closeDetail() {
    this.selectedTicket = null;
    this.newMessage = "";
  }
  envoyerMessage() {
    if (!this.newMessage.trim() || !this.selectedTicket)
      return;
    this.sendingMessage = true;
    const texte = this.newMessage;
    this.ticketService.ajouterMessage(this.selectedTicket.id, { contenu: texte }).subscribe({
      next: (res) => {
        const msg = res.data || { id: Date.now(), contenu: texte, created_at: (/* @__PURE__ */ new Date()).toISOString(), auteur: { name: "Moi", id: 0, email: "" } };
        if (this.selectedTicket) {
          this.selectedTicket = __spreadProps(__spreadValues({}, this.selectedTicket), { messages: [...this.selectedTicket.messages || [], msg], nombre_reponses: (this.selectedTicket.nombre_reponses || 0) + 1 });
        }
        this.newMessage = "";
        this.sendingMessage = false;
      },
      error: () => {
        this.sendingMessage = false;
      }
    });
  }
  changerStatut(statut) {
    if (!this.selectedTicket)
      return;
    const id = this.selectedTicket.id;
    this.ticketService.updateTicket(id, { statut }).subscribe({
      next: () => {
        this.selectedTicket = __spreadProps(__spreadValues({}, this.selectedTicket), { statut });
        const idx = this.tickets.findIndex((t) => t.id === id);
        if (idx >= 0)
          this.tickets[idx] = __spreadProps(__spreadValues({}, this.tickets[idx]), { statut });
        this.computeStats();
      },
      error: () => {
      }
    });
  }
  getInitials(name) {
    if (!name)
      return "??";
    return name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
  }
  getPClass(p) {
    const m = { basse: "p-basse", moyenne: "p-moyenne", haute: "p-haute", critique: "p-critique" };
    return m[p] || "p-basse";
  }
  getSClass(s) {
    const m = { ouvert: "s-ouvert", en_cours: "s-encours", en_attente: "s-attente", resolu: "s-resolu", ferme: "s-ferme", annule: "s-annule" };
    return m[s] || "s-ouvert";
  }
  getSLabel(s) {
    const m = { ouvert: "Ouvert", en_cours: "En cours", en_attente: "En attente", resolu: "R\xE9solu", ferme: "Ferm\xE9", annule: "Annul\xE9" };
    return m[s] || s;
  }
  getPLabel(p) {
    const m = { basse: "Basse", moyenne: "Moyenne", haute: "Haute", critique: "Critique" };
    return m[p] || p;
  }
  static \u0275fac = function SuperadminTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminTicketsComponent)(\u0275\u0275directiveInject(TicketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminTicketsComponent, selectors: [["app-superadmin-tickets"]], decls: 76, vars: 13, consts: [[1, "tk-page"], [1, "tk-header"], [1, "tk-header__title"], [1, "tk-header__sub"], [1, "kpi-row"], [1, "kpi"], [1, "kpi__icon", "ki-total"], [1, "isax", "isax-ticket"], [1, "kpi__val"], [1, "kpi__lbl"], [1, "kpi__icon", "ki-open"], [1, "isax", "isax-record-circle"], [1, "kpi__icon", "ki-ongoing"], [1, "isax", "isax-activity"], [1, "kpi__icon", "ki-done"], [1, "isax", "isax-tick-circle"], [1, "tk-split"], [1, "tk-split__list"], [1, "tk-toolbar"], ["placeholder", "Rechercher\u2026", 1, "tk-search", 3, "ngModelChange", "ngModel"], [1, "tk-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "ouvert"], ["value", "en_cours"], ["value", "en_attente"], ["value", "resolu"], ["value", "ferme"], ["value", "basse"], ["value", "moyenne"], ["value", "haute"], ["value", "critique"], [1, "tk-list"], ["class", "tk-loader", 4, "ngIf"], ["class", "tk-empty", 4, "ngIf"], ["class", "tk-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "tk-pagination", 4, "ngIf"], [1, "tk-split__detail"], [4, "ngIf"], [1, "tk-loader"], [1, "tk-empty"], [1, "tk-item", 3, "click"], [1, "tk-av"], [1, "tk-info"], [1, "tk-ref"], [1, "tk-subj"], [1, "tk-badges"], [1, "badge", 3, "ngClass"], ["class", "escalade-badge", 4, "ngIf"], [1, "tk-meta"], [1, "escalade-badge"], [1, "tk-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"], [1, "tk-no-select"], [1, "isax", "isax-message-question"], [1, "tk-detail"], [1, "tk-detail__head"], [1, "detail-info"], [1, "detail-title"], [1, "detail-ref"], [1, "detail-badges"], ["type", "button", 1, "act-btn", 3, "click"], [1, "isax", "isax-close-circle"], [1, "tk-detail__actions"], ["type", "button", 1, "act-btn", "primary", 3, "click"], ["type", "button", 1, "act-btn", "success", 3, "click"], ["type", "button", 1, "act-btn", "danger", 3, "click"], ["class", "tk-detail__body", 4, "ngIf"], [1, "tk-detail__reply"], ["rows", "2", "placeholder", "R\xE9pondre au ticket\u2026", 1, "tk-detail__reply-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "send-btn", 3, "click", "disabled"], [1, "isax", "isax-send-2"], [1, "tk-detail__body"], [1, "detail-meta"], [1, "tk-detail__desc"], [1, "tk-detail__thread-title"], [1, "tk-detail__thread"], ["class", "msg", 4, "ngFor", "ngForOf"], ["class", "msg-empty", 4, "ngIf"], [1, "msg"], [1, "msg__av"], [1, "msg__bubble"], [1, "msg__author"], [1, "msg__text"], [1, "msg__time"], [1, "msg-empty"]], template: function SuperadminTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4, "Gestion des tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275text(6, "Tous les tickets \u2014 toutes entreprises");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div")(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275text(15, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 5)(17, "div", 10);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div")(20, "div", 8);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9);
      \u0275\u0275text(23, "Ouverts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 5)(25, "div", 12);
      \u0275\u0275element(26, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "div", 8);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 9);
      \u0275\u0275text(31, "En cours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 5)(33, "div", 14);
      \u0275\u0275element(34, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div")(36, "div", 8);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 9);
      \u0275\u0275text(39, "R\xE9solus");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 16)(41, "div", 17)(42, "div", 18)(43, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminTicketsComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminTicketsComponent_Template_input_ngModelChange_43_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminTicketsComponent_Template_select_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminTicketsComponent_Template_select_change_44_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(45, "option", 21);
      \u0275\u0275text(46, "Tous statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 22);
      \u0275\u0275text(48, "Ouvert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 23);
      \u0275\u0275text(50, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 24);
      \u0275\u0275text(52, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 25);
      \u0275\u0275text(54, "R\xE9solu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "option", 26);
      \u0275\u0275text(56, "Ferm\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminTicketsComponent_Template_select_ngModelChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterPriorite, $event) || (ctx.filterPriorite = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminTicketsComponent_Template_select_change_57_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(58, "option", 21);
      \u0275\u0275text(59, "Toutes priorit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 27);
      \u0275\u0275text(61, "Basse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 28);
      \u0275\u0275text(63, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 29);
      \u0275\u0275text(65, "Haute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 30);
      \u0275\u0275text(67, "Critique");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 31);
      \u0275\u0275template(69, SuperadminTicketsComponent_div_69_Template, 2, 0, "div", 32)(70, SuperadminTicketsComponent_div_70_Template, 2, 0, "div", 33)(71, SuperadminTicketsComponent_div_71_Template, 20, 14, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, SuperadminTicketsComponent_div_72_Template, 9, 5, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 36);
      \u0275\u0275template(74, SuperadminTicketsComponent_ng_container_74_Template, 5, 0, "ng-container", 37)(75, SuperadminTicketsComponent_ng_container_75_Template, 32, 12, "ng-container", 37);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.stats.total);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.ouvert);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.en_cours);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.resolu);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatut);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterPriorite);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.tickets.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.tickets);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedTicket);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTicket);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: [`

.tk-page[_ngcontent-%COMP%] {
  background: #F8FAFC;
  min-height: 100vh;
  padding: 24px;
}
.tk-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.tk-header__title[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
}
.tk-header__sub[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #64748B;
  margin-top: 2px;
}
.kpi-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}
.kpi[_ngcontent-%COMP%] {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.kpi__icon[_ngcontent-%COMP%] {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.kpi__icon.ki-total[_ngcontent-%COMP%] {
  background: #EFF6FF;
  color: #1D4ED8;
}
.kpi__icon.ki-open[_ngcontent-%COMP%] {
  background: #FEF3C7;
  color: #B45309;
}
.kpi__icon.ki-ongoing[_ngcontent-%COMP%] {
  background: #F0FDF4;
  color: #166534;
}
.kpi__icon.ki-done[_ngcontent-%COMP%] {
  background: #EDE9FE;
  color: #6D28D9;
}
.kpi__val[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1;
}
.kpi__lbl[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748B;
  margin-top: 2px;
}
.tk-split[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.tk-split__list[_ngcontent-%COMP%] {
  flex: 0 0 400px;
  width: 400px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 260px);
}
.tk-split__detail[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 260px);
}
.tk-toolbar[_ngcontent-%COMP%] {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
.tk-search[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 120px;
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 10px 0 32px;
  font-size: 13px;
  color: #1E293B;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") no-repeat 10px center;
  outline: none;
}
.tk-search[_ngcontent-%COMP%]:focus {
  border-color: #6366F1;
}
.tk-select[_ngcontent-%COMP%] {
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 12px;
  color: #1E293B;
  background: #fff;
  outline: none;
  cursor: pointer;
}
.tk-select[_ngcontent-%COMP%]:focus {
  border-color: #6366F1;
}
.tk-list[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
}
.tk-list[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 4px;
}
.tk-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.tk-item[_ngcontent-%COMP%] {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
  transition: background 0.1s;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.tk-item[_ngcontent-%COMP%]:hover {
  background: #F8FAFC;
}
.tk-item.selected[_ngcontent-%COMP%] {
  background: #EFF6FF;
  border-left: 3px solid #1D4ED8;
}
.tk-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.tk-av[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #534AB7;
  color: #CECBF6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}
.tk-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.tk-ref[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748B;
  margin-bottom: 2px;
}
.tk-subj[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: #1E293B;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tk-meta[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748B;
  margin-top: 3px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tk-badges[_ngcontent-%COMP%] {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 5px;
}
.tk-empty[_ngcontent-%COMP%], 
.tk-loader[_ngcontent-%COMP%] {
  padding: 40px;
  text-align: center;
  color: #64748B;
  font-size: 13px;
}
.tk-detail[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tk-detail__head[_ngcontent-%COMP%] {
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.tk-detail__body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.tk-detail__desc[_ngcontent-%COMP%] {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: #1E293B;
  line-height: 1.6;
  margin-bottom: 16px;
}
.tk-detail__actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
}
.tk-detail__thread-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.tk-detail__thread[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tk-detail__reply[_ngcontent-%COMP%] {
  padding: 12px 16px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
}
.tk-detail__reply-input[_ngcontent-%COMP%] {
  flex: 1;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  resize: none;
  outline: none;
  font-family: inherit;
}
.tk-detail__reply-input[_ngcontent-%COMP%]:focus {
  border-color: #6366F1;
}
.detail-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.detail-title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
}
.detail-ref[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748B;
  margin-top: 2px;
}
.detail-meta[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 12px;
  color: #64748B;
}
.msg-empty[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94A3B8;
}
.detail-badges[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.msg[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.msg__av[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1D4ED8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  flex-shrink: 0;
}
.msg__bubble[_ngcontent-%COMP%] {
  background: #F1F5F9;
  border-radius: 0 8px 8px 8px;
  padding: 8px 12px;
  max-width: 90%;
}
.msg__author[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #1E293B;
}
.msg__text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #1E293B;
  margin-top: 2px;
  line-height: 1.5;
}
.msg__time[_ngcontent-%COMP%] {
  font-size: 10px;
  color: #64748B;
  margin-top: 4px;
}
.act-btn[_ngcontent-%COMP%] {
  height: 30px;
  padding: 0 12px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  background: #fff;
  color: #1E293B;
  transition: background 0.1s;
}
.act-btn[_ngcontent-%COMP%]:hover {
  background: #F1F5F9;
}
.act-btn.primary[_ngcontent-%COMP%] {
  background: #1D4ED8;
  color: #fff;
  border-color: #1D4ED8;
}
.act-btn.primary[_ngcontent-%COMP%]:hover {
  background: #1E40AF;
}
.act-btn.success[_ngcontent-%COMP%] {
  background: #166534;
  color: #fff;
  border-color: #166534;
}
.act-btn.success[_ngcontent-%COMP%]:hover {
  background: #14532D;
}
.act-btn.danger[_ngcontent-%COMP%] {
  background: #DC2626;
  color: #fff;
  border-color: #DC2626;
}
.act-btn.danger[_ngcontent-%COMP%]:hover {
  background: #B91C1C;
}
.send-btn[_ngcontent-%COMP%] {
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 8px;
  background: #1D4ED8;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.send-btn[_ngcontent-%COMP%]:hover {
  background: #1E40AF;
}
.send-btn[_ngcontent-%COMP%]:disabled {
  background: #93C5FD;
  cursor: not-allowed;
}
.tk-no-select[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748B;
  font-size: 13px;
  gap: 8px;
}
.tk-no-select[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 36px;
  opacity: 0.3;
}
.s-ouvert[_ngcontent-%COMP%] {
  background: #FEF3C7;
  color: #92400E;
}
.s-encours[_ngcontent-%COMP%] {
  background: #DBEAFE;
  color: #1E40AF;
}
.s-attente[_ngcontent-%COMP%] {
  background: #F3F4F6;
  color: #374151;
}
.s-resolu[_ngcontent-%COMP%] {
  background: #D1FAE5;
  color: #065F46;
}
.s-ferme[_ngcontent-%COMP%] {
  background: #F1F5F9;
  color: #475569;
}
.s-annule[_ngcontent-%COMP%] {
  background: #FEE2E2;
  color: #991B1B;
}
.p-basse[_ngcontent-%COMP%] {
  background: #F0FDF4;
  color: #166534;
}
.p-moyenne[_ngcontent-%COMP%] {
  background: #FEF9C3;
  color: #854D0E;
}
.p-haute[_ngcontent-%COMP%] {
  background: #FFF7ED;
  color: #9A3412;
}
.p-critique[_ngcontent-%COMP%] {
  background: #FEE2E2;
  color: #991B1B;
}
.badge[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
}
.escalade-badge[_ngcontent-%COMP%] {
  background: #FEF3C7;
  color: #B45309;
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 20px;
}
.tk-pagination[_ngcontent-%COMP%] {
  padding: 10px 14px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.pg-info[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748B;
}
.pg-controls[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
}
.pg-btn[_ngcontent-%COMP%] {
  min-width: 30px;
  height: 30px;
  padding: 0 6px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  background: #fff;
  color: #1E293B;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.1s;
}
.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #F1F5F9;
}
.pg-btn.active[_ngcontent-%COMP%] {
  background: #1D4ED8;
  color: #fff;
  border-color: #1D4ED8;
}
.pg-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
/*# sourceMappingURL=superadmin-tickets.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-tickets", imports: [CommonModule, FormsModule], template: `<div class="tk-page">\r
\r
  <!-- HEADER -->\r
  <div class="tk-header">\r
    <div>\r
      <div class="tk-header__title">Gestion des tickets</div>\r
      <div class="tk-header__sub">Tous les tickets \u2014 toutes entreprises</div>\r
    </div>\r
  </div>\r
\r
  <!-- KPI -->\r
  <div class="kpi-row">\r
    <div class="kpi">\r
      <div class="kpi__icon ki-total"><i class="isax isax-ticket"></i></div>\r
      <div><div class="kpi__val">{{ stats.total }}</div><div class="kpi__lbl">Total</div></div>\r
    </div>\r
    <div class="kpi">\r
      <div class="kpi__icon ki-open"><i class="isax isax-record-circle"></i></div>\r
      <div><div class="kpi__val">{{ stats.ouvert }}</div><div class="kpi__lbl">Ouverts</div></div>\r
    </div>\r
    <div class="kpi">\r
      <div class="kpi__icon ki-ongoing"><i class="isax isax-activity"></i></div>\r
      <div><div class="kpi__val">{{ stats.en_cours }}</div><div class="kpi__lbl">En cours</div></div>\r
    </div>\r
    <div class="kpi">\r
      <div class="kpi__icon ki-done"><i class="isax isax-tick-circle"></i></div>\r
      <div><div class="kpi__val">{{ stats.resolu }}</div><div class="kpi__lbl">R\xE9solus</div></div>\r
    </div>\r
  </div>\r
\r
  <!-- SPLIT PANEL -->\r
  <div class="tk-split">\r
\r
    <!-- LIST PANEL -->\r
    <div class="tk-split__list">\r
      <!-- toolbar -->\r
      <div class="tk-toolbar">\r
        <input class="tk-search" placeholder="Rechercher\u2026"\r
               [(ngModel)]="searchQuery" (ngModelChange)="onSearch()">\r
        <select class="tk-select" [(ngModel)]="filterStatut" (change)="applyFilter()">\r
          <option value="">Tous statuts</option>\r
          <option value="ouvert">Ouvert</option>\r
          <option value="en_cours">En cours</option>\r
          <option value="en_attente">En attente</option>\r
          <option value="resolu">R\xE9solu</option>\r
          <option value="ferme">Ferm\xE9</option>\r
        </select>\r
        <select class="tk-select" [(ngModel)]="filterPriorite" (change)="applyFilter()">\r
          <option value="">Toutes priorit\xE9s</option>\r
          <option value="basse">Basse</option>\r
          <option value="moyenne">Moyenne</option>\r
          <option value="haute">Haute</option>\r
          <option value="critique">Critique</option>\r
        </select>\r
      </div>\r
\r
      <!-- list -->\r
      <div class="tk-list">\r
        <div *ngIf="loading" class="tk-loader">Chargement\u2026</div>\r
        <div *ngIf="!loading && tickets.length === 0" class="tk-empty">Aucun ticket trouv\xE9.</div>\r
        <div *ngFor="let t of tickets"\r
             class="tk-item"\r
             [class.selected]="selectedTicket?.id === t.id"\r
             (click)="selectTicket(t)">\r
          <div class="tk-av">{{ getInitials(t.createur?.name) }}</div>\r
          <div class="tk-info">\r
            <div class="tk-ref">{{ t.reference }} \xB7 {{ t.entreprise?.nom }}</div>\r
            <div class="tk-subj">{{ t.sujet }}</div>\r
            <div class="tk-badges">\r
              <span class="badge" [ngClass]="getSClass(t.statut)">{{ getSLabel(t.statut) }}</span>\r
              <span class="badge" [ngClass]="getPClass(t.priorite)">{{ getPLabel(t.priorite) }}</span>\r
              <span *ngIf="t.est_escalade" class="escalade-badge">Escalad\xE9</span>\r
            </div>\r
            <div class="tk-meta">\r
              <span>{{ t.categorie }}</span>\r
              <span *ngIf="t.agent_assigne">\xB7 {{ t.agent_assigne.name }}</span>\r
              <span>\xB7 {{ t.nombre_reponses }} r\xE9p.</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <div class="tk-pagination" *ngIf="totalPages > 1">\r
        <span class="pg-info">{{ totalItems }} ticket{{ totalItems > 1 ? 's' : '' }}</span>\r
        <div class="pg-controls">\r
          <button type="button" class="pg-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">\r
            <i class="isax isax-arrow-left-2"></i>\r
          </button>\r
          <button type="button" class="pg-btn" *ngFor="let p of pageNumbers"\r
                  [class.active]="p === currentPage" (click)="goToPage(p)">{{ p }}</button>\r
          <button type="button" class="pg-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">\r
            <i class="isax isax-arrow-right-2"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- DETAIL PANEL -->\r
    <div class="tk-split__detail">\r
      <ng-container *ngIf="!selectedTicket">\r
        <div class="tk-no-select">\r
          <i class="isax isax-message-question"></i>\r
          <span>S\xE9lectionnez un ticket pour voir le d\xE9tail</span>\r
        </div>\r
      </ng-container>\r
\r
      <ng-container *ngIf="selectedTicket">\r
        <div class="tk-detail">\r
          <!-- head -->\r
          <div class="tk-detail__head">\r
            <div class="detail-info">\r
              <div class="detail-title">{{ selectedTicket.sujet }}</div>\r
              <div class="detail-ref">{{ selectedTicket.reference }} \xB7 {{ selectedTicket.entreprise?.nom }}</div>\r
              <div class="detail-badges">\r
                <span class="badge" [ngClass]="getSClass(selectedTicket.statut)">{{ getSLabel(selectedTicket.statut) }}</span>\r
                <span class="badge" [ngClass]="getPClass(selectedTicket.priorite)">{{ getPLabel(selectedTicket.priorite) }}</span>\r
                <span *ngIf="selectedTicket.est_escalade" class="escalade-badge">Escalad\xE9</span>\r
              </div>\r
            </div>\r
            <button type="button" class="act-btn" (click)="closeDetail()">\r
              <i class="isax isax-close-circle"></i>\r
            </button>\r
          </div>\r
\r
          <!-- actions -->\r
          <div class="tk-detail__actions">\r
            <button type="button" class="act-btn primary" (click)="changerStatut('en_cours')">\r
              <i class="isax isax-activity"></i> Prendre en charge\r
            </button>\r
            <button type="button" class="act-btn success" (click)="changerStatut('resolu')">\r
              <i class="isax isax-tick-circle"></i> R\xE9soudre\r
            </button>\r
            <button type="button" class="act-btn danger" (click)="changerStatut('ferme')">\r
              <i class="isax isax-close-circle"></i> Fermer\r
            </button>\r
          </div>\r
\r
          <!-- body -->\r
          <div class="tk-detail__body" *ngIf="!loadingDetail">\r
            <!-- meta -->\r
            <div class="detail-meta">\r
              <span><b>Cr\xE9\xE9 par:</b> {{ selectedTicket.createur?.name || '\u2014' }}</span>\r
              <span><b>Agent:</b> {{ selectedTicket.agent_assigne?.name || 'Non assign\xE9' }}</span>\r
              <span><b>Cat\xE9gorie:</b> {{ selectedTicket.categorie }}</span>\r
              <span><b>Cr\xE9\xE9 le:</b> {{ selectedTicket.created_at | date:'dd/MM/yyyy HH:mm' }}</span>\r
            </div>\r
\r
            <!-- description -->\r
            <div class="tk-detail__desc">{{ selectedTicket.description }}</div>\r
\r
            <!-- thread -->\r
            <div class="tk-detail__thread-title">Conversation ({{ selectedTicket.nombre_reponses || 0 }} r\xE9ponses)</div>\r
            <div class="tk-detail__thread">\r
              <div *ngFor="let m of (selectedTicket.messages || [])" class="msg">\r
                <div class="msg__av">{{ getInitials(m.auteur?.name) }}</div>\r
                <div class="msg__bubble">\r
                  <div class="msg__author">{{ m.auteur?.name }}</div>\r
                  <div class="msg__text">{{ m.contenu }}</div>\r
                  <div class="msg__time">{{ m.created_at | date:'dd/MM/yyyy HH:mm' }}</div>\r
                </div>\r
              </div>\r
              <div *ngIf="!(selectedTicket.messages?.length)" class="msg-empty">Aucun message pour l'instant.</div>\r
            </div>\r
          </div>\r
          <div class="tk-loader" *ngIf="loadingDetail">Chargement\u2026</div>\r
\r
          <!-- reply -->\r
          <div class="tk-detail__reply">\r
            <textarea class="tk-detail__reply-input" rows="2"\r
                      placeholder="R\xE9pondre au ticket\u2026"\r
                      [(ngModel)]="newMessage"></textarea>\r
            <button type="button" class="send-btn" [disabled]="sendingMessage || !newMessage.trim()"\r
                    (click)="envoyerMessage()">\r
              <i class="isax isax-send-2"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </ng-container>\r
    </div>\r
\r
  </div><!-- /tk-split -->\r
</div>\r
`, styles: [`/* src/app/features/superadmin/superadmin-tickets/superadmin-tickets.component.scss */
.tk-page {
  background: #F8FAFC;
  min-height: 100vh;
  padding: 24px;
}
.tk-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.tk-header__title {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
}
.tk-header__sub {
  font-size: 13px;
  color: #64748B;
  margin-top: 2px;
}
.kpi-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}
.kpi {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.kpi__icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.kpi__icon.ki-total {
  background: #EFF6FF;
  color: #1D4ED8;
}
.kpi__icon.ki-open {
  background: #FEF3C7;
  color: #B45309;
}
.kpi__icon.ki-ongoing {
  background: #F0FDF4;
  color: #166534;
}
.kpi__icon.ki-done {
  background: #EDE9FE;
  color: #6D28D9;
}
.kpi__val {
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1;
}
.kpi__lbl {
  font-size: 12px;
  color: #64748B;
  margin-top: 2px;
}
.tk-split {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.tk-split__list {
  flex: 0 0 400px;
  width: 400px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 260px);
}
.tk-split__detail {
  flex: 1;
  min-width: 0;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 260px);
}
.tk-toolbar {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
.tk-search {
  flex: 1;
  min-width: 120px;
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 10px 0 32px;
  font-size: 13px;
  color: #1E293B;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") no-repeat 10px center;
  outline: none;
}
.tk-search:focus {
  border-color: #6366F1;
}
.tk-select {
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 12px;
  color: #1E293B;
  background: #fff;
  outline: none;
  cursor: pointer;
}
.tk-select:focus {
  border-color: #6366F1;
}
.tk-list {
  flex: 1;
  overflow-y: auto;
}
.tk-list::-webkit-scrollbar {
  width: 4px;
}
.tk-list::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.tk-item {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
  transition: background 0.1s;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.tk-item:hover {
  background: #F8FAFC;
}
.tk-item.selected {
  background: #EFF6FF;
  border-left: 3px solid #1D4ED8;
}
.tk-item:last-child {
  border-bottom: none;
}
.tk-av {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #534AB7;
  color: #CECBF6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}
.tk-info {
  flex: 1;
  min-width: 0;
}
.tk-ref {
  font-size: 11px;
  color: #64748B;
  margin-bottom: 2px;
}
.tk-subj {
  font-size: 13px;
  font-weight: 500;
  color: #1E293B;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tk-meta {
  font-size: 11px;
  color: #64748B;
  margin-top: 3px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tk-badges {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 5px;
}
.tk-empty,
.tk-loader {
  padding: 40px;
  text-align: center;
  color: #64748B;
  font-size: 13px;
}
.tk-detail {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tk-detail__head {
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.tk-detail__body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.tk-detail__desc {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: #1E293B;
  line-height: 1.6;
  margin-bottom: 16px;
}
.tk-detail__actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
}
.tk-detail__thread-title {
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.tk-detail__thread {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tk-detail__reply {
  padding: 12px 16px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
}
.tk-detail__reply-input {
  flex: 1;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  resize: none;
  outline: none;
  font-family: inherit;
}
.tk-detail__reply-input:focus {
  border-color: #6366F1;
}
.detail-info {
  flex: 1;
  min-width: 0;
}
.detail-title {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
}
.detail-ref {
  font-size: 11px;
  color: #64748B;
  margin-top: 2px;
}
.detail-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 12px;
  color: #64748B;
}
.msg-empty {
  font-size: 12px;
  color: #94A3B8;
}
.detail-badges {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.msg {
  display: flex;
  gap: 8px;
}
.msg__av {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1D4ED8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  flex-shrink: 0;
}
.msg__bubble {
  background: #F1F5F9;
  border-radius: 0 8px 8px 8px;
  padding: 8px 12px;
  max-width: 90%;
}
.msg__author {
  font-size: 11px;
  font-weight: 600;
  color: #1E293B;
}
.msg__text {
  font-size: 13px;
  color: #1E293B;
  margin-top: 2px;
  line-height: 1.5;
}
.msg__time {
  font-size: 10px;
  color: #64748B;
  margin-top: 4px;
}
.act-btn {
  height: 30px;
  padding: 0 12px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  background: #fff;
  color: #1E293B;
  transition: background 0.1s;
}
.act-btn:hover {
  background: #F1F5F9;
}
.act-btn.primary {
  background: #1D4ED8;
  color: #fff;
  border-color: #1D4ED8;
}
.act-btn.primary:hover {
  background: #1E40AF;
}
.act-btn.success {
  background: #166534;
  color: #fff;
  border-color: #166534;
}
.act-btn.success:hover {
  background: #14532D;
}
.act-btn.danger {
  background: #DC2626;
  color: #fff;
  border-color: #DC2626;
}
.act-btn.danger:hover {
  background: #B91C1C;
}
.send-btn {
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 8px;
  background: #1D4ED8;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.send-btn:hover {
  background: #1E40AF;
}
.send-btn:disabled {
  background: #93C5FD;
  cursor: not-allowed;
}
.tk-no-select {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748B;
  font-size: 13px;
  gap: 8px;
}
.tk-no-select i {
  font-size: 36px;
  opacity: 0.3;
}
.s-ouvert {
  background: #FEF3C7;
  color: #92400E;
}
.s-encours {
  background: #DBEAFE;
  color: #1E40AF;
}
.s-attente {
  background: #F3F4F6;
  color: #374151;
}
.s-resolu {
  background: #D1FAE5;
  color: #065F46;
}
.s-ferme {
  background: #F1F5F9;
  color: #475569;
}
.s-annule {
  background: #FEE2E2;
  color: #991B1B;
}
.p-basse {
  background: #F0FDF4;
  color: #166534;
}
.p-moyenne {
  background: #FEF9C3;
  color: #854D0E;
}
.p-haute {
  background: #FFF7ED;
  color: #9A3412;
}
.p-critique {
  background: #FEE2E2;
  color: #991B1B;
}
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
}
.escalade-badge {
  background: #FEF3C7;
  color: #B45309;
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 20px;
}
.tk-pagination {
  padding: 10px 14px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.pg-info {
  font-size: 12px;
  color: #64748B;
}
.pg-controls {
  display: flex;
  gap: 4px;
}
.pg-btn {
  min-width: 30px;
  height: 30px;
  padding: 0 6px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  background: #fff;
  color: #1E293B;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.1s;
}
.pg-btn:hover:not(:disabled) {
  background: #F1F5F9;
}
.pg-btn.active {
  background: #1D4ED8;
  color: #fff;
  border-color: #1D4ED8;
}
.pg-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
/*# sourceMappingURL=superadmin-tickets.component.css.map */
`] }]
  }], () => [{ type: TicketService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminTicketsComponent, { className: "SuperadminTicketsComponent", filePath: "app/features/superadmin/superadmin-tickets/superadmin-tickets.component.ts", lineNumber: 13 });
})();
export {
  SuperadminTicketsComponent
};
//# sourceMappingURL=chunk-TW3AOT2I.js.map
