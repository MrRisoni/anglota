import {Component, Input, OnInit} from '@angular/core';

import { PassengerMdl } from '../models/PassengerMdl';
import {OtaService} from '../ota.service';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {


    idName = '#passengerCollapse';


    @Input()
    pax: PassengerMdl;




    constructor(private otaSrvc: OtaService) {
    }


    ngOnInit(){

    }


    changeAge(event, paxId)
    {
        console.log('change age for ' + event.target.value);
        this.otaSrvc.changeAge(event.target.value, paxId);
    }


}
