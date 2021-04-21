import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private toastservice: ToastService) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    if(email.value == null || password.value == null){
      this.toastservice.showToast("Campos vacíos", 5000);
      console.log("Campos vacís");
    }else{
      try {
        const user = await this.authSvc.login(email.value, password.value);
        if(user){
          const isVerified = this.authSvc.isEmailVerified(user);
          this.redirectUser(isVerified);
        }
      } catch (error) {
        this.toastservice.showToast(error.message, 5000);
      }
    }

    
  }

  async onLoginGoogle(email, password){
    /*try {
      const user = await this.authSvc.loginGoogle();
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error ->', error);
    }*/
  }

  private redirectUser(isVerified: boolean){
    if(isVerified){
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
