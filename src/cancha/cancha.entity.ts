import { customAlphabet } from 'nanoid';

const alphabet = '0123456789'
const idCancha = customAlphabet(alphabet, 3)

export class Cancha {
  constructor(
    public estado: string,
    public id = idCancha(),
  ){}
}