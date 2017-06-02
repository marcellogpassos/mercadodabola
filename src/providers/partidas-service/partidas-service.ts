import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { Env } from "../../environment/env";

import { Partida } from "../../model/partida";
import { Rodada } from "../../model/rodada";

import { AuthServiceProvider } from "../auth-service/auth-service";

/*
  Generated class for the PartidasServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PartidasServiceProvider {

  constructor(public http: Http, private auth: AuthServiceProvider) {
    // console.log('Hello PartidasServiceProvider Provider');
  }

  getTotaisInvestidosPorPartida(partida: Partida) {
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathGetTotaisInvestidosPorPartida;
    url = url.replace(":id", String(partida.id));

    return this.http.get(url, { params: this.auth.getTokenParam() })
      .map(response => response.json())
      .map(responseBody => this.criarTotaisInvesditos(responseBody))
      .catch(response => Observable.throw(response));
  }

  listarPartidasPorRodada(rodada: Rodada) {
    let url = Env.VARIABLES.urlBackend + Env.VARIABLES.pathListarPartidasPorRodada;
    url = url.replace(":id", String(rodada.id));

    return this.http.get(url, { params: this.auth.getTokenParam() })
      .flatMap(response => Observable.from(response.json()))
      .map(item => {
        let partida = this.criarPartida(item);
        partida.rodada = rodada;
        return partida;
      })
      .toArray()
      .catch(response => Observable.throw(response));
  }

  criarPartida(response): Partida {
    let resultado = this.mapearResultado(response.resultado_id);
    return new Partida(response.id, response.time_casa_id, response.time_fora_id, new Date(response.data_hora),
      response.local, resultado, response.rodada_id, response.placar_casa, response.placar_fora);
  }

  criarTotaisInvesditos(response) {
    let totaisInvestidos = { timeMandante: 0, empate: 0, timeVisitante: 0 };
    response.forEach(element => {
      if (element.resultado_id === Partida.RESULTADOS.MANDANTE.id)
        totaisInvestidos.timeMandante = +element.total;
      if (element.resultado_id === Partida.RESULTADOS.EMPATE.id)
        totaisInvestidos.empate = +element.total;
      if (element.resultado_id === Partida.RESULTADOS.VISITANTE.id)
        totaisInvestidos.timeVisitante = +element.total;
    });
    return totaisInvestidos;
  }

  mapearResultado(response) {
    switch (response) {
      case Partida.RESULTADOS.MANDANTE.id:
        return Partida.RESULTADOS.MANDANTE;
      case Partida.RESULTADOS.VISITANTE.id:
        return Partida.RESULTADOS.VISITANTE;
      case Partida.RESULTADOS.EMPATE.id:
        return Partida.RESULTADOS.EMPATE;
      case Partida.RESULTADOS.INDETERMINADO.id:
        return Partida.RESULTADOS.INDETERMINADO;
      default:
        return null;
    }
  }

}
