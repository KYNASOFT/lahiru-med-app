import { connectMongoDb } from "@/lib/mongoDb";
import Staff from "@/models/staff";
import { NextResponse } from "next/server";

export async function POST (req){
  try {
    const {email,name,address,staffType} = await req.json();
    console.log(email);
    //connet to the database
    await connectMongoDb();

    //add data to the schema.
    let staffReq = await Staff.create({
          email,
          name,
          address,
          staffType,
       
    });
    if(staffReq){
        return NextResponse.json({message: "Form Submitted !",ok:true,
        status:201
      })
         
    }
    else{
      return NextResponse.json(
        {message: "An ERROR occurred while filling the form",ok:false,
         status:501
        }
      );
    }    
  } catch (error) {
    return NextResponse.json(
      {message: "An ERROR occurred while filling the form",ok:false,
       status:501
      }
    );
  }
}