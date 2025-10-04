const express=require('express');
const app=express();
const userModel=require('./usermodel');

app.get('/',(req,res)=>{
     res.send("hey");
})

app.get('/create', async (req,res)=>{
    let createduser = await userModel.create({
        name:"Proshika",
        username:"proshika",
        email:"proshika@gmail.com"
     })
     res.send(createduser);
})

app.get('/update', async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({username:"Proshika"},{name:"proshikapatle"},{new:true})
     res.send(updateduser);
})

app.get("/read", async (req,res)=>{
    let users = await userModel.find({username:"proshika"});
     res.send(users);
})

app.get("/delete", async (req,res)=>{
    let users = await userModel.findOneAndDelete({username:"proshika"});
     res.send(users);
})

app.listen(3000);