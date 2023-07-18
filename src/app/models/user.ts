import { Address } from "./address"

export class User{
    id!: string;
    pace!: number;
    mileage!: number;
    userName!: string;
    imageURL!: string;
    email!: string;
    address: Address = new Address();
    description!: string;
}