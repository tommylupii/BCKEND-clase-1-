const http = require ("http")

const PORT = 8080

const server = http.createServer((resquest, response) => {
  response.end("Hola mundo este es nuestro primer servidor")
})

server.listen(PORT, () => {
  console.log(`Servidor escchando en http://localhost:${PORT}`)
})