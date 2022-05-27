import { json } from "express";
import data from "../constants/data.js";
import news from "../model/news-schema.js"


const getNews=async(req,res)=>{
     try{
        let data=await news.find({});
        res.status(200).json(data);
     }   
     catch(err){
         res.status(500).json({message:data.message});

     }   
 }

 export default getNews;