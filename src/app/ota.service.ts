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


    private mealsBoughtSource = new BehaviorSubject( []);
    mealBought = this.mealsBoughtSource.asObservable();


    constructor() {
    }


    buyMeal(mealId, paxId)     {

        console.log('meal id ' + mealId);

        const mealData = this.mealsArraySource.getValue();
        const ml = mealData.filter(ml => ml.ssr == mealId);

        console.log(ml);


        let rawVals = this.mealsBoughtSource.getValue();
        rawVals.push({px: paxId, meal: ml[0]});
        this.mealsBoughtSource.next(rawVals);
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
