import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';

import { OtaService } from '../ota.service';


@Component({
    selector: 'app-bag-leg',
    templateUrl: './bag-leg.component.html',
    styleUrls: ['./bag-leg.component.css']
})
export class BagLegComponent implements OnInit {

    @Input()
    pax: PassengerMdl;

    constructor(private otaSrvc: OtaService) {
    }


    ngOnInit() {
    }


    onBuyBag(paxId) {
        console.log('buying bag ...');
        this.otaSrvc.buyBug(paxId);
    }

}
