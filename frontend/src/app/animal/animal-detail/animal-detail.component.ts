import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  animal: Animal | null = null;  
  loading = true;
  error: string | null = null;

  
  animalService = inject(AnimalService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.animalService.getById(+id).subscribe({
        next: (data) => {
          this.animal = data;  
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement de l\'animal :', err);
          this.error = 'Impossible de récupérer les données de l\'animal';
          this.loading = false;
        }
      });
    }
  }

  
  goBack(): void {
    this.router.navigate(['/animals']);
  }
}
