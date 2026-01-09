import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getSuppliers = async () => {
    const res = await axios.get(`${this.apiUrl}/api/suppliers`);
    return res.data;
  }

  public getOrigins = async () => {
    const res  = await axios.get(`${this.apiUrl}/api/origins`);
    return res.data;
  }
}
