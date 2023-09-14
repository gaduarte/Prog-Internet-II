import { ApiProperty } from "@nestjs/swagger";

export class NovaPessoaDto{
    @ApiProperty()
    nome: string;

    @ApiProperty()
    dataNascimento: Date;

    @ApiProperty()
    apelido: string;

    @ApiProperty()
    stack: string[];
}