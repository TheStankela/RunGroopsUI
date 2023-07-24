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
   getUserClubs(userId: number){
    return this.httpClient.get<Club[]>(this.baseURL + '/user/clubs?userId=' + userId, this.authService.getHttpOptions());
   }
   getClubsByName(clubName: string){
    return this.httpClient.get<Club[]>(this.baseURL + '/club/name=' + clubName);
   }
   getClubById(id: number){
    return this.httpClient.get<Club>(this.baseURL + '/club/' + id);
   }
   createClub(body: any){
    return this.httpClient.post<any>(this.baseURL + '/club',body, this.authService.getHttpOptions());
   }
   updateClub(body: any, id: number){
    return this.httpClient.put<any>(this.baseURL + '/club?clubId=' + id, body, this.authService.getHttpOptions());
   }
   deleteClub(clubId: number){
    return this.httpClient.delete<any>(this.baseURL + '/club?clubId=' + clubId, this.authService.getHttpOptions());
   }
}
