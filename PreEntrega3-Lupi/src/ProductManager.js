import utils from "./utils.js";
import crypto from "crypto"

export class ProductManager {
  constructor(path){
    this.path = path
    this.products = []
  }
  
  async addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    ) {
      throw new Error("Todos los campos son obligatorios");
    }
    try {
      let data = await utils.readFile(this.path)
      console.log(data, data.length)
      this.products = data?.length > 0 ? data : []
    } catch (error) {
      console.log (error)
    }

    let codeExists = this.products.some((dato) => dato.code == code)

    if (codeExists) {
      throw new Error("El codigo ya existe por favor verifique");
    } else {
      const newProduct = {
        id: crypto.randomUUID,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      //console.log(this.products.length)
      try {
        await utils.writeFile(this.path, this.products)
      } catch (error) {
        console.log(error)
      }
    }
  }

  async getProducts() {
    try {
      let data = await utils.readFile(this.path)
      return data?.length > 0 ? this.products : "aun no hay regisdtro"
    } catch (error) {
      console.log(error)
    }
  }

  async getProductById(id) {
    try {
      let data = await utils.readFile(this.path)
      this.products = data?.length > 0 ? data : []
      let product = this.products.find((dato) => dato.id === id)
    } catch (error) {
      console.log(error)
    }
  }

//   updateProduct(id, updatedFields) {
//     if (id === undefined || updatedFields === undefined) {
//       throw new Error("ID y campos actualizados son obligatorios para actualizar el producto");
//     }

//     let productIndex = this.products.findIndex((product) => product.id === id);

//     if (productIndex !== -1) {
//       updatedFields.id = id;

//       this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };

//       this.updateFile(FILE_NAME, id);

//       return "Producto actualizado correctamente";
//     } else {
//       throw new Error("No existe un producto con el ID proporcionado");
//     }
//   }

//   updateFile(filename, id) {
//     const updatedProducts = this.products.map((product) => {
//       if (product.id === id) {
//         product.title = "nuevo titulo";
//         product.price = 300;
//       }
//       return product;
//     });

//     fs.writeFileSync(filename, JSON.stringify(updatedProducts));

//     console.log("actualizacion exitosa");
//   }

//   deleteProduct(id) {
//     if (id === undefined) {
//         throw new Error("ID es obligatorio para eliminar el producto");
//     }

//     const initialLength = this.products.length;
//     this.products = this.products.filter((product) => product.id !== id);

//     if (this.products.length === initialLength) {
//         throw new Error("No existe un producto con el ID proporcionado");
//     }

//     this.updateFile(FILE_NAME);
//     return "Producto eliminado correctamente";
// }
}