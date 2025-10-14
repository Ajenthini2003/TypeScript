import { Vehicle } from"./Vehicle";

export class Bike extends Vehicle{
    private speedOfBike:number = 100;

    constructor(speed:number, speedOfBike:number){
        super(speed);
        this.getSpeedOfBike=this.getSpeedOfBike;

    }
    public getSpeedOfTheBike(): void {
        console.log("speed of the bike is:"+this.speedOfBike);
        
    }
}