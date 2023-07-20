import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/models/club';
import { Race } from 'src/app/models/race';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userClubs: Club[] = [];
  userRaces: Race[] = [];

  jwtHelper = new JwtHelperService;
  constructor(private clubService: ClubService,
              private raceService: RaceService, 
              private toastrService: ToastrService, 
              private authService: AuthService, 
              private router: Router){
              }
  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      this.router.navigate(['auth/login'])
    }
    this.getClubs();
    this.getRaces();
  }

  getClubs(){
    this.clubService.getUserClubs(this.authService.getUserId()).subscribe({
      next: (res: any) => {
        this.userClubs = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getRaces(){
    this.raceService.getUserRaces(this.authService.getUserId()).subscribe({
      next: (res: any) => {
        this.userRaces = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleDeleteClub(clubId: number, clubName: string){
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
  handleDeleteRace(raceId: number, raceName: string){
    if(confirm('Are you sure that you want to delete club ' + raceName)){
      this.raceService.deleteRace(raceId).subscribe({
        next: (res) => {
          this.toastrService.success('Club has been successfully deleted!');
          this.getRaces();
        },
        error: (err) => console.log(err)
      });
    }
  }
}
