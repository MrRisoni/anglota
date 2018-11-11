import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';
import {TicketMdl} from '../models/TicketMdl';

@Component({
    selector: 'app-price-box',
    templateUrl: './price-box.component.html',
    styleUrls: ['./price-box.component.css']
})
export class PriceBoxComponent implements OnInit {

    @Input()
    passengerArray: PassengerMdl[];

    @Input()
    ticketPrices: TicketMdl[];

    @Input()
    blueRibbonPrice: number;

    constructor() {
    }

    ngOnInit() {
    }


    get totalPrice() {
        let totalPrice = 0;
        this.passengerArray.forEach( (px) => {
            if (px.active === true) {
                this.ticketPrices.forEach( (tkt) => {
                    if ((tkt.ageGroup === px.ageGroup) && (tkt.cabinClass === px.cabinClass)) {
                        totalPrice += tkt.net;
                    }
                });
            }
        });
        return  totalPrice;
    }
}
