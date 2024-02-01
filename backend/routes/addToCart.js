const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) res.status(400).json("User exists");

    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });

    await newUser.save();

    res.status(200).json("User Created Successfully");
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.log(error);
  }
});

module.exports = router;
