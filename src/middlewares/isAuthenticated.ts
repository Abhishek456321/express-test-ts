import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.json({ success: false, message: "Not authenticated." });
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as {
      id: string;
      role: string;
    };
    req.user = decode;

    next();
  } catch (error) {
    return res.json({ success: false, message: "invalid token." });
  }
};
export default isAuthenticated;
