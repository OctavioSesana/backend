import { Router } from 'express';
import { sanitizedPersonaInput, findAll, findOne, add, update, remove } from './persona.controller';
export const personaRouter = Router();
personaRouter.get("/", findAll);
personaRouter.get("/:dni", findOne);
personaRouter.post("/", sanitizedPersonaInput, add);
personaRouter.put("/:dni", sanitizedPersonaInput, update);
personaRouter.patch("/:dni", sanitizedPersonaInput, update);
personaRouter.delete("/:dni", remove);
//# sourceMappingURL=persona.routes.js.map