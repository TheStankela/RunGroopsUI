import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss'],
})
export class ClubsComponent implements OnInit{

  constructor(private clubService: ClubService){}
  clubs: Club[] = [];

  ngOnInit(): void {
    this.getClubs(this.pageNumber);
  }
  
  pageNumber: number = 0;

  getClubs(page: number){
    if(page < 0){
      this.pageNumber = 0;
      return;}
      
    this.clubService.getClubs(page).subscribe({
      next: 
        res => {
          this.clubs = res;
          if(!this.clubs.length){
            this.pageNumber = 0;
            this.getClubs(this.pageNumber);
          }
        }
    })
  }

  searchByName(name: any){
    this.clubs = [];
    return this.clubService.getClubsByName(name.name).subscribe({
      next: 
        res => {
          this.clubs = res;
      }
    })
  }

  nextPage(){
    this.pageNumber++;
    this.getClubs(this.pageNumber);
  }
  prevPage(){
    this.pageNumber--;
    this.getClubs(this.pageNumber);
  }
}
