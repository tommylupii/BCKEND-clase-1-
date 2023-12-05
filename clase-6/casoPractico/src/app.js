import express from "express"

const app = express()
const PORT = 8080

const usuarios = [
  {
    id: 1,
    nombre: "luis",
    apellido: "mendez",
    edad: 34,
    genero: "m"
  },
  {
    id: 2,
    nombre: "pedro",
    apellido: "lopez",
    edad: 25,
    genero: "m"
  },
  {
    id: 3,
    nombre: "agustin",
    apellido: "callao",
    edad: 53,
    genero: "f"
  },
]

app.get("/", (req, res) => {
  const {genero} = req.query
  let temporalUsers = usuarios

  if(genero){
    temporalUsers = temporalUsers.filter((user) => user.genero.toLowerCase() === genero.toLowerCase())
  }

  res.json({
    msg: "Bienvenido a la api de usuarios",
    data: temporalUsers
  })
})

app.get("/usuarios/:id", (req, res) => {
  const {id} = req.params
  if (!id){
    res.status(404).json({
      msg: "No se encontro el usuario",
      data: null
    })
  }
  const existUser = usuarios.findIndex((user) => user.id === +id)

  if(existUser === -1) {
    res.status(404).json({
      msg: "No se encontro el usuario",
      data: null
    })
  }
  
  res.json({
    msg: "usuario encontrado",
    data: usuarios[existUser]
  })
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})