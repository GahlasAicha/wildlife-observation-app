import { Animal } from './animal.model';


export interface Observation {
  id?: number;              
  date_heure: string;                       
  latitude: string;         
  longitude: string;        
  description: string;      
  animal: string;           
}
