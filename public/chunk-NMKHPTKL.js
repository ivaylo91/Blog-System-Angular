import {
  environment
} from "./chunk-GL5TQRYS.js";
import {
  HttpClient,
  Injectable,
  Router,
  computed,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LVOWXKII.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : (
    /* istanbul ignore next */
    []
  ));
  user = this.currentUser.asReadonly();
  isAuthenticated = computed(() => !!this.currentUser(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdmin = computed(() => this.currentUser()?.role === "ADMIN", ...ngDevMode ? [{ debugName: "isAdmin" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.loadFromStorage();
    this.verifySession();
  }
  loadFromStorage() {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        this.currentUser.set(JSON.parse(userData));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }
  verifySession() {
    this.http.get(`${environment.apiUrl}/user`).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        localStorage.setItem("user", JSON.stringify(user));
      },
      error: () => {
        this.currentUser.set(null);
        localStorage.removeItem("user");
      }
    });
  }
  csrf() {
    return this.http.get("/sanctum/csrf-cookie");
  }
  clearStorage() {
    localStorage.removeItem("user");
    this.currentUser.set(null);
  }
  register(name, email, password, password_confirmation) {
    return this.csrf().pipe(switchMap(() => this.http.post(`${environment.apiUrl}/register`, {
      name,
      email,
      password,
      password_confirmation
    })), tap((res) => this.handleAuth(res)));
  }
  login(email, password) {
    return this.csrf().pipe(switchMap(() => this.http.post(`${environment.apiUrl}/login`, {
      email,
      password
    })), tap((res) => this.handleAuth(res)));
  }
  logout() {
    this.http.post(`${environment.apiUrl}/logout`, {}).subscribe({
      complete: () => {
      },
      error: () => {
      }
    });
    this.clearStorage();
    this.router.navigate(["/"]);
  }
  fetchUser() {
    return this.http.get(`${environment.apiUrl}/user`).pipe(tap((user) => {
      this.currentUser.set(user);
      localStorage.setItem("user", JSON.stringify(user));
    }));
  }
  updateProfile(data) {
    return this.http.post(`${environment.apiUrl}/user/profile`, data).pipe(tap((user) => {
      this.currentUser.set(user);
      localStorage.setItem("user", JSON.stringify(user));
    }));
  }
  handleAuth(res) {
    this.currentUser.set(res.user);
    localStorage.setItem("user", JSON.stringify(res.user));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-NMKHPTKL.js.map
