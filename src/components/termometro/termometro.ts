import { Component, Input } from '@angular/core';

import { Partida } from "../../model/partida";

import { PartidasServiceProvider } from "../../providers/partidas-service/partidas-service";

/**
 * Generated class for the TermometroComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'termometro',
  templateUrl: 'termometro.html'
})
export class TermometroComponent {

  @Input()
  partida: Partida;

  widths: any;

  constructor(private partidasServices: PartidasServiceProvider) {
  }

  ngOnInit() {
    this.partidasServices.getTotaisInvestidosPorPartida(this.partida)
      .subscribe(totais => {
        this.partida.totaisInvestidos = totais;
        this.initWidths();
      }, error =>
        console.log("Falha ao carregar os totais investidos da partida!"));
  }

  initWidths() {
    let totaisInvestidos = this.partida.totaisInvestidos;
    let valorTotal = totaisInvestidos.timeMandante + totaisInvestidos.empate + totaisInvestidos.timeVisitante
    if (!valorTotal)
      return;
    this.widths = { timeMandante: "0%", empate: "0%", timeVisitante: "100%" };
    let k = totaisInvestidos.timeMandante + totaisInvestidos.empate;
    if (!k)
      return;
    this.widths.empate = Math.round((k / valorTotal) * 100) + "%";
    this.widths.timeMandante = Math.round((totaisInvestidos.timeMandante / k) * 100) + "%";
    console.log(this.partida);
  }

}
