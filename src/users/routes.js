const { Router } = require("express");

const userRouter = Router();

const { registerUser, getAllUsers, updateUser, deleteUser } = require("./controllers");
const { hashPass } = require("../middlewear");


userRouter.post("/users/register", hashPass, registerUser);

userRouter.get("/users/getallusers", getAllUsers);

userRouter.put("/users/updateuser", updateUser);

userRouter.delete("/users/deleteuser", deleteUser);




module.exports = userRouter;