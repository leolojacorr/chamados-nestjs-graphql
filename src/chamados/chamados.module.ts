import { Module } from '@nestjs/common';
import { ChamadosService } from './chamados.service';
import { ChamadosResolver } from './chamados.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Chamado, ChamadoSchema } from './schemas/chamado.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Chamado.name,
    schema: ChamadoSchema
  }])],
  providers: [ChamadosResolver, ChamadosService]
})

export class ChamadosModule { }
