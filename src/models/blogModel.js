const mongoose=require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const blogsSchema=new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim:true,
    },
    body : {
        type : String,
        required : true,
        trimre:true
    },
    authorId :{
        type : objectId,
        ref : 'author',
        required : true
    },
    tags : { 
    type:[String],
    trim:true},

    category : {
        type : String,
        required : true,
        trim:true,
    },
    subcategory :{
        type : [String],
        trim:true,
    },
    deletedAt : {
        type :Date,
        default:null,
    },
    isdeleted :{
        type : Boolean,
        default : false
    },
    publishedAt :{
        type : Date,
        default:null,
    },
    isPublished : {
        type : Boolean,
        default : false
    }
},{timestamps: true})
   
module.exports=mongoose.model("blog",blogsSchema)