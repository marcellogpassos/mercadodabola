import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';

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

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider,
    private partidasService: PartidasServiceProvider, private rodadasService: RodadasServiceProvider,
    private timesService: TimesServiceProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.user = auth.getCurrentUser();
    this.timesService.listarTimes()
      .subscribe(times => TimesServiceProvider.TIMES = times, error => this.handleError(error, "Falha ao carregar a lista de times!"));
    let idRodada = navParams.get('idRodada');
    if (!idRodada)
      this.rodadasService.getRodadaAtual()
        .subscribe(rodada => this.initRodada(rodada), error => console.log("Falha ao carregar a rodada!"));
    else
      this.rodadasService.getRodada(idRodada)
        .subscribe(rodada => this.initRodada(rodada), error => this.handleError(error, "Falha ao carregar a rodada!"));
  }

  initRodada(rodada: Rodada) {
    this.rodada = rodada;
    this.showLoading("Carregando partidas...");
    this.partidasService.listarPartidasPorRodada(this.rodada)
      .subscribe(partidas =>
        this.initPartidas(partidas),
      error =>
        this.handleError(error, "Falha ao carregar a lista de partidas da rodada!"),
      () =>
        this.loading.dismiss());
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

  rodadaAnterior(event) {
    this.navCtrl.setRoot(HomePage, {
      idRodada: this.rodada.idRodadaAnterior
    });
  }

  rodadaAtual(event) {
    if (this.navParams.get('idRodada'))
      this.navCtrl.setRoot(HomePage, {
        idRodada: null
      });
  }

  rodadaSeguinte(event) {
    this.navCtrl.setRoot(HomePage, {
      idRodada: this.rodada.idRodadaSeguinte
    });
  }

  showLoading(loadingContent: string) {
    this.loading = this.loadingCtrl.create({
      content: loadingContent,
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  handleError(error, friendly: string = null) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: (friendly) ? friendly : 'Erro inesperado!',
      subTitle: error.getMessage(),
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
