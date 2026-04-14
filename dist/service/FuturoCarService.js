"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarService {
    constructor(control) {
        this.control = control;
    }
    getCarList() {
        let s = "";
        let cars = this.control.database.cars;
        for (let index = 0; index < cars.length; index++) {
            const element = cars[index];
        }
        return "";
    }
}
exports.default = CarService;
