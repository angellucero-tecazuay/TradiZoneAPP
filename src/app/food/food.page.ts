import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  food_name = 'Cuy con papas';
  food_restaurant = 'El Alcatraz';
  food_desc = 'Plato gastronómico tradicional y representativo de la cuidad de Cuenca';
  food_cost = '23.00';
  constructor(private router: Router, private toastservice: ToastService) { }

  ngOnInit() {
  }

  call(){
    this.toastservice.showToast('Llamar al: 0987654321', 5000);
  }

  goFood(){
    this.router.navigate(['restaurant']);
  }
}
