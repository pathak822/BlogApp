const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
  fname:{
        type:String,
        require:true  ,
        trim:true
    },
    lname:{
        type:String,
        require:true,

    },
    title:{
        type:String,
        enum:["Mr","Mrs","Miss"],
        require:true
    },
    email:{
        require:true,
        type:String,
        unique:true
    },
    password:{
        require:true,
        type:String,
        trim:true,

    }
},{timestamps:true})


module.exports=mongoose.model("author",authorSchema)