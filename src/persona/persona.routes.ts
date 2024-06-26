import { Router } from 'express';
import { PersonaController } from './persona.controller';

const personaController = new PersonaController();
const personaRouter = Router();

personaRouter.get("/", (req, res) => personaController.getAll(req, res));
personaRouter.get("/:id", (req, res) => personaController.get(req, res));
personaRouter.post("/", (req, res) => personaController.create(req, res));
personaRouter.put("/:id", (req, res) => personaController.update(req, res));
personaRouter.delete("/:id", (req, res) => personaController.delete(req, res));

export default personaRouter;