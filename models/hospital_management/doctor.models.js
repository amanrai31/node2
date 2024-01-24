import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    speciality:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    worksIn:{                                   // List of all hospitals,he works in
      type: mongoose.Schema.Types.ObjectId,
      ref:"Hospital",
      required:true
    },
    experience:{
      type:Number,
      default:0
    }
},{timestamps:true});

export const Doctor = mongoose.model("Doctor",doctorSchema);