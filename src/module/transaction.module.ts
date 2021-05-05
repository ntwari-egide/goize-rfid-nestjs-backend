import { transactionProviders } from './../providers/transactions.providers';
import { DatabaseModule } from './../config/database.module';
import { Module } from '@nestjs/common';
import { TransactionServices } from 'src/services/transaction.services';


@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [
    TransactionServices,
    ...transactionProviders,
  ],
})
export class TransactionModule {}