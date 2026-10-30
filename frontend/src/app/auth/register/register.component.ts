import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';



@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  roles = [
    { value: 'user', viewValue: 'Utilisateur' },
    { value: 'admin', viewValue: 'Administrateur' }
  ];





  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('user', Validators.required)
  });

  constructor(private authService: AuthService, private router : Router) {}

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = {  
        username: this.registerForm.value.username!,
        password: this.registerForm.value.password!,
        role: this.registerForm.value.role!
      };
  
      this.authService.register(formData).subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) => console.error('Échec de l\'inscription', err)
      });
    }
  }
  
}