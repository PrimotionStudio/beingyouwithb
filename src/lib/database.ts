import { PrismaClient } from "@prisma/client";
import { exit } from "node:process";
export const prisma = new PrismaClient({
  // omit: { user: { password: true } },
  log: ["query", "info", "error", "warn"],
  errorFormat: "pretty",
});
