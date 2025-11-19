import { env } from "@/env";
import { drizzle } from "drizzle-orm/neon-http";
import * as authSchema from "@/db/schemas/auth-schema";

export const db = drizzle(env.DATABASE_URL, {
  schema: {
    ...authSchema,
  },
});
