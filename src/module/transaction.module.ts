import { DatabaseModule } from './../config/database.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [
    CardServices,
    ...cardProviders,
  ],
})
export class TransactionModule {}