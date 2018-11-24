import {Component, OnInit, Input} from '@angular/core';

import {PassengerMdl} from '../models/PassengerMdl';
import { OtaService } from '../ota.service';


@Component({
    selector: 'app-passenger-list',
    templateUrl: './passenger-list.component.html',
    styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {

    passengerArray: PassengerMdl[];

    constructor(private otaSrvc: OtaService) {

    }

    ngOnInit() {
        this.otaSrvc.passengerArray.subscribe(paxArr => this.passengerArray = paxArr);

    }


    onClickAddPassenger() {
        this.otaSrvc.appendPassenger();
    }
}
