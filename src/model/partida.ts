import { Time } from "./time";
import { Rodada } from "./rodada";

export class Partida {

    static RESULTADOS = {
        MANDANTE: { id: 1, descricao: "TIME MANDANTE" },
        VISITANTE: { id: 2, descricao: "TIME VISITANTE" },
        EMPATE: { id: 3, descricao: "EMPATE" },
        INDETERMINADO: { id: 4, descricao: "INDETERMINADO" }
    };

    id: number;
    idTimeMandante: number;
    idTimeVisitante: number;
    dataHora: Date;
    local: string;
    resultado: any;
    idRodada: number;
    placarTimeMandante: number;
    placarTimeVisitante: number;

    timeMandante: Time;
    timeVisitante: Time;

    rodada: Rodada;

    totaisInvestidos: any;

    constructor(id: number, idTimeMandante: number, idTimeVisitante: number, dataHora: Date, local: string,
        resultado: any, idRodada: number, placarTimeMandante: number, placarTimeVisitante: number) {
        this.id = id;
        this.idTimeMandante = idTimeMandante;
        this.idTimeVisitante = idTimeVisitante;
        this.dataHora = dataHora;
        this.local = local;
        this.resultado = resultado;
        this.idRodada = idRodada;
        this.placarTimeMandante = placarTimeMandante;
        this.placarTimeVisitante = placarTimeVisitante;
    }

}