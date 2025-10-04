const express=require('express');
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");

app.get("/",function(req,res){
    res.send("hey");
})

app.get("/create",async function(req,res){
   let user=await userModel.create({
    username:"proshika",
    age:25,
    email:"proshika@gamil.com"
   });
   res.send(user);
})

app.get("/post/create",async function(req,res){
  let post=await postModel.create({
    postdata:"hello saare log",
    user:"686148d99e3fb6991930ea5e"
  })
  let user=await userModel.findOne({_id:"686148d99e3fb6991930ea5e"});
  user.posts.push(post._id);
  await user.save();
  res.send({post,user});
})
app.listen(3000);