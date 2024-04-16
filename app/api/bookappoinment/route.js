import { connectMongoDb } from "@/lib/mongoDb";
import Apt from "@/models/appoinment";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try{
        let{email,name,symptoms} = await req.json();
        console.log("From the booking api",email,name,symptoms);

        //connect to the database
        await connectMongoDb();

        //create the appoinment 

        await Apt.create({patientName:name,bookingEmail:email,symptoms});

        return NextResponse.json({
            res:"Succesfully created an appoinment",ok:true,
            status:201
        })

    }catch(error){
        console.error(error);
    }
}