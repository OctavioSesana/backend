import e from "express";
import { Repository } from "../../shared/repository";
import { Persona } from "./persona.entity";

const persona = [
    new Persona(
      'Darth Vader',
      'Sith',
      432235325
    )
  ]

export class PersonaRepository implements Repository<Persona> {
    public findAll(): Persona[] | undefined {
        return persona
    }

    public findOne(item: { dni: number; }): Persona | undefined {
        return persona.find((persona) => persona.dni === item.dni)
    }
    
    public add(item: Persona): Persona | undefined {
        persona.push(item)
        return item
    }

    public update(item: Persona): Persona | undefined {
        const personaIdx = persona.findIndex((persona) => persona.dni === item.dni)
        if (personaIdx !== -1) {
            persona[personaIdx] = { ...persona[personaIdx], ...item }   
        }
        return persona[personaIdx]
    }

    public delete(item: { dni: number; }): Persona | undefined {
        const personaIdx = persona.findIndex((persona) => persona.dni === item.dni)
        if (personaIdx !== -1) {
            const deletedPersona = persona[personaIdx]
            persona.splice(personaIdx, 1)
            return deletedPersona
        }
    }
}