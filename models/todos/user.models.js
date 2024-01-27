//It is standard practice to name not just write- user.js, insteed write user.modules.js

import mongoose from "mongoose"

const userSchema=new mongoose.Schema({           // mongooes ka schema,,basic syntax--//const userSchema=new mongoose.Schema({..},{timestamps}) //
  username:{                             
    type: String,
    reuired: true,
    unique: true,
    lowercase:true
  },
  email:{
    type: String,
    reuired:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required: [true, "password required"],                     // addition valdation with message.
  },
}
,{timestamps:true} )                  

export const User = mongoose.model('User', userSchema)      // mongooes make a model (takes 2 parameters)-- kya model banu? kiske based pe bnau?

// model converts  into plural-- e.g.- User will be users in mongoDB