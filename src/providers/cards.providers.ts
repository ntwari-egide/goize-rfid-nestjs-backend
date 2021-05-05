import { Connection } from 'mongoose';
import { CardSchema } from 'src/schema/card.schema';

export const cardProviders = [
  {
    provide: 'CARD',
    useFactory: (connection: Connection) => connection.model('Card', CardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];