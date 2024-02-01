const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./db/connect");
const morgan = require("morgan");
const PORT = process.env.SERVER_PORT || 8000;

//database connection
db.mongoDB();

//routes
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const authenticateRoute = require("./routes/authenticate");
const addToCartRoute = require("./routes/addToCart");
const removeFromCartRoute = require("./routes/removeFromCart");
const addToFavRoute = require("./routes/addToFav");
const removeFromFavRoute = require("./routes/removeFromFav");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/authenticate", authenticateRoute);
app.use("/addToFav", addToFavRoute);
app.use("/removeFromFav", removeFromFavRoute);
app.use("/addToCart", addToCartRoute);
app.use("/removeFromCart", removeFromCartRoute);

app.listen(PORT, (req, res) => {
  console.log("SERVER RUNNING ON PORT: ", PORT);
});
