"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Attendant extends Person_1.default {
    constructor(name, phoneNumber, employeeID) {
        super(name, phoneNumber);
        this.employeeID = employeeID;
    }
    getEmployeeID() {
        return this.employeeID;
    }
    setEmployeeID(employeeID) {
        this.employeeID = employeeID;
    }
    getIdentifier() {
        return this.employeeID;
    }
}
exports.default = Attendant;
