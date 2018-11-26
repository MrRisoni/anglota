import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-single-seat',
    templateUrl: './single-seat.component.html',
    styleUrls: ['./single-seat.component.css']
})
export class SingleSeatComponent implements OnInit {


    @Input()
    rowId: number;

    @Input()
    col: number;

    constructor() {
    }

    ngOnInit() {
    }

}
