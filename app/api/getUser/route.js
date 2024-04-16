import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        let {userEmail} = await req.json();

        console.log("from the server end recieved ",userEmail);
        //fetch data from database


        //get a userobject



        //pass user to the frontend
        
        return NextResponse.json(
            {res:"Fetch succcess",ok:true},
            {status:201}
        );

    }catch(error){
        console.error(error);

    }
}