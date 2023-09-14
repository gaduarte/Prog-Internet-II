import { Module } from '@nestjs/common';
import {/*DbService */ PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
//import { DatabaseModule } from './db/database.module';
//import { PessoaRepository } from './db/pessoa.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 /* imports: [DatabaseModule, TypeOrmModule.forFeature([PessoaRepository])]*/
  controllers: [PessoaController],
  providers: [PessoaService /*, DbService */],
})
export class PessoaModule {}

