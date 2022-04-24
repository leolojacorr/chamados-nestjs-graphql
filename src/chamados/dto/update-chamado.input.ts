import { CreateChamadoInput } from './create-chamado.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChamadoInput extends PartialType(CreateChamadoInput) {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  descricao: string;

  @Field(() => String)
  status: string;
}
