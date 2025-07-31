import { createUser } from '../models/user.model.js';

async function createUserService({ name, email }) {
    if (!name || !email) {
        throw new Error('Name and email are required');
    }
    try {
        const userId = await createUser({ name, email });
        return userId;
    } catch (error) {
        console.error("Error in 'createUserService'", error);
        throw error;
    }
}

export { createUserService };