import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

import {CarPart} from './car-part';
import {CarpartsDataService} from './carparts-data.service';

@Component({
  selector: 'app-car-part-templatedriven-form',
  templateUrl: './car-part-templatedriven-form.component.html',
})
export class CarPartTemplatedrivenFormComponent {

  constructor(private carpartsDataService: CarpartsDataService, private router: Router, private location: Location) { }

  onSubmit(form) {
    const formData = form.value as CarPart;
    // console.log(formData);
    this.carpartsDataService.addCarPart(formData)
      .subscribe((res) => console.log(res));

    this.router.navigate(['/carpart']);
  }

  goBack(): void {
    // this.location.back();
    //  this.router.navigate(['/carpart']);
  }
}
