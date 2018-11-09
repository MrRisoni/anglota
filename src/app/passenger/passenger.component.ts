import {Component, Input, OnInit} from '@angular/core';

import { PassengerMdl } from '../models/PassengerMdl';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {


    @Input()
    pax: PassengerMdl;

    constructor() { }

    ngOnInit() {
    }

}
