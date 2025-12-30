import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { DeliveryService } from 'src/app/services/delivery-service';
import { SupplierService } from 'src/app/services/supplier-service';

@Component({
  selector: 'app-delivery-fees',
  templateUrl: './delivery-fees.page.html',
  styleUrls: ['./delivery-fees.page.scss'],
  standalone: false
})
export class DeliveryFeesPage implements OnInit {

  dateFilter : any = null;
  deliveries : any = [];
  suppliers : any = [];
  errors : any = [];
  @ViewChild("addDeliveryModal") addDeliveryModal!: IonModal;
  addDeliveryForm : FormGroup;

  constructor(
    private deliveryService : DeliveryService,
    private supplierService : SupplierService,
    private toastController : ToastController,
    private fb : FormBuilder
  ) { 
    this.addDeliveryForm = this.fb.group({
      delivery_date: [moment().format('YYYY-MM-DD'), [Validators.required]],
      supplier : ['', [Validators.required]],
      items: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.init();
  }

  createDeliveryItem(): FormGroup {
    return this.fb.group({
      item: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      total_sales: [0, [Validators.required, Validators.min(0)]],
      tax: [0, [Validators.required, Validators.min(0)]],
      ticket_no: ['', Validators.required],
      ticket_status: ['', Validators.required],
    });
  }

  get items(): FormArray {
    return this.addDeliveryForm.get('items') as FormArray;
  }

  async init (){
    try {
      this.deliveries = await this.deliveryService.getDeliveries({
        date: this.dateFilter
      });
      this.suppliers = await this.supplierService.getSuppliers();
    } catch (error) {
      this.toastController.create({message: 'Error fetching deliveries', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  addItem() {
    this.items.push(this.createDeliveryItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  async filter() {
    this.init();
  }

  async storeDelivery(){

  }

  async cancelAddDelivery(){
    this.addDeliveryModal.dismiss();
    this.addDeliveryForm.reset();
  }

}
