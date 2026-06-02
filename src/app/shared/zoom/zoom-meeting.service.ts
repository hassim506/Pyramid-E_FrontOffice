import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface ZoomMeeting {
  id: number;
  session_id: number;
  created_by: number;
  zoom_meeting_id: string;
  zoom_uuid?: string;
  join_url: string;
  start_url: string;
  password?: string;
  scheduled_at: string;
  duration: number;
  status: 'scheduled' | 'started' | 'ended';
  recording_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ZoomMeetingResponse {
  status: boolean;
  message?: string;
  meeting: ZoomMeeting;
}

export interface ZoomJoinResponse {
  status: boolean;
  join_url: string;
  password?: string;
  message?: string;
  opens_at?: string;  // si pas encore accessible
}

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ZoomMeetingService {

  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Formateur : créer un meeting Zoom pour une session
  createMeeting(sessionId: number): Observable<ZoomMeetingResponse> {
    return this.http.post<ZoomMeetingResponse>(
      `${this.base}/sessions/${sessionId}/meeting`, {}
    );
  }

  // Récupérer le meeting d'une session (existe ou pas)
  getMeetingBySession(sessionId: number): Observable<ZoomMeetingResponse> {
    return this.http.get<ZoomMeetingResponse>(
      `${this.base}/sessions/${sessionId}/meeting`
    );
  }

  // Apprenant / Formateur : obtenir le lien de jointure
  getJoinLink(meetingId: number): Observable<ZoomJoinResponse> {
    return this.http.get<ZoomJoinResponse>(
      `${this.base}/meetings/${meetingId}/join`
    );
  }

  // Supprimer un meeting Zoom
  deleteMeeting(meetingId: number): Observable<{ status: boolean; message: string }> {
    return this.http.delete<{ status: boolean; message: string }>(
      `${this.base}/meetings/${meetingId}`
    );
  }

  // Helper : le meeting est-il accessible maintenant (15 min avant → fin)
  isAccessible(meeting: ZoomMeeting): boolean {
    const now     = Date.now();
    const start   = new Date(meeting.scheduled_at).getTime();
    const openAt  = start - 15 * 60 * 1000;
    const closeAt = start + meeting.duration * 60 * 1000;
    return now >= openAt && now <= closeAt;
  }

  // Helper : vrai si la session est entièrement passée
  isExpired(meeting: ZoomMeeting): boolean {
    const closeAt = new Date(meeting.scheduled_at).getTime() + meeting.duration * 60 * 1000;
    return Date.now() > closeAt;
  }

  // Helper : délai formaté jusqu'au début
  getDelai(meeting: ZoomMeeting): string {
    const now     = Date.now();
    const start   = new Date(meeting.scheduled_at).getTime();
    const closeAt = start + meeting.duration * 60 * 1000;

    if (now > closeAt) return 'Terminé';
    const diff = start - now;
    if (diff <= 0) return 'En cours';
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `Dans ${mins} min`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `Dans ${hrs}h`;
    return `Dans ${Math.floor(hrs / 24)} j`;
  }
}
