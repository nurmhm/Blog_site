
// lib/prisma.ts

import { PrismaClient } from "@prisma/client"; // এখানে `from "./generated/prisma"` এর বদলে `@prisma/client` ব্যবহার করুন।

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;