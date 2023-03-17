import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, loginUser, registerUser, updateUser } from "../controllers/user.controller";

const userRouter = Router()

userRouter.get("", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)

export default userRouter