import { connectMongoDb } from "@/lib/mongoDb";
import Inventory from "@/models/inventory";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
        let {itemName,qty} = await req.json();
        console.log("From the item-add api servre",itemName,qty);

        //connecting to  the database
        await connectMongoDb();

        let available = await Inventory.findOne({itemName});

        if(available){
            let newQty = parseInt(available.qty) + parseInt(qty);
            available.qty = newQty;
            available.save(); //update 
            return NextResponse.json({
                res:"Item added",ok:true,
                status:201})
        }
        else{
            //adding data to the schema 
            let dataRes = await Inventory.create({itemName,qty});

            if(dataRes){
                return NextResponse.json({
                res:"Item added",ok:true,
                status:201
            })
            }
            else{
            return NextResponse.json({
                res:"Item not added",ok:false,
                statusbar:501
            })
            }

        }
        
    }
    catch(error){
        console.error(error);
    }

}