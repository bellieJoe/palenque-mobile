import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getUnits = async () => {
    const res = await axios.get(`${this.apiUrl}/api/units`);
    return res.data;
  }
  
}
