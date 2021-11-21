import faker from "faker";

export class User{
    name: String;
    location:{
        lat: number;
        log: number;
    }

    constructor(){
        this.name = faker.name.firstName();
        this.location ={
            lat: parseFloat(faker.address.latitude()),
            log: parseFloat(faker.address.longitude())
        };
    }
}