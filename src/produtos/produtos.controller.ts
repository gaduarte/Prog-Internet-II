import { Controller, Get, Redirect, Render, Post, Body, Query } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { NovoProdutoDto } from './types/Produto-lista';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/listar')
  @Render('produtos/listar')
    public listarProdutos(){
        return { produtos: this.produtosService.todos() };
    };

    @Get('/novo')
    @Render('produtos/form')
    public formularioProduto(){
        return;
    }

    @Post('/salvar')
    @Redirect('/produtos/listar')
    public salvarProduto(@Body() input: NovoProdutoDto){
        this.produtosService.cadastrar(input);
    }


    @Get('/alternar-status')
    @Redirect('/produtos/listar')
    public alternarStatus(@Query('id') idProduto: string){
        this.produtosService.alternarStatus(idProduto);
        return;
    }

    @Get('/remover')
    @Redirect('/produtos/listar')
    public removerProduto(@Query('id') idProduto: string){
        this.produtosService.remover(idProduto);
    }

}
