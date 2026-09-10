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
        console.log("TEST Prompt-sync");
        this.prompt("Press Enter to exit");
    }
}
