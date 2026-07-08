// filepath: src/app/shared/service/progression/progression.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface FormationProgression {
  formationId:   number;
  parcoursId:    number | null;
  catalogueId:   number | null; // ✅ NOUVEAU — contexte catalogue
  completed:     Set<number>;
  totalSections: number;
  percent:       number;
}

@Injectable({ providedIn: 'root' })
export class ProgressionService {

  private apiUrl = environment.apiUrl;

  // ✅ CLÉ COMPOSITE "formationId_parcoursId_catalogueId"
  //    formation simple              → "42_null_null"
  //    formation dans parcours 5     → "42_5_null"
  //    formation dans catalogue 3    → "42_null_3"
  //    → isolation totale, jamais de contamination croisée
  private progressions = new Map<string, FormationProgression>();
  private _change$ = new BehaviorSubject<Map<string, FormationProgression>>(this.progressions);
  readonly change$ = this._change$.asObservable();

  constructor(private http: HttpClient) {}

  // ════════════════════════════════════════════
  // CLÉ COMPOSITE PRIVÉE
  // ════════════════════════════════════════════
  private key(
    formationId:  number,
    parcoursId:   number | null,
    catalogueId:  number | null = null
  ): string {
    return `${formationId}_${parcoursId ?? 'null'}_${catalogueId ?? 'null'}`;
  }

  // ════════════════════════════════════════════
  // CHARGER depuis l'API au démarrage du lecteur
  // ════════════════════════════════════════════
  loadFromApi(
    formationId:  number,
    parcoursId:   number | null = null,
    catalogueId:  number | null = null  // ✅ NOUVEAU
  ): Observable<any> {
    const params: any = {};
    if (parcoursId  != null) params['parcours_id']  = parcoursId;
    if (catalogueId != null) params['catalogue_id'] = catalogueId;

    console.log(`📡 [ProgressionService] loadFromApi → formationId=${formationId} | parcoursId=${parcoursId} | catalogueId=${catalogueId} | clé="${this.key(formationId, parcoursId, catalogueId)}" | params:`, params);

    return this.http.get<any>(
      `${this.apiUrl}/formations/${formationId}/progression`,
      { params }
    ).pipe(
      tap(res => {
        console.log(`✅ [ProgressionService] loadFromApi réponse pour clé="${this.key(formationId, parcoursId, catalogueId)}":`, res);

        if (res?.status) {
          const completed = new Set<number>(res.completed_section_ids ?? []);
          const k = this.key(formationId, parcoursId, catalogueId);
          this.progressions.set(k, {
            formationId,
            parcoursId,
            catalogueId,  // ✅
            completed,
            totalSections: res.total_sections ?? 0,
            percent:       res.progression    ?? 0,
          });

          console.log(`💾 [ProgressionService] Cache mis à jour → clé="${k}" | sections complétées: [${[...completed]}] | total: ${res.total_sections} | %: ${res.progression}`);

          this._change$.next(new Map(this.progressions));
        }
      }),
      catchError((err) => {
        console.error(`❌ [ProgressionService] loadFromApi ERREUR pour formationId=${formationId} parcoursId=${parcoursId} catalogueId=${catalogueId}:`, err);
        return of(null);
      })
    );
  }

  // ════════════════════════════════════════════
  // INIT locale (sans appel API)
  // ════════════════════════════════════════════
  init(
    formationId:      number,
    totalSections:    number,
    alreadyCompleted: number[]      = [],
    parcoursId:       number | null = null,
    catalogueId:      number | null = null  // ✅ NOUVEAU
  ): void {
    const k = this.key(formationId, parcoursId, catalogueId);

    if (!this.progressions.has(k)) {
      const completed = new Set<number>(alreadyCompleted);
      const percent   = this.calcPercent(completed.size, totalSections);

      this.progressions.set(k, {
        formationId,
        parcoursId,
        catalogueId, // ✅
        completed,
        totalSections,
        percent,
      });

      console.log(`🔧 [ProgressionService] init (nouveau) → clé="${k}" | total=${totalSections} | déjà complétées: [${alreadyCompleted}] | %=${percent}`);
    } else {
      const prog = this.progressions.get(k)!;
      prog.totalSections = totalSections;
      prog.percent       = this.calcPercent(prog.completed.size, totalSections);

      console.log(`🔧 [ProgressionService] init (mise à jour totalSections) → clé="${k}" | total=${totalSections} | sections en cache: [${[...prog.completed]}] | %=${prog.percent}`);
    }

    this._change$.next(new Map(this.progressions));
  }

  // ════════════════════════════════════════════
  // MARQUER une section complétée
  // ════════════════════════════════════════════
  markCompleted(
    formationId: number,
    sectionId: number,
    parcoursId: number | null = null,
    catalogueId: number | null = null
  ): Observable<any> {
    const k = this.key(formationId, parcoursId, catalogueId);

    // 1. Mise à jour locale optimiste (si la Map est initialisée)
    const prog = this.progressions.get(k);
    if (prog && !prog.completed.has(sectionId)) {
      prog.completed.add(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));

      console.log(`⚡ [ProgressionService] Mise à jour locale optimiste → sections complétées: [${[...prog.completed]}] | %=${prog.percent}`);
    } else {
      console.warn(`⚠️ [ProgressionService] markCompleted — aucune entrée en cache pour clé="${k}", mise à jour locale ignorée`);
    }

    // 2. POST vers le backend — fonctionne même si la Map locale est vide
    const url = `${this.apiUrl}/formations/${formationId}/sections/${sectionId}/complete`;
    const body: Record<string, any> = {};
    if (parcoursId  != null) body['parcours_id']  = parcoursId;
    if (catalogueId != null) body['catalogue_id'] = catalogueId;
    console.log('📡 POST progression:', url, '| sectionId:', sectionId, '| formationId:', formationId, '| body:', body);
    return this.http.post<any>(
      url,
      body,
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

          console.log(`🔄 [ProgressionService] % synchronisé depuis API → %=${prog.percent} | est_termine=${res.est_termine} | quiz_final=${JSON.stringify(res.quiz_final)}`);
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
  markUncompleted(
    formationId:  number,
    sectionId:    number,
    parcoursId:   number | null = null,
    catalogueId:  number | null = null  // ✅ NOUVEAU
  ): void {
    const k    = this.key(formationId, parcoursId, catalogueId);
    const prog = this.progressions.get(k);

    console.log(`↩️ [ProgressionService] markUncompleted → formationId=${formationId} | sectionId=${sectionId} | parcoursId=${parcoursId} | catalogueId=${catalogueId} | clé="${k}"`);

    if (prog) {
      prog.completed.delete(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));

      console.log(`⚡ [ProgressionService] Section retirée localement → sections restantes: [${[...prog.completed]}] | %=${prog.percent}`);
    }

    const body: any = {};
    if (parcoursId  != null) body['parcours_id']  = parcoursId;
    if (catalogueId != null) body['catalogue_id'] = catalogueId;

    this.http.post<any>(
      `${this.apiUrl}/formations/${formationId}/sections/${sectionId}/uncomplete`,
      body
    ).pipe(
      tap(res => {
        console.log(`✅ [ProgressionService] markUncompleted réponse API:`, res);

        if (res?.status && prog) {
          prog.percent = res.progression ?? prog.percent;
          this._change$.next(new Map(this.progressions));
        }
      }),
      catchError((err) => {
        console.error(`❌ [ProgressionService] markUncompleted ERREUR API:`, err);
        // Rollback : remettre la section comme complétée
        if (prog) {
          prog.completed.add(sectionId);
          prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
          this._change$.next(new Map(this.progressions));
        }
        return of(null);
      })
    ).subscribe();
  }

  // ════════════════════════════════════════════
  // GETTERS — tous exigent parcoursId + catalogueId pour isoler le contexte
  // ════════════════════════════════════════════

  /** Retourne le % pour un contexte précis */
  getPercent(
    formationId:  number,
    parcoursId:   number | null = null,
    catalogueId:  number | null = null  // ✅ NOUVEAU
  ): number {
    return this.progressions.get(this.key(formationId, parcoursId, catalogueId))?.percent ?? 0;
  }

  getCompleted(
    formationId:  number,
    parcoursId:   number | null = null,
    catalogueId:  number | null = null  // ✅ NOUVEAU
  ): Set<number> {
    return this.progressions.get(this.key(formationId, parcoursId, catalogueId))?.completed ?? new Set();
  }

  isCompleted(
    formationId:  number,
    sectionId:    number,
    parcoursId:   number | null = null,
    catalogueId:  number | null = null  // ✅ NOUVEAU
  ): boolean {
    return this.progressions.get(this.key(formationId, parcoursId, catalogueId))?.completed.has(sectionId) ?? false;
  }

  hasData(
    formationId:  number,
    parcoursId:   number | null = null,
    catalogueId:  number | null = null  // ✅ NOUVEAU
  ): boolean {
    return this.progressions.has(this.key(formationId, parcoursId, catalogueId));
  }

  /** Debug — affiche tout le cache en console */
  debugDump(): void {
    console.group('🗺️ [ProgressionService] Dump complet du cache');
    this.progressions.forEach((v, k) => {
      console.log(`  clé="${k}" →`, {
        formationId:   v.formationId,
        parcoursId:    v.parcoursId,
        catalogueId:   v.catalogueId,
        percent:       v.percent,
        completed:     [...v.completed],
        totalSections: v.totalSections,
      });
    });
    console.groupEnd();
  }

  private calcPercent(done: number, total: number): number {
    if (!total) return 0;
    return Math.round((done / total) * 100);
  }
}