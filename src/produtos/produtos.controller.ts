
import { Controller, Get, Post, Body, Query, NotFoundException, Param, Render } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { NovoProdutoDto } from './types/Produto-lista';

@Controller('api/produtos') 
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/listar') // Endpoint para listar produtos em formato JSON
  public listarProdutos() {
    const produtos = this.produtosService.todos();
    return { produtos }; 
  }

  @Get('/:id') // Endpoint para obter um produto por ID em formato JSON
  public obterProdutoPorId(@Param('id') idProduto: string) {
  const produto = this.produtosService.obterPorId(idProduto);

  if (!produto) {
    throw new NotFoundException(`Produto com ID ${idProduto} não encontrado`);
  }

  return { produto };
}

  /*@Get('/novo')
  @Render('produtos/form')
  public formularioProduto(){
        return;
    }
*/

  @Post('/salvar') 
  public salvarProduto(@Body() input: NovoProdutoDto) {
    const novoProduto = this.produtosService.cadastrar(input);
    return { produto: novoProduto }; 
  }

  @Get('/alternar-status') // Endpoint para alternar o status de um produto em formato JSON
  public alternarStatus(@Query('id') idProduto: string) {
    this.produtosService.alternarStatus(idProduto);
    return { message: 'Status alterado com sucesso' }; 
  }

  @Get('/remover') // Endpoint para remover um produto em formato JSON
  public removerProduto(@Query('id') idProduto: string) {
    this.produtosService.remover(idProduto);
    return { message: 'Produto removido com sucesso' }; 
  }
}
