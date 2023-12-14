let random = []
let MAX_NUMEROS = 20
let grupo = {}
let contador = 0

function generarRandom(max){
  return Math.floor(Math.random() * max)
}

for (let i = 0; i < 10000; i++){
  random.push(generarRandom(MAX_NUMEROS))
}

random.forEach((numero) => {
  contador++

  if (grupo[numero]) {
    grupo[numero]++
  } else {
    grupo[numero] = 1
  }
})

console.log(grupo)
console.log(contador)