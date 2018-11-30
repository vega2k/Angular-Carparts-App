import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CarPart} from './car-part';
import {FormControl,  FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-car-part-reactive-form',
  templateUrl: './car-part-reactive-form.component.html',
})
export class CarPartReactiveFormComponent implements OnInit {

  carPartForm: FormGroup;

  constructor() {
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
    alert(this.carPartForm.controls['id'].value + ' ' + this.carPartForm.controls['name'].value);

  }

}
