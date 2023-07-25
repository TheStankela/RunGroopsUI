import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  getUsers(pageNumber: number, pageSize: number){
    return this.httpClient.get<User[]>(this.baseUrl + '/user?page=' + pageNumber + '&pageSize=' + pageSize);
  }
  getUserById(userId: string){
    return this.httpClient.get<User>(this.baseUrl + '/user/' + userId);
  }
  getUsersByName(userName: string, pageNumber: number, pageSize: number){
    return this.httpClient.get<User[]>(this.baseUrl + '/user/userName=' + userName + '?page=' + pageNumber + '&pageSize=' + pageSize);
  }
  getUserClubs(userId: string){
    return this.httpClient.get<Club[]>(this.baseUrl + '/user/clubs?userId=' + userId);
  }
}
