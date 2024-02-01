const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const User = require("../models/userSchema");

router.get("/", authenticateUser, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ user: user });
});

module.exports = router;
