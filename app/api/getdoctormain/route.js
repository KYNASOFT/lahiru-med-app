import { connectMongoDb } from "@/lib/mongoDb";
import { NextResponse } from "next/server";
import Doctor from "@/models/doctor";
import User from "@/models/user";

export async function POST(req,res){

    try{
        let {specialty} = await req.json();
        console.log(specialty);
        //connect to the database
        await connectMongoDb();

        let docBySpec = await Doctor.find({specialty});

        console.log(docBySpec);
        if(docBySpec){
            return NextResponse.json({
                docBySpec
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