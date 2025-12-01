import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

mongoose
  .connect(process.env.DB_URL as string)
  .then(() => {
    console.log("Db connected successfully.");
    app.listen(process.env.PORT, () => {
      console.log(`Backend running at port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log(`DB connection failed.`);
  });
