import e from "express";
import { Repository } from "../../shared/repository";
import { Persona } from "./persona.entity";

const personas = [
    new Persona(
        'Gerardo',
        'Sesana',
        43644808
    )
  ]

export class PersonaRepository implements Repository<Persona> {
    public findAll(): Persona[] | undefined {
        return personas
    }

    public findOne(item: { dni: number; }): Persona | undefined {
        return personas.find((persona) => persona.dni === item.dni)
    }
    
    public add(item: Persona): Persona | undefined {
        personas.push(item)
        return item
    }

    public update(item: Persona): Persona | undefined {
        const personaIdx = personas.findIndex((persona) => persona.dni === item.dni)
        if (personaIdx !== -1) {
            personas[personaIdx] = { ...personas[personaIdx], ...item }   
        }
        return personas[personaIdx]
    }

    public delete(item: { dni: number; }): Persona | undefined {
        const personaIdx = personas.findIndex((persona) => persona.dni === item.dni)
        if (personaIdx !== -1) {
            const deletedPersona = personas[personaIdx]
            personas.splice(personaIdx, 1)
            return deletedPersona
        }
    }
}