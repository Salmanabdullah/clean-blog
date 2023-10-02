const User = require("../models/User");

module.exports = (req, res, next) => {
  User.findById(req.session.userId).then((user, error) => {
    if (error || !user) return res.redirect("/");
    next();
  });
};
