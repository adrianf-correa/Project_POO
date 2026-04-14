"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarService {
    constructor(database) {
        this.database = database;
    }
    // método para buscar apenas os modelos dos carros cadastrados
    getCarList() {
        let s = "";
        let numberOfCars = this.database.cars.length;
        for (let index = 0; index < numberOfCars; index++) {
            const element = this.database.cars[index].getCarModel();
            s = s + "\n" + element;
        }
        return s;
    }
}
exports.default = CarService;
