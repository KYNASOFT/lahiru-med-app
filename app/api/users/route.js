import { NextResponse } from "next/server";

export async function POST(req,res) 
{

    let {email,repass} = await req.json();
    console.log("From the server end",email,repass);

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


