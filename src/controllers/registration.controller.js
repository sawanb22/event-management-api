import { registerUserService } from '../services/registration.service.js';

async function registerUserController(req, res) {
    const { eventId, userId } = req.body;
    try {
        const registrationId = await registerUserService(eventId, userId);
        res.status(201).json({ registrationId, message: 'User registered for event successfully.' });
    } catch (error) {
        console.error("Error in 'registerUserController'", error);
        res.status(500).json({ error: error.message });
    }
}

export { registerUserController };