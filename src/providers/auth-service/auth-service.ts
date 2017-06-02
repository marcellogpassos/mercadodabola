import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { User } from "../../model/user";

import { LoginException } from "../../exceptions/login-exception";
import { RegisterException } from "../../exceptions/register-exception";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthServiceProvider {

  private currentUser: User;

  constructor(public http: Http) {
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  getTokenParam(params: URLSearchParams = null) {
    if (!params)
      params = new URLSearchParams();
    params.set('token', this.currentUser.token);
    return params;
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null)
      return Observable.throw(new LoginException(LoginException.TYPES.CREDENCIAIS_NAO_FORNECIDAS));

    if (credentials.email != "email" || credentials.password != "password")
      return Observable.throw(new LoginException(LoginException.TYPES.CREDENCIAIS_INCORRETAS));

    this.currentUser = this.mockUser();
    return Observable.of(this.currentUser);
  }

  public logout() {
    this.currentUser = null;
    return true;
  }

  private mockUser(): User {
    return new User("Marcello", "Galdino Passos", "marcellogpassos@gmail.com", User.SEXOS.MASCULINO, new Date(1990, 4, 4),
      "$2y$10$.NMTQkm9qW5wXyHW5dIK7.ZrEWDnASrwijlv5CYzN1wwYNinVO5Fa");
  }

  public register(data: any) {
    if (data.email === "marcellogpassos@gmail.com")
      return Observable.throw(new RegisterException(RegisterException.TYPES.USUARIO_JA_CADASTRADO));

    this.currentUser = this.mockUser();
    return Observable.of(this.currentUser);
  }

}
