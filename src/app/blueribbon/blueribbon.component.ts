import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';

import { OtaService } from '../ota.service';


@Component({
  selector: 'app-blueribbon',
  templateUrl: './blueribbon.component.html',
  styleUrls: ['./blueribbon.component.css']
})
export class BlueribbonComponent implements OnInit {

    @Input()
    pax: PassengerMdl;


    blueRibbonPrice: number;



    constructor(private otaSrvc: OtaService) {

    }



    ngOnInit() {
        this.otaSrvc.blueRibbonPrice.subscribe(prc => this.blueRibbonPrice = prc);
    }


    changeBRB(event, id) {

        if (event.target.value == 1) {
            this.otaSrvc.buyBRB(id);
        }
        else {
            this.otaSrvc.removeBRB(id);

        }
    }

}
