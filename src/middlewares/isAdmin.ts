import { NextFunction, Request, Response } from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const info = req.user as { id: string; role: string };
  if (info?.role === "admin") {
    next();
  } else {
    return res.json({ success: false, message: "Unauthorized user." });
  }
};
export default isAdmin;
