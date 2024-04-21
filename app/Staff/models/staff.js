import mongoose, { Schema } from "mongoose";

const StaffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export const Staff =
    mongoose.models.Staff || mongoose.model('Staff', StaffSchema)