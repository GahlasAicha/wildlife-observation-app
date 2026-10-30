import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button routerLink="/">
        <mat-icon>pets</mat-icon>
      </button>
      <span>Animal Tracker</span>

      <span class="spacer"></span>

      <button mat-button routerLink="/animals" routerLinkActive="active">
        <mat-icon>list</mat-icon> Animaux
      </button>
      <button mat-button routerLink="/observation" routerLinkActive="active">
        <mat-icon>visibility</mat-icon> Observations
      </button>
      <button mat-button routerLink="/about" routerLinkActive="active">
        <mat-icon>info</mat-icon> À propos
      </button>

      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/login">
          <mat-icon>login</mat-icon> Connexion
        </button>
        <button mat-menu-item routerLink="/register">
          <mat-icon>person_add</mat-icon> Inscription
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .active {
      background-color: rgba(255, 255, 255, 0.2);
    }
    mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  `]
})
export class NavigationComponent {
  isAuthenticated = signal(false);
  username = signal('');

  // Méthodes pour gérer l'authentification
  login() {
    this.isAuthenticated.set(true);
    this.username.set('Utilisateur');
  }

  logout() {
    this.isAuthenticated.set(false);
    this.username.set('');
  }
}