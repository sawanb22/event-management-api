import { Router } from "express";
import { createEventController, getEventDetailsController, getUpcomingEventsController, getEventStatsController } from "../controllers/event.controller.js";

const router = Router();

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags:
 *       - Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *               location:
 *                 type: string
 *               capacity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/events', createEventController);

/**
 * @swagger
 * /events/upcoming:
 *   get:
 *     summary: List upcoming events
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: List of upcoming events
 */
router.get('/events/upcoming', getUpcomingEventsController);

/**
 * @swagger
 * /events/{eventId}:
 *   get:
 *     summary: Get event details (with registered users)
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details with registered users
 *       404:
 *         description: Event not found
 */
router.get('/events/:eventId', getEventDetailsController);

/**
 * @swagger
 * /events/{eventId}/stats:
 *   get:
 *     summary: Get event statistics
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event statistics
 *       404:
 *         description: Event not found
 */
router.get('/events/:eventId/stats', getEventStatsController);

export default router;