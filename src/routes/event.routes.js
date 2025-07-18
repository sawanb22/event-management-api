import { Router } from "express";
import { createEventController } from "../controllers/event.controller.js";

//creating a router
const router = Router();

//create event endpoint 
router.post('/events', createEventController);

export default router;