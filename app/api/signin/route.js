import { connectMongoDb } from "@/lib/mongoDb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req,res)
{
    try{

        let {email,password} = await req.json();
        console.log("sign in route console recieved - "+email+" "+password);


        await connectMongoDb();

        const user = await User.findOne({email}).select("password");
    
       
        console.log("From the post method" + user.password);
        
        const match = await bcrypt.compare(password,user.password);
         
        console.log("From server match pass = " + match);
        
        if(match)
        {
            return NextResponse.json(
                {res: JSON.stringify(user),ok:true},
                {status:201}
            )

        }
        
        return NextResponse.json(
            {res:"The credintials not verified",ok:false},
            {status:501}
        )
        

        
    }
    catch(error){
        console.warn(error)
    }
}