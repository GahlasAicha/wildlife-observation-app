import { Component, signal } from '@angular/core';
import { ObservationService } from '../../services/observation.service';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-observation-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './observation-list.component.html',
  styleUrl: './observation-list.component.scss'
})
export class ObservationListComponent implements OnInit {
  loading = true;
  error: string | null = null;

  observationService = inject (ObservationService);
  observations = signal<any[]>([]);
  animalService = inject(AnimalService);
  animals: { [id: number]: any } = {}; // Dictionnaire pour stocker les animaux


  ngOnInit(): void {
    this.observationService.getAll().subscribe({
      next: (data) => {
        console.log('Données récupérées du backend :', data);
        this.observations.set(data);
        this.loading = false;
  
        
      error: (err : any) => {
        console.error('Erreur lors du chargement des Observations :', err);
        this.error = 'Erreur lors du chargement des Observations';
        this.loading = false;
      }
    }});
  }

  delete(id: number) {
    this.observationService.delete(id).subscribe(() => {
      this.observationService.getAll().subscribe((data) => this.observations.set(data));
    });
  }

}
