import express from "express";
import {
  createUser,
  activateUser,
  loginUser,
  loadUser,
  logoutUser,
  updateUserInfo,
  updateUserAvatar,
  updateUserAddresses,
  deleteUserAddress,
  updateUserPassword,
  getUserInfoById,
  getAllUsers,
  deleteUser,
} from "../controller/userController.js";
import { isAuthenticated, isAdmin } from "../middleware/auth.js";

const router = express.Router();

// Create user route
router.post("/create-user", createUser);

// Activate user route
router.post("/activation", activateUser);

// Login user route
router.post("/login-user", loginUser);

// Load user route
router.get("/getuser", isAuthenticated, loadUser);


// Logout user route
router.get("/logout", logoutUser);

// Update user info route
router.put("/update-user-info", isAuthenticated, updateUserInfo);

// Update user avatar route
router.put("/update-avatar", isAuthenticated, updateUserAvatar);

// Update user addresses route
router.put("/update-user-addresses", isAuthenticated, updateUserAddresses);

// Delete user address route
router.delete("/delete-user-address/:id", isAuthenticated, deleteUserAddress);

// Update user password route
router.put("/update-user-password", isAuthenticated, updateUserPassword);

// Get user information by ID route
router.get("/user-info/:id", getUserInfoById);

// Get all users (admin) route
router.get("/admin-all-users", isAuthenticated, isAdmin("Admin"), getAllUsers);

// Delete user (admin) route
router.delete(
  "/delete-user/:id",
  isAuthenticated,
  isAdmin("Admin"),
  deleteUser
);

export default router;
