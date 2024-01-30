const express = require("express");
const app = express();

app.post('/login', (req,res) => {})
app.post('/signup', (req,res) => {})
app.post('/addToCart', (req,res) => {})
app.post('/removeFromCart', (req,res) => {})
app.post('/addToFav', (req,res) => {})
app.post('/removeFromFav', (req,res) => {})

app.listen(8000, (req, res) => {
  console.log("SERVER RUNNING ON PORT 8000");
});
