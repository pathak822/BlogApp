let jwt =require("jsonwebtoken");
const blogModel=require("../models/blogModel")
//---------------------Authentication------------------------------------------

const authentication=async function(req,res,next){
    try{
        //check token
        let token =req.header["x-api-key"];
        if(!token)req.header["x-api-key"];
        if(!token)
        return res.status(400).send({status:false,Msg:"Token must be filed"})
    //verified
    let decodedToken=jwt.verify(token,"project");
    if(!decodedToken)
    return res.status(400).send({status:false,Msg:"token not verified please Enter vaild Token"})
   req.token=decodedToken
   next();
}catch(err){
    res.status(500).send({status:false,Msg:"eror"})
}
};
// //----------------------Authorizarion ---------------------------//

// const authorizarion=async function (req,res,next){
//     try{
//         let authorLoggedIn=req.token.authorId;
//         let blogId=req.params.blogId;
//         let checkBlogId=await blogModel.findById(blogId)
//         if(!checkBlogId){
//             return res.status(404).send({status:false,Msg:"Blog not found"})
//         }
//         if(checkBlogId.authorId!=authorLoggedIn){
//             return res.status(400).send({status:false,Msg:"loggedin author not allowed to "})
//         }
//         next();
//     }catch(error){
//         return res.status(400).send({status:false,Msg:err.massage})
//     }
// };
// //==================================================
// const authoriseByQuery=async function (req,res,next){
//     try{
//         let authorLoggedIn=req.token.authorId  //acesessing authorId from atribute
//         let condition =req.query
//         //ch
//         if(Object.keys(condition).length==0){
//             return res.status(400).send({status:false,Msg:"provide infrommation for deletion"})
//         }
//         if(condition.authorId){
//             if(!condition.authorId.match(/^0-9a-f(24)$/)){
//                 return res.status(400).send({status:false,Msg:"Not vailed Objectid"})
//             }
//             if(condition.authorId!=authorLoggedIn){
//                 return res.status(400).send({status:false,Msg:"author not authorished"})
//             }
//             let authorAccessing=await blogModel.find({$and:[condition,{isdeleted:false}] })
//         }
//         if(authorAccessing.length==0){
//             return res.status(400).send({status:false,Msg:" not blog found"})
//         }
//         let acessingblog=authorAccessing.filter(blog=>blog.authorId==authorLoggedIn)
//         if(acessingblog.length==0){
//             return res.status(400).send({status:false,Msg:" user not authoriesd"})
//         }
//     }
// }

const Authorization = async function(req,res,next){
    try{
        const blogId = req.params.blogId
        const authorId = req.body.authorId 
    
        const tokenid = req.decodedtoken.Id
    
        if (authorId){if (userId != tokenid){ return res.status(403).send({status:false, msg:"you are not allowed to perform this action"})}
        return next()}
    
        if (blogId){
                    
            const blogid = await blogModel.findOne({_id:blogId})
    
            if (!blogid){ return res.status(400).send({status:false, msg:"ID not present"})}
    
            if (blogid.authorId != tokenid){ return res.status(403).send({status:false, msg:"you are not allowed to perform this action"})}
    
            next()
        }
    }catch(err){
        return res.status(500).send({status:false,msg:err.message})
    }
    }
    module.exports={Authorization,authentication}