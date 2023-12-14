const fs = require("fs")
const FILE_NAME = "./archivoFileSync.txt"

async function createFile(text, filename){
  try {
    await fs.promises.writeFile(filename ?? FILE_NAME, text ?? "Hola mundo")
  } catch (error) {
    console.log("Error al craer el archivo", error)
  }
}

async function readFile(filename){
  try {
    const result = await fs.promises.readFile(filename ?? FILE_NAME)
    //return result
    console.log(result.toString())
  } catch (error) {
    console.log("Error al leer el archivo", error)
  }
}

async function updateFile(filename, text){
  try {
    await fs.promises.appendFile(filename ?? FILE_NAME, text ?? "\nNuevo texto")
  } catch (error) {
    console.log("Error al actualizar el archivo", error)
  }
}

async function deleteFile(filename){
  try {
    await fs.promises.unlink(filename ?? FILE_NAME)
  } catch (error) {
    console.log("Error al eliminar el archivo", error)
  }
}

// createFile("Hola mundo", "./archivo.txt")
// readFile("./archivo.txt")
// readFile()
// updateFile()
// readFile()
// deleteFile("./archivo.txt")
// readFile()
createFile()
readFile()
updateFile()
readFile()
deleteFile()