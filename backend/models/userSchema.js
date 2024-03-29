const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

var userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      // required: true,
      default: "jrgyl64notdzsepegn28.png",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      //   required: true,
      unique: true,
    },
    favorites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre(`save`, async function (next) {
  if (this.isModified(`password`)) {
    this.password = await bcrypt.hash(this.password, saltRounds);
    this.cPassword = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

let user = mongoose.model("user", userSchema);

module.exports = user;
