import { Exception } from "./exception";

export class RegisterException extends Exception {

    static TYPES = {
        USUARIO_JA_CADASTRADO: 0,
    };

    type: number;

    constructor(type: number = null) {
        switch (type) {
            case RegisterException.TYPES.USUARIO_JA_CADASTRADO:
                super("Usuário já cadastrado!");
                break;
            default:
                super("Falha ao tentar realizar o cadastro! Tente novamente mais tarde.");
                break;
        }
        this.type = type;
    }

    getType(): number {
        return this.type;
    }

}