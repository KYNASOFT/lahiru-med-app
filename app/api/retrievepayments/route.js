import { connectMongoDb } from "@/lib/mongoDb";
import Payment from "@/models/payments";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
        
        //connect to the database
        await connectMongoDb();

        const details =await Payment.find({})

        if(!details){
            return NextResponse.json({
                res:"Unsuccess entry on payment",ok:false,
                status:401
            })
        }
        else{
            return NextResponse.json({details})
        }

    }catch(error){
        console.error();
    }
}