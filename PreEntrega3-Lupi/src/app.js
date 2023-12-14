import express from "express"
import ProductManager from "./ProductManager.js"

const app = express()
const PORT = 8080

const productManager = new ProductManager("./products.json")

app.get("/products", async (req, res) => {
  try {
    let temporalProducts = await productManager.getProducts()
  const {limit} = req.query
  if(limit){
    temporalProducts = temporalProducts.slice(0, +limit)
  }
  res.json({
    msg:"Lista de productos",
    data: temporalProducts,
    limit: limit ? limit : "false",
    total: temporalProducts.length
  })} catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en localhost:${PORT}`)
})