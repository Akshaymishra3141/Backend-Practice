import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/index.js"; 

const app = express();

connectDB();
/*
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Connected to DB successfully");
        app.on("error", (err)=>{
            console.log("Error ", err);
            throw err
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    }catch(err){
        console.log("Error in connecting to DB", err);
        throw
    }
})()
*/
