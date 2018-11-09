export class TicketMdl {
    ageGroup: string;
    cabinClass: string;
    netEuro: number;
    net: number;


    constructor(age, cabin, net) {
        this.ageGroup = age;
        this.cabinClass = cabin;
        this.net = net;
        this.netEuro = net;
    }
}
