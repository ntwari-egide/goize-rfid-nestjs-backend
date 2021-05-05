import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import CardModel from 'src/interfaces/card.interface';
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

  async findByUUID(): Promise<CardModel> {
    return null
  }
}