const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:127017/scatch");

const ownerSchema=mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim:true,
    },
    email:String,
    password:String,
        products:{
        type:Array,
        default:[],
    },
    picture:String,
    gstin:String,
});

module.exports=mongoose.model("users",ownerSchema);