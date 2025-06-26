import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";
const roomSchema = new mongoose.Schema({
    id:{
        type:String,
        default:()=>`user-${uuidv4()}`
    },
  description:{
        type:String,
        required:true
    },
    name :{
         type:String,
         required:true
    },
    place:{
        type:String,
    },
    contact:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required: true
    },
    bedType:{
        type:String,   
    },
    facility:{
        type :String,
    }
  

}, {timestamps:true});

export default mongoose.model("Room", roomSchema);