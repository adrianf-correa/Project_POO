"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CarRegister_1 = __importDefault(require("./CarRegister"));
class FirstScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.carRegister = new CarRegister_1.default(controller);
        this.mainMenu();
    }
    mainMenu() {
        let open = true;
        while (open) {
            console.log("menu principal\n");
            let option = parseInt(this.prompt("1. Cadastra Veiculo\n2. Cadastra Cliente\n3. Venda\n4. Listar Carros\n5. Sair"));
            switch (option) {
                case 1:
                    this.carRegister.registerACar();
                    break;
                case 2:
                    console.log("escolheu 2");
                    break;
                case 3:
                    console.log("escolheu 3");
                    break;
                case 4:
                    this.carRegister.showCarList();
                    break;
                case 5:
                    console.log("escolheu sair");
                    open = false;
                    break;
                default:
                    console.log("escolha um valor entre 1 e 5");
                    break;
            }
            // console.log(this.controller.database.cars)
        }
    }
}
exports.default = FirstScreen;
