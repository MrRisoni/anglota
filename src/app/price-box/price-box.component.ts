import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';
import {TicketMdl} from '../models/TicketMdl';

import {OtaService} from '../ota.service';
import {MealMdl} from '../models/MealMdl';
import {BagMdl} from '../models/BagMdl';


@Component({
    selector: 'app-price-box',
    templateUrl: './price-box.component.html',
    styleUrls: ['./price-box.component.css']
})
export class PriceBoxComponent implements OnInit {

    ticketPrices: TicketMdl[];

    paxGroups: any[];

    passengerArray: PassengerMdl[];

    bagSSRs: BagMdl[];

    blueRibbonPrice: number;

    constructor(private otaSrvc: OtaService) {

    }


    ngOnInit() {
        this.otaSrvc.passengerArray.subscribe(paxArr => this.passengerArray = paxArr);

        this.otaSrvc.ticketPrices.subscribe(tktPrc => this.ticketPrices = tktPrc);

        this.otaSrvc.blueRibbonPrice.subscribe(prc => this.blueRibbonPrice = prc);

        this.otaSrvc.bagSSRArray.subscribe(data => this.bagSSRs = data);

        this.otaSrvc.paxGroups.subscribe(data => this.paxGroups = data);
    }




    get BRBLength(): number {
        return this.calcBlueRibbonLength();
    }

    get bagPriceTotal(): number {
        return this.getTotalBagPrice();
    }


    getTotalBagPrice(): number {
        let bagCost = 0;
        let ssrList = [];

        this.passengerArray.forEach((px) => {
            px.bagArray.departure.forEach( (ssrCode) => {
               ssrList.push(ssrCode);
            });

            px.bagArray.return.forEach( (ssrCode) => {
                ssrList.push(ssrCode);
            });

        });

        console.log('ssrlist');
        console.log(ssrList);

        this.bagSSRs.forEach( (bgssr) => {
           ssrList.forEach( (ssrCode) => {
              if (bgssr.ssr === ssrCode) {
                  bagCost += bgssr.price;
              }
           });
        });

        return bagCost;
    }

    calcBlueRibbonLength(): number {
        return this.passengerArray.filter(px => px.hasBlueRibbon === true).length;
    }

    get BagsLength(): number {
        let numBags = 0;
        this.passengerArray.forEach((px) => {
            console.log('BagsLength()');
            console.log(px);
            numBags += px.bagArray.departure.length;
            numBags += px.bagArray.return.length;
        });
        return numBags;
    }

    get MealLength(): number {
       return this.passengerArray.filter(px => px.meal !== '').length;
    }


    calTotalMealsPrice() {
        return this.passengerArray.filter(px => px.meal !== '').length * 5.00;
    }

    get totalMealsPrice() {
        return this.calTotalMealsPrice();
    }

    get totalPrice() {

        console.log('pricebix **********');
        let totalPrice = 0;
        this.passengerArray.forEach((px) => {
            if (px.active === true) {
                this.ticketPrices.forEach((tkt) => {
                    if ((tkt.ageGroup === px.ageGroup) && (tkt.cabinClass === px.cabinClass)) {
                        totalPrice += tkt.net;
                    }
                });
            }
        });

        totalPrice += this.calcBlueRibbonLength() * this.blueRibbonPrice;
        totalPrice += this.getTotalBagPrice();

        totalPrice += this.calTotalMealsPrice();
        return totalPrice;
    }
}
