import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Partida } from "../../model/partida";

/**
 * Generated class for the PartidaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-partida',
  templateUrl: 'partida.html',
})
export class PartidaPage {

  partida: Partida;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.partida = navParams.get('partida');
    this.atualizarResultado();
    this.atualizarTotaisInvestidos();
  }

  atualizarResultado() {

  }

  atualizarTotaisInvestidos() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidaPage');
  }

}
