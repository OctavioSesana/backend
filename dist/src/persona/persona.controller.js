import { PersonaRepository } from "./persona.repository";
import { Persona } from "./persona.entity";
const repository = new PersonaRepository();
function sanitizedPersonaInput(req, res, next) {
    req.body.sanitizedInput = {
        name: req.body.name,
        lastname: req.body.lastname,
        dni: req.body.dni,
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
function findAll(req, res) {
    res.json({ data: repository.findAll() });
}
function findOne(req, res) {
    const dni = Number(req.params.dni);
    const persona = repository.findOne({ dni });
    if (!persona) {
        return res.status(404).send({ message: "Persona not found" });
    }
    res.json({ data: persona });
}
function add(req, res) {
    const input = req.body.sanitizedInput;
    const personaInput = new Persona(input.name, input.lastname, input.dni);
    const existingPersona = repository.findOne({ dni: personaInput.dni });
    if (existingPersona) {
        return res.status(409).send({ message: "Persona already exists", data: existingPersona });
    }
    const persona = repository.add(personaInput);
    res.status(201).send({ message: "Character created", data: persona });
}
function update(req, res) {
    const dni = Number(req.params.dni);
    const input = req.body.sanitizedInput;
    const personaInput = new Persona(input.name, input.lastname, input.dni);
    const persona = repository.update(req.body.sanitizedInput);
    if (!persona) {
        return res.status(404).send({ message: "Persona not found" });
    }
    res.status(200).send({ message: "Persona updated", data: persona });
}
function remove(req, res) {
    const dni = Number(req.params.dni);
    const persona = repository.delete({ dni });
    if (!persona) {
        res.status(404).send({ message: "Persona not found" });
    }
    else {
        res.status(200).send({ message: "Persona deleted succesfully" });
    }
}
export { sanitizedPersonaInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=persona.controller.js.map