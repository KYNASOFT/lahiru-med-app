import mongoose, { Schema, models } from "mongoose";


const  userSchema = Schema({

    // create user schema
    email :
    {
        type:String,
        required: true
    },
    userType:
    {
        type:String,
        required: true
    },
    password:
    {
        type:String,
        required:true
    },
    username:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    telephone:{
        type:String,
        required:false
    },
    bloodtype:{
        type:String,
        required:false
    },
    nic:{
        type:String,
        required:false
    },
    profession:{
        type:String,
        required:false
    },
    bio:{
        type:String,
        required:false
    }


},
{timestamps:true}
);

const User = models.User || mongoose.model("User",userSchema);

export default User;
