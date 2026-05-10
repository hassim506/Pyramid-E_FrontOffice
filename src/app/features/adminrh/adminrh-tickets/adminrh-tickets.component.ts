import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../shared/service/ticket/ticket.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-adminrh-tickets',
  templateUrl: './adminrh-tickets.component.html',
  styleUrls: ['./adminrh-tickets.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class AdminrhTicketsComponent implements OnInit {
  public routes = routes;

  tickets: Ticket[] = [];
  selectedTicket: Ticket | null = null;
  loading = false;
  showCreateForm = false;

  stats = { total: 0, ouvert: 0, resolu: 0 };

  searchQuery  = '';
  filterStatut = '';

  // Pagination
  currentPage  = 1;
  totalPages   = 1;
  totalItems   = 0;
  readonly pageSize = 15;

  newTicket = { sujet: '', description: '', categorie: 'technique', priorite: 'moyenne', type: 'incident' };
  submitting  = false;
  submitError = '';

  newMessage     = '';
  sendingMessage = false;

  private searchTimeout: any;
  private currentUser: any;

  constructor(
    private ticketService: TicketService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    // Admin RH voit uniquement les tickets de son entreprise
    const p: any = { page: this.currentPage, par_page: this.pageSize };
    if (this.currentUser?.entreprise_id) p['entreprise_id'] = this.currentUser.entreprise_id;
    if (this.filterStatut) p['statut'] = this.filterStatut;
    if (this.searchQuery)  p['search'] = this.searchQuery;

    this.ticketService.getTickets(p).subscribe({
      next: (res) => {
        const paginated = res.data;
        this.tickets     = paginated.data || [];
        this.totalItems  = paginated.total || 0;
        this.totalPages  = paginated.last_page || 1;
        this.currentPage = paginated.current_page || 1;
        this.stats.total  = this.totalItems;
        this.stats.ouvert = this.tickets.filter(t => ['ouvert','en_cours','en_attente'].includes(t.statut)).length;
        this.stats.resolu = this.tickets.filter(t => t.statut === 'resolu').length;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadTickets();
  }

  onSearch(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => { this.currentPage = 1; this.loadTickets(); }, 400);
  }

  applyFilter(): void { this.currentPage = 1; this.loadTickets(); }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end   = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  selectTicket(ticket: Ticket): void {
    if (this.selectedTicket?.id === ticket.id) { this.selectedTicket = null; return; }
    this.showCreateForm = false;
    this.ticketService.getTicketById(ticket.id).subscribe({
      next: (res) => { this.selectedTicket = res.data || res; },
      error: () => {}
    });
  }

  closeDetail(): void { this.selectedTicket = null; }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    if (this.showCreateForm) { this.selectedTicket = null; this.submitError = ''; }
  }

  soumettre(): void {
    if (!this.newTicket.sujet.trim()) { this.submitError = 'Le sujet est obligatoire.'; return; }
    if (this.newTicket.description.trim().length < 10) { this.submitError = 'La description doit contenir au moins 10 caractères.'; return; }
    this.submitting = true;
    this.submitError = '';
    const payload: any = { ...this.newTicket };
    if (this.currentUser?.entreprise_id) payload['entreprise_id'] = this.currentUser.entreprise_id;
    this.ticketService.createTicket(payload as Partial<Ticket>).subscribe({
      next: () => {
        this.submitting = false;
        this.showCreateForm = false;
        this.newTicket = { sujet: '', description: '', categorie: 'technique', priorite: 'moyenne', type: 'incident' };
        this.currentPage = 1;
        this.loadTickets();
      },
      error: (err) => {
        this.submitting = false;
        const errors = err?.error?.errors;
        if (errors) {
          this.submitError = Object.values(errors).flat().join(' ');
        } else {
          this.submitError = err?.error?.message || 'Une erreur est survenue.';
        }
      }
    });
  }

  envoyerMessage(): void {
    if (!this.newMessage.trim() || !this.selectedTicket) return;
    this.sendingMessage = true;
    const texte = this.newMessage;
    this.ticketService.ajouterMessage(this.selectedTicket.id, { contenu: texte }).subscribe({
      next: (res) => {
        const msg = res.data || { id: Date.now(), contenu: texte, created_at: new Date().toISOString(), auteur: { name: 'Moi', id: 0, email: '' } };
        if (this.selectedTicket) {
          this.selectedTicket = { ...this.selectedTicket, messages: [...(this.selectedTicket.messages || []), msg] };
        }
        this.newMessage = '';
        this.sendingMessage = false;
      },
      error: () => { this.sendingMessage = false; }
    });
  }

  getInitials(name: string | undefined | null): string {
    if (!name) return '??';
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  getPClass(p: string): string {
    const m: Record<string, string> = { basse: 'p-basse', moyenne: 'p-moyenne', haute: 'p-haute', critique: 'p-critique' };
    return m[p] || 'p-basse';
  }

  getSClass(s: string): string {
    const m: Record<string, string> = { ouvert: 's-ouvert', en_cours: 's-encours', en_attente: 's-attente', resolu: 's-resolu', ferme: 's-ferme', annule: 's-annule' };
    return m[s] || 's-ouvert';
  }

  getSLabel(s: string): string {
    const m: Record<string, string> = { ouvert: 'Ouvert', en_cours: 'En cours', en_attente: 'En attente', resolu: 'Résolu', ferme: 'Fermé', annule: 'Annulé' };
    return m[s] || s;
  }

  getPLabel(p: string): string {
    const m: Record<string, string> = { basse: 'Basse', moyenne: 'Moyenne', haute: 'Haute', critique: 'Critique' };
    return m[p] || p;
  }
}
