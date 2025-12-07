import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(!localStorage.getItem('user')) {
    window.location.href = '/login';
    return false;
  }
  return true;
};
