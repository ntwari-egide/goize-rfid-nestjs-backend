import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import CardModel from 'src/interfaces/card.interface';

@Injectable()
export class CardServices {
  constructor(
    @Inject('CARD')
    private cardModel: Model<CardModel>,
  ) {}

  async create(createCard: CardModel): Promise<CardModel> {
    const createdCat = new this.cardModel(createCard);
    return createdCat.save();
  }

  async findAll(): Promise<CardModel[]> {
    return this.cardModel.find().exec();
  }

  async findUpdate(id: String){
    this.cardModel.findByIdAndUpdate(id).exec()
  }

  async findByUUID(uuid: String): Promise<CardModel> {
      return this.cardModel.findOne({uuid: uuid}).exec();
  }
}