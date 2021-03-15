import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) { }

  async onSendEmail(): Promise<void>{
    try {
      this.authSvc.sendVerificationEmail();
    } catch (error) {
      
    }
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
