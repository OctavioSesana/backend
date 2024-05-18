import express, { Request, Response, NextFunction } from "express"
import { PersonaRepository } from "./persona.repository"
import { Persona } from "./persona.entity"

const repository = new PersonaRepository();

function sanitizedPersonaInput(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedInput = {
      name: req.body.name,
      lastname: req.body.lastname,
      dni: req.body.dni,
    }
    //more checks here
  
    Object.keys(req.body.sanitizedInput).forEach((key) => {
      if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
      }
    })
    next()
  }

function findAll(req: Request, res: Response) {
    res.json({ data: repository.findAll()})
}

function findOne(req: Request, res: Response) {
        const dni = Number(req.params.dni); // Convert dni to a number
        const persona = repository.findOne({ dni });
        if (!persona) {
            return res.status(404).send({ message: "Persona not found" });
        }
        res.json({ data: persona });
}

function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput
    const personaInput = new Persona(
      input.name,
      input.lastname,
      input.dni
    )
    
    const persona = repository.add(personaInput)
    res.status(201).send({message: "Character created", data: persona})
  }
  
function update(req: Request, res: Response) {
    req.body.sanitizedInput.dni = req.params.dni
    const persona = repository.update(req.body.sanitizedInput)
  
    if (!persona) {
      return res.status(404).send({ message: "Persona not found" })
    }
  
    return res.status(200).send({ message: "Persona updated succesfully", data: persona })
  }

function remove(req: Request, res: Response) {
        const dni = Number(req.params.dni); // Convert dni to a number
        const persona = repository.delete({ dni })
    
        if (!persona) {
            res.status(404).send({ message: "Persona not found" })
        } else{
            res.status(200).send({ message: "Persona deleted succesfully" })
        }
    }

export { sanitizedPersonaInput, findAll, findOne, add, update, remove}
