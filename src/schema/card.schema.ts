import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
    uuid: String,
    owner: String,
    balance: Boolean
});