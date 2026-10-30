import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Observation } from '../models/observation.model';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8082/api/observations';

  observations = signal<Observation[]>([]);

  getAll(): Observable<Observation[]> {
    return this.http.get<Observation[]>(this.baseUrl);
  }

  getById(id: number): Observable<Observation> {
    return this.http.get<Observation>(`${this.baseUrl}/${id}`);
  }

  create(observation: Observation): Observable<Observation> {
    return this.http.post<Observation>(this.baseUrl, observation);
  }

  update(id: number, observation: Observation): Observable<Observation> {
    return this.http.put<Observation>(`${this.baseUrl}/${id}`, observation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
