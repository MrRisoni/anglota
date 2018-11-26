import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-seats-column',
    templateUrl: './seats-column.component.html',
    styleUrls: ['./seats-column.component.css']
})
export class SeatsColumnComponent implements OnInit {

    @Input()
    col: number;

    constructor() {
    }

    ngOnInit() {
    }

}
