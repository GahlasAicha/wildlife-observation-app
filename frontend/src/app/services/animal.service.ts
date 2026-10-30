import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Animal } from '../models/animal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8082/api/animals';

  

 getAll(): Observable<Animal[]> {
  return this.http.get<Animal[]>(this.baseUrl);
}

  
  
  
  
  
  getById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl}/${id}`);
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.baseUrl, animal);
  }

  update(id: number, animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.baseUrl}/${id}`, animal);
  }
  
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }


}
