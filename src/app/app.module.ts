import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {SharedModule} from './shared/shared.module';
import {CarpartsModule} from './carparts/carparts.module';
import {RacesModule} from './car-race/races.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CarpartsModule,
    RacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
