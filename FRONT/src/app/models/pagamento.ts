import { Formapag } from './formapag';


export interface Pagamento {
    id?: number;
    Formapagid?: number;
    Formapag?: Formapag;
    NomeCliente: string;
    CriadoEm?: Date;

}
