import { connectMongoDb } from "@/lib/mongoDb";
import LabApt from "@/models/labappoinments";
import { NextResponse } from "next/server";

export async function POST (req){
  try {
    const {TestType, Pname, number, DrName, Date} = await req.json();

    //connet to the database
    await connectMongoDb();

    //add data to the schema.
    let labReq = await LabApt.create({
          testType:TestType,
          patient:Pname,
          appoinmentNumber:number,
          doctorName:DrName,
          date:Date,
       
    });
    if(labReq){
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