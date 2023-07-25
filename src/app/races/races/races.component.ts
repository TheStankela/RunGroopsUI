import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit{

  races: Race[] = [];
  
  searchTerm: string = "";

  pageSize: number = 5;
  pageNumber: number = 0;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;
  searchedByName: boolean = false;

  constructor(private raceService: RaceService){

  }
  ngOnInit(): void {
    this.getRaces(this.pageNumber, this.pageSize);
  }

  getRaces(page: number, pageSize: number){
    if(page < 0){
      this.pageNumber = 0;
      return;
    }

    this.raceService.getRaces(page, pageSize).subscribe({
      next: (res: any) => {
        this.races = res.list;
        this.hasPreviousPage = res.hasPreviousPage;
        this.hasNextPage = res.hasNextPage;
        }
    })
  }

  searchByName(query: any){
    this.races = [];
    this.raceService.getRacesByName(query, this.pageNumber, this.pageSize).subscribe({
      next: (res: any) => {
        this.races = res.list;
        this.hasPreviousPage = res.hasPreviousPage;
        this.hasNextPage = res.hasNextPage;
        this.searchTerm = query;
        this.searchedByName = true;
      }
    })
  }

  nextPage(){
    if(!this.hasNextPage){
      return;
    }
    this.pageNumber++;

    if(this.searchedByName){
      this.searchByName(this.searchTerm)
    }
    else{
      this.getRaces(this.pageNumber, this.pageSize);
    }
  }
  prevPage(){
    if(!this.hasPreviousPage){
      return;
    }
    this.pageNumber--;
    if(this.searchedByName){
      this.searchByName(this.searchTerm)
    }
    else{
      this.getRaces(this.pageNumber, this.pageSize);
    }
  }
}
