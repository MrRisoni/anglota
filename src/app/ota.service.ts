import { Injectable,Output ,EventEmitter} from '@angular/core';

import { Observable, Subject, BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OtaService {

    private blueRibbonPriceSource = new BehaviorSubject( 5.5);
    blueRibbonPrice = this.blueRibbonPriceSource.asObservable();




    constructor() {
    }



    getBlueRibbonPrice() {
        return this.blueRibbonPriceSource.asObservable();
    }



    buyBRB(paxId) {
        console.log('service buy');

        this.boughtBlueRibbonSource.next([1, 0]);

    }

    removeBRB(paxId) {
        console.log('service removeBRB');

       // this._boughtBlueRibbon = this._boughtBlueRibbon.filter(pxid => pxid != paxId);
        this.boughtBlueRibbonSource.next([1]);
    }
}
