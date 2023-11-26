// Import the jsonwebtoken library
import jwt from "jsonwebtoken";

// Function to create activation token
const createActivationToken = (user) => {
  return jwt.sign({ user }, process.env.ACTIVATION_SECRET, {
    expiresIn: "1d", // Token expires in 1 day
  });
};

export { createActivationToken };
