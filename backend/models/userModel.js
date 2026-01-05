const mongoose = require("mongoose");
const validator = require("validator");
const passwordValidator = require("../utils/passwordUtil");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  // firebaseId: {
  //   type: String,
  //   required: true,
  // },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: (v) => validator.isEmail(v),
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    validate: (v) => passwordValidator.validate(v),
  },
  avatar: {
    publicId: String,
    url: {
      type: String,
      validate: (v) => validator.isURL(v),
    },
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.getToken = async function () {
  return jwt.sign(
    {
      userId: this._id,
      role: this.role,
      name: this.username,
      email: this.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXP,
      algorithm: "HS256",
    }
  );
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  if (String(enteredPassword).trim() === this.password) return true;
  return false;
};

module.exports = mongoose.model("User", userSchema);
