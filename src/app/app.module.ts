import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceBoxComponent } from './price-box/price-box.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PassportComponent } from './passport/passport.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { PreseatingComponent } from './preseating/preseating.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BagsComponent } from './bags/bags.component';
import { MealsComponent } from './meals/meals.component';
import { FlexibleComponent } from './flexible/flexible.component';
import { BlueribbonComponent } from './blueribbon/blueribbon.component';
import {OtaService} from './ota.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PriceBoxComponent,
    PassengerComponent,
    PassportComponent,
    PassengerListComponent,
    ContactComponent,
    PaymentComponent,
    PreseatingComponent,
    InsuranceComponent,
    BagsComponent,
    MealsComponent,
    FlexibleComponent,
    BlueribbonComponent
  ],
  imports: [
    BrowserModule,
      NgbModule
  ],
  providers: [OtaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
