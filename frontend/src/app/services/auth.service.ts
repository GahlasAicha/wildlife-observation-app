import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';





interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  email: string;
  role: 'user' | 'admin';
}



@Injectable({ providedIn: 'root' })
export class AuthService {

  private currentUser = signal<any>(null);
  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post('${this.apiUrl}/login', credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('jwt_token', response.token);
          this.currentUser.set(response.user);
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post('/register', userData).pipe(
      catchError(error => {
        console.error('Erreur d\'inscription:', error);
        throw error;
      })
    );
  }



  logout() {
    return this.http.post('/api/logout', {}).pipe(
      tap(() => this.currentUser.set(null)));
      this.router.navigate(['/login']);
  }
}
