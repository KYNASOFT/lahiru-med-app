import { connectMongoDb } from "@/lib/mongoDb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req,res){

    try{
        let{email,username,age,address,tel,bloodtype,nic,profession} = await req.json();
        console.log("From the api ",email,username,age,address,tel,bloodtype,nic,profession);

        //connect to the database
        await connectMongoDb();
   
        //add to the user  
        const user = await User.findOne({email});
        console.log("From the patient details api -" ,user);
        if(user){
            user.username = username;
            user.age = parseInt(age);
            user.address = address;
            user.telephone =tel;
            user.bloodtype = bloodtype;
            user.nic =nic;
            user.profession =profession;
            
            await  user.save();
            return NextResponse.json(
                {res:"Added the data to database",ok:true},
                {status:201}
            );
        }
        else{
            return NextResponse.json(
                {res:"Data is not added to the database",ok:false},
                {status:501}
            );
        }

        
    }
    catch(error){
        console.error(error);
    }
}