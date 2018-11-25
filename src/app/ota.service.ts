import { Injectable} from '@angular/core';

import {  BehaviorSubject  } from 'rxjs';
import {  MealMdl  } from './models/MealMdl';
import {PassengerMdl} from './models/PassengerMdl';
import {TicketMdl} from './models/TicketMdl';
import {BagMdl} from './models/BagMdl';


@Injectable({
  providedIn: 'root'
})
export class OtaService {

    pax1 = new PassengerMdl(0, 1);
    pax2 = new PassengerMdl(1, 2);

    private passengerArraySource = new BehaviorSubject([this.pax1, this.pax2]);
    passengerArray = this.passengerArraySource.asObservable();


    bg1 = new BagMdl('XBAG', 15.00, '20');
    bg2 = new BagMdl('XLBAG', 25.00, '30');
    bg3 = new BagMdl('XXLBAG', 60.00, '45');

    private bagSSRArraySource = new BehaviorSubject([this.bg1, this.bg2, this.bg3]);
    bagSSRArray = this.bagSSRArraySource.asObservable();

    //
    private blueRibbonPriceSource = new BehaviorSubject( 5.5);
    blueRibbonPrice = this.blueRibbonPriceSource.asObservable();


    vgml = new MealMdl('VGML', 'Vegeterian Meal');
    chml = new MealMdl('CHML', 'Child Meal');
    moml = new MealMdl('MOML', 'Muslim ');

    private mealsArraySource  = new BehaviorSubject( [this.vgml, this.chml, this.moml]);
    mealsArray = this.mealsArraySource.asObservable();



    tkt1 = new TicketMdl('ADT', 'Y', 56);
    tkt2 = new TicketMdl('CNN', 'Y', 45);
    tkt3 = new TicketMdl('INF', 'Y', 15);

    private ticketPricesSource = new BehaviorSubject( [this.tkt1, this.tkt2 , this.tkt3]);
    ticketPrices = this.ticketPricesSource.asObservable();


    constructor() {
    }

    appendPassenger() {
        let rawVals = this.passengerArraySource.getValue();

        const newId = rawVals.length + 1;
        let newHumanId = 0;
        rawVals.forEach((pax) => {
            if (pax.active === true) {
                newHumanId++;
            }
        });
        newHumanId++;
        const newPax = new PassengerMdl(newId, newHumanId);
        rawVals.push(newPax);

        this.passengerArraySource.next(rawVals);
    }


    buyMeal(mealSSR, paxId)  {

        console.log('meal id ' + mealSSR);
        let rawPaxes = this.passengerArraySource.getValue();

        rawPaxes.forEach( (px) => {
            if (px.id == paxId) {
                px.meal = mealSSR;
            }
        });

        this.passengerArraySource.next(rawPaxes);


    }


    buyBug(paxId, ssr, legId) {
        console.log('service bug bag for pax ' + paxId + ' ssr ' + ssr);
        let rawPaxes = this.passengerArraySource.getValue();
        rawPaxes.forEach( (px) => {
            if (px.id == paxId) {
                if (legId == 0) {
                    px.bagArray.departure.push(ssr);
                }
                else {
                    px.bagArray.return.push(ssr);
                }
            }
        });

        this.passengerArraySource.next(rawPaxes);
    }


    removeBug(paxId){

    }


    buyBRB(paxId) {

        let rawPaxes = this.passengerArraySource.getValue();
        rawPaxes.forEach((px) => {
            if (px.id == paxId) {
                px.hasBlueRibbon = true;
            }
        });

        this.passengerArraySource.next(rawPaxes);

    }

    removeBRB(paxId) {
        let rawPaxes = this.passengerArraySource.getValue();
        rawPaxes.forEach((px) => {
            if (px.id == paxId) {
                px.hasBlueRibbon = false;
            }
        });

        this.passengerArraySource.next(rawPaxes);
    }
}
