
import { connectMongoDb } from "@/lib/mongoDb";
import Inventory from "@/models/inventory";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
    let{name} = await req.json();

    console.log("From the itemreciver end -",name);
    
    await connectMongoDb();

    if(name){
        let items = await Inventory.find();
        if(items){
            return NextResponse.json({items});
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