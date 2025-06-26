import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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
}, {timestamps: true}
);
userSchema.pre("save",async function(next) {
    if(!this.isModified("password"))
       return next();
    try {
        const salt= await bcrypt.genSalt(10);
        this.password= await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
       next(error);
    }
})

export default mongoose.model("User" ,userSchema);


