const express = require("express");
const connect = require("./config/db");
const cookies = require("cookie-parser");
const Route = require("./routes/userroutes");
const BlogRoute = require("./routes/blogroutes");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookies());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.use("/user", Route);
app.use("/blog", BlogRoute);

app.get("/", (req, res) => {
  res.redirect("/user/signup");
});

app.get("/blog", (req, res) => {
    res.redirect("/user/Homepage");
  });

  app.get("/user", (req, res) => {
    res.redirect("/user/signup");
  });

app.listen(process.env.PORT, () => {
  connect();
  console.log(`listening on port ${process.env.PORT}`);
});
