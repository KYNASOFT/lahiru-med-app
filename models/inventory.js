import mongoose, { Schema, models } from "mongoose";


const  inventorySchema = Schema({

    // create inventory schema
    itemName:
    {
        type:String,
        required: true
    },
    qty:
    {
        type:Number,
        required:true
    },


},
{timestamps:true}
);

const Inventory= models.Inventory || mongoose.model("Inventory",inventorySchema);

export default Inventory;