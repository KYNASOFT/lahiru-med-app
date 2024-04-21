import { connectMongoDb } from "@/lib/mongoDb";
import Apt from "@/models/appoinment";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
    let{name} = await req.json();

    console.log("From the appoinment end -",name);
    
    await connectMongoDb();

    if(name){
        let apts = await Apt.find();
        if(apts){
            return NextResponse.json({apts});
        }
        else{
            return NextResponse.json({
                res:"Data fetch unsucess",ok:false,
                status:401
            })
        }
    }
    else{

        return NextResponse.json({
            res:"Data fetch unsucess",ok:false,
            status:401
        })

    }}catch(error){
        console.error(error);
    }
    
}