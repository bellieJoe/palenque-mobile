import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class MonthlyRentService {
  public monthlyRents : any = [];
  public unpaidRents : any = [];
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getMonthlyRents = async (dateFilter : any) => {
    const res = await axios.get(`${this.apiUrl}/api/monthly-rents`, { params: { date : dateFilter} });
    this.monthlyRents = res.data;
  }

  public getUnpaidRents = async (dateFilter : any) => {
    const res = await axios.get(`${this.apiUrl}/api/monthly-rents/unpaid`, { params: { date : dateFilter} });
    this.unpaidRents = res.data;
  }

  public updateMonthlyRent = async (id : any, data : any) => {
    const res = await axios.post(`${this.apiUrl}/api/monthly-rents/update/${id}`, data);
    return res.data;
  }
}
