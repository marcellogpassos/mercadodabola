import { Exception } from "./exception";

export class LoginException extends Exception {

    static TYPES = {
        CREDENCIAIS_NAO_FORNECIDAS: 0,
        CREDENCIAIS_INCORRETAS: 1
    };

    type: number;

    constructor(type: number = null) {
        switch (type) {
            case LoginException.TYPES.CREDENCIAIS_NAO_FORNECIDAS:
                super("Credenciais não fornecidas!");
                break;
            case LoginException.TYPES.CREDENCIAIS_INCORRETAS:
                super("Credenciais incorretas!");
                break;
            default:
                super("Falha ao tentar realizar o login! Tente novamente mais tarde.");
                break;
        }
        this.type = type;
    }

    getType(): number {
        return this.type;
    }

}