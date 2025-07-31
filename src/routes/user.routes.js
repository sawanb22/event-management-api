import { Router } from "express";
import { createUserController } from "../controllers/user.controller.js";

const router = Router();

// Route for creating a new user
router.post('/users', createUserController);

export default router;