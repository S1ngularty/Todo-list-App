const User = require("../models/userModel");
const mongoose = require("mongoose");
const create = async (request) => {
  const newUser = await User.create(request.body);
  if (!newUser) throw new Error("failed to create the user");
  return newUser;
};

const getUser = async (request) => {
  const { userId } = request.params;
  if (!mongoose.Schema.Types.ObjectId.isValid(userId))
    throw new Error("invalid userId");
  const user = await User.findById(userId);
  if (!user) throw new Error("user is not be found");
  return user;
};

module.exports = { create };
