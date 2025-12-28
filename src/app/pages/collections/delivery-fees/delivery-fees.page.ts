import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-fees',
  templateUrl: './delivery-fees.page.html',
  styleUrls: ['./delivery-fees.page.scss'],
  standalone: false
})
export class DeliveryFeesPage implements OnInit {

  dateFilter : any = null;
  errors : any = [];
  constructor() { }

  ngOnInit() {
  }

  async filter() {
    // try {
    //   await this.feeService.getFees(this.dateFilter); 
    //   await this.ambulantStallService.getAmbulantStalls();
    // } catch (error) {
    //   this.toastController.create({message: 'Error fetching monthly rents', duration: 2000, color: 'danger'}).then(toast => toast.present());
    // }
  }

}
