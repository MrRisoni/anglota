import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';

import { OtaService } from '../ota.service';
import {BagMdl} from '../models/BagMdl';


@Component({
    selector: 'app-bag-leg',
    templateUrl: './bag-leg.component.html',
    styleUrls: ['./bag-leg.component.css']
})
export class BagLegComponent implements OnInit {

    @Input()
    pax: PassengerMdl;


    bagSSRs: BagMdl[];


    constructor(private otaSrvc: OtaService) {
    }


    ngOnInit() {
        this.otaSrvc.bagSSRArray.subscribe(data => this.bagSSRs = data);

    }




}
