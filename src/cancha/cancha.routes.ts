import { Router } from "express";
import { sanitizeCanchaInput, findAll, findOne, add, update, remove } from "./cancha.controller.js";

export const canchaRouter = Router()

//cada una de las rutas admitidas, con sus parametros de entrada, middlewares, y funciones que la utilizan
canchaRouter.get('/', findAll)
canchaRouter.get('/:id', findOne)
canchaRouter.post('/', sanitizeCanchaInput, add)
canchaRouter.patch('/:id', sanitizeCanchaInput, update)
canchaRouter.delete('/:id', sanitizeCanchaInput, remove)