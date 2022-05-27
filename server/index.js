import  express from "express";
const app=express();
import cors from "cors";
import DefaultData from "./default.js";
import Connection from "./database/db.js";
import route from "./routes/route.js";
const PORT=8000 || process.env.PORT;
app.use(cors());
app.use("/",route);

app.listen(PORT,()=>{
    
    console.log(`server is started successfully on ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("Hello") 
})
Connection();
DefaultData();