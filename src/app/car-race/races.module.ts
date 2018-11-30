import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RacesComponent} from './races.component';
import {RacesDataService} from './races-data.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RacesComponent],
  exports: [RacesComponent],
  providers: [RacesDataService]
})
export class RacesModule {

}
