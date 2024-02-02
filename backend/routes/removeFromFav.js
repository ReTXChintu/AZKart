const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const authenticateUser = require("../middlewares/authenticateUser");

router.post("/", authenticateUser, async (req, res) => {
  const { productId } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(400).json("invalid user");

    user.favorites.pull(productId);

    const newUser = await user.save();

    res.status(200).json({ favorites: newUser.favorites });
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.log(error);
  }
});

module.exports = router;
