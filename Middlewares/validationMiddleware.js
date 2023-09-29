module.exports = (req, res, next) => {
  if (req.files == null || req.body.title == null || req.body.title == null) {
    console.log(req.body)
     return res.redirect("/posts/new");
  }
  next();
};
