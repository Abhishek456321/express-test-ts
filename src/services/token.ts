import jwt from "jsonwebtoken";
const generateJwtToken = (userId: string) => {
  const secret = process.env.JWT_SECRET_KEY as string;
  return jwt.sign({ id: userId }, secret, { expiresIn: "1d" });
};
export default generateJwtToken;
