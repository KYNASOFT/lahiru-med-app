import { connectMongoDb } from "@/lib/mongoDb";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try{
        let {email,specialty} = await req.json();
        console.log("from doctor main api",email,specialty);
        //connect to mongo db
        await connectMongoDb();

        //add details to the database
        if(email && specialty)
        {
            await Doctor.create({email,specialty});

            let doc = await Doctor.findOne({email});
            if(doc){
                return NextResponse.json({
                    res:"Doctor speciality added successfully",ok:true,
                    status: 201
                })
            }
        }
        else
        {
            return NextResponse.json({
                res:"Doctor speciality not added",ok:false,
                status:401
            })
        }
    }
    catch(error){
        console.error(error);
    }
}