import { NextFunction, Request, Response } from "express";
import loginSchema from "../validation/loginValidationSchema.js";

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    res.json({ success: false, message: error.details[0].message });
    return;
  } else {
    next();
  }
};
export default validateLogin;
