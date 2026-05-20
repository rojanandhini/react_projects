import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "client", // ⚡ Set engine to "client" to match the modern architecture
  datasource: {
    url: env("DATABASE_URL"),
  },
});
