import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from "../../model/user";
import { Partida } from "../../model/partida";
import { Rodada } from "../../model/rodada";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { PartidasServiceProvider } from "../../providers/partidas-service/partidas-service";
import { RodadasServiceProvider } from "../../providers/rodadas-service/rodadas-service";
import { TimesServiceProvider } from "../../providers/times-service/times-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User;
  rodada: Rodada;
  partidas: Partida[];

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider,
    private partidasService: PartidasServiceProvider, private rodadasService: RodadasServiceProvider,
    private timesService: TimesServiceProvider) {
    this.user = auth.getCurrentUser();
  }

  ionViewDidLoad() {
    this.timesService.listarTimes()
      .subscribe(times =>
        TimesServiceProvider.TIMES = times,
      error =>
        console.log("Falha ao carregar a lista de times!"));
    this.rodadasService.getRodadaAtual()
      .subscribe(rodada =>
        this.initRodada(rodada),
      error =>
        console.log("Falha ao carregar a rodada atual!"));
  }

  initRodada(rodada: Rodada) {
    this.rodada = rodada;
    this.partidasService.listarPartidasPorRodada(this.rodada)
      .subscribe(partidas =>
        this.initPartidas(partidas),
      error =>
        console.log("Falha ao carregar a lista de partidas da rodada!"))
  }

  initPartidas(partidas: Partida[]) {
    this.partidas = partidas;
    this.partidas.forEach(partida => {
      this.timesService.getTime(partida.idTimeMandante)
        .subscribe(time => partida.timeMandante = time);
      this.timesService.getTime(partida.idTimeVisitante)
        .subscribe(time => partida.timeVisitante = time);
    });
  }

}
