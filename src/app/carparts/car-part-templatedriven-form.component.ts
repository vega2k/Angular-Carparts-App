import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {CarPart} from './car-part';
import {CarpartsDataService} from './carparts-data.service';

@Component({
  selector: 'app-car-part-templatedriven-form',
  templateUrl: './car-part-templatedriven-form.component.html',
})
export class CarPartTemplatedrivenFormComponent {

  constructor(private carpartDataSvc: CarpartsDataService,
              private location: Location) { }

  onSubmit(form) {
    const formData = form.value as CarPart;
    // console.log(formData);
    this.carpartDataSvc.addCarPart(formData).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
