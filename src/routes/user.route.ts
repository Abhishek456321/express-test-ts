import { Router } from "express";
import {
  createUser,
  getAllUser,
  loginUser,
} from "../controllers/user.controller.js";
import validateUser from "../middlewares/userCreationValidation.js";
import validateLogin from "../middlewares/loginValidation.js";

const userRouter = Router();

userRouter
  .route("/")
  .post(validateUser, createUser)
  .get(validateLogin, loginUser);

userRouter.route("/user").get(getAllUser);
export default userRouter;
