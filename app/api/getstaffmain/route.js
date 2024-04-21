import { connectMongoDb } from "@/lib/mongoDb";
import { NextResponse } from "next/server";
import Staff from "@/models/staff";

export async function POST(req,res){

    try{
        let {email} = await req.json();
        
        //connect to the database
        await connectMongoDb();

        let staff = await Staff.findOne({email});

        console.log(staff);
        if(staff){
            return NextResponse.json({
                staff
            })           
        }
        else{

            return NextResponse.json({
                res:"not found",ok:false,
                status:401
            })
        }

    }catch(error){
        console.error(error);
        return NextResponse.json({
            res:"not found",ok:false,
            status:201
        })
    }

}