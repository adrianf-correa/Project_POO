"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class CorporateClient extends Client_1.default {
    constructor(name, phoneNumber, cnpj, corporateName) {
        super(name, phoneNumber);
        this.cnpj = cnpj;
        this.corporateName = corporateName;
    }
    getIdentifier() {
        return this.cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getCorporateName() {
        return this.corporateName;
    }
    setCorporateName(corporateName) {
        this.corporateName = corporateName;
    }
    getDescription() {
        return super.getDescription() + " | cnpj: " + this.cnpj + " | " + "corporateName: " + this.corporateName;
    }
}
exports.default = CorporateClient;
