import Client from "./Client";


export default class IndividualClient extends Client {
    private cpf: string;
    
    constructor (name: string, phoneNumber: string, cpf: string){
        super(name, phoneNumber);
        this.cpf = cpf;
    }

    public getIdentifier(): string {
        return this.cpf;
    }
}