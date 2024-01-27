import mongoose from "mongoose";

const orderItemDchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    },
},{timestamps:true})
const orderSchema = new mongoose.Schema({
orderPrice:{
    type:String,
    required:true
},
customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
},
orderItems:{
    type: [orderItemDchema]                                 // See in todo.models.js-- 15 to 20 line of code-- we can do thik this also
},
address:{
    type: String,
    required:true
},
status:{
    type:String,
    enum: ["PENDING", "CANCELLED","DELIVERED"],
    default:"PENDING"
}

},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema);