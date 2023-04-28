const { Router } = require("express");

const userRouter = Router();

const { registerUser, getAllUsers, updateUser, deleteUser, login } = require("./controllers");
const { hashPass, comparePass, tokenCheck } = require("../middlewear");


userRouter.post("/users/register", hashPass, registerUser);

userRouter.post("/users/login", comparePass, login);

userRouter.get("/users/getallusers", tokenCheck, getAllUsers);

userRouter.get("/users/authcheck", tokenCheck, login);

userRouter.put("/users/updateuser", updateUser);

userRouter.delete("/users/deleteuser", deleteUser);






module.exports = userRouter;