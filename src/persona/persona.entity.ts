import crypto from "crypto";

export class Persona{
    constructor(
        public name: string,
        public lastname: string,
        public dni: number,
        public id: string = crypto.randomUUID()
    ) {}
}