import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CarpartsComponent} from './carparts.component';
import {CarpartsDataService} from './carparts-data.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CarpartsComponent],
  exports: [CarpartsComponent],
  providers: [CarpartsDataService]
})
export class CarpartsModule {

}
