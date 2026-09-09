import Database from "./database/Database";
import Filament from "./model/Filament";
import Printer from "./model/Printer";
import Product from "./model/Product";

const database: Database = new Database();

const whiteFilament: Filament = new Filament(
    "Voolt3D",
    "White",
    "PLA",
    89,
    1000
);

database.filaments.push(whiteFilament);

console.log(database.filaments);

const printer: Printer = new Printer("Bambu Lab", "A1 Mini");

database.printers.push(printer);

console.log(database.printers);

const product: Product = new Product(
    "Decorative vase",
    whiteFilament,
    printer,
    120,
    5,
    35
);

database.products.push(product);

console.log(database.products);
console.log(`Production cost: R$ ${product.calculateProductionCost().toFixed(2)}`);
