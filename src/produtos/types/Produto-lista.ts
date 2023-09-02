

export enum ProdutoStatus{
    DISPONIVEL = 'DISPONIVEL',
    INDISPONIVEL = 'INDISPONIVEL'
  }

export enum ProdutosLiquidez{
  SIM = 'SIM',
  NAO = 'NAO'
}
  
  export class Produto {
    id: string;
    nome: string;
    destinacao: string;
    taxaRentabilidade: number;
    taxaAdministracao: number;
    prazoMinimo: Date;
    vencimento: Date;
    status: ProdutoStatus;
    liquidez: ProdutosLiquidez;
  
    constructor() {
      
    }
  
  }
  
  export class NovoProdutoDto{
    nome: string;
    destinacao: string;
    taxaRentabilidade: number;
    taxaAdministracao: number;
    prazoMinimo: Date;
    vencimento: Date;
    status: ProdutoStatus;
    liquidez: ProdutosLiquidez
  }


