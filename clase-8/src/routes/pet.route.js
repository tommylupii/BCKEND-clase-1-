import { Router } from "express";

const petRouter = Router()

let pets = []
let CurrentID = 1

petRouter.get("/", (req, res) => {
  res.json({
    data: pets,
    message: pets.length === 0 ? "no hay pets" : "pets encontrados:"
})})

petRouter.post("/", (req, res) => {
  const {name, tipo, age} = req.body

  if(!name || !tipo || !age){
    res.status(400).json({error:"faltan datos"})
  } else {
    const newPet = {name, tipo, age, id: CurrentID++}
    pets.push(newPet)

    res.status(201).json({message: "usuario creado", data: newPet})
  }
})

export default petRouter