import { Document } from "mongoose";

export default interface TransactionModel extends Document{
    card_uuid: String,
    initialBalance: Number,
    transportFare: Number,
    date: Date
}