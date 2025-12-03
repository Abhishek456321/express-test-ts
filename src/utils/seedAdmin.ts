import userModel from "../models/user.model.js";
import hashPassword from "../services/hashing.js";

const seedAdmin = async () => {
  const adminExist = await userModel.findOne({ role: "admin" });
  if (!adminExist) {
    const hashedPassword = await hashPassword(
      process.env.ADMIN_PASSWORD as string
    );

    try {
      const admin = await userModel.create({
        username: "Abhishek khadka",
        email: process.env.ADMIN_EMAIL as string,
        password: hashedPassword,
        role: "admin",
      });
      if (admin) {
        console.log(`${admin.username} as admin created automatically`);
      }
    } catch (error) {
      console.log("Admin autocreation failed.");
    }
  }
};
export default seedAdmin;
