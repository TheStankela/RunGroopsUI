import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Club } from '../models/club';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  baseURL = environment.apiURL;
  constructor(private httpClient: HttpClient, private authService: AuthService){

   }
   getClubs(page: number){
    return this.httpClient.get<Club[]>(this.baseURL + '/club?page=' + page);
   }
   getClubByName(clubName: string){
    return this.httpClient.get<Club>(this.baseURL + '/club/name=' + clubName);
   }
   getClubById(id: number){
    return this.httpClient.get<Club>(this.baseURL + '/club/' + id);
   }
   createClub(file: any){
    return this.httpClient.post<any>(this.baseURL + '/club',file, this.authService.getHttpOptions());
   }
}
