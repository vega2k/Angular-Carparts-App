import { Component, OnInit } from '@angular/core';
import {CarPart} from './car-part';
import {CarpartsDataService} from './carparts-data.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-carparts',
  templateUrl: './carparts.component.html',
  styleUrls: ['./carparts.component.css']
})
export class CarpartsComponent implements OnInit {
  title = 'Ultra Racing';

  carParts: CarPart[];

  constructor(private carpartsDataService: CarpartsDataService) {
    console.log('CarpartsComponent constructor called..');
  }

  ngOnInit() {
    console.log('CarpartsComponent ngOnInit called..');
    //this.carParts = this.carpartsDataService.getCarParts();

    //Observable의 pipe, subscribe 메서드 사용
    /*
    this.carpartsDataService.getCarParts()
      .pipe(
        catchError( err => {
          console.log('Error 발생 ',err);
          return throwError(err);
        })
      )
      .subscribe(resData => this.carParts = resData['data'],
        err => { alert(err.statusText);
                      console.log('HTTP Error 발생 ',err);},
        () => console.log('HTTP Request Completed'));'
    */
    //Promise 객체의 then() 메서드 사용
    this.carpartsDataService.getCarPartsPromise()
      .then(resData => this.carParts = resData);
  }

  totalCarParts() {
    if ( Array.isArray(this.carParts)) {
      return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
    }
  }

  upQuantity(carPart) {
    if ( carPart.quantity < carPart.inStock) carPart.quantity++;
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
