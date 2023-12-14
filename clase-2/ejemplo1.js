const tiendas = [
  {
    manzanas: 3,
    peras: 2,
    carne: 3,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 6,
    huevos: 8,
    panes: 3,
    almendras: 9,
  }
]

let productos = []
let total = 0
let newTemporal = 0

tiendas.forEach((tienda)=>{
  let temporal = 0
  Object.keys(tienda).forEach((producto)=>{
    temporal = temporal + tienda[producto]
    if(!productos.includes(producto)){
      productos.push(producto)
    }
  })
  total= temporal
  newTemporal = newTemporal + Object.values(tienda).reduce((acumulador, valorActual) => {
    return acumulador + valorActual
  })
})

console.log(productos, total)
console.log("reducers:", newTemporal)