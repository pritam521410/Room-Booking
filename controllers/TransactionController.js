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
    try{
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