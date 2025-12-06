import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MonthlyRentService } from 'src/app/services/monthly-rent-service';

@Component({
  selector: 'app-stall-rents',
  templateUrl: './stall-rents.page.html',
  styleUrls: ['./stall-rents.page.scss'], 
  standalone: false
})
export class StallRentsPage implements OnInit {

  constructor(
    public monthlyRentService : MonthlyRentService,
    private toastController: ToastController
  ) {}

  async init() { 
    try {
      await this.monthlyRentService.getMonthlyRents(); 
    } catch (error) {
      this.toastController.create({message: 'Error fetching monthly rents', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }
  ngOnInit() {
    this.init();
  }

}
