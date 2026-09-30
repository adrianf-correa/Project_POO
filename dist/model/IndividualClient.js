"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class IndividualClient extends Client_1.default {
    constructor(name, phoneNumber, cpf) {
        super(name, phoneNumber);
        this.cpf = cpf;
    }
    getIdentifier() {
        return this.cpf;
    }
    getDescription() {
        return super.getDescription() + " | cpf: " + this.cpf;
    }
}
exports.default = IndividualClient;
