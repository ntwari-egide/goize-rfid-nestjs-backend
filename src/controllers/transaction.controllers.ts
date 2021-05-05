import { Body, Controller, Get, Post } from '@nestjs/common'
import TransactionModel from 'src/interfaces/transaction.interface';
import { CardServices } from 'src/services/cards.services';
import { TransactionServices } from 'src/services/transaction.services';


@Controller('/transactions')
export default class TransactionController{
    listOfDoctors : object[]

    constructor(private transactionServices: TransactionServices,private cardServices: CardServices){
    }

    @Get()
    async findAll(): Promise<TransactionModel[]>{        
        return this.transactionServices.findAll()
    }

    @Post()
    async addDoctor(@Body() transaction: TransactionModel){
        const card =  this.cardServices.findByUUID(transaction.card_uuid)
        this.transactionServices.create(transaction)
    }
}