import { Router } from "express";
import {
  signUp,
  login,
  getUserById,
  updatePassword,
  editProfile,
} from "../controllers/user.controller.js";

import validateLogin from "../middlewares/loginValidation.js";
import { upload } from "../services/fileUpload.js";

import validateCreation from "../middlewares/userCreationValidation.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const userRouter = Router();

userRouter
  .route("/")
  .post(validateCreation, upload.single("image"), signUp)

  .patch(updatePassword);
userRouter.route("/edit").patch(isAuthenticated, editProfile);
userRouter.route("/login").post(validateLogin, login);
userRouter.route("/:id").get(isAuthenticated, getUserById);
export default userRouter;
