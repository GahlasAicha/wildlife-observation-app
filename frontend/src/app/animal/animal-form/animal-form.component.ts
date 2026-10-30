import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private animalService = inject(AnimalService);

  form = this.fb.group({
    nom_commun: ['', Validators.required],
    nom_savant: ['', Validators.required],
    embranchement: [''],
    classe: [''],
    ordre: [''],
    sous_ordre: [''],
    famille: [''],
    genre: [''],
    iucn: [''],
    description: [''],
  });

  isEditMode = false;
  id?: number;

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!paramId;

    if (this.isEditMode && paramId) {
      this.id = +paramId;
      this.animalService.getById(this.id).subscribe({
        next: (animal) => this.form.patchValue(animal),
        error: () => alert("Animal non trouvé."),
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;
  
    const data = this.form.value as Animal;
    console.log('Formulaire soumis', data);
  
    if (this.isEditMode && this.id) {
      
      this.animalService.update(this.id, data).subscribe({
        next: () => {
          console.log('Mise à jour réussie');
          this.router.navigate(['/animals']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour :', err);
          alert("Échec de la mise à jour.");
        }
      });
    } else {
      
      this.animalService.create(data).subscribe({
        next: () => {
          console.log('Création réussie');
          this.router.navigate(['/animals']);
        },
        error: (err) => {
          console.error('Erreur lors de la création :', err);
          alert("Échec de la création.");
        }
      });
    }
  }
  
}