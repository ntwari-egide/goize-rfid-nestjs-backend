import { CardsModule } from './module/card.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './module/transaction.module';

@Module({
  imports: [CardsModule,TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
