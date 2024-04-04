import mongoose from "mongoose";


export const connectMongoDb = async() =>
{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to lmc database - online")
    }
    catch(error)
    {
        console.log("database offline " + error);
    }
}