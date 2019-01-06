// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: 'kIk9L3q6wUwfhXgOuwlyg0UzKE8DNXGH',
    domain: 'raventus.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid profile'
   
  });

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {

    return this._accessToken;
  }

  get idToken(): string {

    return this._idToken;
  }

  public login(): void {

    this.auth0.authorize();
  }

  public logout(): void {

    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;

    localStorage.removeItem('isLoggedIn');

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {

    return new Date().getTime() < this._expiresAt;
  }

  private setSession(authResult): void {
    
    localStorage.setItem('isLoggedIn', 'true');

    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;

    this.getProfile((err, profile) => {
      this.userProfile = profile;
      console.log (this.userProfile);
    });
  }

  public handleAuthentication(): void {

    this.auth0.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);

      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  public renewSession(): void {

    this.auth0.checkSession({}, (err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);

      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }
  
  public getProfile(cb): void {

    if (!this._accessToken) {
      console.log('Access Token must exist to fetch profile');
      return;
    }

    const self = this;
    this.auth0.client.userInfo(this._accessToken, (err, profile) => {

      if (profile) {
        self.userProfile = profile;
      }

      cb(err, profile);
    });
  }

}