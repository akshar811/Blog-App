const { Router } = require("express");
const { AddBlog, CreateBlog, blogdisplay, singleblog, deletedata, editdata, updatedata } = require("../controller/blog_controller");

const BlogRoute = Router();

BlogRoute.get("/Addblog",AddBlog);

BlogRoute.post("/createBlog",CreateBlog);

BlogRoute.get("/AllBlog",blogdisplay)

BlogRoute.get("/singleBlog/:id",singleblog);

BlogRoute.delete("/:id",deletedata);

BlogRoute.get("/:id/edit",editdata);

BlogRoute.patch("/:id",updatedata);

module.exports = BlogRoute;

