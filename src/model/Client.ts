import Person from "./Person";

export default class Client extends Person {
    private documentNumber: string;

    constructor(name: string, phoneNumber: string, documentNumber: string) {
        super(name, phoneNumber);
        this.documentNumber = documentNumber;
    }

    public getDocumentNumber(): string {
        return this.documentNumber;
    }

    public setDocumentNumber(documentNumber: string): void {
        this.documentNumber = documentNumber;
    }
}
