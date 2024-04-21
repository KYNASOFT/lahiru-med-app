//this will update user table with doctor details
import { connectMongoDb } from "@/lib/mongoDb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req,res){

    try{
        let {email,name,contactNo,bio} = await req.json();

        //connection to the database
        await connectMongoDb();

        //save the updates

        let user = await User.findOne({email});
        if(user){
            user.username = name,
            user.telephone = contactNo,
            user.bio = bio

            await user.save();
            return NextResponse.json({
                res:"Updated the doctor details",ok:true,
                status:201 
            })
        }
        else{

            return NextResponse.json({
                res:"Update unsuccess",ok:false,
                status:501
            })
        }
        

    }
    catch(error)
    {
        console.error(error);
    }


}