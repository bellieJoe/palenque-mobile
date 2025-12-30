import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class ItemFeeSettingService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getActiveItemFeeSetting = async () => {
    const res = await axios.get(`${this.apiUrl}/api/item-fee-settings/get-active`);
    return res.data;
  }
}
