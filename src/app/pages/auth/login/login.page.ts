import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;
  errors : any = {}
  
  constructor(
    private fb : FormBuilder,
    public authService : AuthService,
    private toastController : ToastController,
    private router : Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
   }

   async submitLogin() {
    console.log("test");
    try {
      await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
      this.toastController.create({message: 'Login successful', duration: 2000, color: 'success'}).then(toast => toast.present());
      this.router.navigate(['collections/stall-rents']);
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

  }

}
