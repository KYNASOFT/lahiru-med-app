import { connectMongoDb } from "@/lib/mongoDb";
import LabApt from "@/models/labappoinments";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
         
        let {name} = await req.json();
        //connect to the database
        await connectMongoDb();
        
        
        let labR = await LabApt.find();
        if(!labR){
            return NextResponse.json({
                res:"unsuccess fetch",ok:false,
                status:501
            })
        }
        else{
            console.log(labR);
            return NextResponse.json({labR});
        }
        
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            res:"unsuccess fetch",ok:false,
            status:501
        })
    }
}