import { connectMongoDb } from "@/lib/mongoDb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req,res) 
{

    let {email,repass} = await req.json();
    console.log("From the server end",email,repass);

    //hashing the password using bcrypt
    const hashedPassword = await bcrypt.hash(repass,10)

    //connecting to the database 
    await connectMongoDb();
    //create a new user
    await User.create({email,password: hashedPassword});


    if(!email || !repass)
    {
        return NextResponse.json(
            {error : 'required field not found', ok:false},
            {status: 400}
        );
    }

    return NextResponse.json(
        {res: "The credential verified user created",ok:true},
        {status:201}
    );

}


