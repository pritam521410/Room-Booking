import mongoose from "mongoose";
async function connectDb(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb database Conneccted Successfully");
};
 export default connectDb;
 