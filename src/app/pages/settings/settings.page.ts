import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage implements OnInit {

  backendUrlForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController
  ) {
    // Initialize form with FormBuilder
    this.backendUrlForm = this.fb.group({
      url: [
        '', 
        [Validators.required, Validators.pattern('https?://.+')]
      ]
    });
  }

  ngOnInit() {
    // Optionally, prefill the form with existing value from localStorage
    const savedUrl = localStorage.getItem('backendUrl');
    if (savedUrl) {
      this.backendUrlForm.patchValue({ url: savedUrl });
    }
  }

  async saveBackendUrl() {
    if (this.backendUrlForm.invalid) return;

    try {
      localStorage.setItem('backendUrl', this.backendUrlForm.value.url);
      const toast = await this.toastController.create({
        message: 'Backend URL saved',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error saving backend URL',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
