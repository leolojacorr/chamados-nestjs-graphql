import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChamadosService } from './chamados.service';
import { Chamado } from './schemas/chamado.schema';
import { CreateChamadoInput } from './dto/create-chamado.input';
import { UpdateChamadoInput } from './dto/update-chamado.input';


@Resolver(() => Chamado)
export class ChamadosResolver {
  constructor(private readonly chamadosService: ChamadosService) { }

  @Mutation(() => Chamado)
  createChamado(@Args('createChamadoInput') createChamadoInput: CreateChamadoInput) {
    return this.chamadosService.create(createChamadoInput);
  }

  @Query(() => [Chamado], { name: 'chamados' })
  findAll() {
    return this.chamadosService.findAll();
  }

  @Query(() => Chamado, { name: 'chamado' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.chamadosService.findOne(_id);
  }

  @Mutation(() => Chamado)
  updateChamado(@Args('updateChamadoInput') updateChamadoInput: UpdateChamadoInput) {
    return this.chamadosService.update(updateChamadoInput._id, updateChamadoInput);
  }

  @Mutation(() => Chamado)
  removeChamado(@Args('_id', { type: () => String }) _id: string) {
    return this.chamadosService.remove(_id);
  }
}
