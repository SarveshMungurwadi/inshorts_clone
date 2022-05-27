import mongoose from "mongoose";

const URL="mongodb://localhost:27017/inshortsClone";
   
const connection=async()=>{
    try{
        await mongoose.connect(URL);
        console.log("Database Connected");
    }
    catch(err){
        console.log("Error");
    }

}



export default connection;