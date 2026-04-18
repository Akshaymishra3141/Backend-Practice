import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath){
            console.log("Path Not Found");
            return null;
        }
        //Upload 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })

        console.log("File has uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)  // ye locally saved file ko delete kardega kyun ki wo server pe upload ho chuka hai ab uski jarurat nahi hai

        return response;
        

    }catch(err){

        fs.unlinkSync(localFilePath)  // ye locally saved file ko delete kardega kyun ki wo server pe upload nahi ho saka 
        return null

    }
}

export { uploadOnCloudinary}