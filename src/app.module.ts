import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ChamadosModule } from './chamados/chamados.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/chamados", {
      dbName: 'data',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>
      ({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
    ChamadosModule,
  ],
  providers: [],
})

export class AppModule { }
