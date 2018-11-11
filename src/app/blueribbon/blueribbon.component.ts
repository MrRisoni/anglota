import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blueribbon',
  templateUrl: './blueribbon.component.html',
  styleUrls: ['./blueribbon.component.css']
})
export class BlueribbonComponent implements OnInit {

    @Input()
    blueRibbonPrice: number;

    constructor() { }

    ngOnInit() {
    }

}
