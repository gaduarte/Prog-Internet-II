import { Controller, Get, Post, Put, Body, Query, Param, HttpStatus } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { ApiResponse } from '@nestjs/swagger';
import { Pessoa } from './entity/pessoa.entity';
import { NovaPessoaDto } from './dto/create-product.dto';
//import { DbService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService/*, private readonly dbService: DbService*/) {}

    @Get('/listar-pessoas')
    @ApiResponse({status: 200, type: Pessoa, isArray: true})
    @ApiResponse({status: 422, description: 'Unprocessable Entity/Content'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    public listarPessoas(){
      const pessoas = this.pessoaService.todos();
      return {pessoas};
    }

    @Get('/:id')
    @ApiResponse({status: 200, description: 'Pessoa Encontrada'})
    @ApiResponse({status: 404, description: 'Pessoa não Encontrada'})
    public obterPessoaPorId(@Param('id') idPessoa: string){
      const pessoa = this.pessoaService.obterPorId(idPessoa);
    }

    @Get('/pessoas?t=:')
    @ApiResponse({status: 200, type: Pessoa, isArray: true})
    @ApiResponse({status: 400, description: 'Bad Request'})
    public obterPessoaPorTermo(@Query('t') termo: string): Promise<Pessoa[]>{
      const results = this.pessoaService.obterPessoaPorTermo(termo);
      return results;
    }

    @Get('/contagem-pessoa')
    @ApiResponse({status: 200})
    async obterContagemPessoa(): Promise<{contagem: number}>{
      const contagem = this.pessoaService.contarPessoasDisponiveis();
      return {contagem};
    }

    @Post('/salvar') 
   @ApiResponse({status: HttpStatus.CREATED, type: Pessoa})
    public salvarProduto(@Body() input: NovaPessoaDto) {
      const novoProduto = this.pessoaService.cadastrar(input);
      return { produto: novoProduto }; 
  }

    /*
    @Post('/salvar')
    async salvarPessoa(@Body() input: NovaPessoaDto): Promise<Pessoa> {
      const novaPessoa = await this.pessoaService.cadastrar(input);

      const pessoaPersistida = await this.dbService.persistirPessoa(novaPessoa);

      return pessoaPersistida;
    }
*/

    @Get('/remover')
    @ApiResponse({status: 204, description: 'Remoção de Pessoa Cadastrada'})
    public removerPessoa(@Query('id') idPessoa: string){
      this.pessoaService.remover(idPessoa);
      return {message: 'Removido com sucesso!'}
    }
  
}
