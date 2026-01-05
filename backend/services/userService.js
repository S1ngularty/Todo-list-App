const User = require("../models/userModel");
const mongoose = require("mongoose");

const create = async (request) => {
  const newUser = (await User.create(request.body)).save();
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

const update = async (request) => {
  const { userId } = request.params;
  if (!mongoose.Schema.Types.ObjectId.isValid(userId))
    throw new Error("invalid userId");
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: request.body,
    },
    { new: true, runValidators: true }
  );

  if (!user) throw new Error("failed to update the user");
  return user;
};

const login = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email }).select("+password email username");

  if (!user) throw new Error("user is not found!");
  if (user.password === password) throw new Error("password does not match");

  const token = await user.getToken();

  const httpCookieConfigs = {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
  response.cookie("token", token, httpCookieConfigs);
  return;
};

const deactivate = async (request) => {
  const { userId, status } = request.user;
  const user = await User.findById(userId).select("+status");
  if (!user) throw new Error("user not found");
  // user.status = "inactive"
  // await user.save()
  return "success";
};

module.exports = { create, getUser, update, login };
