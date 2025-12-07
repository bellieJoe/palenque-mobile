import { Injectable } from '@angular/core';
import axios from 'src/api/axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = localStorage.getItem('backendUrl') ? localStorage.getItem('backendUrl')  : 'http://localhost:8000';
  authUser : any = null;

  public login = async (email: string, password: string) => {
    await axios.get(`${this.apiUrl}/sanctum/csrf-cookie`);
    const res = await axios.post(`${this.apiUrl}/api/login`, { email, password });
    localStorage.setItem('user', JSON.stringify(res.data));
    this.authUser = res.data;
    return res.data;
  }

  public checkAuth = async () => {
    const auth = localStorage.getItem('user') ? true : false;
    return auth;
  }

  public logout = async () => {
    await axios.post(`${this.apiUrl}/api/auth/logout`);
    this.authUser = null;
    localStorage.removeItem('user');
  }

  public getAuth = async () => {
    
  }

  public isAuth = async () => {
    const res = await axios.get(`${this.apiUrl}/api/auth/is-auth`);
    return res.data;
  }
}
