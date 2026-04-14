"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Cao extends Animal_1.default {
    getRaca() {
        return this.raca;
    }
    setRaca(raca) {
        this.raca = raca;
    }
}
exports.default = Cao;
