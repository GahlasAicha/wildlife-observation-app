import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  hidePassword = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value ?? '';
      const password = this.loginForm.get('password')?.value ?? '';
  
      this.authService.login({ 
        username: username as string, 
        password: password as string 
      }).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (err) => this.showError(err)
      });
    }
  }
  
  private showError(err: any): void {
    const message = err.error?.message || 'Échec de la connexion';
    this.snackBar.open(message, 'Fermer', { duration: 5000 });
  }
}
