import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

// PrismaClient is a singleton - create once and reuse
// In Prisma v5, DATABASE_URL is read from environment automatically
// Using global singleton pattern to avoid multiple instances in development
const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: dev ? ['query', 'error', 'warn'] : ['error'],
	});

if (process.env.NODE_ENV !== 'production') {
	globalForPrisma.prisma = prisma;
}

// Gracefully disconnect on app shutdown
if (typeof process !== 'undefined') {
	process.on('beforeExit', async () => {
		await prisma.$disconnect();
	});
}

export default prisma;
