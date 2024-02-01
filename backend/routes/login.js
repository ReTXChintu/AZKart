const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = process.env;

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) return res.status(401).json("Incorrect Credentials");

    const isPassMatch = await new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (!isPassMatch) return res.status(401).json("Incorrect Credentials");

    const expirationTime = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: expirationTime,
    });

    res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
