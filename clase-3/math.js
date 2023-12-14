const sumar = (a,b) => a + b
function restar (a,b){
  return a - b
}

const mulitplicar = (a,b) => a * b 
function dividir (a,b){
  return a / b
}

const operacion = (a,b, callback) => {
  console.log("operacion")
  let resultado = callback(a,b)

  console.log(`resultado de ${callback.name} ${a} y ${b} es ${resultado}`)
}

operacion(5,6, sumar)
operacion(5,6, restar)
operacion(5,6, mulitplicar)
operacion(5,6, dividir)