const express = require('express')
const  {register ,login} = require('./../controllers/user')


const userRouter = express.Router();

//get user functions 

userRouter.post("/register", register);
userRouter.post("/login", login);



///export 
module.exports = userRouter;