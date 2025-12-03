import { Request, Response } from "express";
import { Iuser } from "../interface/Iuser.js";
import userModel from "../models/user.model.js";
import { Ilogin } from "../interface/Ilogin.js";
import hashPassword, { compareHashPassword } from "../services/hashing.js";
import generateJwtToken from "../services/token.js";

export const signUp = async (req: Request, res: Response) => {
  const newUser = req.body as Iuser;
  if (!newUser) {
    res.json({ success: false, message: "No userDetails." });
    return;
  }
  try {
    const imageUrl =
      req.protocol + "://" + req.get("host") + "/uploads/" + req.file?.filename;
    const hashedPassword = await hashPassword(newUser.password as string);
    newUser.password = hashedPassword as string;
    newUser.image = imageUrl;
    const user = await userModel.create(newUser);
    if (user) {
      const token = generateJwtToken(user._id, user.role);
      res.json({
        success: true,
        message: `${user.role} created successfully.`,
        token,
      });
      return;
    }
  } catch (error) {
    res.json({ success: false, message: "server/db error." });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  const loginUser = req.body as Ilogin;
  if (!loginUser) {
    res.json({ success: false, message: "No userDetails." });
    return;
  }
  try {
    const user: Iuser | null = await userModel.findOne({
      email: loginUser.email,
    });
    if (user) {
      const matchPassword = await compareHashPassword(
        loginUser.password,
        user?.password as string
      );
      if (matchPassword && user._id) {
        const token = generateJwtToken(user._id?.toString(), user.role);

        res.json({
          success: true,
          message: `${user.role} login successfully.`,
          token,
        });
        return;
      } else {
        res.json({ success: false, message: "Invalid credentials." });
        return;
      }
    }
  } catch (error) {
    res.json({ success: false, message: "server/db error." });
  }
};

export const allUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    if (users) {
      res.json(users);
      return;
    }
  } catch (error) {
    res.json({ success: false, message: "server/db error." });
  }
};
