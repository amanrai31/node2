import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema({
    name: {
        type: String,
        reuired: true
    },
}, { timestamps: true });

export const Catagory = mongoose.model('Catagory', catagorySchema);