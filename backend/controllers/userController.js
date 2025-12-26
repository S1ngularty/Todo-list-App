const userService = require("../services/userService");
const controllerWrapper = require("../utils/controllerWrapper");

const createUser = controllerWrapper(userService.create);
const getUserById = controllerWrapper(userService.getUser);
const updateUser = controllerWrapper(userService.update);

module.exports = { createUser, getUserById, updateUser };
