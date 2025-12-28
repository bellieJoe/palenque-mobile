import { Component } from '@angular/core';
import { AuthService } from './services/auth-service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Stall Rent Collections', url: '/collections/stall-rents', icon: 'cash' },
    { title: 'Ambulant Collections', url: '/collections/ambulant-stalls', icon: 'cash' },
    { title: 'Delivery Fee Collections', url: '/collections/delivery-fees', icon: 'cash' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    // { title: 'Logout', url: '/folder/inbox', icon: 'log-out' },
  ];
  constructor(
    private authService : AuthService,
    private toastController : ToastController,
    private router : Router
  ) {}

  async logout() {
    try {
      await this.authService.logout();
      this.toastController.create({message: 'Logout successful', duration: 2000, color: 'success'}).then(toast => toast.present());
      this.router.navigate(['login']);
    } catch (error) {
      this.toastController.create({message: 'Error logging out', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }
}
