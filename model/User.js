import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss:{
        type:String
    },
    azp:{
        type:String
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    given_name:{
        type:String,
    },
    family_name:{
        type:String,
        required:true
    },
    iat:{
        type:Number,
    },
    exp:{
        type:Number,
    },
    jti:{
        type:String,
    },
})

const whatsuser=mongoose.model('whatsuser',userSchema);

export default whatsuser;