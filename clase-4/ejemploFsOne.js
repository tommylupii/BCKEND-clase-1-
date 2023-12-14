const fs = require("fs")
const FILE_NAME = "./archivoTexto.txt"
// fs.readFile
// fs.writeFile
// fs.appendFile
// fs.unlink
// fs.existsSync

// fs.writeFileSync("archivoTexto.txt", "cambiamos el texto, hola")

const existFile = fs.existsSync(FILE_NAME)

if(existFile){
  let contenidoDelArchivo = fs.readFileSync(FILE_NAME, "utf-8")
  console.log(contenidoDelArchivo)

  fs.appendFileSync(FILE_NAME, " agregamos mas texto")
  let masContenido = fs.readFileSync(FILE_NAME, "utf-8")
  console.log(masContenido)

  fs.unlinkSync(FILE_NAME)
}