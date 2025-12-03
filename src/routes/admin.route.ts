import { Router } from "express";
import {
  signUp,
  login,
  allUsers,
  deleteUser,
} from "../controllers/user.controller.js";

import validateLogin from "../middlewares/loginValidation.js";
import { upload } from "../services/fileUpload.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import validateCreation from "../middlewares/userCreationValidation.js";
import isAdmin from "../middlewares/isAdmin.js";

const adminRouter = Router();

adminRouter
  .route("/create")
  .post(
    validateCreation,
    isAuthenticated,
    isAdmin,
    upload.single("image"),
    signUp
  );

adminRouter.route("/users").get(isAuthenticated, isAdmin, allUsers);
adminRouter.route("/:id").delete(isAuthenticated, isAdmin, deleteUser);
export default adminRouter;
