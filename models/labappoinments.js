import mongoose, { Schema, models } from "mongoose";


const  labAppoinmentSchema = Schema({

    
    testType:
    {
        type:String,
        required: true
    },
    patient:
    {
        type:String,
        required:true
    },
    appoinmentNumber:
    {
        type:String,
        required:false
    },
    doctorName:
    {
        type:String,
        required:false
    },
    date:{
        type:Date,
        required:true
    }


},
{timestamps:true}
);

const LabApt= models.LabApt || mongoose.model("LabApt",labAppoinmentSchema);

export default LabApt;