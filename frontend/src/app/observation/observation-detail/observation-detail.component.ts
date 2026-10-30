import { Component, OnInit } from '@angular/core';
import { Observation } from '../../models/observation.model';
import { ObservationService } from '../../services/observation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-observation-detail',
  imports: [],
  templateUrl: './observation-detail.component.html',
  styleUrl: './observation-detail.component.scss'
})
export class ObservationDetailComponent implements OnInit{

  observation: Observation | null = null;  
  loading = true;
  error: string | null = null;

  
  observationService = inject(ObservationService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.observationService.getById(+id).subscribe({
        next: (data) => {
          this.observation = data;  
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement de l\'observation :', err);
          this.error = 'Impossible de récupérer les données de l\'observation';
          this.loading = false;
        }
      });
    }
  }

  
  goBack(): void {
    this.router.navigate(['/observation']);
  }

}
