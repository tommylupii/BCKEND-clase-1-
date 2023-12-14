import {ProductManager} from "./ProductManager.js"

let miPrimeraTienda = new ProductManager("./products.json")

miPrimeraTienda.addProduct("Pan", "Pan de modle", 200, "sin imagen", "001", 10)
miPrimeraTienda.addProduct("Leche", "Leche descremada", 200, "sin imagen", "002", 10)
miPrimeraTienda.addProduct("Huevos", "Huevos de gallina", 200, "sin imagen", "003", 10)

