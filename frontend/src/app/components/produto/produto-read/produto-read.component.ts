import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.modelo';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[]
  displayedColumns = ['id', 'nome', 'preco', 'acoes']

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

}
