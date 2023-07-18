import { CreateAddress } from "./createAddress";

export class CreateRace{
     name!: string;
     description!: string;
     address: CreateAddress = new CreateAddress();
     raceCategory!: number;
}