import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  nameProduct = "";
  addnewform: FormGroup;

  constructor(private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore) {
    
  }

  ngOnInit() {
  }

  doAddnew() {
    console.log(this.nameProduct);
    let productobj = {
      pt: this.nameProduct,
     // pp: this.addnewform.get('description').value
    }
    console.log(productobj.pt);
    /*try{
      await this.fbstore.collection("products").add(productobj).then(data => {
        console.log(data);
        this.ngroute.navigate(['home']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }*/
  }
}
