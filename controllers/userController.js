import {User} from "../model/user.js";

export const userRegister = async (req, res) => {
  const { name, email, password,userid, phone } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(404).json({ message: 'User already registered' });
    }

    const user = new User({ name, email,userid, password, phone });
    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const userLogin = async(req,res) =>{
   const {email , password} = req.body;
   try{
       const user=await User.findOne({email});
       if(!user){
         return res.status(404).json({message:"User not found"});
       }
       if(password != user.password){
         return res.status(404).json({message:"incorrect password"});
       }
       return res.status(200).json({message:"User loggedin successfully"});
   }catch(err){
    return res.status(500).json({message:"Internal error"})
   }
}


export const getAllUsers = async(req, res)=>{
  const {name, email, startDate , endDate} = req.query;
  
try{
  const filter = {};
  if(name)
  {
    filter.name = new RegExp(name, "i");
   
  }
  if(email)
  {
    filter.email = email;
  }
  if(startDate && endDate){
    const start = new Date(`${startDate} 00:00:00`);
    const end = new Date(`${endDate} 23:59:59`);
    filter.createdAt={
      $gte: start,
      $lte: end
    }
  }
  const user = await User.find(filter);
  res.status(200).json({message:"user fetch successfully", user});
  
}
catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
};

export const updateUser=async(req, res)=>{
  const {_id}=req.params;
  const {name}=req.body;

  try{
    const user = await User.findByIdAndUpdate(_id, {name} ,{new:true});
    res.status(200).json({message: "data updated", user});
  }catch{
    res.status(404).json({message:"not user found" ,error: error.message});
  }

  
};

export const  deleteUser=async(req, res)=>{
  const{_id}=req.params;
 try{
  const user =await User.findByIdAndDelete(_id);
  res.status(500).json({message:"delete succcessfully" , user})
 }

 catch{
  res.status(404).json({message:"user not found" , error : error.message});
 }
};
  

