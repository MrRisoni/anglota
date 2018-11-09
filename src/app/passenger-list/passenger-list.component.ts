import { Component, OnInit,Input } from '@angular/core';

import { PassengerMdl } from '../models/PassengerMdl';


@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {


    @Input()
    passengerArray: PassengerMdl[];

  constructor() { }

  ngOnInit() {
  }

}
