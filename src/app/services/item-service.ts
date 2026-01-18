import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';

  public getItems = async (query : any) => {
    console.log(query);
    const res = await axios.get(`${this.apiUrl}/api/items`, {
      params: query
    });
    return res.data;
  }
}
