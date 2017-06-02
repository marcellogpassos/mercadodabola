export class Exception {

    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

}