const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello,you follow root path");
});

app.get("/apple",(req,res)=>{
    res.send("you follow apple path");
});

app.get("/orange",(req,res)=>{
    res.send("you follow orange path");
});

//app.use((req,res)=>{
// console.log("request received");
// res.send("this is local response")
//});