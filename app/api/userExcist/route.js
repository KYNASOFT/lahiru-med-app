import { connectMongoDb } from "@/lib/mongoDb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(req,res)
{
    try{
        let {email} = await req.json();
        await connectMongoDb();

        const user =await User.findOne({email}).select("_id");

        return NextResponse.json({user});

    }
    catch(error){
        console.error("From userExcist routejs - " + error);
    }
     
}