const temporizador = (callback) => {
  setInterval(() => {
    callback()
  }, 1000)
}

const laOperacion = () => console.log("la operacion termino")

console.log("inicio")
temporizador(laOperacion)
console.log("fin")