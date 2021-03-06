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

  getDeadlineDaRodada(rodada: Rodada) {
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathGetDeadlineDaRodada;
    url = url.replace(":id", String(rodada.id));
    return this.http.get(url, { params: this.auth.getTokenParam() })
      .map(response => response.json())
      .map(responseBody => new Date(responseBody.deadline.date))
      .catch(response => Observable.throw(response));
  }

  getRodadaGenerico(url) {
    return this.http.get(url, { params: this.auth.getTokenParam() })
      .map(response => response.json())
      .map(responseBody => this.criarRodada(responseBody))
      .catch(response => Observable.throw(response));
  }

  getRodada(idRodada: number) {
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathGetRodada;
    url = url.replace(":id", String(idRodada));
    return this.getRodadaGenerico(url);
  }

  getRodadaAtual() {
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathGetRodadaAtual;
    return this.getRodadaGenerico(url);
  }

  criarRodada(response): Rodada {
    return new Rodada(response.id, response.nome, response.ano, response.rodada_anterior_id, response.rodada_seguinte_id);
  }

}
