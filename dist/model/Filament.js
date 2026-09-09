"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Filament {
    constructor(brand, color, type, price, weight) {
        this.brand = brand;
        this.color = color;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
exports.default = Filament;
