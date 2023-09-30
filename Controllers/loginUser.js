const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
    .then((user,error) => {
      bcrypt
        .compare(password, user.password)
        .then(() => {
          console.log("success");
          res.redirect("/");
        })
        .catch(() => {
          console.log('failed');
          res.redirect("/auth/login");
        });
    })
    .catch(() => {
      console.log(req.body);
      res.redirect("/auth/login");
    });
};
