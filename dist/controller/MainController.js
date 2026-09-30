"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../database/Database"));
const CorporateClient_1 = __importDefault(require("../model/CorporateClient"));
const IndividualClient_1 = __importDefault(require("../model/IndividualClient"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.database = new Database_1.default();
        new MainScreen_1.default(this);
    }
    registerIndividualClient(name, phoneNumber, cpf) {
        const client = new IndividualClient_1.default(name, phoneNumber, cpf);
        this.database.clients.push(client);
    }
    registerCorporateClient(name, phoneNumber, cnpj, corporateName) {
        const client = new CorporateClient_1.default(name, phoneNumber, cnpj, corporateName);
        this.database.clients.push(client);
    }
    getClientIdentifiers() {
        let identifiers = [];
        for (let i = 0; i < this.database.clients.length; i++) {
            let client = this.database.clients[i];
            identifiers.push(client.getIdentifier());
        }
        return identifiers;
    }
    getClientDescriptions() {
        let descriptions = [];
        for (let i = 0; i < this.database.clients.length; i++) {
            let client = this.database.clients[i];
            descriptions.push(client.getDescription());
        }
        return descriptions;
    }
}
exports.default = MainController;
