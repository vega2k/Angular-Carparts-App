import { Component, OnInit } from '@angular/core';
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';

@Component({
  selector: 'app-carparts',
  templateUrl: './carparts.component.html',
  styleUrls: ['./carparts.component.css']
})
export class CarpartsComponent implements OnInit {

  carParts: CarPart[];

  constructor() {
    console.log('CarpartsComponent constructor called..');
  }

  ngOnInit() {
    console.log('CarpartsComponent ngOnInit called..');
    this.carParts = CARPARTS;
  }

  totalCarParts() {
    return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
  }

  upQuantity(carPart) {
    if(carPart.quantity < carPart.inStock) carPart.quantity++;
  }

  downQuantity(carPart) {
    if(carPart.quantity != 0) carPart.quantity--;
  }

  keyupQuantity(carPart, event) {
    console.log('value :' + event.target.value);
    if(event.target.value <= carPart.inStock)
      carPart.quantity = event.target.value;
  }
}
