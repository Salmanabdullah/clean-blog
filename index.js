const express = require("express");
const app = express();

const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", async(req, res) => {
  await BlogPost.create(req.body).then(res.redirect("/"));
});

app.listen(process.env.PORT, () => {
  console.log("App is listening....");
});
