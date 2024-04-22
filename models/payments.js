import mongoose, { Schema, models } from "mongoose";


const  paymentSchema = Schema({

    // create payment schema
    customerName:
    {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    paymentDescription:
    {
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    methodPay:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},
{timestamps:true}
);

const Payment= models.Payment || mongoose.model("Payment",paymentSchema);

export default Payment;