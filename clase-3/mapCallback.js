let arregloDePrueba = [1,2,3,4,5,6,7,8,9]

const miFuncionMap = (arreglo, callback) => {
  let nuevoArreglo = []

  for(let i=0; i<arreglo.length; i++){
    nuevoArreglo.push(callback(arreglo[i]))
  }

  return nuevoArreglo
}

let nuevoArregloMap = miFuncionMap(arregloDePrueba, (x)=> x * 5)

// console.log(nuevoArregloMap)

Array.prototype.miMap = function (callback){
  let nuevoArreglo = []

  for(let i = 0; i < this.length; i ++){
    let nuevoValor = callback(this[i])
    nuevoArreglo.push(callback(nuevoValor))
  }

  return nuevoArreglo
}

let nuevoArregoDePrueba = [2,4,6,8,10,12,14,16,18,20]

let nuevoArregloMap2 = nuevoArregoDePrueba.miMap((x)=> x + 2)
let nuevoArregloMap3 = nuevoArregoDePrueba.map((x)=> x + 2)

console.log(nuevoArregloMap2)
console.log(nuevoArregloMap3)