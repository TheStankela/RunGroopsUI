import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAddress } from 'src/app/models/createAddress';
import { CreateClub } from 'src/app/models/createClub';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent implements OnInit{

  @Input()
  club = new CreateClub();
  
  baseUrl = environment.apiURL;

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router){
    this.club.address = new CreateAddress();
  }

  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      alert("Login to create new club.");
      this.router.navigate(['auth/login']);
    }
  }

  handleCreate(){
    this.httpClient.post<any>(this.baseUrl + '/Club', this.club, {withCredentials: true}).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
