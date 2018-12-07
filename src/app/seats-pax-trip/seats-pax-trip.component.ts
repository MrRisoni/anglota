import {Component, Input, OnInit} from '@angular/core';
import {PassengerMdl} from '../models/PassengerMdl';
import { OtaService } from '../ota.service';
import {SegmentMdl} from '../models/SegmentMdl';

@Component({
    selector: 'app-seats-pax-trip',
    templateUrl: './seats-pax-trip.component.html',
    styleUrls: ['./seats-pax-trip.component.css']
})
export class SeatsPaxTripComponent implements OnInit {

    @Input()
    pax: PassengerMdl;

    segmentsArray: SegmentMdl[];

    constructor(private otaSrvc: OtaService) {

    }

    ngOnInit() {
        this.otaSrvc.segmentsArray.subscribe(data => this.segmentsArray = data);

    }

}
