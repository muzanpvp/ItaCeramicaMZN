import {Produto} from "../entities/Produto"

export interface produtoInterface{
    create();
    delete(id: number, produto : Produto);
    update(id: number, produto : Produto);
    get(id: number, produto : Produto);
    getAll();
}
