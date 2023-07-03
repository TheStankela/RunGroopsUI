import { Address } from "./address";

export class Club {
     id!: number;
     name!: string;
     description!: string;
     imageURL!: string;
     address!: Address;
     clubCategory!: string;
}