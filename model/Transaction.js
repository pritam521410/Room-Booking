import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";

const TransactionSchema = new mongoose.Schema({
    id:{
        type:String,
        default:()=>`user-${uuidv4()}`
    },
    sender:{
        type:String,
        required: true
    },
    receiver:{
     type:String,
     required:true
    },
    payment:{
        type:String,
    },
    paymentid:{
        type:String,
        required:true
    }
})
export default mongoose.model("Transaction" , TransactionSchema);