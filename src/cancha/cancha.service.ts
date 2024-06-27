import { Canchas } from "./cancha.memory"
import { Cancha } from "./cancha.models"

export class CanchaService {
  getall(): Cancha[]{
    return Canchas
  }

  get(id: string): Cancha | undefined {
    return Canchas.find(cancha => cancha.id === id)
  }

  create(cancha: Cancha): void {
    Canchas.push(cancha)
  }

  update(id: string, cancha: Cancha): void {
    const index = Canchas.findIndex(c => c.id === id)
    if (index !== -1){
      Canchas[index]= cancha
    }
  }

  delete(id: string): void {
    const index = Canchas.findIndex(c => c.id === id)
    if (index !==-1){
      Canchas.splice(index, 1)
    }
  }
}

