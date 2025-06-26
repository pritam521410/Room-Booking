import Transaction from "../model/Transaction.js";

export const MakeTransaction = async(req , res)=>{
    const {sender , receiver , payment, paymentid}=req.body;

    try {
       const samepaymentid=await Transaction.findOne({paymentid});
       if(samepaymentid){
       return res.status(404).json({message: "already payment done"});
       }
     const  transaction= new Transaction({sender , receiver , payment, paymentid});
     await transaction.save();
     res.status(201).json({ message: 'Payment successfull', transaction });

    } catch (error) {
       res.status(500).json({message:"server error" ,error:error.message});
    }
}

export const GetAlltransaction =async(req, res)=>{
    const{paymentid,startDate, endDate}=req.query;
    try{
         const filter = {};
          if(paymentid)
          {
            filter.paymentid = new RegExp(paymentid, "i");
           
          }
          if(startDate && endDate){
            const start = new Date(`${startDate} 00:00:00`);
            const end = new Date(`${endDate} 23:59:59`);
            filter.createdAt={
               $gte: start,
               $lte: end 
            }
          }
          const transaction = await Transaction.find(filter);
          res.status(200).json({message:"Transaction fetch successfully", transaction});
        const paymentdetail= await Transaction.find();
        res.status(200).json({message: "all payment detail", paymentdetail});
    }
    catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
}
export const Deletetransaction = async(req, res) => {
    const { id } = req.params;
    try {
       const transaction =await Transaction.findOneAndDelete({id});
        if (!transaction) {
            return  res.status(404).json({ message: "Transaction not found" });
        }
        res.status(200).json({ message: "Deleted successfully", transaction });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const singleTransaction=async(req ,res)=>{
    const{ id }= req.params;
    try {
        const transaction = await  Transaction.findOne({id});
        if(!transaction){
           return  res.status(500).json({message:"Transaction not found"})
        }
        res.status(200).json({message:"single room detail ", transaction});
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
        
    }
}