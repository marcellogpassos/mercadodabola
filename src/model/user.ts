export class User {

    static SEXOS = {
        FEMININO: "F",
        MASCULINO: "M"
    }

    nome: string;
    sobrenome: string;
    email: string;
    sexo: string;
    dataNascimento: Date;

    token: string;

    constructor(nome: string, sobrenome: string, email: string, sexo: string, dataNascimento: Date, token: string = null) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.token = token;
    }

}