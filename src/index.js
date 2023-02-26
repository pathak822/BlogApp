const express=require("express");
const bodyParser=require("body-parser");
const route=require("./route/route.js");

const mongoose = require("mongoose");
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// mongoose.connect("mongodb+srv://neha:LpBC0qYVa2JR9wyB@cluster0.t7gmlex.mongodb.net/kumari9-DB")({
// useNewUrlParser:true
// })
// .then(()=>console.log("mongoose is connected"))
// .catch(err=>console.log(err))
mongoose.connect("mongodb+srv://neha:LpBC0qYVa2JR9wyB@cluster0.t7gmlex.mongodb.net/kumari9-DB", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))
app.use("/",route);

app.listen(3000,function(){
    console.log('Express app running on port'+(3000))
})