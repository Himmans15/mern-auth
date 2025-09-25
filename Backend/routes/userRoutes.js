import express from "express";
import userData from "../middleware/userData.js";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userData, getUserData);

export default userRouter;
