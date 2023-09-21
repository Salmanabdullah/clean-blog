
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));

BlogPost.create(
  {
    title: "Apple",
    body: "amr khida lagse",
  }
);

