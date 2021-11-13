const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../models/User');


router.post('/register', async (req, res) => {
    try {
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
        
        res.status(200).json({
            success: true
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;