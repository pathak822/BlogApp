const express=require("express")
const router=express.Router();
const authorcontroller=require("../controller/authorcontroller")
const blogcontroller=require("../controller/blogcontroler")
const auth=require("../middlewear/auth.js")

//-----------------------post api(author createion)-------------//
router.post("/authors",authorcontroller.authorcreate);
//------------------------------post api for login author---------------//
router.post("/login",authorcontroller.loginauthor);
//-----------------------------post api (blog creation)--------------------------//
router.post("/blogs",auth.authentication,blogcontroller.createblog)
//---------------------get  api (blog document)-----------------//
router.get("/blogs",auth.authentication,blogcontroller.getblogs)
//-----------------------------update api----------------------//
router.update("/blogs",auth.authentication,blogcontroller.updatedBlog)
//------------------------------deleted api---------------------------//
router.update("/blogs",auth.authentication,blogcontroller.deleteBlog)
//--------------------------------deletedquery-------------------------------------//
router.update("/blogs",auth.authentication,blogcontroller.deleteByQueryparams)





module.exports=router