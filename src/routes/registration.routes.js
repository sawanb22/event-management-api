import { Router } from "express";
import { registerUserController, cancelRegistrationController } from "../controllers/registration.controller.js";

const router = Router();

/**
 * @swagger
 * /events/{eventId}/register:
 *   post:
 *     summary: Register a user for an event
 *     tags:
 *       - Registrations
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: User registered for event
 *       400:
 *         description: Invalid input or registration constraints violated
 */
router.post('/events/:eventId/register', registerUserController);

/**
 * @swagger
 * /events/{eventId}/registrations/{userId}:
 *   delete:
 *     summary: Cancel a user's registration for an event
 *     tags:
 *       - Registrations
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: Registration cancelled successfully
 *       404:
 *         description: Registration not found
 */
router.delete('/events/:eventId/registrations/:userId', cancelRegistrationController);

export default router;