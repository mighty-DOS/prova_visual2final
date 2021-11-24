
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagamentoService } from '../../../services/pagamento.service';
import { Pagamento } from 'src/app/models/pagamento'

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
    
    BandeiraCartao!: string;
    FormaPagamento!: string;

    constructor(private pagamentoService: PagamentoService, private router: Router) {}

    ngOnInit(): void {
    }

    cadastrarpag(): void {
        let pagamento: Pagamento = {
            BandeiraCartao: this.BandeiraCartao,
            FormaPagamento: this.FormaPagamento,
        };
        this.pagamentoService.create(pagamento).subscribe((pagamento) => {
            console.log(pagamento);
            this.router.navigate([""]);
        });
    }
}