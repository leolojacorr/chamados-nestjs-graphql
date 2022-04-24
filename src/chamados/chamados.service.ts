import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChamadoInput } from './dto/create-chamado.input';
import { UpdateChamadoInput } from './dto/update-chamado.input';
import { Chamado, ChamadoDocument } from './schemas/chamado.schema';
import { Model } from 'mongoose';

//CRUD
@Injectable()
export class ChamadosService {

  constructor(
    @InjectModel(Chamado.name) private readonly chamadoModel: Model<ChamadoDocument>,
  ) { }

  create(createChamadoInput: CreateChamadoInput) {
    return this.chamadoModel.create(createChamadoInput);
  }

  findAll() {
    return this.chamadoModel.find().exec();
  }

  findOne(_id: string) {
    return this.chamadoModel.findById(_id).exec();
    //exec retorna um promise
  }

  update(_id: string, updateChamadoInput: UpdateChamadoInput) {
    // return this.chamadoModel.findByIdAndUpdate(id, updateChamadoInput, { new: true }).exec();
    return this.chamadoModel.findByIdAndUpdate(_id, updateChamadoInput).exec();
  }

  remove(_id: string) {
    return this.chamadoModel.findByIdAndRemove(_id).exec();
  }
}
