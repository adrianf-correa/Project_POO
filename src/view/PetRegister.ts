import promptSync from 'prompt-sync';
import MainController from '../control/MainController';

export default class PetRegister {

    private prompt = promptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
       
    }
    public registerADog(): void {
        let dog = this.controller.getNewDog();
        dog.setPetName(this.prompt("digite o nome do cão: "));
        console.log("");
        dog.setBreed(this.prompt("Digite a raça do cão: "))
        dog.setServiceCost(parseInt(this.prompt("digite o valor do serviço: ")));
        console.log("");
        this.controller.database.dogs.push(dog);

    }
    public showPetList(): void{
        let s = this.controller.getPetList();
        console.log(s);
        
    }



}