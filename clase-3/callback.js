let miArreglo = [1,2,3,4,5,6]

let nuevoArreglo = miArreglo.map(elemento => elemento * 2)

let nuevoCalculo = miArreglo.map((x) => x + 1)

let remplazo = miArreglo.map((dato) => "a")

// console.log(nuevoCalculo)
// console.log(remplazo)


function isEven(valor){
  if(typeof valor == "number"){
    return valor % 2 == 0
  } else {
    return false
  }
}

console.log(isEven(2))
console.log(isEven(5))
console.log(isEven("a"))

let arregloOdd = miArreglo.map(isEven)

console.log(arregloOdd)