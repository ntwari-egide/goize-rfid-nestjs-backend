import { Body, Controller, Get, Post } from '@nestjs/common'
import TransactionModel from 'src/interfaces/transaction.interface';
import { TransactionServices } from 'src/services/transaction.services';


@Controller('/transactions')
export default class TransactionController{
    listOfDoctors : object[]

    constructor(private transactionServices: TransactionServices){
    }

    @Get()
    async findAll(): Promise<TransactionModel[]>{        
        return this.transactionServices.findAll()
    }

    @Post()
    async addDoctor(@Body() transaction: TransactionModel){
        this.transactionServices.create(transaction)
    }
}