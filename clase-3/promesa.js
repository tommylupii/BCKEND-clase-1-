const dividir = (dividiendo, divisor) => {
  return new Promise ((resolve, reject) => {
    if (divisor === 0){
      reject("no se puede dividir por cero")
    }
    resolve(dividiendo/divisor)
  })
}

dividir(10,2)
.then((resultado) => {
  console.log(resultado)
}) .catch((error) => {
  console.log(error)
})

dividir(10,0)
.then((resultado) => {
  console.log(resultado)
}) .catch((error) => {
  console.log(error)
})