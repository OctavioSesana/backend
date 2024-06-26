import { PersonaService } from './persona.service';
import { Persona } from './persona.models';
import { Request, Response } from 'express';


const personaService = new PersonaService();

export class PersonaController {
  getAll(req: Request, res: Response) {
    const personas = personaService.getAll();
    res.json(personas);
  }

  get(req: Request, res: Response) {
    const id = req.params.id;
    const persona = personaService.get(id);
    if (persona) {
      res.json(persona);
    } else {
      res.status(404).send('Persona no encontrada');
    }
  }

  create(req:Request, res: Response) {
    const persona: Persona = req.body;
    personaService.create(persona);
    res.status(201).send('Persona creada');
  }

  update(req: Request, res: Response) {
    const id = req.params.id;
    const persona: Persona = req.body;
    personaService.update(id, persona);
    res.send('Persona actualizada');
  }

  delete(req: Request, res: Response) {
    const id = req.params.id;
    personaService.delete(id);
    res.send('Persona eliminada');
  }
}