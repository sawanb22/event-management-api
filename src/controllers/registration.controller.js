import { registerUserService, cancelRegistrationService } from '../services/registration.service.js';

async function registerUserController(req, res) {
    try {
        const { eventId } = req.params;
        const { userId } = req.body;
        if (!eventId || !userId) {
            return res.status(400).json({ error: "Event ID and User ID are required" });
        }
        const registration = await registerUserService(eventId, userId);
        res.status(201).json({
            eventId: registration.event_id,
            userId: registration.user_id,
            message: 'User registered for event successfully.'
        });
    } catch (error) {
        console.error("Error in 'registerUserController'", error);
        res.status(500).json({ error: error.message });
    }
}

async function cancelRegistrationController(req, res) {
    try {
        const { eventId, userId } = req.params;
        if (!eventId || !userId) {
            return res.status(400).json({ error: "Event ID and User ID are required" });
        }
        const result = await cancelRegistrationService(eventId, userId);
        res.status(200).json({
            eventId: result.event_id,
            userId: result.user_id,
            message: 'Registration cancelled successfully.'
        });
    } catch (error) {
        if (error.message === 'User was not registered for this event') {
            return res.status(404).json({ error: error.message });
        }
        console.error("Error in 'cancelRegistrationController'", error);
        res.status(500).json({ error: error.message });
    }
}

export { registerUserController, cancelRegistrationController };