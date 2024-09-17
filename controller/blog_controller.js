const Blog = require("../models/blog.schema");

const AddBlog = (req, res) => {
  res.render("addblog");
};

const CreateBlog = async (req, res) => {
  const { title, content, img } = req.body;
  const data = await Blog.create(req.body);
  res.cookie("blogId", data.id);
  res.redirect("/user/Homepage");
};

const blogdisplay = async (req, res) => {
  let data = await Blog.find().sort({ createdAt: -1});
  res.json(data);
};

const singleblog = async (req, res) => {
  const blogId = req.params.id;

  const singleBlog = await Blog.findById(blogId);

  if (!singleBlog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  res.render("singleblogpage", { singleBlog });
};

const deletedata = async (req, res) => {
  let { id } = req.params;
  await Blog.findByIdAndDelete(id);
  res.redirect("/user/Homepage");
};

const editdata = async (req, res) => {
    let { id } = req.params;
    const singleBlog = await Blog.findById(id);
  
    res.render("edit", { singleBlog });
  };



  const updatedata = async (req, res) => {
    let { id } = req.params;
    let listing = await Blog.findByIdAndUpdate(id, req.body);
    console.log(listing);
    
    res.redirect(`/blog/singleBlog/${id}`);
  };

module.exports = { AddBlog, CreateBlog, blogdisplay, singleblog, deletedata , editdata , updatedata };
