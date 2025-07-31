import { Router } from "express";
import { registerUserController, cancelRegistrationController } from "../controllers/registration.controller.js";

const router = Router();

// RESTful route for registering a user for an event
router.post('/events/:eventId/register', registerUserController);

// Route for canceling a user's registration for an event
router.delete('/events/:eventId/registrations/:userId', cancelRegistrationController);

export default router;