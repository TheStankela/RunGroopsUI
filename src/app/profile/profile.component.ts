import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';
import { Club } from '../models/club';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userClubs: Club[] = [];

  constructor(private clubService: ClubService, private toastrService: ToastrService){
  }
  ngOnInit(): void {
    this.getClubs();
  }
  displayedColumns: string[] = ['id', 'name', 'clubCategory', 'action'];

  getClubs(){
    this.clubService.getUserClubs().subscribe({
      next: (res: any) => {
        this.userClubs = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleDelete(clubId: number, clubName: string){
    if(confirm('Are you sure that you want to delete club ' + clubName)){
      this.clubService.deleteClub(clubId).subscribe({
        next: (res) => {
          this.toastrService.success('Club has been successfully deleted!');
          this.getClubs();
        },
        error: (err) => console.log(err)
      });
    }
  }
}
