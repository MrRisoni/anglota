export class PassengerMdl {
    id: number;
    humanId: number;
    active: boolean;
    ageGroup: string;
    cabinClass: string;
    name: string;
    surname: string;
    gender: string;
    dob: string;
    passport: {
        issueCountry: string;
        nationality: string;
        expiresAt: string;
        passNo: string;
    };


    constructor(id, human) {
        this.ageGroup = 'ADT';
        this.cabinClass = 'Y';
        this.id = id;
        this.active = true;
        this.humanId = human;
    }
}
