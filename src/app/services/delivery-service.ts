import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getDeliveries = async (query : any) => {
    const res = await axios.get(`${this.apiUrl}/api/deliveries`, { params: query });
    return res.data;
  }
}
