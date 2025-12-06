import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Stall Rent Collection', url: '/collections/stall-rents', icon: 'cash' },
    { title: 'Ambulant Stalls Collection', url: '/collections/ambulant-stalls', icon: 'cash' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Logout', url: '/folder/inbox', icon: 'log-out' },
  ];
  constructor() {}
}
