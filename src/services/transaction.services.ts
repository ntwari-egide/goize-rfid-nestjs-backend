import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import TransactionModel from 'src/interfaces/transaction.interface';

@Injectable()
export class TransactionServices {
  constructor(
    @Inject('CARD')
    private transactionModel: Model<TransactionModel>,
  ) {}

  async create(createTransaction: TransactionModel): Promise<TransactionModel> {
    const createdTransaction = new this.transactionModel(createTransaction);
    return createdTransaction.save();
  }

  async findAll(): Promise<TransactionModel[]> {
    return this.transactionModel.find().exec();
  }

  async findUpdate(id: String){
    this.transactionModel.findByIdAndUpdate(id).exec()
  }

  async findByUUID(uuid: String): Promise<TransactionModel> {
      return this.transactionModel.findOne({uuid: uuid}).exec();
  }
}