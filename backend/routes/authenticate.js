const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const User = require("../models/userSchema");
const Product = require("../models/productSchema");

router.get("/", authenticateUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Fetch cart products
    const cartProducts = await Product.find({ _id: { $in: user.cart } });

    // Fetch favorite products
    const favoriteProducts = await Product.find({
      _id: { $in: user.favorites },
    });

    // Assign fetched products to user object
    user.cart = cartProducts ? cartProducts : [];
    user.favorites = favoriteProducts ? favoriteProducts : [];

    res.status(200).json({ user: user });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
