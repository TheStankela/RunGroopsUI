import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Observable } from 'rxjs';
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
    if(page < 0){return;}
      
    this.clubService.getClubs(page).subscribe({
      next: 
        res => {
          this.clubs = res;
        },
        
      error: 
        err => {
          console.log(err)
        }
    })
  }

  searchByName(name: any){
    this.clubs = [];
    return this.clubService.getClubByName(name.name).subscribe({
      next: 
        res => {
          this.clubs.push(res);
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
