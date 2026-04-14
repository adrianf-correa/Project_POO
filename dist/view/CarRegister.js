"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class CarRegister {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    registerACar() {
        let car = this.controller.getNewCar();
        car.setCarModel(this.prompt("digite o modelo"));
        console.log("");
        car.setCost(parseInt(this.prompt("digite o preço")));
        console.log("");
        this.controller.database.cars.push(car);
    }
    showCarList() {
        let s = this.controller.getCarList();
        console.log(s);
    }
}
exports.default = CarRegister;
