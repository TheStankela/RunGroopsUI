import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Race } from '../models/race';
import { environment } from 'src/environments/environment';
import { CreateRace } from '../models/createRace';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  baseUrl = environment.apiURL;
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getRaces(pageNumber: number, pageSize: number){
    return this.httpClient.get<Race[]>(this.baseUrl + '/Race?page=' + pageNumber + '&pageSize=' + pageSize);
  }
  getRaceById(raceId: number){
    return this.httpClient.get<Race>(this.baseUrl + '/Race/' + raceId);
  }
  getRacesByCity(cityId: number, pageNumber: number, pageSize: number){
    return this.httpClient.get<Race[]>(this.baseUrl + '/Race/City/' + cityId + '?page=' + pageNumber + '&pageSize=' + pageSize);
  }
  getUserRaces(userId: number){
    return this.httpClient.get<Race[]>(this.baseUrl + '/User/Races?userId=' + userId, this.authService.getHttpOptions());
   }
  deleteRace(raceId: number){
    return this.httpClient.delete<any>(this.baseUrl + '/Race?raceId=' + raceId, this.authService.getHttpOptions());
  }
  updateRace(body: any, id: number){
    return this.httpClient.put<any>(this.baseUrl + '/Race?raceId=' + id, body, this.authService.getHttpOptions());
   }
  getRacesByName(name: string, pageNumber: number, pageSize: number){
    return this.httpClient.get<Race[]>(this.baseUrl + '/Race/name=' + name + '?page=' + pageNumber + '&pageSize=' + pageSize);
  }
  createRace(formData: any){
    return this.httpClient.post<any>(this.baseUrl + '/Race', formData, this.authService.getHttpOptions());
  }
}
