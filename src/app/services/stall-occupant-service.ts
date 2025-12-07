import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class StallOccupantService {
  stallOccupants : any[] = [];
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getStalOccupants = async () => {
    const res = await axios.get(`${this.apiUrl}/api/stall-occupants`);
    this.stallOccupants = res.data;
  }
}
