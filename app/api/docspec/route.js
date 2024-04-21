import { connectMongoDb } from "@/lib/mongoDb";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{

        //get request
        let {email} = await req.json();

        //connect
        await connectMongoDb();
        
        //fetch
        if(email){
            let docRes = await Doctor.findOne({email});

            if(docRes){
                return NextResponse.json({docRes});
            }
            else{
                return null;
            }
        }
    }catch(error){
        console.error(error);
        return null;
    }
}