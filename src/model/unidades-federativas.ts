export class UnidadesFederativas {

    static UFS: any[] = [
        { nome: "Acre", sigla: "AC", codigoIbge: "12" },
        { nome: "Alagoas", sigla: "AL", codigoIbge: "27" },
        { nome: "Amapá", sigla: "AP", codigoIbge: "16" },
        { nome: "Amazonas", sigla: "AM", codigoIbge: "13" },
        { nome: "Bahia", sigla: "BA", codigoIbge: "29" },
        { nome: "Ceará", sigla: "CE", codigoIbge: "23" },
        { nome: "Distrito Federal", sigla: "DF", codigoIbge: "53" },
        { nome: "Espírito Santo", sigla: "ES", codigoIbge: "32" },
        { nome: "Goiás", sigla: "GO", codigoIbge: "52" },
        { nome: "Maranhão", sigla: "MA", codigoIbge: "21" },
        { nome: "Mato Grosso", sigla: "MT", codigoIbge: "51" },
        { nome: "Mato Grosso do Sul", sigla: "MS", codigoIbge: "50" },
        { nome: "Minas Gerais", sigla: "MG", codigoIbge: "31" },
        { nome: "Pará", sigla: "PA", codigoIbge: "15" },
        { nome: "Paraíba", sigla: "PB", codigoIbge: "25" },
        { nome: "Paraná", sigla: "PR", codigoIbge: "41" },
        { nome: "Pernambuco", sigla: "PE", codigoIbge: "26" },
        { nome: "Piauí", sigla: "PI", codigoIbge: "22" },
        { nome: "Rio de Janeiro", sigla: "RJ", codigoIbge: "33" },
        { nome: "Rio Grande do Norte", sigla: "RN", codigoIbge: "24" },
        { nome: "Rio Grande do Sul", sigla: "RS", codigoIbge: "43" },
        { nome: "Rondônia", sigla: "RO", codigoIbge: "11" },
        { nome: "Roraima", sigla: "RR", codigoIbge: "14" },
        { nome: "Santa Catarina", sigla: "SC", codigoIbge: "42" },
        { nome: "São Paulo", sigla: "SP", codigoIbge: "35" },
        { nome: "Sergipe", sigla: "SE", codigoIbge: "28" },
        { nome: "Tocantins", sigla: "TO", codigoIbge: "17" }
    ];

    static getUfPorSigla(sigla) {
        UnidadesFederativas.UFS.forEach(element => {
            if (element.sigla === sigla)
                return element;
        });
        return null;
    }

    static getUfPorCodigoIbge(codigoIbge) {
        UnidadesFederativas.UFS.forEach(element => {
            if (element.codigoIbge === codigoIbge)
                return element;
        });
        return null;
    }

}