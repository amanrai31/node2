import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    doctorsList:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Doctor"
        }
    ],
    
},{timestamps:true});

export const Hospital = mongoose.model("Hospital",hospitalSchema);