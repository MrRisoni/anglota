import { Injectable} from '@angular/core';

import {  BehaviorSubject  } from 'rxjs';
import {  MealMdl  } from './models/MealMdl';


@Injectable({
  providedIn: 'root'
})
export class OtaService {

    private blueRibbonPriceSource = new BehaviorSubject( 5.5);
    blueRibbonPrice = this.blueRibbonPriceSource.asObservable();


    private blueRibbonBoughtSource = new BehaviorSubject( []);
    blueRibbonBought = this.blueRibbonBoughtSource.asObservable();

    vgml = new MealMdl('VGML', 'Vegeterian Meal');
    chml = new MealMdl('CHML', 'Child Meal');
    moml = new MealMdl('MOML', 'Muslim ');

    private mealsArraySource  = new BehaviorSubject( [this.vgml, this.chml, this.moml]);
    mealsArray = this.mealsArraySource.asObservable();



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
