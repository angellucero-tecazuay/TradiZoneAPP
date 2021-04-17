import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorieslist = [];
  public foodlist = [];


  user = "Mi Cuenta"
  nombrePlatillo = 'Cuy';
  restaurante = 'El Alcatraz';
  precio = '$20.00'

  constructor(private toastservice: ToastService, private fbstore: AngularFirestore) {
    this.getCategories()
    this.getFood();
  }

  async getCategories(){
    try{
      await this.fbstore.collection("categories").snapshotChanges()
      .subscribe(data => {
        this.categorieslist = data.map(result => {
          return {
            docid: result.payload.doc.id,
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
            docid: result.payload.doc.id,
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
}
