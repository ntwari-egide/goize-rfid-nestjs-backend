import { Double } from "mongodb";
import { Document } from "mongoose";

export default interface CardModel extends Document{
    uuid: String,
    owner: String,
    balance: Double,
}