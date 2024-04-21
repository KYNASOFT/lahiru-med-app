import mongoose, { Schema, models } from "mongoose";


const  staffSchema = Schema({

    // create user schema
    email :
    {
        type:String,
        required: true
    },
    name:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    },
    staffType:
    {
        type:String,
        required:true
    },

},
{timestamps:true}
);

const Staff= models.Staff || mongoose.model("Staff",staffSchema);

export default Staff;