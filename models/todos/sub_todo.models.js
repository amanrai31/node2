import mongoose from "mongoose";

const subTodoSchema= new mongoose.Schema({
content:{
    type:String,
    required: true,
},
complete:{
    type:Boolean,
    default: false
}
},{timestamps:true});

export const Subtodo = mongoose.model('Subtodo', subtodoSchema);