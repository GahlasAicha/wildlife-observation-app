import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal/animal-detail/animal-detail.component';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';
import { ObservationListComponent } from './observation/observation-list/observation-list.component';
import { ObservationFormComponent } from './observation/observation-form/observation-form.component';
import { ObservationDetailComponent } from './observation/observation-detail/observation-detail.component';



export const routes: Routes = [
  { path: 'about', component: AboutComponent },


  { path: 'animals', component: AnimalListComponent },
  { path: 'animals/add', component: AnimalFormComponent },
  { path: 'animals/:id', component: AnimalDetailComponent },
  { path: 'animals/edit/:id', component: AnimalFormComponent },


  { path: 'observation', component: ObservationListComponent },
  { path: 'observation/add', component: ObservationFormComponent },
  { path: 'observation/:id', component: ObservationDetailComponent },
  { path: 'observation/edit/:id', component: ObservationFormComponent },


  {path: 'register',loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)},
  {path: 'login',loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)},
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
