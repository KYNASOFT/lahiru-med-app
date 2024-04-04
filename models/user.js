import mongoose, { Schema, models } from "mongoose";


const  userSchema = Schema({

    // create user schema
    email :
    {
        type:String,
        required: true
    },
    password:
    {
        type:String,
        required:true
    }

},
{timestamps:true}
);

const User = models.User || mongoose.model("User",userSchema);

export default User;
