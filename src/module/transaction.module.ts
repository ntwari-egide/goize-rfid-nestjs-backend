import { transactionProviders } from './../providers/transactions.providers';
import { DatabaseModule } from './../config/database.module';
import { Module } from '@nestjs/common';
import { TransactionServices } from 'src/services/transaction.services';
import TransactionController from 'src/controllers/transaction.controllers';


@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [
    TransactionServices,
    ...transactionProviders,
  ],
})
export class TransactionModule {}