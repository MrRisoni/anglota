import { Component, OnInit } from '@angular/core';


import { OtaService } from '../ota.service';
import {PassengerMdl} from '../models/PassengerMdl';


@Component({
  selector: 'app-preseating',
  templateUrl: './preseating.component.html',
  styleUrls: ['./preseating.component.css']
})
export class PreseatingComponent implements OnInit {

    passengerArray: PassengerMdl[];

    constructor(private otaSrvc: OtaService) {

    }

    ngOnInit() {
        this.otaSrvc.passengerArray.subscribe(paxArr => this.passengerArray = paxArr);

    }

}
