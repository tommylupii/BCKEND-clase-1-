import { Router } from "express";

const router = Router()

router.get("/", (req,res)=>{
  let name = "Agustin"
  res.render("saludo", {title: "Saludos cordiales", nombre: name})
})

export default router