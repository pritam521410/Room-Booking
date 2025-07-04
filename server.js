import express from "express";
import mongoose from "mongoose";
import connectDb from "./db.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import RoomRoute from "./routes/RoomRoute.js";
import TransactionRoute from "./routes/TransactionRoute.js";


dotenv.config();
const app=express();
app.use(express.json());
const PORT=process.env.PORT|| 3000;
connectDb();


app.use("/api", userRoute);
app.use("/apiroom",RoomRoute );
app.use("/apitransaction" ,TransactionRoute);



app.listen(PORT, ()=>{
    console.log("app is Listening port 3000");
});
