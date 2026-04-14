
import MainController from "../control/MainController";
import Dog from "../model/Dog";
import Animal from "../model/Animal";
import promptSync from 'prompt-sync';
import PetRegister from "./PetRegister";
import Database from "../Database";

export default class FirstScreen {

    private prompt = promptSync();
    private controller: MainController;
    private petRegister: PetRegister; 

    constructor(controller: MainController) {
        this.controller = controller;
        this.petRegister = new PetRegister(controller);
        this.mainMenu();
    }

    public mainMenu(): void {
        let open: boolean = true;

        while (open) {
            console.log("\nMenu Principal:\nEscolha números de 1 a 5\n");
            let option = parseInt(this.prompt("1. Cadastrar Cão\n2. Cadastrar Cliente\n3. Serviço\n4. Listar Cães\n5. Sair\n"));
            switch (option) {
                case 1:
                    this.petRegister.registerADog();
                    break;
                case 2:
                    console.log("escolheu 2")
                    break;
                case 3:
                    console.log("escolheu 3")
                    break;
                case 4:
                    this.petRegister.showPetList();
                    break;
                case 5:
                    console.log("escolheu sair")
                    open = false;
                    break;
            }

        }

    }

}