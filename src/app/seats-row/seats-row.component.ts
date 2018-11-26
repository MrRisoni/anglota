import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-seats-row',
    templateUrl: './seats-row.component.html',
    styleUrls: ['./seats-row.component.css']
})
export class SeatsRowComponent implements OnInit {


    @Input()
    rowId: number;

    @Input()
    col: number;

    constructor() {
    }

    ngOnInit() {
    }

}
