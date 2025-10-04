const express=require('express');
const router=express.Router();
const {registerUser} =require("../controllers/authcontroller");

router.get("/",function(req,res){
    res.send("hey");
});

router.post("/register", registerUser);

router.post("/login",loginUser)
module.exports=router;