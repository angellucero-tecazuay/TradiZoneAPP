import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = "Mi Cuenta"
  nombrePlatillo = 'Cuy';
  restaurante = 'El Alcatraz';
  precio = '$20.00'
  constructor() { }

}
