import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChamadoInput {
  @Field(() => String)
  descricao: string;

  @Field(() => String)
  ticketKey: number;

  @Field(() => String)
  status: string;
}
