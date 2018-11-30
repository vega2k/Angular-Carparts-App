import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CarPart} from './car-part';
import {FormControl,  FormGroup, Validators, FormBuilder} from '@angular/forms';
import {CarpartsDataService} from './carparts-data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-car-part-reactive-form',
  templateUrl: './car-part-reactive-form.component.html',
})
export class CarPartReactiveFormComponent implements OnInit {

  carPartForm: FormGroup;

  constructor(private carpartsDataService: CarpartsDataService, private router: Router, private location: Location) {

  }

  ngOnInit() {
    this.carPartForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.compose([Validators.required,
        Validators.min(500), Validators.max(5000)])),
      quantity: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[0-9]') ]))
    });

  }

  onSubmit() {
    const carPart: CarPart = new CarPart(
      this.carPartForm.controls['id'].value,
      this.carPartForm.controls['name'].value,
      this.carPartForm.controls['description'].value,
      this.carPartForm.controls['price'].value,
      this.carPartForm.controls['quantity'].value);

      this.carpartsDataService.addCarPart(carPart)
      .subscribe((resData) => console.log(resData));

      this.router.navigate(['/carpart']);
  }

  goBack(): void {
    this.location.back();
  }
}
