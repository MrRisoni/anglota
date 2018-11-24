import {Component} from '@angular/core';

import {TicketMdl} from './models/TicketMdl';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'anglota';



    tkt1 = new TicketMdl('ADT', 'Y', 56);
    tkt2 = new TicketMdl('CNN', 'Y', 45);
    tkt3 = new TicketMdl('INF', 'Y', 15);



    ticketPrices: TicketMdl[] = [this.tkt1, this.tkt2, this.tkt3];

}
