import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  showInfo = true
  showFood = false
  showRecipe = false

  constructor() { }

  ngOnInit() {
  }

  showData(num: number){
    if(num == 1){
      this.showInfo = true
      this.showFood = false
      this.showRecipe = false
    }
    if(num == 2){
      this.showInfo = false
      this.showFood = true
      this.showRecipe = false
    }
    if(num == 3){
      this.showInfo = false
      this.showFood = false
      this.showRecipe = true
    }
  }

}
