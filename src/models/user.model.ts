import mongoose, { Model } from "mongoose";
import { Iuser } from "../interface/Iuser.js";

const userSchema = new mongoose.Schema<Iuser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel: Model<Iuser> =
  (mongoose.models.User as Model<Iuser>) ||
  mongoose.model<Iuser>("User", userSchema);
export default userModel;
