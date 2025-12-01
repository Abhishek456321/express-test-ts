import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$"
      )
    )
    .messages({
      "string.empty": "please enter password",
      "string.pattern.base":
        "password must contain 1 capital,special,number character and must be length greater or equal to 8",
    }),
  googleId: Joi.string().optional(),
});

export default userSchema;
