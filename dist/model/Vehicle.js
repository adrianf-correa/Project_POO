"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    setCarModel(carModel) {
        this.carmodel = carModel;
    }
    getCarModel() {
        return this.carmodel;
    }
    setCost(cost) {
        this.cost = cost;
    }
    getCost() {
        return this.cost;
    }
}
exports.default = Vehicle;
