import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
    card_uuid: String,
    initialBalance: Number,
    transportFare: Number,
    Date: Date
});