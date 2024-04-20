import mongoose, { Schema, models } from "mongoose";


const  doctorSchema = Schema({

    // create user schema
    email :
    {
        type:String,
        required: true
    },
    specialty:
    {
        type:String,
        required:true
    },


},
{timestamps:true}
);

const Doctor= models.Doctor || mongoose.model("Doctor",doctorSchema);

export default Doctor;
