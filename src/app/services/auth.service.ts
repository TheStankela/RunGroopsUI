import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.apiURL;
  helper = new JwtHelperService();
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(loginInfo: any) : any{
    return this.httpClient.post(this.baseURL + '/account/login', loginInfo).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
      })
    )
  }
  register(loginInfo: any) : any{
    return this.httpClient.post<any>(this.baseURL + '/account/register', loginInfo, {withCredentials: true})
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
}