import { Router } from "express";
import { signUp, login, allUsers } from "../controllers/user.controller.js";

import validateLogin from "../middlewares/loginValidation.js";
import { upload } from "../services/fileUpload.js";

import validateCreation from "../middlewares/userCreationValidation.js";

const userRouter = Router();

userRouter
  .route("/")
  .post(validateCreation, upload.single("image"), signUp)
  .get(validateLogin, login);

export default userRouter;
