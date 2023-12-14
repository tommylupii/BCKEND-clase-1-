import express from "express";
import userRouter from "./routes/user.route.js";
import petRouter from "./routes/pet.route.js";
import {__dirname} from "./utils.js";

const app = express()
const PORT = 8080

app.use(function (req, res, next){
  consooe.log(`Time:`, Date.now().toLocaleString())
  next()
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use("/api/user", userRouter)
app.use("/api/pet", petRouter)

app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`)
})