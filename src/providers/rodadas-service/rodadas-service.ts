import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { Env } from "../../environment/env";

import { Rodada } from "../../model/rodada";

import { AuthServiceProvider } from "../auth-service/auth-service";

/*
  Generated class for the RodadasServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RodadasServiceProvider {

  constructor(public http: Http, private auth: AuthServiceProvider) {
    // console.log('Hello RodadasServiceProvider Provider');
  }

  getRodadaAtual() {
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathGetRodadaAtual;
    return this.http.get(url, { params: this.auth.getTokenParam() })
      .map(response => response.json())
      .map(responseBody => this.criarRodada(responseBody))
      .catch(response => Observable.throw(response));
  }

  criarRodada(response): Rodada {
    return new Rodada(response.id, response.nome, response.ano, response.rodada_anterior_id, response.rodada_seguinte_id);
  }

}
