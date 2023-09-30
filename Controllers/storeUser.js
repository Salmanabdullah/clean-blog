const { log } = require("console");
const User = require("../models/User");
const path = require("path");

module.exports = async(req, res) => {
  await User.create(req.body)
    .then(() => res.redirect("/"))
    .catch((error) => res.redirect('/auth/register'));
};
