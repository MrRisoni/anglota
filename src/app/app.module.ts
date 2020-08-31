import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceboxComponent } from './pricebox/pricebox.component';
import { SideBarElementComponent } from './side-bar-element/side-bar-element.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { LegComponent } from './leg/leg.component';
import { SegmentComponent } from './segment/segment.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { JaNejUpsaleComponent } from './ja-nej-upsale/ja-nej-upsale.component';
import { PassengerComponent } from './passenger/passenger.component';
import { NamesComponent } from './names/names.component';
import { PassportComponent } from './passport/passport.component';
import { BagsComponent } from './bags/bags.component';
import { MealsComponent } from './meals/meals.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BRBComponent } from './brb/brb.component';
import { FlexTicketComponent } from './flex-ticket/flex-ticket.component';
import { RefundDelayComponent } from './refund-delay/refund-delay.component';
import { WebCheckinComponent } from './web-checkin/web-checkin.component';
import { PreseatComponent } from './preseat/preseat.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceboxComponent,
    SideBarElementComponent,
    FlightDetailsComponent,
    LegComponent,
    SegmentComponent,
    PassengerListComponent,
    JaNejUpsaleComponent,
    PassengerComponent,
    NamesComponent,
    PassportComponent,
    BagsComponent,
    MealsComponent,
    InsuranceComponent,
    BRBComponent,
    FlexTicketComponent,
    RefundDelayComponent,
    WebCheckinComponent,
    PreseatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
