import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceBoxComponent } from './price-box/price-box.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PassportComponent } from './passport/passport.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceBoxComponent,
    PassengerComponent,
    PassportComponent,
    PassengerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
