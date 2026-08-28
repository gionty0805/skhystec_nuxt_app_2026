import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: "file:prisma/dev.db",
  },
});

//npx prisma format
//npx prisma generate
//npx prisma db push
//npx nuxt dev --host 0.0.0.0 --port 8080