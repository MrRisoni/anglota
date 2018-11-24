import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';

@Component({
    selector: 'app-bags',
    templateUrl: './bags.component.html',
    styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {


    @Input()
    pax: PassengerMdl;

    constructor() {
    }

    ngOnInit() {
    }

}
