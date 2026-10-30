import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  description = signal('Cette application permet de gérer des observations d\'animaux.');
  creators = signal([
    'Seffar Nordine',
    'Fatima Aissat',
    'Ali Mimoun',
    'Aicha Gahlas'
  ]);
}
