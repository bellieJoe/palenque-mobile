import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class FeeSettingService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getActiveSetting = async () => {
      const res = await axios.get(`${this.apiUrl}/api/fee-settings/get-active`);
      return res.data;
  }
}
