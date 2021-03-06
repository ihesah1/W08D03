const express = require("express");
const {
  register,
  login,
  getUsers,
  removeUser,
} = require("./../controllers/user");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const userRouter = express.Router();



userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", authentication, authorization, getUsers);
userRouter.delete("/users/:id", authentication, authorization, removeUser);



module.exports = userRouter;