
const mongoose=require("mongoose")




//Name validation
const isValidName=function(name){
    const nameRegex=/^[a-zA]+$/;
    return nameRegex.test(name);
}

//validation for email
const isValidEmail=function(email){ 
  const emailRegex=
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
return emailRegex.test(email)
};

//password  validation
const isValidPassword=function(password){
    const passwordRegex=
    /^(?=.*[A-Za-z])(?=*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
};

//vallue validation 
const isEmpty=function(value){
    if(typeof value ==="undefind"||value===null)return false;
    if(typeof value==="string"&&value.trim().length===0)return false
};

//Object 
const isValidObjectId=(objectId)=>{
    return mongoose.Types.objectId.isValid(objectId)
}

module.exports={
    isEmpty,
    isValidEmail,
    isValidObjectId,
    isValidPassword,
    isValidName
}