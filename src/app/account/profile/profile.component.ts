import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { Club } from '../../models/club';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userClubs: Club[] = [];
  jwtHelper = new JwtHelperService;
  constructor(private clubService: ClubService, private toastrService: ToastrService, private authService: AuthService, private router: Router){
  }
  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      this.router.navigate(['auth/login'])
    }
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
