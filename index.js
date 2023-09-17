const express = require("express");
const app = express();

const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get('/posts/new',(req,res)=>{
  res.render('create')
});

app.post('/posts/store',(req,res) => {
  console.log(req.body);
  res.redirect('/')
})

app.listen(process.env.PORT, () => {
  console.log("App is listening....");
});