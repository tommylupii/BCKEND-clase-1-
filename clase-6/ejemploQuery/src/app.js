import express from "express"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))

app.get("/ejemploqueries", (req, res) => {
  let consultas = req.query
  console.log(consultas)
  const {nombre, apellido} = req.query
  res.json({
    nombre: nombre,
    apellido: apellido
  })
})

//http://localhost:8080/ejemploqueries?nombre=santiago&apellido=fonzo&curso=backend&year=2023

/*{
  "nombre": "santiago",
  "apellido": "fonzo",
  "curso": "backend",
  "year": "2023"
}*/

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})