const { Router } = require("express");
const { signups, loginpage, signup, login, Homepage } = require("../controller/user_controller");

const Route = Router();

Route.get("/signup",signups);
Route.post("/signup",signup);
Route.get("/login",loginpage);
Route.post("/login",login)
Route.get("/Homepage",Homepage);

module.exports = Route;

