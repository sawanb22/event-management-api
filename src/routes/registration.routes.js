import { Router } from "express";
import { registerUserController } from "../controllers/registration.controller.js";

const router = Router();

// RESTful route for registering a user for an event
router.post('/events/:eventId/register', registerUserController);

export default router;