import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
    console.log(`User registered`);
};

export { registerUser };
