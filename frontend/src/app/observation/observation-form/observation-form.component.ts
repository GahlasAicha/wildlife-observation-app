import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservationService } from '../../services/observation.service';
import { Validators } from '@angular/forms';
import { Observation } from '../../models/observation.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-observation-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './observation-form.component.html',
  styleUrl: './observation-form.component.scss'
})
export class ObservationFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private observationService = inject(ObservationService);

  form = this.fb.group({
    date_heure: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required],
    description: [''],
    animal: ['']
  });

  isEditMode = false;
  id?: number;

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!paramId;

    if (this.isEditMode && paramId) {
      this.id = +paramId;
      this.observationService.getById(this.id).subscribe({
        next: (observation) => 
          this.form.patchValue(observation),
        error: () => alert("Observation non trouvé."),
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;
  
    const data = this.form.value as Observation;
    console.log('Formulaire soumis', data);
  
    if (this.isEditMode && this.id) {
      
      this.observationService.update(this.id, data).subscribe({
        next: () => {
          console.log('Mise à jour réussie');
          this.router.navigate(['/observation']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour :', err);
          alert("Échec de la mise à jour.");
        }
      });
    } else {
      
      this.observationService.create(data).subscribe({
        next: () => {
          console.log('Création réussie');
          this.router.navigate(['/observation']);
        },
        error: (err) => {
          console.error('Erreur lors de la création :', err);
          alert("Échec de la création.");
        }
      });
    }
  }
  
}
