import {Component, OnInit, Input} from '@angular/core';

import {PassengerMdl} from '../models/PassengerMdl';


@Component({
    selector: 'app-passenger-list',
    templateUrl: './passenger-list.component.html',
    styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {


    @Input()
    passengerArray: PassengerMdl[];

    @Input()
    blueRibbonPrice: number;

    constructor() {
    }

    ngOnInit() {
    }


    onClickAddPassenger() {
        console.log('Adding passenger');
        const newId = this.passengerArray.length + 1;
        let newHumanId = 0;
        this.passengerArray.forEach((pax) => {
            if (pax.active === true) {
                newHumanId++;
            }
        });
        newHumanId++;
        const newPax = new PassengerMdl(newId, newHumanId);
        this.passengerArray.push(newPax);

    }
}
