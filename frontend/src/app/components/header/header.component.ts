import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, OnDestroy, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { SearchOverlayComponent } from '../search-overlay/search-overlay.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SearchOverlayComponent],
  template: `
    <header class="site-header">

      <!-- Mobile hamburger (only shown on small screens) -->
      <button class="mobile-toggle" (click)="openDrawer()"
              aria-label="Отвори менюто" [attr.aria-expanded]="drawerOpen()">
        <span class="hamburger"></span>
      </button>

      <!-- Mobile search trigger -->
      <button class="mobile-search-btn" type="button"
              (click)="searchOpen.set(true)" aria-label="Търсене">
        <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </button>

      <!-- ── Masthead: three-column newspaper layout ── -->
      <div class="masthead">

        <!-- Left: typewriter date stamp -->
        <div class="stamp" aria-hidden="true">
          <div>том III · стр. 247</div>
          <div>всекидневна кухня</div>
        </div>

        <!-- Center: wordmark -->
        <a routerLink="/" class="wordmark">
          <span class="wordmark-by">Кулинарният блог на</span>
          <span class="wordmark-name">Иво</span>
          <span class="wordmark-rule">
            <span class="rule-line"></span>
            всекидневна кухня
            <span class="rule-line"></span>
          </span>
        </a>

        <!-- Right: auth + cart -->
        <div class="masthead-right">
          <button class="theme-toggle" (click)="theme.toggle()"
                  [attr.aria-label]="theme.isDark() ? 'Включи светъл режим' : 'Включи тъмен режим'">
            @if (theme.isDark()) {
              <svg viewBox="0 0 576 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"/></svg>
            } @else {
              <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"/></svg>
            }
          </button>
          <a routerLink="/shopping-list" class="cart-btn" aria-label="Списък за пазаруване">
            <svg viewBox="0 0 640 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
            @if (shoppingList.count() > 0) {
              <span class="cart-badge" aria-label="{{ shoppingList.count() }} продукта">{{ shoppingList.count() }}</span>
            }
          </a>
          @if (auth.isAuthenticated()) {
            <button class="avatar-btn" routerLink="/dashboard" [title]="auth.user()?.email || ''">
              {{ userInitial() }}
            </button>
            <button class="logout-btn" (click)="auth.logout()">
              <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
              Изход
            </button>
          } @else {
            <a routerLink="/signin" class="signin-link">вход</a>
            <a routerLink="/register" class="register-btn">регистрация</a>
          }
        </div>
      </div>

      <!-- ── Navigation rail ── -->
      <nav class="nav-rail" aria-label="Основна навигация">
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Начало</a></li>
          <li><a routerLink="/recipes" routerLinkActive="active">Рецепти</a></li>
          <li><a routerLink="/categories" routerLinkActive="active">Категории</a></li>
          @if (auth.isAuthenticated()) {
            <li><a routerLink="/dashboard" routerLinkActive="active">Табло</a></li>
            <li><a routerLink="/profile" routerLinkActive="active">Профил</a></li>
          }
        </ul>
        <button class="rail-search-btn" type="button"
                (click)="searchOpen.set(true)"
                aria-label="Търсене">
          <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <span>Търси</span>
        </button>
      </nav>
    </header>

    @if (searchOpen()) {
      <app-search-overlay (close)="searchOpen.set(false)" />
    }

    <div class="drawer-overlay" [class.visible]="drawerOpen()" (click)="close()" aria-hidden="true"></div>

    <div class="mobile-drawer" #drawer [class.open]="drawerOpen()"
         role="dialog" aria-modal="true" aria-label="Навигация"
         [attr.inert]="drawerOpen() ? null : ''">

      <div class="drawer-header">
        <a routerLink="/" class="drawer-brand" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 14c0-3.31 2.69-6 6-6s6 2.69 6 6"/>
            <path d="M4 14h16"/>
            <path d="M9 14v4"/>
            <path d="M15 14v4"/>
            <path d="M8 18h8"/>
          </svg>
          Кулинарен блог
        </a>
        <div class="drawer-header-actions">
          <button class="theme-toggle" (click)="theme.toggle()"
                  [attr.aria-label]="theme.isDark() ? 'Включи светъл режим' : 'Включи тъмен режим'">
            @if (theme.isDark()) {
              <svg viewBox="0 0 576 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"/></svg>
            } @else {
              <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"/></svg>
            }
          </button>
          <button class="drawer-close" (click)="close()" aria-label="Затвори менюто">
            <svg viewBox="0 0 384 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>
          </button>
        </div>
      </div>

      @if (auth.isAuthenticated()) {
        <div class="drawer-user">
          <div class="drawer-avatar">{{ userInitial() }}</div>
          <div class="drawer-user-info">
            <span class="drawer-user-name">{{ auth.user()?.name }}</span>
            <span class="drawer-user-role">{{ auth.isAdmin() ? 'Администратор' : 'Потребител' }}</span>
          </div>
        </div>
        <div class="drawer-sep"></div>
      }

      <nav class="drawer-nav">
        <button type="button" class="drawer-item drawer-search-btn"
                (click)="close(); searchOpen.set(true)">
          <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          Търсене
        </button>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"/></svg>
          Начало
        </a>
        <a routerLink="/recipes" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"/></svg>
          Рецепти
        </a>
        <a routerLink="/categories" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M384 96l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zM256 288l-64 0 0-64 64 0 0 64zm-64 64l64 0 0 64-64 0 0-64zm-64-64l-64 0 0-64 64 0 0 64zM64 352l64 0 0 64-64 0 0-64zm0-192l0-64 64 0 0 64-64 0zm128 0l0-64 64 0 0 64-64 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
          Категории
        </a>
        <a routerLink="/meal-planner" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
          Седмично меню
        </a>
        <a routerLink="/shopping-list" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <span class="drawer-cart-wrap">
            <svg viewBox="0 0 640 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
            @if (shoppingList.count() > 0) {
              <span class="drawer-cart-badge" aria-hidden="true">{{ shoppingList.count() }}</span>
            }
          </span>
          Списък за пазаруване
        </a>
        @if (auth.isAuthenticated()) {
          <a routerLink="/collections" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"/></svg>
            Колекции
          </a>
          <a routerLink="/dashboard" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
            Табло
          </a>
          <a routerLink="/profile" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>
            Профил
          </a>
        }
      </nav>

      <div class="drawer-footer">
        @if (auth.isAuthenticated()) {
          <button class="drawer-logout" (click)="auth.logout(); close()">
            <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
            Изход
          </button>
        } @else {
          <a routerLink="/signin" class="drawer-signin" (click)="close()">Вход</a>
          <a routerLink="/register" class="drawer-register" (click)="close()">Регистрация</a>
        }
      </div>
    </div>
  `,
  styles: [`
    /* ── Inline SVG icons — base sizing ── */
    svg { display: inline-block; vertical-align: -0.125em; overflow: visible; }
    .theme-toggle svg { width: 1rem; height: 1rem; }
    .mobile-search-btn svg { width: 1rem; height: 1rem; }
    .cart-btn svg { width: 0.95rem; height: 0.95rem; }

    /* ── Site header — warm paper with red margin line ── */
    .site-header {
      position: sticky;
      top: 0;
      z-index: var(--z-sticky);
      background: var(--paper);
      box-shadow: inset 3px 0 0 0 var(--pencil-red);
    }

    /* ── Mobile hamburger ── */
    .mobile-toggle {
      display: flex;
      position: absolute;
      top: 0.75rem;
      left: 1rem;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      min-width: 2.75rem;
      min-height: 2.75rem;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
      z-index: 2;
    }
    .hamburger {
      display: block;
      width: 1.2rem;
      height: 1.5px;
      background: var(--ink);
      position: relative;
    }
    .hamburger::before, .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: var(--ink);
    }
    .hamburger::before { top: -5px; }
    .hamburger::after  { top: 5px; }

    /* ── Masthead (three-column) ── */
    .masthead {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1.5rem;
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.4rem 2rem 0.6rem;
    }

    /* Left stamp */
    .stamp {
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      color: var(--ink-mute);
      text-transform: uppercase;
      line-height: 1.6;
    }

    /* Center wordmark */
    .wordmark {
      text-decoration: none;
      color: inherit;
      text-align: center;
      display: block;
    }
    .wordmark-by {
      display: block;
      font-family: var(--font-hand);
      font-size: 1.05rem;
      color: var(--pencil-red);
      transform: rotate(-2deg);
      display: inline-block;
      margin-bottom: 0.1rem;
    }
    .wordmark-name {
      display: block;
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: clamp(2.6rem, 5vw, 3.5rem);
      letter-spacing: -0.01em;
      line-height: 0.95;
      color: var(--ink);
    }
    .wordmark-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      margin-top: 0.375rem;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.3em;
      color: var(--ink-mute);
      text-transform: uppercase;
    }
    .rule-line {
      display: inline-block;
      height: 1px;
      width: 2.25rem;
      background: var(--rule-strong);
    }

    /* Right: auth */
    .masthead-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.625rem;
    }

    /* ── Theme toggle — shared between masthead + drawer ── */
    .theme-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border: none;
      background: none;
      color: var(--ink-mute);
      font-size: 1rem;
      cursor: pointer;
      border-radius: var(--radius-sm);
      transition: color 0.18s, background 0.18s;
    }
    .theme-toggle:hover { color: var(--terracotta); background: var(--clr-surface-hover); }
    .theme-toggle:focus-visible { outline: 2px solid var(--clr-focus); outline-offset: 2px; }
    .avatar-btn {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--warm), var(--olive));
      color: var(--paper);
      border: 2px solid var(--paper);
      box-shadow: 0 0 0 1px var(--rule-strong);
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      text-transform: uppercase;
    }
    .signin-link {
      background: transparent;
      border: none;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-soft);
      cursor: pointer;
      padding: 0.5rem 0.25rem;
      text-decoration: none;
    }
    .signin-link:hover { color: var(--terracotta); }
    .register-btn {
      background: var(--ink-soft);
      color: var(--paper);
      border: none;
      padding: 0.55rem 0.875rem;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.18s;
    }
    .register-btn:hover { background: var(--terracotta-2); }
    .logout-btn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      background: transparent;
      border: none;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--pencil-red);
      cursor: pointer;
      padding: 0.5rem 0.25rem;
    }
    .logout-btn svg { width: 0.8rem; height: 0.8rem; flex-shrink: 0; }
    .logout-btn:hover { color: var(--terracotta-2); }

    /* ── Cart button (masthead-right) ── */
    .cart-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      color: var(--ink-soft);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.15s;
    }
    .cart-btn:hover { color: var(--terracotta); }
    .cart-badge {
      position: absolute;
      top: -0.2rem;
      right: -0.3rem;
      min-width: 1rem;
      height: 1rem;
      padding: 0 0.2rem;
      border-radius: 999px;
      background: var(--terracotta);
      color: #fff;
      font-family: var(--font-type);
      font-size: 0.58rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    /* ── Navigation rail ── */
    .nav-rail {
      border-top: 1px solid var(--rule-strong);
      border-bottom: 2px double var(--rule-strong);
      background: var(--clr-nav-tint);
    }
    .nav-rail ul {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0.625rem 2rem;
      list-style: none;
      display: flex;
      gap: 1.75rem;
      justify-content: center;
    }
    .nav-rail a {
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-soft);
      padding-bottom: 0.25rem;
      position: relative;
      transition: color 0.2s;
    }
    .nav-rail a::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--terracotta);
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.22s var(--ease-out-expo);
    }
    .nav-rail a:hover { color: var(--terracotta-2); }
    .nav-rail a:hover::after { transform: scaleX(0.6); }
    .nav-rail a.active { color: var(--terracotta-2); }
    .nav-rail a.active::after { transform: scaleX(1); }

    /* nav-rail layout: links left, search button right */
    .nav-rail {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .nav-rail ul { flex: 1; }
    .rail-search-btn {
      position: absolute;
      right: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      border: 1px solid var(--rule-strong);
      border-radius: var(--radius-pill);
      background: rgba(255, 245, 215, .55);
      font-family: var(--font-type);
      font-size: 0.62rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--ink-soft);
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
    }
    .rail-search-btn svg { width: 0.7rem; height: 0.7rem; }
    .rail-search-btn:hover { background: var(--paper-2); border-color: var(--rule); color: var(--terracotta); }
    .rail-search-btn:focus-visible { outline: 2px solid var(--mustard); outline-offset: 2px; }

    /* Mobile search icon (right side, beside wordmark) */
    .mobile-search-btn {
      display: none;
      position: absolute;
      top: 0.75rem;
      right: 1rem;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      min-width: 2.75rem;
      min-height: 2.75rem;
      align-items: center;
      justify-content: center;
      color: var(--ink-soft);
      font-size: 1rem;
      touch-action: manipulation;
      z-index: 2;
      transition: color 0.15s;
    }
    .mobile-search-btn:hover { color: var(--terracotta); }

    /* drawer-search-btn: looks like a drawer-item but is a button */
    .drawer-search-btn {
      width: 100%;
      text-align: left;
      background: none;
      font-family: inherit;
      cursor: pointer;
      color: var(--ink-soft);
      margin-bottom: 0.75rem;
    }

    /* ── Drawer overlay ── */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(42, 34, 26, 0.55);
      z-index: var(--z-overlay);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.26s var(--ease-out-expo);
    }
    .drawer-overlay.visible { opacity: 1; pointer-events: auto; }

    /* ── Mobile drawer ── */
    .mobile-drawer {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      max-width: 85vw;
      height: 100vh;
      height: 100vh;
      height: 100dvh;
      background: var(--paper);
      z-index: var(--z-drawer);
      flex-direction: column;
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
      box-shadow: 4px 0 32px rgba(42, 34, 26, 0.18);
      overflow-y: auto;
    }
    .mobile-drawer.open { transform: translateX(0); }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.75rem 1rem 1.25rem;
      border-bottom: 1px solid var(--rule-strong);
      flex-shrink: 0;
    }
    .drawer-header-actions { display: flex; align-items: center; gap: 0.25rem; }
    .drawer-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--ink);
    }
    .drawer-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      color: var(--ink-mute);
      transition: color 0.16s;
      min-width: 2.25rem;
      min-height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
    }
    .drawer-close svg { width: 1rem; height: 1rem; }
    .drawer-close:hover { color: var(--ink); }

    .drawer-user {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
    }
    .drawer-avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--warm), var(--olive));
      color: var(--paper);
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .drawer-user-info { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
    .drawer-user-name {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1rem;
      font-weight: 600;
      color: var(--ink);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .drawer-user-role {
      font-family: var(--font-type);
      font-size: 0.72rem;
      color: var(--ink-mute);
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    .drawer-sep { height: 1px; background: var(--rule); margin: 0 1.25rem; }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      padding: 0.75rem 0.5rem;
      flex: 1;
      gap: 0.1rem;
    }
    .drawer-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0.875rem;
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-soft);
      transition: background 0.16s, color 0.16s;
      touch-action: manipulation;
      min-height: 2.75rem;
      border-bottom: 1px dashed transparent;
    }
    .drawer-item svg { width: 1rem; height: 1rem; flex-shrink: 0; color: var(--ink-mute); }
    .drawer-item:hover { background: var(--clr-surface-hover); color: var(--ink); }
    .drawer-item.active { color: var(--terracotta-2); border-bottom-color: var(--rule); }
    .drawer-item.active svg { color: var(--terracotta); }

    .drawer-cart-wrap {
      position: relative;
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
    .drawer-cart-badge {
      position: absolute;
      top: -0.35rem;
      right: -0.55rem;
      min-width: 1rem;
      height: 1rem;
      padding: 0 0.2rem;
      border-radius: 999px;
      background: var(--terracotta);
      color: #fff;
      font-family: var(--font-type);
      font-size: 0.56rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    .drawer-footer {
      padding: 0.875rem;
      border-top: 1px solid var(--rule-strong);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex-shrink: 0;
    }
    .drawer-logout {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 0.875rem;
      border: none;
      background: none;
      width: 100%;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--pencil-red);
      cursor: pointer;
      touch-action: manipulation;
      min-height: 2.75rem;
      transition: background 0.16s;
    }
    .drawer-logout svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .drawer-logout:hover { background: var(--clr-error-bg); }

    .drawer-signin {
      display: block;
      padding: 0.7rem 1rem;
      text-decoration: none;
      text-align: center;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-soft);
      transition: color 0.16s;
    }
    .drawer-signin:hover { color: var(--terracotta); }
    .drawer-register {
      display: block;
      padding: 0.7rem 1rem;
      text-decoration: none;
      text-align: center;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      background: var(--ink);
      color: var(--paper);
      transition: background 0.18s;
    }
    .drawer-register:hover { background: var(--terracotta-2); }

    /* ── Desktop: hide hamburger, show masthead ── */
    @media (min-width: 900px) {
      .mobile-toggle { display: none; }
      .masthead { display: grid; }
    }

    /* ── Mobile: compact header — drawer handles nav + auth ── */
    @media (max-width: 899px) {
      .masthead {
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 0.75rem 3.5rem 0.625rem;
        gap: 0.1rem;
      }
      .stamp          { display: none; }
      .masthead-right { display: none; }   /* drawer handles auth */
      .nav-rail       { display: none; }   /* drawer handles nav */
      .rail-search-btn { display: none; }
      .wordmark-by   { font-size: 0.7rem; margin-bottom: 0; }
      .wordmark-name { font-size: 1.85rem; }
      .wordmark-rule { display: none; }
      .mobile-search-btn { display: flex; }
    }
    @media (max-width: 480px) {
      .wordmark-name { font-size: 1.65rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      .mobile-drawer, .drawer-overlay { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  shoppingList = inject(ShoppingListService);
  drawerOpen = signal(false);
  searchOpen = signal(false);

  private drawerEl = viewChild<ElementRef<HTMLElement>>('drawer');
  private triggerEl: HTMLElement | null = null;

  openDrawer(): void {
    this.triggerEl = document.activeElement as HTMLElement | null;
    this.drawerOpen.set(true);
    document.body.style.overflow = 'hidden';
    queueMicrotask(() => this.getFocusableElements()[0]?.focus());
  }

  close(): void {
    if (!this.drawerOpen()) return;
    this.drawerOpen.set(false);
    document.body.style.overflow = '';
    this.triggerEl?.focus();
    this.triggerEl = null;
  }

  userInitial(): string {
    const name = this.auth.user()?.name || '';
    return name.charAt(0).toUpperCase() || '?';
  }

  private getFocusableElements(): HTMLElement[] {
    const root = this.drawerEl()?.nativeElement;
    if (!root) return [];
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll<HTMLElement>(selector))
      .filter(el => el.offsetParent !== null);
  }

  private keydownHandler = (e: KeyboardEvent) => {
    if (!this.drawerOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); this.close(); return; }
    if (e.key === 'Tab') {
      const focusable = this.getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !this.drawerEl()?.nativeElement.contains(active))) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault(); first.focus();
      }
    }
  };

  ngOnInit(): void {
    document.addEventListener('keydown', this.keydownHandler);
  }
  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.keydownHandler);
    document.body.style.overflow = '';
  }
}
