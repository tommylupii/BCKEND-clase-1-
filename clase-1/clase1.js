/*let i = 0

function miFuncion(){
  i = i + 1
  let j = 2
  if(true){
    console.log(j)
    console.log(i)
  }
}

function miFuncionReturn(){
  i = i + 1
  let j = 2
  if(true){
    return {
      i,
      j,
    }
  }
}

miFuncion()
console.log(miFuncionReturn())
console.log(miFuncionReturn().i)
console.log(miFuncionReturn().j)
*/


// CONST
/*
// const nombre = "tomas"
// nombre = "daniel"

let valorVenta = 999
function calcularGanancia(){
  return valorVenta * 1.40
}

function impuesto0(){
  return valorVenta * 1.70
}

const producto = {
  name: "pelota",
  precio: 100
}

producto.name = "balon"
producto.propietario = "messi"

console.log(producto)

const mascota = {
  name: "firu",
  edad: 2
}

producto = mascota */



// FUNCTIONS
/*
function saludar(){
  console.log("hola mundo")
}

const saludarFlecha = () => {
  console.log("hola mundo")
}

saludar()
saludarFlecha()*/



// TEMPLATE STRING
/*
let nombre = "Tomás"
let apellido = "Lupi"
let descripcion = `Mi nombre es ${nombre} ${apellido}`

console.log(descripcion)*/

// CLOSURE  
/*
console.log(saludo)
var saludo = "hola mundo"
console.log(saludo)*/

// CLASE
/*
class nombreDeMiClase {
  constructor(parametrosDeInicializacion){
    console.log("nueva instancia de la clase / objeto")
    this.variableInterna = 5
  }

  static variableEstatica = 8

  metodo1(){
    console.log("hola mundo")
  }

  metodo2(){
    console.log(`hola mundo ${this.variableInterna}`)
  }
}

let instancia = new nombreDeMiClase();

console.log(instancia.variableInterna)
instancia.metodo1();
instancia.metodo2();

let instancia2 = new nombreDeMiClase();
let instancia3 = new nombreDeMiClase();*/

class Persona {
  constructor(nombre){
    this.nombre = nombre
  }

  static especie = "humano"
  saludar(){
    console.log(`hola soy ${this.nombre}`)
  }
  getEspecie(){
    console.log(`la especie es ${Persona.especie}`)
  }
}

let persona1 = new Persona("luis")
let persona2 = new Persona("maria")
let persona3 = new Persona("paola")

persona1.saludar();
persona2.saludar();

persona3.getEspecie()