// filepath: src/app/shared/service/progression/progression.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface FormationProgression {
  formationId:   number;
  completed:     Set<number>;
  totalSections: number;
  percent:       number;
}

@Injectable({ providedIn: 'root' })
export class ProgressionService {

  private apiUrl = environment.apiUrl;

  private progressions = new Map<number, FormationProgression>();
  private _change$ = new BehaviorSubject<Map<number, FormationProgression>>(this.progressions);
  readonly change$ = this._change$.asObservable();

  constructor(private http: HttpClient) {}

  // ════════════════════════════════════════════
  // CHARGER depuis l'API au démarrage du lecteur
  // ════════════════════════════════════════════
  loadFromApi(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/formations/${formationId}/progression`).pipe(
      tap(res => {
        if (res?.status) {
          const completed = new Set<number>(res.completed_section_ids ?? []);
          this.progressions.set(formationId, {
            formationId,
            completed,
            totalSections: res.total_sections ?? 0,
            percent:       res.progression ?? 0,
          });
          this._change$.next(new Map(this.progressions));
        }
      }),
      catchError(() => of(null))
    );
  }

  // ════════════════════════════════════════════
  // INIT locale (fallback si pas d'API)
  // ════════════════════════════════════════════
  init(formationId: number, totalSections: number, alreadyCompleted: number[] = []): void {
    if (!this.progressions.has(formationId)) {
      const completed = new Set<number>(alreadyCompleted);
      this.progressions.set(formationId, {
        formationId,
        completed,
        totalSections,
        percent: this.calcPercent(completed.size, totalSections),
      });
      this._change$.next(new Map(this.progressions));
    } else {
      const prog = this.progressions.get(formationId)!;
      prog.totalSections = totalSections;
      prog.percent = this.calcPercent(prog.completed.size, totalSections);
      this._change$.next(new Map(this.progressions));
    }
  }

  // ════════════════════════════════════════════
  // MARQUER une section — retourne Observable
  // pour que l'appelant puisse lire quiz_final
  // ════════════════════════════════════════════
  markCompleted(formationId: number, sectionId: number): Observable<any> {
    // 1. Mise à jour locale optimiste (si la Map est initialisée)
    const prog = this.progressions.get(formationId);
    if (prog && !prog.completed.has(sectionId)) {
      prog.completed.add(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));
    }

    // 2. POST vers le backend — fonctionne même si la Map locale est vide
    const url = `${this.apiUrl}/formations/${formationId}/sections/${sectionId}/complete`;
    console.log('📡 POST progression:', url, '| sectionId:', sectionId, '| formationId:', formationId);
    return this.http.post<any>(
      url,
      {},
      { headers: this.getAuthHeaders() }
    ).pipe(
      tap(res => {
        // Synchroniser le % renvoyé par le backend (source de vérité)
        if (prog) {
          prog.percent = res?.progression ?? prog.percent;
          if (res?.completed_section_ids) {
            prog.completed = new Set<number>(res.completed_section_ids);
          }
          this._change$.next(new Map(this.progressions));
        }
      }),
      catchError((err) => {
        // Rollback local uniquement si on avait fait une mise à jour optimiste
        if (prog) {
          prog.completed.delete(sectionId);
          prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
          this._change$.next(new Map(this.progressions));
        }
        return throwError(() => err);
      })
    );
  }

  private getAuthHeaders(): { [key: string]: string } {
    const token = localStorage.getItem('pyramide_token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  // ════════════════════════════════════════════
  // RETIRER une section (retry quiz)
  // ════════════════════════════════════════════
  markUncompleted(formationId: number, sectionId: number): void {
    const prog = this.progressions.get(formationId);
    if (prog) {
      prog.completed.delete(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));
    }

    this.http.post<any>(
      `${this.apiUrl}/formations/${formationId}/sections/${sectionId}/uncomplete`, {}
    ).pipe(
      tap(res => {
        if (res?.status && prog) {
          prog.percent = res.progression ?? prog.percent;
          this._change$.next(new Map(this.progressions));
        }
      }),
      catchError(() => of(null))
    ).subscribe();
  }

  // ════════════════════════════════════════════
  // GETTERS
  // ════════════════════════════════════════════
  getPercent(formationId: number): number {
    return this.progressions.get(formationId)?.percent ?? 0;
  }

  getCompleted(formationId: number): Set<number> {
    return this.progressions.get(formationId)?.completed ?? new Set();
  }

  isCompleted(formationId: number, sectionId: number): boolean {
    return this.progressions.get(formationId)?.completed.has(sectionId) ?? false;
  }

  hasData(formationId: number): boolean {
    return this.progressions.has(formationId);
  }

  private calcPercent(done: number, total: number): number {
    if (!total) return 0;
    return Math.round((done / total) * 100);
  }
}