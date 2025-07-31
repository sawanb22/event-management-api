import { createUserService } from '../services/user.service.js';

async function createUserController(req, res) {
    const { name, email } = req.body;
    try {
        const userId = await createUserService({ name, email });
        res.status(201).json({ userId, message: 'User created successfully.' });
    } catch (error) {
        console.error("Error in 'createUserController'", error);
        res.status(500).json({ error: error.message });
    }
}

export { createUserController };