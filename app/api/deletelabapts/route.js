import LabApt from "@/models/labappoinments";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
        let {id} = await req.json();

        let excist  = await LabApt.findOne({_id:id});

        if(excist)
        {
            let deletion = await LabApt.findOneAndDelete({_id:id});

            if(!deletion)
            {
                return NextResponse.json({
                    res:"Deletion success", ok:false,
                    status:501
                })
            }
            return NextResponse.json({
                res:"Deletion success", ok:true,
                status:201
            })
        }

    }catch(error){
        console.error(error);
        return NextResponse.json({
            res:"Deletion success", ok:false,
            status:501
        })
    }
}