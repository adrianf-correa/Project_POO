"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../Database");
const Car_1 = require("../model/Car");
const FirstScreen_1 = require("../view/FirstScreen");
class Service {
    constructor() {
        this.db = new Database_1.default();
        this.firstScr = new FirstScreen_1.default(this);
    }
    getFirstScreen() {
        return this.firstScr;
    }
    getDatabase() {
        return this.db;
    }
    getNewCar() {
        return new Car_1.default();
    }
}
exports.default = Service;
