import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  login(loginInfo: any) : any{
    return this.httpClient.post<any>(this.baseURL + '/account/login', loginInfo, {withCredentials: true})
  }
  register(loginInfo: any) : any{
    return this.httpClient.post<any>(this.baseURL + '/account/register', loginInfo, {withCredentials: true})
  }
  logout() : any{
    return this.httpClient.post<any>(this.baseURL + '/account/logout', {withCredentials: true})
  }
}