import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { Env } from "../../environment/env";

import { Time } from "../../model/time";
import { UnidadesFederativas } from "../../model/unidades-federativas";

import { AuthServiceProvider } from "../auth-service/auth-service";

/*
  Generated class for the TimesServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TimesServiceProvider {

  static TIMES: Time[];

  constructor(public http: Http, private auth: AuthServiceProvider) {
    // console.log('Hello TimesServiceProvider Provider');
  }

  getTime(id: number) {
    return this.listarTimes()
      .flatMap((times: Time[]) => Observable.from(times))
      .first((time: Time) => time.id === id);
  }

  listarTimes(hard: boolean = false) {
    if (!hard && TimesServiceProvider.TIMES)
      return Observable.of(TimesServiceProvider.TIMES);
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathListarTimes;
    return this.http.get(url, { params: this.auth.getTokenParam() })
      .flatMap(response => Observable.from(response.json()))
      .map(item => this.criarTime(item))
      .toArray()
      .catch(response => Observable.throw(response));
  }

  private criarTime(response): Time {
    let uf: any = UnidadesFederativas.getUfPorSigla(response.uf);
    return new Time(response.id, response.nome, uf, response.escudo, response.cor_a, response.cor_b, response.cor_c,
      response.mnemonico, response.torcedor);
  }

}
