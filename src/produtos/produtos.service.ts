import { Injectable } from '@nestjs/common';
import { Produto, ProdutoStatus, ProdutosLiquidez } from "./types/Produto-lista";
import { NovoProdutoDto } from './dto/create.product.dto';
import { ulid } from 'ulidx';

const produtos: Produto[] = [{
    id: ulid(),
    nome: 'CDB 2026',
    destinacao: 'Investiemnto X',
    status: ProdutoStatus.DISPONIVEL,
    taxaAdministracao: 1,
    taxaRentabilidade: 15,
    prazoMinimo: 6,
    vencimento: new Date(2025,10,12),
    liquidez: ProdutosLiquidez.SIM
}];

@Injectable()
export class ProdutosService {
    public todos(): Produto[]{
        return produtos;
    }

    public cadastrar(input: NovoProdutoDto){
        const novoProduto = {
            ...input,
            id: ulid(),
            status: ProdutoStatus.DISPONIVEL,
            alternarStatus(){},
            prazoMinimo: 6
        };
        produtos.push(novoProduto);

        return novoProduto;
    }

    public obterPorId(id: string): Produto | undefined {
        const produto = produtos.find((p)=> p.id === id);
        return produto;
    }

    public alternarStatus(idProduto: string): void{
        const produto = this.obterPorId(idProduto);

        if(!produto) return;

        //produto.alternarStatus();
    }

    public remover(idProduto: string): void{
        const indice = produtos.findIndex((p) => p.id == idProduto);

        if(indice === -1) return;

        produtos.splice(indice, 1);
    }
}
