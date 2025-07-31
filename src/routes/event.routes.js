import { Router } from "express";
import { createEventController, getEventDetailsController } from "../controllers/event.controller.js";

//creating a router
const router = Router();

//create event endpoint 
router.post('/events', createEventController);

// Route for getting event details
router.get('/events/:eventId', getEventDetailsController);

export default router;