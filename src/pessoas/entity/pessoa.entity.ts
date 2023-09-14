/*

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pessoa{
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    nome: string;
  
    @Column()
    dataNascimento: Date;
  
    @Column()
    apelido: string;

    @Column("text", { array: true })
    stack: string[];
}

*/

import { ApiProperty } from "@nestjs/swagger";

export class Pessoa{
    @ApiProperty()
    id: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    dataNascimento: Date;

    @ApiProperty()
    apelido: string;

    @ApiProperty()
    stack: string[];
}