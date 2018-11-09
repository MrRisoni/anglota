import { Component } from '@angular/core';

import { PassengerMdl } from './models/PassengerMdl';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglota';

  pax1 = new PassengerMdl();
  pax2 = new PassengerMdl();

  passengerArray: PassengerMdl = [this.pax1, this.pax2];

}
