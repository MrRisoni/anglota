import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';

import { OtaService } from '../ota.service';
import {BagMdl} from '../models/BagMdl';

@Component({
    selector: 'app-bag-option',
    templateUrl: './bag-option.component.html',
    styleUrls: ['./bag-option.component.css']
})
export class BagOptionComponent implements OnInit {


    @Input()
    pax: PassengerMdl;

    @Input()
    bag: BagMdl;

    @Input()
    leg: number;

    constructor(private otaSrvc: OtaService) {
    }

    ngOnInit() {
    }


    onBuyBag() {
        console.log('---------------');
        console.log('Bag Option Compo');
        console.log('pax ' + this.pax.id);
        console.log('bag ' + this.bag.ssr);

        this.otaSrvc.buyBug(this.pax.id, this.bag.ssr, this.leg);
    }


    get BagsNum() {
        return this.pax.bagArray.departure.filter(ssr => ssr == this.bag.ssr).length;
    }

}
