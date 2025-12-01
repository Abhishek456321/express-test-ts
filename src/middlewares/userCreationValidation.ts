import { NextFunction, Request, Response } from "express";
import { Iuser } from "../interface/Iuser.js";
import userSchema from "../validation/userValidationSchema.js";

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    res.json({ success: false, message: error.details[0].message });
    return;
  } else {
    next();
  }
};
export default validateUser;
