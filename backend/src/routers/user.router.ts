import { Router } from "express";
import { getUserById, loginUser, registerUser } from "../controllers/user.controller";

const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/:id", getUserById)

export default userRouter