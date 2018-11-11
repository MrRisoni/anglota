import {Component} from '@angular/core';

import {PassengerMdl} from './models/PassengerMdl';
import {TicketMdl} from './models/TicketMdl';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'anglota';

    pax1 = new PassengerMdl(0, 1);
    pax2 = new PassengerMdl(1, 2);

    tkt1 = new TicketMdl('ADT', 'Y', 56);
    tkt2 = new TicketMdl('CNN', 'Y', 45);
    tkt3 = new TicketMdl('INF', 'Y', 15);

    blueRibbonPrice = 3.5;

    passengerArray: PassengerMdl[] = [this.pax1, this.pax2];
    ticketPrices: TicketMdl[] = [this.tkt1, this.tkt2, this.tkt3];
}
