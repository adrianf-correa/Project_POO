import promptSync from "prompt-sync";
import MainController from "../controller/MainController";

export default class MainScreen {
    private prompt = promptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
        this.openMainScreen();
    }

    private openMainScreen(): void {
        let option: string = "";

        while (option !== "0") {
            console.log("\nFDM 3D Printing Manager");
            console.log("1 - Register client");
            console.log("2 - List clients");
            console.log("0 - Exit");
            option = this.prompt("Choose an option: ");

            switch (option) {
                case "1":
                    this.openClientRegistrationScreen();
                    break;
                case "2":
                    this.openClientListScreen();
                    break;
                case "0":
                    console.log("bye bye!");
                    break;
                default:
                    console.log("Invalid option. Choose 1, 2 or 0.");
                    break;
            }
        }
    }

    private openClientRegistrationScreen(): void {
        console.log("\n1 - Individual client");
        console.log("2 - Corporate client");
        console.log("0 - Cancel");
        const option = this.prompt("Choose the client type: ");

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

    private registerIndividualClientScreen(): void {
        const name = this.readRequiredInput("Name: ");
        const phoneNumber = this.readRequiredInput("Phone: ");
        const cpf = this.readRequiredInput("CPF: ");

        this.controller.registerIndividualClient(name, phoneNumber, cpf);
        console.log("Client registered successfully.");
    }

    private registerCorporateClientScreen(): void {
        const name = this.readRequiredInput("Name: ");
        const phoneNumber = this.readRequiredInput("Phone: ");
        const cnpj = this.readRequiredInput("CNPJ: ");
        const corporateName = this.readRequiredInput("Corporate name: ");

        this.controller.registerCorporateClient(name, phoneNumber, cnpj, corporateName);
        console.log("Client registered successfully.");
    }

    private openClientListScreen(): void {
        const descriptions = this.controller.getClientDescriptions();

        if (descriptions.length === 0) {
            console.log("No clients registered.");
            return;
        }

        console.log("\nRegistered clients:");
        for (let i: number = 0; i < descriptions.length; i++) {
            console.log(`${i + 1} - ${descriptions[i]}`);
        }
    }

    private readRequiredInput(message: string): string {
        let value = this.prompt(message);

        while (value === "") {
            console.log("This field is empty.");
            value = this.prompt(message);
        }

        return value;
    }
}
