import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';
import {TicketMdl} from '../models/TicketMdl';

import { OtaService } from '../ota.service';
import {MealMdl} from '../models/MealMdl';


@Component({
    selector: 'app-price-box',
    templateUrl: './price-box.component.html',
    styleUrls: ['./price-box.component.css']
})
export class PriceBoxComponent implements OnInit {

    @Input()
    passengerArray: PassengerMdl[];

    @Input()
    ticketPrices: TicketMdl[];

    paxGroups: any;



    blueRibbonPrice: number;
    blueRibbonBought: number[];


    mealBought: any[];

    constructor(private otaSrvc: OtaService) {

    }



    ngOnInit() {
        this.otaSrvc.blueRibbonPrice.subscribe(prc => this.blueRibbonPrice = prc);
        this.otaSrvc.blueRibbonBought.subscribe(prcPaxes => this.blueRibbonBought = prcPaxes);

        this.otaSrvc.mealBought.subscribe(mealArr => this.mealBought = mealArr);
    }


    getPaxGroups() {
        this.paxGroups = [{age: 'INF', cabin: 'Y', count : 0}];
        ['ADT', 'CNN'].forEach( (age) => {
           ['Y', 'W', 'C', 'F'].forEach( (cl) => {
               this.paxGroups.push({age: age, cabin: cl, count: 0});
           }) ;
        });


/*
        this.passengerArray.forEach( (px) => {
            if (px.active === true) {
                paxGroups.forEach( (pg) => {
                    if ((pg.age === px.ageGroup) && (px.cabinClass === pg.cabin)) {
                        pg.count++;
                    }
                });
            }
        });
*/
        return this.paxGroups;
       // return Array.of(paxGroups.filter(px => px.count > 0));
    }

    get BRBLength(): number {
        return  this.blueRibbonBought.length;
    }


    get MealLength(): number {
        return this.mealBought.length;
    }


    calTotalMealsPrice() {
        let sum = 0;
        this.mealBought.forEach( (mlObj) => {
            sum += mlObj.meal.price;
            console.log('adding to sum ' + mlObj);
            console.log(JSON.stringify(mlObj));
            console.log(JSON.stringify(mlObj.meal));

        });

        return sum;
    }

    get totalMealsPrice() {
        return this.calTotalMealsPrice();
    }

    get totalPrice() {

        console.log('pricebix **********');
        let totalPrice = 0;
        this.passengerArray.forEach( (px) => {
            if (px.active === true) {
                this.ticketPrices.forEach( (tkt) => {
                    if ((tkt.ageGroup === px.ageGroup) && (tkt.cabinClass === px.cabinClass)) {
                        totalPrice += tkt.net;
                    }
                });
            }
        });

        console.log('length brb pricebox ' + this.blueRibbonBought.length);
    //    console.log(this.boughtBlueRibbon);
       totalPrice += this.blueRibbonBought.length * this.blueRibbonPrice;
       totalPrice += this.calTotalMealsPrice();
        return  totalPrice;
    }
}
