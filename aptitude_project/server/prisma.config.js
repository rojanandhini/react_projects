import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  // ⚡ Add the explicit binary target requirements here:
  binaryTargets: ["debian-openssl-3.0.x", "windows"], 
  datasource: {
    url: env("DATABASE_URL"),
  },
});
