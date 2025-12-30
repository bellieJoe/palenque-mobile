import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { DeliveryService } from 'src/app/services/delivery-service';
import { ItemFeeSettingService } from 'src/app/services/item-fee-setting-service';
import { ItemService } from 'src/app/services/item-service';
import { SupplierService } from 'src/app/services/supplier-service';
import { UnitService } from 'src/app/services/unit-service';

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
  units : any = [];
  itemFeeSetting : any = {};
  _items : any = [];
  errors : any = [];
  @ViewChild("addDeliveryModal") addDeliveryModal!: IonModal;
  addDeliveryForm : FormGroup;

  constructor(
    private deliveryService : DeliveryService,
    private supplierService : SupplierService,
    private itemService : ItemService,
    private toastController : ToastController,
    private unitService : UnitService,
    private itemFeeSettingService : ItemFeeSettingService ,
    private fb : FormBuilder
  ) { 
    this.addDeliveryForm = this.fb.group({
      delivery_date: [moment().format('YYYY-MM-DD'), [Validators.required]],
      supplier : ['', [Validators.required]],
      items: this.fb.array([]),
    });
    const items = this.addDeliveryForm.get('items') as FormArray;
    if (items.length === 0) {
      this.addItem(); // adds a default item row
    }
  }

  ngOnInit() {
    this.init();
  }

  createDeliveryItem(): FormGroup {
    return this.fb.group({
      item: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      total_sales: [0, [Validators.required, Validators.min(1)]],
      tax: [0, [Validators.required, Validators.min(1)]],
      ticket_no: ['', Validators.required],
      ticket_status: ['PAID', Validators.required],
    });
  }

  get items(): FormArray {
    return this.addDeliveryForm.get('items') as FormArray;
  }

  async init () {
    try {
      this.deliveries = await this.deliveryService.getDeliveries({
        date: this.dateFilter
      });
      this.suppliers = await this.supplierService.getSuppliers();
      this._items = await this.itemService.getItems();
      this.units = await this.unitService.getUnits();
      this.itemFeeSetting = await this.itemFeeSettingService.getActiveItemFeeSetting();
    } catch (error) {
      this.toastController.create({message: 'Error fetching deliveries', duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  addItem() {
    this.items.push(this.createDeliveryItem());
  }

  onTotalSalesChange(index: number) {
    const items = this.addDeliveryForm.get('items') as FormArray;
    const total_sales = items.at(index).get('total_sales')?.value;
    const tax = total_sales * (this.itemFeeSetting.percentage / 100);
    console.log(tax);
    items.at(index).get('tax')?.setValue(tax);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onItemChange(index: number) {
    const items = this.addDeliveryForm.get('items') as FormArray;
    const item_id = items.at(index).get('item')?.value;
    const item = this._items.find((item: any) => item.id == item_id);
    items.at(index).get('unit')?.setValue(item.default_unit_id);
  }

  async filter() {
    this.init();
  }

  getAvailableItems(index: number) {
    // Get all selected item IDs except for the current row
    const selectedIds = this.addDeliveryForm.value.items
      .map((i: any) => i.item)
      .filter((id: any, i: number) => i !== index && id != null);

    // Filter the items list to exclude selected IDs
    return this._items.filter((item : any) => !selectedIds.includes(item.id));
  }


  async storeDelivery(){
    console.log(this.addDeliveryForm.value);
    try {
      await this.deliveryService.storeDelivery(this.addDeliveryForm.value);
      this.toastController.create({message: 'Delivery stored', duration: 2000, color: 'success'}).then(toast => toast.present());
      this.init();
      this.cancelAddDelivery();
    } catch (error : any) {
      if(error.response.status == 422) {
        this.errors = error.response.data.errors;
        this.toastController.create({message: error.response.data.message, duration: 2000, color: 'danger'}).then(toast => toast.present());
        return;
      }
      this.toastController.create({message: error.response.data.error, duration: 2000, color: 'danger'}).then(toast => toast.present());
    }
  }

  async cancelAddDelivery(){
    this.addDeliveryModal.dismiss();
    this.addDeliveryForm.reset();
  }

}
