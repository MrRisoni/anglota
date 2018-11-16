import { Injectable,Output ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtaService {

    private _blueRibbonPrice = 5.5;

    private _boughtBlueRibbon: number[];


    constructor() {
        this._boughtBlueRibbon = [];
    }


    blueRibbonPrice(): number {
        return this._blueRibbonPrice;
    }

    boughtBlueRibbon(): number[] {
        return this._boughtBlueRibbon;
    }


    @Output() emitBRB: EventEmitter<any> = new EventEmitter();

    buyBRB(paxId) {
        console.log('service buy');
        this._boughtBlueRibbon.push(paxId);
        this.emitBRB.emit(this._boughtBlueRibbon);
    }

    removeBRB(paxId) {
        console.log('service removeBRB');

        this._boughtBlueRibbon = this._boughtBlueRibbon.filter(pxid => pxid != paxId);
        this.emitBRB.emit(this._boughtBlueRibbon);
    }
}
