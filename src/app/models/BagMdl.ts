export class BagMdl {
    ssr: string;
    price: number;
    weight: number;

    constructor(ssr, price, kgs) {
        this.ssr = ssr;
        this.price = price;
        this.weight = kgs;
    }
}
