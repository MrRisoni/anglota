export class BagMdl {
    ssr: string;
    price: number;
    weight: number;
    classes: string[];

    constructor(ssr, price, kgs, clsArray = ['Y']) {
        this.ssr = ssr;
        this.price = price;
        this.weight = kgs;
        this.classes = clsArray;
    }
}
