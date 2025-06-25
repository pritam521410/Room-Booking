import Room from "../model/RoomBook.js";

export const  RoomBook = async(req , res)=>{
  const {description, name , place , contact , Price }=req.body;

  try {
    const existingUser = await Room.findOne({contact});
    if(existingUser){
        return res.status(404).json({message:'Room already exist'});
    }
    const room = new Room({description , name , place , contact , Price});
     await room.save();

     res.status(201).json({message:"Room book successfully", room});
  } 
  catch (error) {
    res.status(500).json({message:"server error" ,error :error.message});
  }

}

export const getAllRoom=async(req ,res)=>{
    try {
        const room= await Room.find();
       res.status(200).json({message:"user fetch successfully", room});
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message }); 
    }


}
export const UpdateRoom=async(req , res)=>{
    const{id}=req.params;
    const {description, name , place , contact , Price }=req.body;
   try {
     const room = await Room.findOne(id, {description, name , place , contact , Price} ,{new:true});
        res.status(200).json({message: "data updated", room});
   } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message }); 
   }
}

export const  deleteRoom=async(req, res)=>{
  const{id}=req.params;
 try{
  const room =await Room.findOneAndDelete({id});
  res.status(500).json({message:"delete succcessfully" , room});
 }

 catch{
  res.status(404).json({message:"user not found" , error : error.message});
 }
};

export const getSingleRoom = async(req, res)=>{
    const { id } = req.params;
    try {
        const room = await Room.findOne({ id });
       
        if(!room){
          return res.status(404).json({message:"room not found", room});
        }

         res.status(200).json({message:"user fetch successfully", room});
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message }); 
    }
}