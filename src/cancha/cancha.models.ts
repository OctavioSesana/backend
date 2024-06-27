import { customAlphabet } from 'nanoid';

const alphabet = '0123456789'
const idCancha = customAlphabet(alphabet, 3)

export interface Cancha {
  estado: string,
  id: string,
}