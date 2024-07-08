import {Pagamento} from "../entities/Pagamento"

export interface pagamentoInterface{
    create();
    delete(id: number,pagamento : Pagamento);
    update(id: number,pagamento : Pagamento);
    get(id: number,pagamento : Pagamento);
    getAll();
}