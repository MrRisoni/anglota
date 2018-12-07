import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {PriceBoxComponent} from './price-box/price-box.component';
import {PassengerComponent} from './passenger/passenger.component';
import {PassportComponent} from './passport/passport.component';
import {PassengerListComponent} from './passenger-list/passenger-list.component';
import {ContactComponent} from './contact/contact.component';
import {PaymentComponent} from './payment/payment.component';
import {PreseatingComponent} from './preseating/preseating.component';
import {InsuranceComponent} from './insurance/insurance.component';
import {BagsComponent} from './bags/bags.component';
import {MealsComponent} from './meals/meals.component';
import {FlexibleComponent} from './flexible/flexible.component';
import {BlueribbonComponent} from './blueribbon/blueribbon.component';
import {OtaService} from './ota.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BagLegComponent} from './bag-leg/bag-leg.component';
import {BagOptionComponent} from './bag-option/bag-option.component';
import {SeatsRowComponent} from './seats-row/seats-row.component';
import {SeatsColumnComponent} from './seats-column/seats-column.component';
import {SingleSeatComponent} from './single-seat/single-seat.component';
import {FlightDetailsComponent} from './flight-details/flight-details.component';
import {FlightLegComponent} from './flight-leg/flight-leg.component';
import {FlightSegmentsComponent} from './flight-segments/flight-segments.component';
import {ManageBookingComponent} from './manage-booking/manage-booking.component';
import {ManagePassengersComponent} from './manage-passengers/manage-passengers.component';
import { MainAppComponent } from './main-app/main-app.component';
import { FlightAirportComponent } from './flight-airport/flight-airport.component';



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
        BlueribbonComponent,
        BagLegComponent,
        BagOptionComponent,
        SeatsRowComponent,
        SeatsColumnComponent,
        SingleSeatComponent,
        FlightDetailsComponent,
        FlightLegComponent,
        FlightSegmentsComponent,
        ManageBookingComponent,
        ManagePassengersComponent,
        MainAppComponent,
        FlightAirportComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule

    ],
    providers: [OtaService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
