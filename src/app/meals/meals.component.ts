import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';
import {  MealMdl  } from '../models/MealMdl';

import { OtaService } from '../ota.service';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

    @Input()
    pax: PassengerMdl;

    mealsArray: MealMdl[];



    constructor(private otaSrvc: OtaService) {

    }


    ngOnInit() {
        this.otaSrvc.mealsArray.subscribe(mlarr => this.mealsArray = mlarr);

    }


    changeMeal(event, id) {

        this.otaSrvc.buyMeal(event.target.value, id);


    }

}
