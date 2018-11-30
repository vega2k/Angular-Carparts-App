import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {RacesComponent} from './car-race/races.component';
import {CarPartTemplatedrivenFormComponent} from './carparts/car-part-templatedriven-form.component';
import {CarPartReactiveFormComponent} from './carparts/car-part-reactive-form.component';

const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'carpart', component:CarpartsComponent},
  {path:'carpartTemplateForm', component:CarPartTemplatedrivenFormComponent},
  {path:'carpartReactiveForm', component:CarPartReactiveFormComponent},
  {path:'carrace', component:RacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
