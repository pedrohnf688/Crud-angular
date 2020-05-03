import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.modelo';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: null
  };

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto criado!');
      this.router.navigate(['/produtos']);
    })
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}
