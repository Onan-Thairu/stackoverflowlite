import { Router } from "express";
import { deleteUser, getAllUsers, getUserById, loginUser, registerUser, updateUser } from "../controllers/user.controller";
import { verifyToken } from "../middleware/verifyToken.middleware";

const userRouter = Router()

userRouter.get("", verifyToken, getAllUsers)
userRouter.get("/:id", verifyToken, getUserById)
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.put("/:id", verifyToken, updateUser)
userRouter.delete("/:id", verifyToken, deleteUser)

export default userRouter