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
    bandeira: string;
    formapag: string;

    constructor(
        private router: Router,
        private PagamentoService: PagamentoService,
    ) {}

    ngOnInit(): void {
    }

    cadastrar(): void {
        let pagamento: Pagamento = {
            BandeiraCartao: this.bandeira,
            FormaPagamento: this.formapag
        };
        this.PagamentoService.create(pagamento).subscribe((pagamento) => {
            console.log(pagamento);
            this.router.navigate([""]);
        });
    }
}
