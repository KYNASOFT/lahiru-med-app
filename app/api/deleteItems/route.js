import { connectMongoDb } from "@/lib/mongoDb";
import Inventory from "@/models/inventory";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try{
    let {itemName} = await req.json();

    //connect to the database
    await connectMongoDb();

    //check if the entry available

    let item = await Inventory.findOne({itemName})
    
    if(item)
    {
        let deletion = await Inventory.findOneAndDelete({itemName});
        if(!deletion){
            return NextResponse.json({
                res:"Deletion failed",ok:false,
                status:401
            })
        }else
        {
            return NextResponse.json({
                res:"Deletion success",ok:true,
                status:201
            })
        }
        
    }
    else{
        return NextResponse.json({
            res:"No such a entry",ok:false,
            status:401
        })

    }}catch(error){
        console.error(error);
    }
}