import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';

const INACTIVITY_TIMEOUT_MS = 2 * 60 * 60 * 1000; // 2 heures
const ACTIVITY_EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];

@Injectable({ providedIn: 'root' })
export class InactivityService implements OnDestroy {
  private timer: ReturnType<typeof setTimeout> | null = null;
  private boundReset = this.resetTimer.bind(this);
  private listening = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private ngZone: NgZone
  ) {}

  start(): void {
    if (this.listening) return;
    this.listening = true;
    this.ngZone.runOutsideAngular(() => {
      ACTIVITY_EVENTS.forEach(event =>
        window.addEventListener(event, this.boundReset, { passive: true })
      );
    });
    this.resetTimer();
  }

  stop(): void {
    ACTIVITY_EVENTS.forEach(event =>
      window.removeEventListener(event, this.boundReset)
    );
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
    this.listening = false;
  }

  private resetTimer(): void {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.ngZone.run(() => this.onTimeout());
    }, INACTIVITY_TIMEOUT_MS);
  }

  private onTimeout(): void {
    this.stop();
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
