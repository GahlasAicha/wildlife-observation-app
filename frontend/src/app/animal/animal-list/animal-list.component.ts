import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../services/animal.service';
import { RouterModule } from '@angular/router';
import { Signal, signal, effect } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animal-list.component.html',
  providers : [AnimalService]
})
export class AnimalListComponent implements OnInit {

  loading = true;
  error: string | null = null;

  animalService = inject(AnimalService);
  animals = signal<any[]>([]);

  ngOnInit(): void {
    this.animalService.getAll().subscribe({
      next: (data) => {
        console.log('Données récupérées du backend :', data);  
        this.animals.set(data);  
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des animaux :', err);
        this.error = 'Erreur lors du chargement des animaux';
        this.loading = false;
      }
    });
  }
  
  
  

  delete(id: number) {
    this.animalService.delete(id).subscribe(() => {
      this.animalService.getAll().subscribe((data) => this.animals.set(data));
    });
  }
}
