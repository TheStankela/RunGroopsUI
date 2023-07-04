import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Club } from '../models/club';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  baseURL = environment.apiURL;
  constructor(private httpClient: HttpClient){

   }
   getClubs(page: number){
    return this.httpClient.get<Club[]>(this.baseURL + '/club?page=' + page);
   }
   getClubByName(clubName: string){
    return this.httpClient.get<Club>(this.baseURL + '/club/name=' + clubName);
   }
  
}
