export interface Repository<T> {
    findAll(): T[] | undefined
    findOne(item: {dni: number}): T | undefined
    add(item: T): T | undefined
    update(item: T): T | undefined
    delete(item: {dni: number}): T | undefined
}