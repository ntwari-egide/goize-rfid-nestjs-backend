import { DatabaseModule } from './../config/database.module';
import { CardServices } from './../services/cards.services';
import { cardProviders } from './../providers/cards.providers';
import { Module } from '@nestjs/common';


@Module({
  imports: [DatabaseModule],
  controllers: [Cardsc],
  providers: [
    CardServices,
    ...cardProviders,
  ],
})
export class CatsModule {}