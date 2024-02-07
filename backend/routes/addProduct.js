const express = require("express");
const router = express.Router();
const Product = require("../models/productSchmea");

router.post("/", async (req, res) => {
  const { title, description, image, category, price, stock, sales } = req.body;
  try {
    const newProduct = new Product({
      title: title,
      description: description,
      image: image,
      category: category,
      stock: stock,
      price: price,
      sales: sales
    });

    await newProduct.save();

    res.status(200).json({message: "Product Added"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;