import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";
const userSchema = new mongoose.Schema({
    id:{
        type:String,
        default:()=>`user-${uuidv4()}`
    },
    name:{
        type:String,
        required:true

    },
    userid:{
        type:String,

    },
    phone:{
        type:Number,
    },
     email:{
        type:String,
        required:true

     },
     password:{
        type:String,
        required:true
     }
})
export const User=mongoose.model("User" ,userSchema);


