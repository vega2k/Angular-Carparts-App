import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';

const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'carpart', component:CarpartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
