import Database from "../Database";
import Cat from "../model/Cat";
import Dog from "../model/Dog";
import PetService from "../service/PetService";
import FirstScreen from "../view/FirstScreen";

export default class MainController{
    private firstScreen!: FirstScreen; 
    public database: Database = new Database();
    private petService: PetService = new PetService(this.database);
   
    constructor(){
       this.firstScreen = new FirstScreen(this);
    }

    public getNewDog(): Dog{
        return new Dog();
    }

    public getNewCat(): Cat{
        return new Cat();
    }

     public getPetList(): string {
           return this.petService.getPetList();
       }

}