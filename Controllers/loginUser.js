const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  await User.findOne({ username: username })
    .then((user) => {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          req.session.userId = user._id;
          res.redirect("/");
        } else {
          console.log("failed");
          res.redirect("/auth/login");
        }
      });
    })
    .catch(() => {
      console.log("Login Failed");
      res.redirect("/auth/login");
    });
};
