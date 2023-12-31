const BlogPost = require("../models/BlogPost");
const path = require("path");

module.exports = (req, res) => {
  let image = req.files.image;
  image.mv(
    path.join(__dirname, "..", "public/img", image.name),
    async (e) => {
      await BlogPost.create({ ...req.body, image: "/img/" + image.name });
      res.redirect("/");
    }
  );
};
