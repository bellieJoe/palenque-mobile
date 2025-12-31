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

  public storeDelivery = async (data : any) => {
    const res = await axios.post(`${this.apiUrl}/api/deliveries/store`, data);
    return res;
  }

  public updateDelivery = async (data : any) => {
    const res = await axios.post(`${this.apiUrl}/api/deliveries/update`, data);
    return res;
  }
}
