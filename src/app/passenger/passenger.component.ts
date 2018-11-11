import {Component, Input, OnInit} from '@angular/core';

import { PassengerMdl } from '../models/PassengerMdl';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {


    idName = '#passengerCollapse';


    @Input()
    pax: PassengerMdl;

    @Input()
    blueRibbonPrice: number;

    @Input()
    boughtBlueRibbon: any[];


    constructor() {

    }

    ngOnInit() {
    }

}
