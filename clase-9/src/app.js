import express from "express";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import greetingsRouter from "./routes/greeting.routes.js";

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use("/greetings", greetingsRouter)

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})