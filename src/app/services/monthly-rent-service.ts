import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class MonthlyRentService {
  public monthlyRents : any = {};
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getMonthlyRents = async () => {
    const res = await axios.get(`${this.apiUrl}/api/monthly-rents`);
    this.monthlyRents = res.data;
  }
}
