import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ToastController } from '@ionic/angular';
import { AmbulantStallService } from 'src/app/services/ambulant-stall-service';
import { FeeService } from 'src/app/services/fee-service';

@Component({
  selector: 'app-ambulant-stalls',
  templateUrl: './ambulant-stalls.page.html',
  styleUrls: ['./ambulant-stalls.page.scss'],
  standalone: false,
})
export class AmbulantStallsPage implements OnInit {
  dateFilter : any = null;
  @ViewChild("addCollectionModal") addCollectionModal!: IonModal;
  @ViewChild("updateCollectionModal") updateCollectionModal!: IonModal;
  addCollectionForm : FormGroup;
  updateCollectionForm : FormGroup;
  errors : any = [];

  constructor(
    public feeService : FeeService,
    private toastController: ToastController,
    private fb : FormBuilder,
    public ambulantStallService : AmbulantStallService
  ) { 
    this.addCollectionForm = this.fb.group({
      ambulant_stall: ['', [Validators.required]],
      amount: [0, [Validators.required]],
      status: ['', [Validators.required]],
      remarks: ['', []],
      receipt_no: ['', []],
      date_paid: ['', []],
    });
    this.updateCollectionForm = this.fb.group({
      id: ['', [Validators.required]],
      remarks: ['', []],
      receipt_no: ['', [Validators.required]],
      date_paid: ['', [Validators.required]],
    });
  }

  async init(){
    await this.feeService.getFees(this.dateFilter);
    await this.ambulantStallService.getAmbulantStalls();
  }

  async filter() {
    try {
      await this.feeService.getFees(this.dateFilter); 
      await this.ambulantStallService.getAmbulantStalls();
    } catch (error) {
      this.toastController.create({message: 'Error fetching monthly rents', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  async submitCollection(){
    try {
      await this.feeService.storeFee(this.addCollectionForm.value);
      this.toastController.create({message: 'Fee added', duration: 2000, color: 'success'}).then(toast => toast.present());
      this.init();
      this.cancel();
    } catch (error : any) {
      if(error?.response?.status == 422) {
        this.errors = error?.response?.data?.errors;
        this.toastController.create({message: error?.response?.data?.message, duration: 2000, color: 'danger'}).then(toast => toast.present());
        return;
      };
      this.toastController.create({message: error?.response?.data?.error, duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  cancel() {
    this.addCollectionModal.dismiss(null, 'cancel');
    this.updateCollectionModal.dismiss(null, 'cancel');
    this.updateCollectionForm.reset();
    this.addCollectionForm.reset();
  }

  showUpdateCollectionModal(collection : any) {
    this.updateCollectionForm.setValue({
      id: collection.id,
      remarks: collection.remarks,
      receipt_no: '',
      date_paid: ''
    });
    this.updateCollectionModal.present();
  }

  async submitUpdateCollection(){
    try {
      await this.feeService.updateFee(this.updateCollectionForm.value.id, this.updateCollectionForm.value);
      this.toastController.create({message: 'Fee updated', duration: 2000, color: 'success'}).then(toast => toast.present());
      this.init();
      this.cancel();
    } catch (error : any) {
      if(error?.response?.status == 422) {
        this.errors = error?.response?.data?.errors;
        this.toastController.create({message: error?.response?.data?.message, duration: 2000, color: 'danger'}).then(toast => toast.present());
        return;
      };
      this.toastController.create({message: error?.response?.data?.message, duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  ngOnInit() {
    this.init();
  }

}
