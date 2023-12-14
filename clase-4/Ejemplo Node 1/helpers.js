import fs from "fs";
import { json } from "stream/consumers";
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
    const data = await JSON.parse(result.toString())
    //return data
    console.log(data)
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

export {createFile, readFile, updateFile, deleteFile}