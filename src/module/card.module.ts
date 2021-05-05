import { DatabaseModule } from './../config/database.module';
import { CardServices } from './../services/cards.services';
import { cardProviders } from './../providers/cards.providers';
import { Module } from '@nestjs/common';
import CardsController from 'src/controllers/card.controllers';


@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [
    CardServices,
    ...cardProviders,
  ],
})
export class CardsModule {}