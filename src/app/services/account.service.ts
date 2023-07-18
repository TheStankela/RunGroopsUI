import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getUserAccountById(userId: string){
      return this.httpClient.get<User>(this.baseUrl + '/user/' + userId);
    }

  updateAccount(formData: any, userId: string, headerOptions: any){
    return this.httpClient.put<any>(this.baseUrl + '/account/' + userId, formData)
  }
  }
