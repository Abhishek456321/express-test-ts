import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { jest } from "@jest/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

jest.setTimeout(10000);

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URL as string);
});

afterAll(async () => {
  await mongoose.connection.close();
});
describe("GET /api/user", () => {
  it("should return a user", async () => {
    const res = await request(app).get("/api/users/user");
    console.log(res.body);
  });
});
