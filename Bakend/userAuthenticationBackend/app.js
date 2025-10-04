const express=require('express');
const app=express();
const userModel=require("./models/user");
const path=require('path');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.render('index');
});

app.post('/create', (req,res)=>{
    let {username,email,password,age}=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash("password",salt,async(err,hash)=>{
             let Createduser=await userModel.create({
        username,
        email,
        password: hash,
        age
    })
    let token=jwt.sign({email},"shhhhhhhhh");
    res.cookie("token" ,token);
    res.send(Createduser);
        });
    });
});

app.get("/login",function(req,res){
     res.render('login');
});

app.post("/login", async function(req,res){
    let user=await userModel.findOne({email:req.body.email});
    if(!user) return res.send("something is wrong"); 

    bcrypt.compare(req.body.password,user.password,function(err,result){
      if(result) {
        let token=jwt.sign({email:user.email},"shhhhhhhhh");
        res.cookie("token" ,token);
         res.send("yes you can login");
      } 
      else res.send("no you cannot login");
    });
});

app.get("/logout",function(res,res){
    res.cookie("token","");
    res.redirect("/");
})

//--------Authentication------
//const cookieParser=require('cookie-parser');
//const bcrypt=require('bcrypt');
//const jwt=require('jsonwebtoken');

//app.use(cookieParser());

//app.get("/",function(req,res){
    //res.cookie("name","proshika");
    //res.send("done");

    /*bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash("pontyyy",salt,function(err,hash){
            console.log(hash);
        });
    });*/

    //bcrypt.compare("pontyyy","$2b$10$O7HhDSssOt.1B1xW5mxcAurJhBBNvK8S4AoLdO3bCDzOY7UtkqJYy",function(err,result){
      //  console.log(result);
    //});

   /* let token=jwt.sign({email:"pontyy@gmail.com"},"secret");
    res.cookie("token",token);
    console.log("done");
})

app.get("/read",function(req,res){
 let data=jwt.verify(req.cookies.token,"secret");
     console.log(data);
})*/

app.listen(3000);