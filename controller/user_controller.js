const User = require("../models/User_Schema");
const jwt = require("jsonwebtoken");

const signups = (req, res) => {
  res.render("signup");
};

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const users = await User.findOne({ email: email });
  if (users) {
    res.redirect("login");
  } else {
    let newUser = await User.create(req.body);
    res.cookie("id", newUser.id);

    res.redirect("login");
  }
};

const loginpage = (req, res) => {
  res.render("login");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.send("user not found");
  } else if (user.password !== password) {
    return res.send("password not match");
  } else {
    let token = jwt.sign({ id: user._id }, "token");
    res.cookie("token", token).cookie("id", user._id);
    res.redirect("/user/Homepage");
  }
};

const Homepage = (req, res) => {
    res.render("home");
  };

module.exports = { signups, signup, loginpage , login , Homepage };
