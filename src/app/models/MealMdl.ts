export class MealMdl {
    ssr: string;
    price: number;
    title: string;

    constructor(ssr, title ) {
        this.ssr = ssr;
        this.title = title;
        this.price = 5.0;
    }
}
