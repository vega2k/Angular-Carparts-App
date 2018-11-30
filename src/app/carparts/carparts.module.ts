import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CarpartsComponent} from './carparts.component';
import {CarpartsDataService} from './carparts-data.service';
import {CarPartTemplatedrivenFormComponent} from './car-part-templatedriven-form.component';
import {CarPartReactiveFormComponent} from './car-part-reactive-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CarpartsComponent,
    CarPartTemplatedrivenFormComponent,
    CarPartReactiveFormComponent],
  exports: [CarpartsComponent,
    CarPartTemplatedrivenFormComponent,
    CarPartReactiveFormComponent],
  providers: [CarpartsDataService]
})
export class CarpartsModule {

}
