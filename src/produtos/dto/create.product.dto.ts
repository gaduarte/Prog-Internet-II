import { ProdutoStatus } from "../types/Produto-lista";
import { ProdutosLiquidez } from "../types/Produto-lista";
import { ApiProperty } from '@nestjs/swagger';

export class NovoProdutoDto{
    @ApiProperty()
    nome: string;

    @ApiProperty()
    destinacao: string;

    @ApiProperty()
    taxaRentabilidade: number;

    @ApiProperty()
    taxaAdministracao: number;

    @ApiProperty()
    prazoMinimo: number;

    @ApiProperty()
    vencimento: Date;

    @ApiProperty()
    status: ProdutoStatus;

    @ApiProperty()
    liquidez: ProdutosLiquidez
  }