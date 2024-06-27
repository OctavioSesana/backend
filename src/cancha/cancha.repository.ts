import { Repository } from "../../shared/repository.js";
import { Cancha } from "./cancha.entity.js";

const canchas = [
 new Cancha(
  'disponible'
 ),
 new Cancha(
  'ocupada'
 )
]

//crear clase CanchaRepository que implementa la interfaz Repository<T>

export class CanchaRepository implements Repository<Cancha>{
  
  public findAll(): Cancha[] | undefined {
    return canchas
  }
  
  public findOne(item: { id: string; }): Cancha | undefined {
    return canchas.find((cancha)=>cancha.id===item.id)
  }
  
  public add(item: Cancha): Cancha | undefined {
    canchas.push(item)
    return item
  }
  
  public update(item: Cancha): Cancha | undefined {
    const indiceCancha = canchas.findIndex((cancha)=>cancha.id===item.id)
      if (indiceCancha!==-1){
        canchas[indiceCancha] = {...canchas[indiceCancha], ...item}
      }
      return canchas[indiceCancha]
  }
  
  public delete(item: { id: string; }): Cancha | undefined {
    const indiceCancha = canchas.findIndex((cancha)=>cancha.id===item.id)
    if (indiceCancha!==-1){
      const canchaEliminada = canchas[indiceCancha]
      canchas.splice(indiceCancha, 1)
      return canchaEliminada
    }
  }
}