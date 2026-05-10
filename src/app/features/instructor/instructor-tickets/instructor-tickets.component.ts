import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../shared/service/ticket/ticket.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-instructor-tickets',
  templateUrl: './instructor-tickets.component.html',
  styleUrls: ['./instructor-tickets.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class InstructorTicketsComponent implements OnInit {
  public routes = routes;

  tickets: Ticket[] = [];
  selectedTicket: Ticket | null = null;
  loading = false;
  showCreateForm = false;

  stats = { total: 0, enCours: 0, resolu: 0 };

  searchQuery  = '';
  filterStatut = '';

  newTicket = {
    sujet: '',
    description: '',
    categorie: 'technique',
    priorite: 'moyenne',
    type: 'incident',
  };
  submitting = false;
  submitError = '';

  newMessage     = '';
  sendingMessage = false;

  private searchTimeout: any;

  constructor(
    private ticketService: TicketService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    const p: Record<string, string> = {};
    if (this.filterStatut) p['statut'] = this.filterStatut;
    if (this.searchQuery)  p['search'] = this.searchQuery;

    this.ticketService.getTickets(p).subscribe({
      next: (res) => {
        this.tickets = res.data?.data || res.data || [];
        this.stats.total  = this.tickets.length;
        this.stats.enCours = this.tickets.filter(t => ['ouvert','en_cours','en_attente'].includes(t.statut)).length;
        this.stats.resolu  = this.tickets.filter(t => t.statut === 'resolu').length;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onSearch(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadTickets(), 400);
  }

  applyFilter(): void { this.loadTickets(); }

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
    if (!this.newTicket.sujet.trim() || !this.newTicket.description.trim()) return;
    this.submitting = true;
    this.submitError = '';
    this.ticketService.createTicket(this.newTicket as Partial<Ticket>).subscribe({
      next: () => {
        this.submitting = false;
        this.showCreateForm = false;
        this.newTicket = { sujet: '', description: '', categorie: 'technique', priorite: 'moyenne', type: 'incident' };
        this.loadTickets();
      },
      error: (err) => {
        this.submitting = false;
        this.submitError = err?.error?.message || 'Une erreur est survenue.';
      }
    });
  }

  envoyerMessage(): void {
    if (!this.newMessage.trim() || !this.selectedTicket) return;
    this.sendingMessage = true;
    const texte = this.newMessage;
    this.ticketService.ajouterMessage(this.selectedTicket.id, { contenu: texte }).subscribe({
      next: (res) => {
        const msg = res.data || {
          id: Date.now(), contenu: texte,
          created_at: new Date().toISOString(),
          auteur: { name: 'Moi', id: 0, email: '' },
        };
        if (this.selectedTicket) {
          this.selectedTicket = {
            ...this.selectedTicket,
            messages: [...(this.selectedTicket.messages || []), msg],
          };
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
    const m: Record<string, string> = {
      basse: 'p-basse', moyenne: 'p-moyenne', haute: 'p-haute', critique: 'p-critique'
    };
    return m[p] || 'p-basse';
  }

  getSClass(s: string): string {
    const m: Record<string, string> = {
      ouvert: 's-ouvert', en_cours: 's-encours', en_attente: 's-attente',
      resolu: 's-resolu', ferme: 's-ferme', annule: 's-annule'
    };
    return m[s] || 's-ouvert';
  }

  getSLabel(s: string): string {
    const m: Record<string, string> = {
      ouvert: 'Ouvert', en_cours: 'En cours', en_attente: 'En attente',
      resolu: 'Résolu', ferme: 'Fermé', annule: 'Annulé'
    };
    return m[s] || s;
  }

  getPLabel(p: string): string {
    const m: Record<string, string> = {
      basse: 'Basse', moyenne: 'Moyenne', haute: 'Haute', critique: 'Critique'
    };
    return m[p] || p;
  }
}
