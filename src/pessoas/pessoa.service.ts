import { Injectable } from '@nestjs/common';
import { Pessoa } from './entity/pessoa.entity';
import { ulid } from 'ulidx';
import { NovaPessoaDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const pessoas: Pessoa[] = [{
    id: ulid(),
    nome: 'Pessoa 1',
    dataNascimento: new Date(2000-9-17),
    apelido: 'pe',
    stack: ['exemplo']
}];

@Injectable()
/*
export class DbService {
    constructor (
        @InjectRepository(Pessoa)
        private pessoaRepository: Repository<Pessoa>,
    ){}
    async persistirPessoa(pessoa: Pessoa): Promise<Pessoa>{
        return this.pessoaRepository.save(pessoa);
    }
}
*/
export class PessoaService {
    public todos(): Pessoa[]{
        return pessoas;
    }

    public cadastrar(input: NovaPessoaDto){
        const novaPessoa = {
            ...input,
            id: ulid(),
        };
        pessoas.push(novaPessoa);

        return novaPessoa;
    }

    public obterPorId(id: string): Pessoa | undefined{
        const pessoa = pessoas.find((p)=> p.id === id);
        return pessoa;
    }

    public async obterPessoaPorTermo(termo: string): Promise<any[]> {
        return new Promise<any[]>((resolve) => {
            termo = termo.toLowerCase();
            const resultados: any[] = [];
    
            for (const pessoa of pessoas) {
                const apelidoLowerCase = pessoa.apelido.toLowerCase();
                const nomeLowerCase = pessoa.nome.toLowerCase();
                const stackLowerCase = pessoa.stack.map(elemento => elemento.toLowerCase());
    
                if (
                    apelidoLowerCase.includes(termo) ||
                    nomeLowerCase.includes(termo) ||
                    stackLowerCase.some(elemento => elemento.includes(termo))
                ) {
                    resultados.push(pessoa);
                }
    
                if (resultados.length >= 50) {
                    break;
                }
            }
    
            resolve(resultados);
        });
    }    

    public contarPessoasDisponiveis(): number {
        return pessoas.length;
    }

    public remover(idPessoa: string): void{
        const indice = pessoas.findIndex((p)=> p.id === idPessoa);

        if(indice === -1) return;

        pessoas.splice(indice, 1);
    }
}
