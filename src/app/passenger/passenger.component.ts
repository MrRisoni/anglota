import {Component, Input, OnInit} from '@angular/core';

import { PassengerMdl } from '../models/PassengerMdl';
import {OtaService} from '../ota.service';
import {CabinMdl} from '../models/CabinMdl';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {


    idName = '#passengerCollapse';


    @Input()
    pax: PassengerMdl;


    cabins: CabinMdl[];


    constructor(private otaSrvc: OtaService) {
    }


    ngOnInit() {
        this.otaSrvc.cabins.subscribe(data => this.cabins = data);
    }


    changeAge(event, paxId) {
        console.log('change age for ' + event.target.value);
        this.otaSrvc.changeAge(event.target.value, paxId);
    }


    changeCabinClass(event, paxId) {
        this.otaSrvc.changeCabinClass(event.target.value, paxId);
    }


}
