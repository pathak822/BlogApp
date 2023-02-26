const authorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");
const validation=require("../validation/validation.js");

let {isEmpty,isValidName,isValidEmail,isValidPassword}=validation

// const authorcreate=async function(req,res){
//     try{
//         let data=req.body;
//         if(Object.keys(data).length==0){
//             return res.status(400).send({status:false,Msg:"filed is empty "})
//         }
//         //validation for fname and lname
//         let{fname,lname,title,email,password}=data;

//         if(!isEmpty(fname)){
//             return res.status(400).send({status:false,Msg:"fname is must be present in requiest body"})
//         }
//         if(!isEmpty(lname)){
//             return res.status(400).send({status:false,Msg:"lname is must be present in request body"})
//         }

//         // validation for title

//         if(!isEmpty(title)){
//             return res.status(400).send({status:false,Msg:"title is missing requiest doe'nt have a vaild input" })       
//         }
//              if (title != "Mrs" && title != "Miss" && title != "Mr") {
//         return res.status(400).send({status:false,Msg:"title  can only  be Mr,Miss,Mrs"})
//     }

//     //===========================================validation for email===========================================
//     if(!isEmpty(email)){
//         return res.status(400).send({status:false,Msg:"email is missing requiest doe'nt have a vaild input" })       
//     }
//     if(!isEmpty(password)){
//         return res.status(400).send({status:false,Msg:"title is missing requiest doe'nt have a vaild input" })       
//         }

//       // ==================================== // value cecking ===========================================================================

//         if(isValidName(fname)){
//             return res.status(400).send({status:false,Msg:"fname must be in alphabetical carector"})
//         }
//         if(isValidName(lname)){
//             return res.status(400).send({status:false,Msg:"lname must be in alphabetical carector"})
//         }
//         if(isValidPassword(password)){
//             return res.status(400).send({status:false,Msg:"lname must be in alphabetical carector"})
//         }
//         if(isValidEmail(email)){
//             return res.status(400).send({status:false,Msg:"lname must be in alphabetical carector"})
//         }

//         let checkEmail=await authorModel.findOne({email:email})
//         if(checkEmail){
//             return res.status(400).send({status:false,Msg:"email is alreadt exist"})
//         }
//         const create=await authorModel.create(data)
//         return res.status(200).send({status:false,Msg:"author created sucsessfully ",data:create})

//     }catch(err){
//         return res.status(200).send({status:false,Msg:"eror"})


//     }
// }

// module.exports={authorcreate}

// //--------------------------------------authorlogin -------------------------------------------//

// const loginauthor= async function (req, res) {
//     try {
//      let email=req.body.email;
//      let password=req.body.password
      
//       if(Object.keys(req.body).length==0){
//         return res.status(400).send({status:false,massage:"please provide email and password"})
//       }
//     if(!isEmpty(email)){
//         return res.statu(400).send({status:false,Msg:"please provide vaild email id"})
//     }
//     if(!isEmpty(password)){
//         return res.statu(400).send({status:false,Msg:"please provide vaild email id"})
//     }
//       let checkEmail= await userModel.findOne({ email: email, password: password });
//       if (!checkEmail){
//         return res.status(400).send({ Status: false, massage: "Plase Enter Valid email And Password" })}
  
//       let Token = jwt.sign({
//         authorId: checkEmail._id.toString(),
//         iat: Date.now()
//       },
//         'Project',{expiresIn:"18000s"}
//       )

//       return res.status(200).send({status: true, msg: " Your JWT Token is successful generated",  myToken: Token })
//     }
//     catch (err) {
//      return res.status(500).send({ status: false, errer: err })
//     }
//   }



// module.exports = {loginauthor };

const createapp  = async function (req,res ){
    try{
        let data = body;
        let createdata = req.body;
       
                if(Object.key.Data.length===0){
                    let {Name , Fname , Email,Category, Password}  
                }
                  if(isVaild(Name)) {
            return res.status(400).send({status:false,Msg:"fname must be in alphabetical carector"})
         }   
         if(isValidPassword(Password)) 
         return res.status(400)  .send({statsu:false,})        
         }
        

        }
