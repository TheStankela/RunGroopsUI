import { Address } from "./address";

export class Race {
     id!: number;
     name!: string;
     description!: string;
     imageURL!: string;
     address!: Address;
     appUserId!: Address;
     raceCategory!: string;
}