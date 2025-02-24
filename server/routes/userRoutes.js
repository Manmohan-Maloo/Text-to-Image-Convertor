import express from "express";
import {
  registerUser,
  loginUser,
  userCredits,
} from "../controllers/usercontroller.js";
import userAuth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);

export default userRouter;

// http://localhost:4040/api/user/register  : man@gmail.com
// http://localhost:4040/api/user/login : man123