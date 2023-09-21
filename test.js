const dotenv = require("dotenv");

const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));

// BlogPost.create({
//   title: 'orange',
//   body: "amr khida lagse",
// });

let id = "650c4e635e9543a5c7169274";

BlogPost.findByIdAndUpdate(id,{ title: 'Orange and Apple',body:'ki je bolish' }).then(()=>{console.log('updated')} );
