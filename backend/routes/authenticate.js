const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const User = require("../models/userSchema");
const Product = require("../models/productSchema");

router.get("/", authenticateUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Aggregating products in user's cart
    const cartProducts = await Product.aggregate([
      {
        $match: {
          _id: { $in: user.cart },
        },
      },
    ]);

    // Aggregating products in user's favorites
    const favoriteProducts = await Product.aggregate([
      {
        $match: {
          _id: { $in: user.favorites },
        },
      },
    ]);

    // Assigning the aggregated products to user's cart and favorites
    user.cart = cartProducts;
    user.favorites = favoriteProducts;

    res.status(200).json({ user: user });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
