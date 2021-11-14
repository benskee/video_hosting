const express = require('express');
const _ = require('lodash')
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../models/User');


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body
    let user = await User.findOne({ email: email });
    if (user) return res.status(400).send( {
        "type": "email",
        "message": "Email already registered."
    });

    let user2 = await User.findOne({ username: username });
    if (user2) return res.status(400).send( {
        "type": "username",
        "message": "username already registered."
    });

    const newUser = new User({
        username: username,
        email: email,
        password: password
    })

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save()
    
    const token = newUser.generateAuthToken()
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "email"]));
})

module.exports = router;