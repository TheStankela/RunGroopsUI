import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CreateAddress } from 'src/app/models/createAddress';
import { CreateClub } from 'src/app/models/createClub';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent {

  @Input()
  club = new CreateClub();
  
  baseUrl = environment.apiURL;
  constructor(private httpClient: HttpClient){
    this.club.address = new CreateAddress();
  }
  handleCreate(){
    this.httpClient.post<any>(this.baseUrl + '/Club', this.club).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
