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

  pageNumber: number = 0;
  constructor(private raceService: RaceService){

  }
  ngOnInit(): void {
    this.getRaces(this.pageNumber);
  }

  getRaces(page: number){

    if(page < 0){
      this.pageNumber = 0;
      return;
    }


    this.raceService.getRaces(page).subscribe({
      next: (res) => {
        this.races = res;
        if(!this.races.length){
          this.pageNumber = 0;
          this.getRaces(this.pageNumber);
        }}
    })
  }

  searchByName(formData: any){
    this.races = [];
    this.raceService.getRacesByName(formData.raceName).subscribe({
      next: (res) => this.races = res,
      error: (err) => console.log(err)
    })
  }

  nextPage(){
    this.pageNumber++;
    this.getRaces(this.pageNumber);
  }
  prevPage(){
    this.pageNumber--;
    this.getRaces(this.pageNumber);
  }
}
