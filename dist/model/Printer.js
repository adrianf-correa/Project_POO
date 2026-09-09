"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Printer {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
}
exports.default = Printer;
