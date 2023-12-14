import { Router } from "express"

const router = Router()

let usuarios = [
  {
    id: 1,
    nombre: "agustin",
    apellido: "garcia",
    edad:35,
    email:"agustin@gmail.com"
  },
  {
    id: 2,
    nombre: "María",
    apellido: "López",
    edad: 28,
    email: "maria.lopez@example.com"
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Rodríguez",
    edad: 45,
    email: "carlos.rodriguez@gmail.com"
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "Martínez",
    edad: 22,
    email: "ana.martinez@example.com"
  },
  {
    id:5,
    nombre: "Pedro",
    apellido: "Sánchez",
    edad: 40,
    email: "pedro.sanchez@gmail.com"
  }
]

router.get("/", (req,res)=>{
  const idRandom = Math.floor(Math.random() * (usuarios.length - 1)) +1
  const usuario = usuarios[idRandom]
  usuario.title = `Usuario ${usuario.nombre}`

  res.render("usuario", usuario)
})

export default router