import mongoose from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        name : {type:String,required:true,unique:true},
        email : {type:String,required:true,unique:true},
        password : {type:String,required:true},
        age:{type:Number,required:false},
        gender:{type:String,required:false},
        dob:{type:String,required:false},
        mobileno:{type:String,required:false},
    },
    {
        timestamps:true,
    }
);

const  User = mongoose.model('user',userSchema);

export default User;
