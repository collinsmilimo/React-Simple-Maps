import faker from 'faker';

export class Company{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        log: number;
    }

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            log: parseFloat(faker.address.longitude())
        }
    }
}