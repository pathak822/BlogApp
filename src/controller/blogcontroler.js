const blogModel=require("/models/blogModel");
const authorModel=require("..models/authorModel");
const validation=require("../validator/validation");
const { isValidObjectId, model } = require("mongoose");
let {isEmpty,isValidName,isVailObjectId}=validation;

//------------------------------createblogs--------------------------//

const createblog=async function(req,res){
    try{
        let data=req.body;
        let{title,body,authorId,category}=data;
        if(Object.keys(data).length==0){
            return res.status(400).send({status:false,Msh:"please provioud key in requist body"})
        }

        //------------------------------------- validation for empty function value--------------------------------//

        if(!isEmpty(authorId)){
            return res.status(400).send({status:false,Msg:"please provide author Id"})
        }
    if(!isEmpty(title)){
        return res.status(400).send({status:false,Msg:"please provide title"})
    }
    if(!isEmpty(body)){
        return res.status(400).send({status:false,Msg:"please provide body of blog"})
    }
    if(!isEmpty(category)){
        return res.status(400).send({status:false,Msg:"please provide category"})
    }

    if(!isValidName(title)){
        return res.status(400).send({status:false,Msg:"title shuld be alphabets only"})
    }
    if(!isValidName(category)){
        return res.status(400).send({status:false,Msg:"category shuld be alphabets only"})
    }
    if(!isValidObjectId(authorId)){
        return res.status(400).send({status:false,Msg:"provide a vaild authorId "})
    }
    let AuthorId=await authorModel.findById(data.authorId)
    if(!AuthorId){
        return res.status(400).send({status:false,Msg:"please provide vaild authorId"})
    }
    let blogdata=await authorModel.create(data)
        return res.status(201).send({status:false,Msg:"please provide vaild blogId",data:blogdata})

}catch(error){
    return res.status(500).send({status:false,Msg:"error"})
}
}


////-----------------------------------------------------------done two api----------------------------------//

const getblogs=async function(req,res){
    try{
        let {AuthorId,category,tags,subcategory}=req.query;
        let filter={isDeleted:false,isPublished:true}

        if(AuthorId){filter.AuthorId=AuthorId}
        if(req.query.AuthorId){
            if(!isVailObjectId(req.query.AuthorId)){
            return res.status(400).send({status:false,Msg:"please provide vaild authorId"})
        }else{
            req.query.AuthorId=AuthorId

        }
    }
    if(category){filter.category=category}
    if(tags){filter.tags=tags}
    if(subcategory){filter.subcategory=subcategory}

    savedData=await blogModel.find(filter)
    if(savedData.length==0){
        return res.status(400).send({status:false,Msg:"such blog is not available "})
    }else{
        return res.status(200).send({status:true ,data:savedData})
    }
}catch(error){
        return res.status(500).send({status:false ,Msg:error.massage})
    }
}


//=======================================updatedBlog====================================//
const updatedBlog=async function(req,res){
    try{
        let allData=req.body;
        let blogId=req.params.blogid;

        if(Object.keys(allData).length==0)
        return res.status(400).send({status:false ,Msg:"please Enter Blog Detas for Updating"})

    
    if(!blogId)
    return res.status(400).send({status:false ,Msg:"Blog Id is required"})
    

    let findBlogId= await blogModel.findById(blogId)
    if(findBlogId.isDeleted==true){
        return res.status(400).send({status:false,Msg:"Blogs already deleted"})
    }
    let updatedBlog=await blogModel.findOneAndUpdate(
        {
            _id:blogId
        },{
            $set:{
                title:allData.title,
                body:allData.body,
                category:allData.category,
                published:new Date(),
                isPublished:true,
            },
            $push:{tags:req.body.tags,subcategory:req.body.subcategory},

        },
        {new:true,usert:true}
    );
    return res.status(200).send({status:true,Msg:updatedBlog})
    }catch(err){
        res.status(500).send({status:false,Msg:err.massage})
    }

    }

//===============================deleteBlog==========================================//
    const deleteBlog=async (req,res)=>{
        try{
            let blogId=req.prams.blogId;
            let checkBlogId=await blogModel.findById(blogId);
      

            if(!checkBlogId||(checkBlogId.isDeleted==true)){
                return res.status(404).send({status:false,Msg:"Blog has been already deleted"})
            }
            let deletedBlogId=await blogModel.findOneAndUpdate({_id:blogId},{$set:{isDeleted:true,}})
        return res.status(200).send({status:true,Msg:"Blog hass been deleted successfully",data:deletedBlogId})
        }
        catch(error){
            return res.send(500).send({status:false,Msg:"massage:error",data:deleteBlog})
        }
    }
///===========================api deleteByQueryparams======================================//

const deleteByQueryparams=async function (req,res){
    try{
        let data= req.query;
        const deletedByQuery=await blogModel.updatedMany({$and:[data,{authorId:req.id},{
            isDeleted:false}]},{$set:{isDeleted:true,deletedAt:new Date()}},{new:true,upsert:true})
        
       let count= deletedByQuery.modifiedCount
       if(deleteByQueryparams.modifiedCount==0){
        return res.status(404).send({status:false,Msg:"No blog Found"})
       }
       res.status(200).send({status:true,Msg:"No of Blogs deleted:",count})
    }
    catch(error){
        return res.send(500).send({status:false,Msg:"massage:error",data:deleteBlog})
    }
};
module.exports.createblog=createblog;
module.exports.getblogs=getblogs;
module.exports.updatedBlog=updatedBlog
module.exports.deleteBlog=deleteBlog;
module.exports.deleteByQueryparams=deleteByQueryparams;
