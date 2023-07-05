import { CreateAddress } from "./createAddress";

export class CreateClub{
     name!: string;
     description!: string;
     address: CreateAddress = new CreateAddress();
     clubCategory!: number;
}