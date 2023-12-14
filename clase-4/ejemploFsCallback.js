const fs = require("fs")
const FILE_NAME = "./archivoConCallbacks.txt"

//const existFile = fs.existsSync(FILE_NAME)

fs.writeFile(FILE_NAME, "Hola mundo", (error) => {
  if(error)
    console.log("Error al escribir el archivo")
    console.log("Archivo creado")
})

//if(existFile) {
  fs.readFile(FILE_NAME, "utf-8", (error, contenido) => {
    if (error)
      console.log("Error al leer el archivo")
      console.log("Contenido del archivo:", contenido)
  })
//}

fs.appendFile(FILE_NAME, "Agregamos mas texto", (error) => {
  if (error) console.log("Error al agreagar mas texto", error)
  console.log("Agreagamos mas texto");

  fs.readFile(FILE_NAME, "utf-8", (error, contenido) => {
    if (error) console.log("Error al leer el archivo", error)
    console.log("Contenido del archivo", contenido);

    // fs.unlink(FILE_NAME, (error) => {
    //   if (error) console.log("Error al eliminar el archivo", error)
    //   console.log("Eliminamos el archivo")
    // })
  })
})