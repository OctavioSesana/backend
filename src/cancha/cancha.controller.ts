//aqui esta toda la logica de negocio

import { Request, Response, NextFunction } from "express"
import { CanchaRepository } from "./cancha.repository.js"
import { Cancha } from "./cancha.entity.js"

const repository = new CanchaRepository()

function sanitizeCanchaInput (req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    estado: req.body.estado
  }
  Object.keys(req.body.sanitizedInput).forEach((key)=>{
    if(req.body.sanitizedInput[key]===undefined){
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

//obtener todas las canchas
function findAll(req:Request, res:Response){
  res.json({data: repository.findAll()})
}

//obtener una cancha
function findOne(req:Request, res:Response){
  const id = req.params.id
  const cancha = repository.findOne({id}) //objeto 
  if (!cancha){
    return res.status(404).send({message:'Cancha no encontrada'})
  } else {
      res.json({data: cancha})
  }
  }
  

//añadir una cancha
function add(req:Request, res:Response){
  const input = req.body.sanitizedInput
  const canchaInput = new Cancha(
    input.estado
  )
  const cancha = repository.add(canchaInput)
  return res.status(201).send({message: 'Cancha agregada', data: cancha})
}

//modificar estado de una cancha
function update(req:Request, res:Response){
  req.body.sanitizedInput.id = req.params.id
  const cancha = repository.update(req.body.sanitizedInput)
  if (!cancha){
    res.status(404).send({message:'No se encuentra esa cancha'})
  } else {
    res.status(200).send({message: 'Estado actualizado', data: cancha})
  }
}

//dar de baja una cancha
function remove(req:Request, res:Response){
  const id = req.params.id
  const cancha = repository.delete({id})
  if (!cancha){
    res.status(404).send({message:'No se encuentra esa cancha'})
  } else {
    res.status(200).send({message: 'Se dio de baja la cancha'})
  }
}


export {sanitizeCanchaInput, findAll, findOne, add, update, remove}