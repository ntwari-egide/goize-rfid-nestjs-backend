import { TransactionSchema } from './../schema/transaction.schema';
import { Connection } from 'mongoose';

export const transactionProviders = [
  {
    provide: 'TRANSACTION',
    useFactory: (connection: Connection) => connection.model('Transaction', TransactionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];