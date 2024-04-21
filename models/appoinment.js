import mongoose,{Schema,models} from "mongoose";

const appoinmentSchema = Schema({

    //appoinment schema
    patient_id:{
        type:String,
        required: false
    },
    patientName:{
        type:String,
        required: true
    },
    bookingEmail:{
        type:String,
        required: true
    },
    telephone:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:false
    },
    symptoms:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:false  //we have to make this true
    },
    time:{
        type:String,
        required:false  //true later
    },
    appoinmentNumber:{
        type:Number,
        required:false  //true later
    },
    doctor_id:{
        type:String,
        required:false //true later
    },
    payment_id:{
        type:String,
        required:false
    },
},{timestamps:true});


const Apt = models.Apt || mongoose.model("Apt",appoinmentSchema);

export default Apt;