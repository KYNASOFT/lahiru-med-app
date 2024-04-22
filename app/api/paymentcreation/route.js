import { connectMongoDb } from "@/lib/mongoDb";
import Payment from "@/models/payments";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
        let{name,email,des,amount,status,payMethod,date} =await req.json();
        
        if(!name || !email || !des || !amount,!status,!payMethod,!date)
        {
            return NextResponse.json({
                res:"Unsuccess entry on payment",ok:false,
                status:401
            })
        }

        //connect to the database
        await connectMongoDb();

        const payReq =await Payment.create({
            customerName:name,
            email:email,
            paymentDescription:des,
            amount:amount,
            status:status,
            methodPay:payMethod,
            date:date,
        })

        if(!payReq){
            return NextResponse.json({
                res:"Unsuccess entry on payment",ok:false,
                status:401
            })
        }
        else{
            return NextResponse.json({
                res:"Success",ok:true,
                status:201
            })
        }

    }catch(error){
        console.error();
    }
}