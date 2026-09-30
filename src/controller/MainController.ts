import Database from "../database/Database";
import CorporateClient from "../model/CorporateClient";
import IndividualClient from "../model/IndividualClient";
import MainScreen from "../view/MainScreen";

export default class MainController {
    public database: Database = new Database();

    constructor() {
        new MainScreen(this);
    }

    public registerIndividualClient(name: string, phoneNumber: string, cpf: string): void {
        let client = new IndividualClient(name, phoneNumber, cpf);
        this.database.clients.push(client);
    }

    public registerCorporateClient(name: string, phoneNumber: string, cnpj: string, corporateName: string): void {
        let client = new CorporateClient(name, phoneNumber, cnpj, corporateName);
        this.database.clients.push(client);
    }

    public getClientIdentifiers(): string[]{
        let identifiers: string[] = [];

        for (let i: number = 0; i < this.database.clients.length; i++){
            let client = this.database.clients[i];
            identifiers.push(client.getIdentifier());
        }
        return identifiers;
    }

    public getClientDescriptions(): string[]{
        let descriptions: string[] = [];

        for(let i: number = 0; i< this.database.clients.length; i++){
            let client = this.database.clients[i];
            descriptions.push(client.getDescription());
        }
        return descriptions;
    }
}
