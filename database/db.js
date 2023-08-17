import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL=process.env.MONGO_URI;


const Connection = () =>{
    //const URL = `mongodb+srv://afjalreyaz:J0VbOz1HUMljJ1Oz@cluster0.gctxzzg.mongodb.net/?retryWrites=true&w=majority`
    try{
        mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with thedatabase",error.message);
    }
}

export default Connection;