import Database from "../database/Database";
import MainScreen from "../view/MainScreen";

export default class MainController {
    public database: Database = new Database();

    constructor() {
        new MainScreen(this);
    }
}
