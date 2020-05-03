import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.modelo';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto

  constructor(private router: Router, 
              private produtoService: ProdutoService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe(produto => {
      this.produto = produto
    });
  }

  deleteProduto(): void {
    this.produtoService.delete(`${this.produto.id}`).subscribe(() => {
    this.produtoService.showMessage('Produto excluido com sucesso!');
    this.router.navigate(['produtos']);
  });
  }

  cancel(): void {
    this.router.navigate(['produtos']);
  }

}
