import express from "express";
import {MakeTransaction,GetAlltransaction,Deletetransaction,singleTransaction} from "../controllers/TransactionController.js";

const route=express.Router();

route.post("/payment" ,MakeTransaction);
route.get("/payment-detail", GetAlltransaction);
route.delete("/delete-payment/:id" ,Deletetransaction );
route.get("/single-payment-detail/:id" ,singleTransaction);
export default route;

