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
        let rawVals = this.mealsBoughtSource.getValue();

        const mealData = this.mealsArraySource.getValue();
        const ml = mealData.filter(ml => ml.ssr == mealId);
        
        if (mealId == '') {

            let newVals = rawVals.filter(mlObj => mlObj.px != paxId);

            this.mealsBoughtSource.next(newVals);
        }
        else {


            // check if paxId has already bought a meal
            let alreadyHasMeal = false;
            for (let x = 0; x < rawVals.length; x++) {
                if (rawVals[x].px == paxId) {
                    alreadyHasMeal = true;
                    rawVals[x].meal = ml[0];
                }
            }

            if (alreadyHasMeal === false) {
                rawVals.push({px: paxId, meal: ml[0]});
            }


            this.mealsBoughtSource.next(rawVals);
        }
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
