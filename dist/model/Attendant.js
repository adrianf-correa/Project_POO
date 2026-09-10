"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Attendant extends Person_1.default {
    constructor(name, phoneNumber, employeeCode) {
        super(name, phoneNumber);
        this.employeeCode = employeeCode;
    }
    getEmployeeCode() {
        return this.employeeCode;
    }
    setEmployeeCode(employeeCode) {
        this.employeeCode = employeeCode;
    }
}
exports.default = Attendant;
