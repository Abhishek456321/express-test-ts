import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
export default app;
