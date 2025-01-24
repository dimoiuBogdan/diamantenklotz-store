import { z } from "zod";

const envSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(["development", "production", "test"]),

  // Database
  DATABASE_URL: z.string().url(),

  // Site URL
  NEXT_PUBLIC_SITE_URL: z.string().url(),

  // API Keys (if any)
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Email service (if any)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
});

// Validate environment variables at startup
const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error(
    "❌ Invalid environment variables:",
    JSON.stringify(envParse.error.format(), null, 4)
  );
  process.exit(1);
}

export const env = envParse.data;
