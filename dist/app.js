import express from 'express';
import { Persona } from './persona/persona.entity.js';
const app = express();
app.use(express.json());

const personas = [
    new Persona(
      'Octavio',
      'Sesana',
      43644808
    )
  ]

  function sanitizedPersonaInput(req, res, next) {
    req.body.sanitizedInput = {
      name: req.body.name,
      lastname: req.body.lastname,
      dni: req.body.dni,
    }
  
    Object.keys(req.body.sanitizedInput).forEach((key) => {
      if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
      }
    })
    next()
  }

app.get("/api/persona/", (req, res, next) => {
    res.json({ data: personas });
});

app.get("/api/persona/:id", (req, res, next) => {
    const id = req.params.id;
    const persona = personas.find((persona) => persona.id === req.params.id);
    if (!persona) {
        return res.status(404).send({ message: "Persona not found" });
    }
    res.json({ data: persona });
});

app.post("/api/persona/", sanitizedPersonaInput, (req, res, next) => {
    const { name, lastname, dni } = req.body.sanitizedInput;
    
    const existingPersona = personas.find((persona) => persona.id === req.params.id);
    if (existingPersona) {
        return res.status(400).send({ message: "Persona with this DNI already exists", data: existingPersona});
    }

    const newPersona = new Persona(name, lastname, dni);
    personas.push(newPersona);
    res.status(201).send({ message: "Persona created", data: newPersona });
});

app.put("/api/persona/:id", sanitizedPersonaInput, (req, res, next) => {
    const personaIdx = personas.findIndex((persona) => persona.id === req.params.id);
    if (personaIdx === -1) {
        return res.status(404).send({ message: "Persona not found" });
    }

    personas[personaIdx] = { ...personas[personaIdx], ...req.body.sanitizedInput };
    res.status(200).send({ message: "Persona updated succesfully", data: personas[personaIdx] });
});

app.patch("/api/persona/:id", sanitizedPersonaInput, (req, res, next) => {
    const personaIdx = personas.findIndex((persona) => persona.id === req.params.id);
    if (personaIdx === -1) {
        return res.status(404).send({ message: "Persona not found" });
    }

    Object.assign(personas[personaIdx], req.body.sanitizedInput);
    return res.status(200).send({ message: "Persona updated succesfully", data: personas[personaIdx] });
});

app.delete("/api/persona/:id", (req, res, next) => {
    const personaIdx = personas.findIndex((persona) => persona.id === req.params.id);
    if (personaIdx === -1) {
        res.status(404).send({ message: "Persona not found" });
    }
    else {
        personas.splice(personaIdx, 1);
        res.status(200).send({ message: "Persona deleted succesfully" });
    }
});

app.use((_, res, next) => {
    res.status(404).send({ message: "Resource not found" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});