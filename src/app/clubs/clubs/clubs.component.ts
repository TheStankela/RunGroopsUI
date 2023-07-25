import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss'],
})
export class ClubsComponent implements OnInit{
  clubs: Club[] = [];
  
  searchTerm: string = "";

  pageSize: number = 5;
  pageNumber: number = 0;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;
  searchedByName: boolean = false;

  constructor(private clubService: ClubService){

  }
  ngOnInit(): void {
    this.getClubs(this.pageNumber, this.pageSize);
  }

  getClubs(page: number, pageSize: number){
    if(page < 0){
      this.pageNumber = 0;
      return;
    }

    this.clubService.getClubs(page, pageSize).subscribe({
      next: (res: any) => {
        this.clubs = res.list;
        this.hasPreviousPage = res.hasPreviousPage;
        this.hasNextPage = res.hasNextPage;
        }
    })
  }

  searchByName(query: any){
    this.clubs = [];
    this.clubService.getClubsByName(query, this.pageNumber, this.pageSize).subscribe({
      next: (res: any) => {
        this.clubs = res.list;
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
      this.getClubs(this.pageNumber, this.pageSize);
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
      this.getClubs(this.pageNumber, this.pageSize);
    }
  }
}
