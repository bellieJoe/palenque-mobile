import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import axios from 'src/api/axios';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);

  const apiUrl =
    localStorage.getItem('backendUrl') ??
    'http://localhost:8000';

  try {
    const response = await axios.get(`${apiUrl}/api/auth/is-auth`, {
      withCredentials: true,
    });

    // EXPECTING: { authenticated: true } or similar
    if (response.data) {
      return true;
    }

    // Not authenticated
    localStorage.removeItem('user');
    router.navigate(['/login']);
    return false;
  } catch (error) {
    // API unreachable or unauthorized
    localStorage.removeItem('user');
    router.navigate(['/login']);
    return false;
  }
};
