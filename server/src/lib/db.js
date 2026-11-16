import {PrismClient} from "@prisma/client";

const globalForPrisma = global
const prisma = new PrismaClient();

if (process.env.MODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma