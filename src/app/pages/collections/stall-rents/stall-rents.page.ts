import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IonModal, ToastController } from '@ionic/angular';
import { MonthlyRentService } from 'src/app/services/monthly-rent-service';
import { StallOccupantService } from 'src/app/services/stall-occupant-service';

@Component({
  selector: 'app-stall-rents',
  templateUrl: './stall-rents.page.html',
  styleUrls: ['./stall-rents.page.scss'], 
  standalone: false
})
export class StallRentsPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  dateFilter : any = null;
  updateRentForm : FormGroup;
  errors : any = [];

  constructor(
    public monthlyRentService : MonthlyRentService,
    private toastController: ToastController,
    public stallOccupantsService : StallOccupantService,
    private fb : FormBuilder
  ) {
    this.updateRentForm = this.fb.group({
      stall_occupant: ['', [Validators.required]],
      monthly_rent: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  async filterUnpaidRents() {
    await this.monthlyRentService.getUnpaidRents(this.dateFilter);
    console.log(this.updateRentForm.value.stall_occupant);
    this.monthlyRentService.unpaidRents = this.monthlyRentService.unpaidRents.filter((rent : any) => rent.stall_contract?.stall_occupant?.id == this.updateRentForm.value.stall_occupant);
  }

  async filter() {
    try {
      await this.monthlyRentService.getMonthlyRents(this.dateFilter); 
      await this.monthlyRentService.getUnpaidRents(this.dateFilter);
    } catch (error) {
      this.toastController.create({message: 'Error fetching monthly rents', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  async init() { 
    try {
      await this.monthlyRentService.getMonthlyRents(this.dateFilter); 
      await this.monthlyRentService.getUnpaidRents(this.dateFilter);
      await this.stallOccupantsService.getStalOccupants();
      
    } catch (error) {
      this.toastController.create({message: 'Error fetching monthly rents', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  async updateRent() {
    try {
      await this.monthlyRentService.updateMonthlyRent(this.updateRentForm.value.monthly_rent, this.updateRentForm.value);
      this.toastController.create({message: 'Monthly rent updated', duration: 2000, color: 'success'}).then(toast => toast.present());
      this.cancel();
    } catch (error) {
      this.toastController.create({message: 'Error updating monthly rent', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.updateRentForm.reset();
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  ngOnInit() {
    this.init();
  }

}
