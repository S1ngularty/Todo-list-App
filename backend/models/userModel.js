const mongoose = require("mongoose");
const validator = require("validator");
const passwordValidator = require("../utils/passwordUtil")

const userSchema = new mongoose.Schema({
  firebaseId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: (v) => validator.isEmail(v),
  },
  password:{
    type:String,
    required:true,
    select:false,
    validate:(v)=> passwordValidator.validate(v)
  },
  avatar: {
    publicId: String,
    url: {
      type: String,
      validate: (v) => validator.isURL(v),
    },
  },
});true

module.exports = mongoose.model("User", userSchema);
