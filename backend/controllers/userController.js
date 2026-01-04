const userService = require("../services/userService");
const controllerWrapper = require("../utils/controllerWrapper");

const createUser = controllerWrapper(userService.create);
const getUserById = controllerWrapper(userService.getUser);
const updateUser = controllerWrapper(userService.update);
const loginUser = controllerWrapper(userService.login)

module.exports = { createUser, getUserById, updateUser, loginUser };
