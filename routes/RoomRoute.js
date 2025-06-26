import express from "express";
import{RoomBook , getAllRoom , UpdateRoom,deleteRoom ,getSingleRoom} from "../controllers/roomController.js";

const route = express.Router();
route.post("/book" ,RoomBook);
route.get("/users",getAllRoom  );
route.put("/update/:id",  UpdateRoom);
route.delete("/delete/:id" ,deleteRoom);
route.get("/single-room",getSingleRoom)
export default route;