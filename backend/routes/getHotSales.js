const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema");

router.get("/", async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (pageNumber - 1) * pageSize;

    const hotSales = await Product.find({ sales: { $in: ["Hot Sale"] } })
      .skip(skip)
      .limit(pageSize);

    res.status(200).json({ hotSales });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
