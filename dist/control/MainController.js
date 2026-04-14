"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
const Car_1 = __importDefault(require("../model/Car"));
const CarService_1 = __importDefault(require("../service/CarService"));
const FirstScreen_1 = __importDefault(require("../view/FirstScreen"));
class MainController {
    constructor() {
        this.database = new Database_1.default();
        this.carService = new CarService_1.default(this.database);
        this.firstScreen = new FirstScreen_1.default(this);
    }
    getNewCar() {
        return new Car_1.default();
    }
    getCarList() {
        return this.carService.getCarList();
    }
}
exports.default = MainController;
