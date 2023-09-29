const User = require('../models/User')
const path = require('path')

module.exports= async (req,res) => {
     await User.create(req.body)
     res.redirect('/')
}