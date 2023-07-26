import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: User = new User();

  baseURL = environment.apiURL;

  helper = new JwtHelperService();
  constructor(private httpClient: HttpClient, private router: Router) {
    this.decodeToken();
   }

  login(loginInfo: any) : any{
    return this.httpClient.post(this.baseURL + '/account/login', loginInfo).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
      })
    )
  }
  register(loginInfo: any) : any{
    return this.httpClient.post<any>(this.baseURL + '/account/register', loginInfo)
  }
  logout() : any{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }
  getHttpOptions() {
 const httpOptions = {
     headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }

  getUserId(){
    const token = localStorage.getItem('token');
    if(token){
      let decoded = this.helper.decodeToken(token)
      return decoded.nameid;
    }
  }
  decodeToken(){
    const token = localStorage.getItem('token');
    if(token){
      let decoded = this.helper.decodeToken(token);
      this.currentUser.id = decoded.nameid;
      this.currentUser.userName = decoded.given_name;
      this.currentUser.email = decoded.email;
    }
  }
}