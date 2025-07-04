import express from "express";
import { userRegister,userLogin,getAllUsers,updateUser, deleteUser,updateByCustomId } from '../controllers/userController.js';
const route = express.Router();
route.post("/register" ,userRegister );
route.post("/login" ,userLogin  );
route.get("/users", getAllUsers);
route.put("/update/:_id", updateUser);
route.delete("/delete/:_id", deleteUser);
route.put("/update-using-custom-id/:customId",updateByCustomId);



export default route;