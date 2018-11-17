import { Injectable,Output ,EventEmitter} from '@angular/core';

import { Observable, Subject, BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OtaService {

    private blueRibbonPriceSource = new BehaviorSubject( 5.5);
    blueRibbonPrice = this.blueRibbonPriceSource.asObservable();


    private blueRibbonBoughtSource = new BehaviorSubject( []);
    blueRibbonBought = this.blueRibbonBoughtSource.asObservable();


    constructor() {
    }



    buyBRB(paxId) {
        console.log('service buy');
        console.log(this.blueRibbonBoughtSource.getValue());
        let rawVals = this.blueRibbonBoughtSource.getValue();
        rawVals.push(paxId);
        this.blueRibbonBoughtSource.next(rawVals);

    }

    removeBRB(paxId) {
        console.log('service removeBRB');
        console.log(this.blueRibbonBoughtSource.getValue());

        let rawVals = this.blueRibbonBoughtSource.getValue();
        this.blueRibbonBoughtSource.next(rawVals.filter(pxid => pxid != paxId));
    }
}
