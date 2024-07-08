import {Categoria} from "../entities/Categoria"

export interface categoriaInterface{
    create();
    delete(id: number,categoria : Categoria);
    update(id: number,categoria : Categoria);
    get(id: number,categoria : Categoria);
    getAll();
}