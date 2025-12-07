import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class FeeService {
  fees : any = [];

  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getFees = async (dateFilter : any) => {
      const res = await axios.get(`${this.apiUrl}/api/fees`, { params: { date : dateFilter} });
    this.fees = res.data;
  }

  public storeFee = async (data : any) => {
    const res = await axios.post(`${this.apiUrl}/api/fees/create-ambulant-stall-fee`, data);
    return res.data;
  }
}
