import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Claims } from '../_models/claims';

const TOKEN_KEY = 'auth-token';

const dummyToken = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3N1ZWQgQXQiOiIyMDIzLTA4LTEzVDA3OjA2OjEwLjU2OFoiLCJyb2xlIjoiQWRtaW4iLCJleHBpcmF0aW9uIjoiMjAyMy0wOC0xM1QwNzowNjoxMC41NjhaIiwiaWQiOiIxIiwidXNlclJvbGUiOiJTVVBFUi1BRE1JTiIsImlzc3VlciI6Iklzc3VlciIsImVtYWlsIjoiZHVtbXlAZHVtbXkuY29tIiwidXNlcm5hbWUiOiJEdW1teSJ9.QHiLIX9Fa6xbY_DICs2v_0oWNcLfC-SlErqbw9Fk_8M';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper: JwtHelperService) { }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public getTokenExpirationDate(): Date | null {
    return this.jwtHelper.getTokenExpirationDate();
  }

  public isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired();
  }

  public decodeToken(): Claims {
    //return this.jwtHelper.decodeToken(this.getToken() ?? '').sub;
    return this.jwtHelper.decodeToken(this.getToken() ?? '');
  }
}
