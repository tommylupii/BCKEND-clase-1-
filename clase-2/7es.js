let valoresBase = [1,2,3,4,5,6]

let nuevosValores = valoresBase.map((numero,indice) => numero ** indice)

console.log(nuevosValores)

let nombres = ["luis", "maria", "juan", "pedro"]

function isNameIn(name, names){
  //names es el arreglo
  return names.includes(name)
}

console.log(isNameIn("juan", nombres) ? "esta en la lista" : "no esta en la lista")

if(isNameIn("luisa", nombres)){
  console.log("esta en la lista")
}else{
  console.log("no esta en la lista")
}