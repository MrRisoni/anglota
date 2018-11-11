import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';

@Component({
  selector: 'app-blueribbon',
  templateUrl: './blueribbon.component.html',
  styleUrls: ['./blueribbon.component.css']
})
export class BlueribbonComponent implements OnInit {

    @Input()
    pax: PassengerMdl;

    @Input()
    blueRibbonPrice: number;

    @Input()
    boughtBlueRibbon: any[];

    constructor() { }

    ngOnInit() {
    }

    changeBRB(event, id) {
        console.log('BRB was clicked ' + id + ' ' + event.target.value);

        console.log(this.boughtBlueRibbon);
        if (event.target.value == 1) {
            this.boughtBlueRibbon.push(id);
        }
        else {
            console.log('filtering ');
            console.log(this.boughtBlueRibbon);
            this.boughtBlueRibbon = this.boughtBlueRibbon.filter(pxid => pxid != id);

            console.log('after filtering ');
            console.log(this.boughtBlueRibbon);
        }
    }

}
