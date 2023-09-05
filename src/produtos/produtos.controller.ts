import { Controller, Get, Post, Body, Query, NotFoundException, Param, HttpStatus } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { NovoProdutoDto } from './dto/create.product.dto';
import { Produto } from './types/Produto-lista';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/produtos') 
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/listar')
  @ApiResponse({status: HttpStatus.CREATED, type: Produto, isArray: true})
  public listarProdutos() {
    const produtos = this.produtosService.todos();
    return { produtos }; 
  }

  @Get('/:id') 
  @ApiResponse({status: HttpStatus.CREATED, type: Produto, isArray: true})
  public obterProdutoPorId(@Param('id') idProduto: string) {
  const produto = this.produtosService.obterPorId(idProduto);

  if (!produto) {
    throw new NotFoundException(`Produto com ID ${idProduto} não encontrado`);
  }
  return { produto };
}

  @Post('/salvar') 
  @ApiResponse({status: HttpStatus.CREATED, type: Produto})
  public salvarProduto(@Body() input: NovoProdutoDto) {
    const novoProduto = this.produtosService.cadastrar(input);
    return { produto: novoProduto }; 
  }

  @Get('/alternar-status') 
  @ApiResponse({status: HttpStatus.CREATED, type: Produto, isArray: true})
  public alternarStatus(@Query('id') idProduto: string) {
    this.produtosService.alternarStatus(idProduto);
    return { message: 'Status alterado com sucesso' }; 
  }

  @Get('/remover') 
  @ApiResponse({status: HttpStatus.CREATED, type: Produto, isArray: true})
  public removerProduto(@Query('id') idProduto: string) {
    this.produtosService.remover(idProduto);
    return { message: 'Produto removido com sucesso' }; 
  }
}
