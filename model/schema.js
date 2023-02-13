import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

//Checking to see if user exists, otherwise create new one
module.exports = mongoose.models.User || mongoose.model('User',userSchema)