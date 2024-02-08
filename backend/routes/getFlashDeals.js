const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema");

router.get("/", async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (pageNumber - 1) * pageSize;

    const flashDeals = await Product.find({ sales: { $in: ["Flash Deal"] } })
      .skip(skip)
      .limit(pageSize);

    res.status(200).json({ flashDeals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
