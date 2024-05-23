import { Persona } from "./persona.entity";
const personas = [
    new Persona('Gerardo', 'Sesana', 43644808)
];
export class PersonaRepository {
    findAll() {
        return personas;
    }
    findOne(item) {
        return personas.find((persona) => persona.dni === item.dni);
    }
    add(item) {
        personas.push(item);
        return item;
    }
    update(item) {
        const personaIdx = personas.findIndex((persona) => persona.dni === item.dni);
        if (personaIdx !== -1) {
            personas[personaIdx] = { ...personas[personaIdx], ...item };
        }
        return personas[personaIdx];
    }
    delete(item) {
        const personaIdx = personas.findIndex((persona) => persona.dni === item.dni);
        if (personaIdx !== -1) {
            const deletedPersona = personas[personaIdx];
            personas.splice(personaIdx, 1);
            return deletedPersona;
        }
    }
}
//# sourceMappingURL=persona.repository.js.map