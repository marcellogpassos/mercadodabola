export class Rodada {

    id: number;
    nome: string;
    ano: number;
    idRodadaAnterior: number;
    idRodadaSeguinte: number;

    rodadaAnterior: Rodada;
    rodadaSeguinte: Rodada;

    constructor(id: number, nome: string, ano: number, idRodadaAnterior: number, idRodadaSeguinte: number) {
        this.id = id;
        this.nome = nome;
        this.ano = ano;
        this.idRodadaAnterior = idRodadaAnterior;
        this.idRodadaSeguinte = idRodadaSeguinte;
    }

}