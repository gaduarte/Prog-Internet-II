import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoas/pessoas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import ormconfig from '/ormconfig.json';

@Module({
  imports: [
    PessoaModule,, /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: '',
      synchronize: true,
      logging: true,*/
      // entities: ['dist/**/*.entity{.ts,.js}'],
    //}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
