import { Prisma, PrismaClient } from '../src/generated/prisma/client';

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [];

export async function main() {
  for (const u of users) {
    await prisma.user.createMany({ data: u });
  }
}

main();
