"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Client extends Person_1.default {
    constructor(name, phoneNumber, documentNumber) {
        super(name, phoneNumber);
        this.documentNumber = documentNumber;
    }
    getDocumentNumber() {
        return this.documentNumber;
    }
    setDocumentNumber(documentNumber) {
        this.documentNumber = documentNumber;
    }
}
exports.default = Client;
