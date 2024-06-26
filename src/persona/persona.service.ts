import { Persona } from './persona.models';
import { Personas } from './persona.memory';

export class PersonaService {
  getAll(): Persona[] {
    return Personas;
  }

  get(id: string): Persona | undefined {
    return Personas.find(persona => persona.id === id);
  }

  create(persona: Persona): void {
    Personas.push(persona);
  }

  update(id: string, persona: Persona): void {
    const index = Personas.findIndex(p => p.id === id);
    if (index !== -1) {
      Personas[index] = persona;
    }
  }

  delete(id: string): void {
    const index = Personas.findIndex(p => p.id === id);
    if (index !== -1) {
      Personas.splice(index, 1);
    }
  }
}