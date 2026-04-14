"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor() {
        this.name = "";
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    fazBarulho() {
        console.log("Animal generico fazendo barulho");
    }
}
exports.default = Animal;
