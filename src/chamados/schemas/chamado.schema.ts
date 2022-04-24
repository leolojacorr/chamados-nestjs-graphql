import { Field, Float, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChamadoDocument = Chamado & Document;

@Schema()
@ObjectType()

export class Chamado {
  @Field()
  _id: string;

  @Field(() => String)
  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  @Field(() => String)
  ticketKey: string;

  @Field(() => String)
  @Prop({ default: "ativo" })
  status: string;

  @Field(() => Float)
  @Prop({ default: Date.now() })
  data_criacao: number;

  @Field(() => Float)
  @Prop({ default: Date.now() })
  data_atualizacao: number;
}

export const ChamadoSchema = SchemaFactory.createForClass(Chamado);

//https://youtu.be/uPXlla8gXp0?t=2735
