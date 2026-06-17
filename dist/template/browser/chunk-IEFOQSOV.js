import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  Router
} from "./chunk-I4S43CN7.js";
import {
  HttpClient
} from "./chunk-46QRNFHM.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/shared/service/authentification/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = `${environment.apiUrl}/login`;
  tokenKey = "pyramide_token";
  userKey = "pyramide_user";
  permissions$ = new BehaviorSubject(this.getUserPermissions());
  constructor(http, router) {
    this.http = http;
    this.router = router;
    console.log("API Login URL:", this.apiUrl);
  }
  login(credentials) {
    return this.http.post(this.apiUrl, credentials).pipe(tap((response) => {
      console.log("Login response compl\xE8te:", response);
      const isSuccess = response?.success || response?.status;
      const token = response?.access_token || response?.token;
      if (isSuccess && token) {
        this.setToken(token);
        const userWithPermissions = __spreadProps(__spreadValues({}, response?.user), {
          permissions: response?.permissions || response?.user?.permissions || [],
          roles: response?.roles || response?.user?.roles || [],
          role_type: response?.role_type ?? response?.user?.["role_type"] ?? null
        });
        this.setUser(userWithPermissions);
      }
    }), catchError((error) => {
      console.error("Login error details:", error);
      return this.handleError(error);
    }));
  }
  activateAccount(token) {
    return this.http.post(`${environment.apiUrl}/auth/activate`, { token }).pipe(tap((response) => {
      const accessToken = response?.access_token || response?.token;
      if (accessToken) {
        this.setToken(accessToken);
        const userWithPermissions = __spreadProps(__spreadValues({}, response?.user), {
          permissions: response?.permissions || response?.user?.permissions || [],
          roles: response?.roles || response?.user?.roles || []
        });
        this.setUser(userWithPermissions);
      }
    }), catchError((error) => this.handleError(error)));
  }
  sendPasswordResetLink(email) {
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, { email }).pipe(catchError((error) => this.handleError(error)));
  }
  resetPassword(token, email, password, passwordConfirmation) {
    return this.http.post(`${environment.apiUrl}/auth/reset-password`, {
      token,
      email,
      password,
      password_confirmation: passwordConfirmation
    }).pipe(catchError((error) => this.handleError(error)));
  }
  sendMagicLink(email) {
    return this.http.post(`${environment.apiUrl}/auth/magic-link`, { email }).pipe(catchError((error) => this.handleError(error)));
  }
  verifyMagicLink(token) {
    return this.http.post(`${environment.apiUrl}/auth/magic-link/verify`, { token }).pipe(tap((response) => {
      const accessToken = response?.access_token || response?.token;
      if (accessToken) {
        this.setToken(accessToken);
        this.setUser(response?.user);
      }
    }), catchError((error) => this.handleError(error)));
  }
  register(data) {
    const user = this.getUser();
    const payload = __spreadProps(__spreadValues({}, data), {
      created_by: user?.id || 1
      // ID de l'utilisateur connecté
    });
    console.log("Payload envoy\xE9:", payload);
    return this.http.post(`${environment.apiUrl}/users`, payload).pipe(tap((response) => {
      console.log("Register response:", response);
    }), catchError((error) => {
      console.error("Register error:", error);
      return this.handleError(error);
    }));
  }
  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  setUser(user) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.permissions$.next(this.getUserPermissions());
  }
  getUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(["/auth/login"]);
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1e3);
      return tokenData.exp > currentTime;
    } catch (error) {
      return false;
    }
  }
  getUserPermissions() {
    const user = this.getUser();
    if (Array.isArray(user?.permissions) && user.permissions.length > 0 && typeof user.permissions[0] === "object") {
      return user.permissions.map((p) => p.name);
    }
    return user?.permissions || [];
  }
  //  getUserPermissions(): string[] {
  //   const user = this.getUser();
  //   return user?.permissions || [];
  // }
  // Méthode pour vérifier si l'utilisateur a une permission spécifique
  hasPermission(permission) {
    const permissions = this.getUserPermissions();
    return permissions.includes(permission);
  }
  refreshMe() {
    return this.http.get(`${environment.apiUrl}/auth/me`).pipe(tap((response) => {
      if (response?.status) {
        const current = this.getUser() || {};
        const updated = __spreadProps(__spreadValues(__spreadValues({}, current), response.user), {
          permissions: response.permissions || [],
          roles: response.roles || [],
          role_type: response.role_type ?? current["role_type"] ?? null
        });
        this.setUser(updated);
      }
    }), catchError(() => throwError(() => null)));
  }
  // Méthode pour vérifier si l'utilisateur a au moins une des permissions
  hasAnyPermission(permissions) {
    const userPermissions = this.getUserPermissions();
    return permissions.some((permission) => userPermissions.includes(permission));
  }
  handleError(error) {
    let errorMessage = "Une erreur est survenue";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      errorMessage = error.error?.message || error.message || "Erreur de connexion au serveur";
    }
    console.error("Error details:", errorMessage, error);
    return throwError(() => ({
      message: errorMessage,
      error
    }));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-IEFOQSOV.js.map
