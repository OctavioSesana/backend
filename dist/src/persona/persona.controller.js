import { PersonaService } from './persona.service';
const personaService = new PersonaService();
export class PersonaController {
    getAll(req, res) {
        const personas = personaService.getAll();
        res.json(personas);
    }
    get(req, res) {
        const id = req.params.id;
        const persona = personaService.get(id);
        if (persona) {
            res.json(persona);
        }
        else {
            res.status(404).send('Persona no encontrada');
        }
    }
    create(req, res) {
        const persona = req.body;
        personaService.create(persona);
        res.status(201).send('Persona creada');
    }
    update(req, res) {
        const id = req.params.id;
        const persona = req.body;
        personaService.update(id, persona);
        res.send('Persona actualizada');
    }
    delete(req, res) {
        const id = req.params.id;
        personaService.delete(id);
        res.send('Persona eliminada');
    }
}
//# sourceMappingURL=persona.controller.js.map