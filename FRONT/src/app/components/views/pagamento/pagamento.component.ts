import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagamentoService } from '../../../services/pagamento.service';
import { Pagamento } from 'src/app/models/pagamento'
import { FormapagService } from 'src/app/services/formapag.service';
import { Formapag } from 'src/app/models/formapag';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

    NomeCliente!: string;
    Formapagid!: number;
    formapags!: Formapag[];

    constructor(private pagamentoService: PagamentoService, private formapagService: FormapagService, private router: Router) {}

    ngOnInit(): void {
        this.formapagService.list().subscribe((formpags) => {
            this.formapags = formpags;
            console.table(formpags);
        });
    }

    cadastrarpag(): void {
        let pagamento: Pagamento = {
            NomeCliente: this.NomeCliente,
            Formapagid: this.Formapagid,
        };
        this.pagamentoService.create(pagamento).subscribe((pagamento) => {
            console.log(pagamento);
            this.router.navigate([""]);
        });
    }
}