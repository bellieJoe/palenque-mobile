import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class AmbulantStallService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';
  public ambulantStalls : any = [];
  
  public getAmbulantStalls = async () => {
    const res = await axios.get(`${this.apiUrl}/api/ambulant-stalls`);
    this.ambulantStalls = res.data;
    return res.data;
  };
}
