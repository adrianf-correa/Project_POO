"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class MainScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.openMainScreen();
    }
    openMainScreen() {
        let option = "";
        while (option !== "0") {
            console.log("\nFDM 3D Printing Manager");
            console.log("1 - Register client");
            console.log("2 - List clients");
            console.log("0 - Exit");
            option = this.prompt("Choose an option: ").trim();
            switch (option) {
                case "1":
                    this.openClientRegistrationScreen();
                    break;
                case "2":
                    this.openClientListScreen();
                    break;
                case "0":
                    console.log("Goodbye!");
                    break;
                default:
                    console.log("Invalid option. Choose 1, 2 or 0.");
                    break;
            }
        }
    }
    openClientRegistrationScreen() {
        console.log("\n1 - Individual client");
        console.log("2 - Corporate client");
        console.log("0 - Cancel");
        const option = this.prompt("Choose the client type: ").trim();
        switch (option) {
            case "1":
                this.registerIndividualClientScreen();
                break;
            case "2":
                this.registerCorporateClientScreen();
                break;
            case "0":
                break;
            default:
                console.log("Invalid client type.");
                break;
        }
    }
    registerIndividualClientScreen() {
        const name = this.readRequiredInput("Name: ");
        const phoneNumber = this.readRequiredInput("Phone: ");
        const cpf = this.readRequiredInput("CPF: ");
        this.controller.registerIndividualClient(name, phoneNumber, cpf);
        console.log("Client registered successfully.");
    }
    registerCorporateClientScreen() {
        const name = this.readRequiredInput("Name: ");
        const phoneNumber = this.readRequiredInput("Phone: ");
        const cnpj = this.readRequiredInput("CNPJ: ");
        const corporateName = this.readRequiredInput("Corporate name: ");
        this.controller.registerCorporateClient(name, phoneNumber, cnpj, corporateName);
        console.log("Client registered successfully.");
    }
    openClientListScreen() {
        const descriptions = this.controller.getClientDescriptions();
        if (descriptions.length === 0) {
            console.log("No clients registered.");
            return;
        }
        console.log("\nRegistered clients:");
        for (let i = 0; i < descriptions.length; i++) {
            console.log(`${i + 1} - ${descriptions[i]}`);
        }
    }
    readRequiredInput(message) {
        let value = this.prompt(message).trim();
        while (value === "") {
            console.log("This field is required.");
            value = this.prompt(message).trim();
        }
        return value;
    }
}
exports.default = MainScreen;
