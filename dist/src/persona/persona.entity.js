import crypto from "crypto";
export class Persona {
    constructor(name, lastname, dni, id = crypto.randomUUID()) {
        this.name = name;
        this.lastname = lastname;
        this.dni = dni;
        this.id = id;
    }
}
//# sourceMappingURL=persona.entity.js.map