import data from "./constants/data.js";
import news from "./model/news-schema.js ";
const DefaultData=async()=>{
    try{
        await news.insertMany(data);
        console.log("Data imported successfully");
    }
    catch(err){
        console.log(`Error`,err.meesage);
    }
}

export default DefaultData;