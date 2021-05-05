import { CardServices } from './../services/cards.services';
import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import CardModel from 'src/interfaces/card.interface';


@Controller('/cards')
export default class CardsController{
    listOfDoctors : object[]

    constructor(private cardServices: CardServices){
    }

    @Get()
    async findAll(): Promise<CardModel[]>{        
        return this.cardServices.findAll()
    }

    @Post()
    async addDoctor(@Body() card: CardModel){
        this.cardServices.create(card)
    }
}