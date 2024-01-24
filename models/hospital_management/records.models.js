import mongoose from "mongoose";

const recordsSchema = new mongoose.Schema({
    
},{timestamps:true});

export const Record = mongoose.model("Record",recordsSchema);