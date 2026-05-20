import "dotenv/config"; // Ensures your environment variables load first
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic", // Required for native compatibility layers
  datasource: {
    url: env("DATABASE_URL"), // Centralized environment evaluation
  },
});
