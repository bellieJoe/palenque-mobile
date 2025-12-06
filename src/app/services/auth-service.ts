import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';
  authUser : any = {};

  public login = async (username: string, password: string) => {
    await axios.post(`${this.apiUrl}/sanctum/csrf-cookie`);
    const res = await axios.post(`${this.apiUrl}/api/login`, { username, password });
    this.authUser = res.data;
  }
}
