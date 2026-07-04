import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient
} from "./chunk-TLD64Y2W.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTSSTHJF.js";

// src/app/shared/zoom/zoom-meeting.service.ts
var ZoomMeetingService = class _ZoomMeetingService {
  http;
  base = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // Formateur : créer un meeting Zoom pour une session
  createMeeting(sessionId) {
    return this.http.post(`${this.base}/sessions/${sessionId}/meeting`, {});
  }
  // Récupérer le meeting d'une session (existe ou pas)
  getMeetingBySession(sessionId) {
    return this.http.get(`${this.base}/sessions/${sessionId}/meeting`);
  }
  // Apprenant / Formateur : obtenir le lien de jointure
  getJoinLink(meetingId) {
    return this.http.get(`${this.base}/meetings/${meetingId}/join`);
  }
  // Supprimer un meeting Zoom
  deleteMeeting(meetingId) {
    return this.http.delete(`${this.base}/meetings/${meetingId}`);
  }
  // Helper : le meeting est-il accessible maintenant (15 min avant → fin)
  isAccessible(meeting) {
    const now = Date.now();
    const start = new Date(meeting.scheduled_at).getTime();
    const openAt = start - 15 * 60 * 1e3;
    const closeAt = start + meeting.duration * 60 * 1e3;
    return now >= openAt && now <= closeAt;
  }
  // Helper : vrai si la session est entièrement passée
  isExpired(meeting) {
    const closeAt = new Date(meeting.scheduled_at).getTime() + meeting.duration * 60 * 1e3;
    return Date.now() > closeAt;
  }
  // Helper : délai formaté jusqu'au début
  getDelai(meeting) {
    const now = Date.now();
    const start = new Date(meeting.scheduled_at).getTime();
    const closeAt = start + meeting.duration * 60 * 1e3;
    if (now > closeAt)
      return "Termin\xE9";
    const diff = start - now;
    if (diff <= 0)
      return "En cours";
    const mins = Math.floor(diff / 6e4);
    if (mins < 60)
      return `Dans ${mins} min`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)
      return `Dans ${hrs}h`;
    return `Dans ${Math.floor(hrs / 24)} j`;
  }
  static \u0275fac = function ZoomMeetingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoomMeetingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ZoomMeetingService, factory: _ZoomMeetingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoomMeetingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ZoomMeetingService
};
//# sourceMappingURL=chunk-HRLZE63H.js.map
