// console.log("creamos todo con comandos")

import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hola mundo, nuestra primera app con express")
});

app.get("/saludo", (req, res) => {
  res.send("Hola clase que tal, este es un saludo")
})

app.get("/usuario", (req, res) => {
  const usuario = {
    nombre: "Luis",
    apellido: "Menendez",
    edad: 40,
  };
  res.json(usuario )
})

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="
    color: blue;
  ">Bienvendios a la clase de express</h1>`)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)})