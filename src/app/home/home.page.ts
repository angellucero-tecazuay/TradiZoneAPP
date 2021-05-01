import { Token } from './../shared/token';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.interface';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user$: Observable<User> = this.authSvc.afAuth.user;
  public statusTokenUser: string;
  public tokens : Array<Token>; 
  public categorieslist = [];
  public foodlist = [];

  public showOptions: boolean = false;

  constructor(private toastservice: ToastService, private fbstore: AngularFirestore, 
    private router:Router, private authSvc: AuthService) {
    this.getCategories()
    this.getFood();
    this.toastservice.showToast('Bienvenido', 2000);
  }

  async getCategories(){
    try{
      await this.fbstore.collection("categories").snapshotChanges()
      .subscribe(data => {
        this.categorieslist = data.map(result => {
          return {
            category_id: result.payload.doc.id,
            category_name: result.payload.doc.data()["category_name"],
            category_image: result.payload.doc.data()["category_image"]
          }
        });
      });
      
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
    }
  }

  async getFood(){
    try{
      await this.fbstore.collection("food").snapshotChanges()
      .subscribe(data => {
        this.foodlist = data.map(result => {
          return {
            food_id: result.payload.doc.id,
            food_name: result.payload.doc.data()["food_name"],
            food_image: result.payload.doc.data()["food_image"],
            food_restaurant: result.payload.doc.data()["food_restaurant"],
            food_description: result.payload.doc.data()["food_description"],
            food_cost: result.payload.doc.data()["food_cost"]
          }
        });
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
    }
  }

  goToCategory(){
    let id_categoryN : string = document.getElementById('id_category').innerHTML;
    this.toastservice.showToast(id_categoryN, 2000);
    //this.router.navigate(['category']);
  }

  showOptionsUser(){
    this.showOptions = !this.showOptions;
  }

  logOut(){
    this.authSvc.logout();
    this.router.navigate(['welcome']);
  }
}
