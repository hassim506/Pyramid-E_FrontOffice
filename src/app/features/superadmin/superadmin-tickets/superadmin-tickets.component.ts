import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../shared/service/ticket/ticket.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-superadmin-tickets',
  templateUrl: './superadmin-tickets.component.html',
  styleUrls: ['./superadmin-tickets.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SuperadminTicketsComponent implements OnInit {
  public routes = routes;

  tickets: Ticket[] = [];
  selectedTicket: Ticket | null = null;
  loading = false;
  loadingDetail = false;

  stats = { total: 0, ouvert: 0, en_cours: 0, resolu: 0 };

  searchQuery     = '';
  filterStatut    = '';
  filterPriorite  = '';

  // Pagination
  currentPage  = 1;
  totalPages   = 1;
  totalItems   = 0;
  readonly pageSize = 15;

  newMessage     = '';
  sendingMessage = false;

  private searchTimeout: any;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    const p: any = { page: this.currentPage, par_page: this.pageSize };
    if (this.filterStatut)   p['statut']   = this.filterStatut;
    if (this.filterPriorite) p['priorite'] = this.filterPriorite;
    if (this.searchQuery)    p['search']   = this.searchQuery;

    // Superadmin voit TOUT — pas de filtre entreprise ni user
    this.ticketService.getTickets(p).subscribe({
      next: (res) => {
        const paginated = res.data;
        this.tickets    = paginated.data || [];
        this.totalItems = paginated.total || 0;
        this.totalPages = paginated.last_page || 1;
        this.currentPage = paginated.current_page || 1;
        this.computeStats();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private computeStats(): void {
    this.stats.total    = this.totalItems;
    this.stats.ouvert   = this.tickets.filter(t => t.statut === 'ouvert').length;
    this.stats.en_cours = this.tickets.filter(t => t.statut === 'en_cours').length;
    this.stats.resolu   = this.tickets.filter(t => t.statut === 'resolu').length;
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
    if (this.selectedTicket?.id === ticket.id) return;
    this.loadingDetail = true;
    this.selectedTicket = ticket;
    this.newMessage = '';
    this.ticketService.getTicketById(ticket.id).subscribe({
      next: (res) => { this.selectedTicket = res.data || res; this.loadingDetail = false; },
      error: () => { this.loadingDetail = false; }
    });
  }

  closeDetail(): void { this.selectedTicket = null; this.newMessage = ''; }

  envoyerMessage(): void {
    if (!this.newMessage.trim() || !this.selectedTicket) return;
    this.sendingMessage = true;
    const texte = this.newMessage;
    this.ticketService.ajouterMessage(this.selectedTicket.id, { contenu: texte }).subscribe({
      next: (res) => {
        const msg = res.data || { id: Date.now(), contenu: texte, created_at: new Date().toISOString(), auteur: { name: 'Moi', id: 0, email: '' } };
        if (this.selectedTicket) {
          this.selectedTicket = { ...this.selectedTicket, messages: [...(this.selectedTicket.messages || []), msg], nombre_reponses: (this.selectedTicket.nombre_reponses || 0) + 1 };
        }
        this.newMessage = '';
        this.sendingMessage = false;
      },
      error: () => { this.sendingMessage = false; }
    });
  }

  changerStatut(statut: string): void {
    if (!this.selectedTicket) return;
    const id = this.selectedTicket.id;
    this.ticketService.updateTicket(id, { statut }).subscribe({
      next: () => {
        this.selectedTicket = { ...this.selectedTicket!, statut };
        const idx = this.tickets.findIndex(t => t.id === id);
        if (idx >= 0) this.tickets[idx] = { ...this.tickets[idx], statut };
        this.computeStats();
      },
      error: () => {}
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
