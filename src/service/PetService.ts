import MainController from "../control/MainController";
import Database from "../Database";
import Dog from "../model/Dog";
import Cat from "../model/Cat";

export default class PetService {

    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }
// método para buscar apenas os modelos dos carros cadastrados
    public getPetList(): string {
        let s: string = "";
        let numberOfDogs: number = this.database.dogs.length;
        for (let index = 0; index < numberOfDogs; index++) {
            const element = this.database.dogs[index].getPetName();
               s=s+"\n"+element;

        }
        return s;
    }

}