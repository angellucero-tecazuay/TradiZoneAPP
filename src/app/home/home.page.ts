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
  user = "Mi Cuenta"
  nombrePlatillo = 'Cuy';
  restaurante = 'El Alcatraz';
  precio = '$20.00'

  constructor(private toastservice: ToastService, private fbstore: AngularFirestore) {
    this.getCategories()
  }

  async getCategories(){
    try{
      await this.fbstore.collection("categories").snapshotChanges()
      .subscribe(data => {
        console.log(data);
        this.categorieslist = data.map(result => {
          //console.log(result)
          
          return {
            docid: result.payload.doc.id,
            category_name: result.payload.doc.data()["category_name"],
            category_image: result.payload.doc.data()["category_image"]
            
            
          }
        });
      });console.log();
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
    }
  }

}
