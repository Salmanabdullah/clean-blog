const express = require("express");
const app = express();

const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const newPostController = require("./Controllers/newPost");
const homeController = require("./Controllers/home");
const getPostController = require("./Controllers/getPost");
const storePostController = require("./Controllers/storePost");
//const validateMiddleware = require("./Middlewares/validationMiddleware");
const newUserController = require("./Controllers/newUser");
const storeUserController = require('./Controllers/storeUser')

dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));

app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//app.use("/posts/store", validateMiddleware);

//homepage
app.get("/", homeController);

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/auth/register", newUserController);

//single post
app.get("/post/:id", getPostController);

app.get("/posts/new", newPostController);

//create new post and saving image to a specific dir.
app.post("/posts/store", storePostController);

app.post('/users/register',storeUserController)

app.listen(process.env.PORT, () => {
  console.log("App is listening....");
});
