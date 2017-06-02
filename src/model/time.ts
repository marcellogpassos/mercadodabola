export class Time {

    id: number;
    nome: string;
    uf: any;
    escudo: string;
    corA: string;
    corB: string;
    corC: string;
    mnemonico: string;
    torcedor: string;

    constructor(id: number, nome: string, uf: any, escudo: string, corA: string, corB: string, corC: string,
        mnemonico: string, torcedor: string) {
        this.id = id;
        this.nome = nome;
        this.uf = uf;
        this.escudo = escudo;
        this.corA = corA;
        this.corB = corB;
        this.corC = corC ? corC : corA;
        this.mnemonico = mnemonico;
        this.torcedor = torcedor;
    }

}