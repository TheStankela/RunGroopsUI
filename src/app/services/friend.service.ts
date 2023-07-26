import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  baseURL = environment.apiURL;
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getFriends(userId: string){
  return this.httpClient.get<User[]>(this.baseURL + '/user/' + userId + '/friends', this.authService.getHttpOptions());
  }
  getSentFriendRequests(){
    return this.httpClient.get<any>(this.baseURL + '/user/requests/sent?userId=' + this.authService.currentUser.id, this.authService.getHttpOptions());
  }
  getRecievedFriendRequests(){
    return this.httpClient.get<any>(this.baseURL + '/user/requests/recieved?userId=' + this.authService.currentUser.id, this.authService.getHttpOptions());
  }
  getPendingFriendRequests(){
    return this.httpClient.get<any>(this.baseURL + '/user/requests/pending?userId=' + this.authService.currentUser.id, this.authService.getHttpOptions());
  }
  acceptFriendRequest(userId: string, fromUserId: string){
    return this.httpClient.post<any>(this.baseURL + '/user/requests/' + userId + '/accept?fromUserId=' + fromUserId, {} , this.authService.getHttpOptions());
  }
  sendFriendRequest(userId: string){
    return this.httpClient.post<any>(this.baseURL + '/user/' + userId + '/add?currentUserId='+ this.authService.currentUser.id, {} ,this.authService.getHttpOptions());
  }
}