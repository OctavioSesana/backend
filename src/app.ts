import express,  { NextFunction, Request, Response } from 'express'
import personaRouter from './persona/persona.routes';


const app = express()
app.use(express.json())

app.use("/api/persona", personaRouter)

app.use((_, res, next) => {
  res.status(404).send({ message: "Resource not found" })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})