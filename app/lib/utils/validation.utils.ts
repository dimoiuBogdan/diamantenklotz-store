import { z } from "zod";

/**
 * Common validation patterns
 */
export const ValidationPatterns = {
  // Basic patterns
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE: /^[0-9+\-\s()]*$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  ALPHA: /^[a-zA-Z\s]*$/,
  ALPHANUMERIC: /^[a-zA-Z0-9\s]*$/,
  NUMERIC: /^[0-9]*$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

  // Advanced patterns
  POSTAL_CODE: /^\d{5}(-\d{4})?$/,
  IPV4: /^(\d{1,3}\.){3}\d{1,3}$/,
  HEX_COLOR: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  DATE_ISO: /^\d{4}-\d{2}-\d{2}$/,
} as const;

/**
 * Input sanitization functions
 */
export const sanitize = {
  /**
   * Removes HTML tags and special characters from a string
   */
  text: (value: string): string => {
    if (!value) return "";
    return value
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/[<>]/g, "") // Remove < and >
      .trim();
  },

  /**
   * Sanitizes an email address
   */
  email: (value: string): string => {
    if (!value) return "";
    return value.toLowerCase().trim();
  },

  /**
   * Sanitizes a phone number by removing all non-numeric characters except + and ()
   */
  phone: (value: string): string => {
    if (!value) return "";
    return value.replace(/[^\d+() -]/g, "").trim();
  },

  /**
   * Sanitizes a URL by removing unsafe characters
   */
  url: (value: string): string => {
    if (!value) return "";
    try {
      const url = new URL(value);
      return url.toString();
    } catch {
      return value.trim();
    }
  },

  /**
   * Removes all non-alphanumeric characters from a string
   */
  alphanumeric: (value: string): string => {
    if (!value) return "";
    return value.replace(/[^a-zA-Z0-9\s]/g, "").trim();
  },

  /**
   * Removes all non-numeric characters from a string
   */
  numeric: (value: string): string => {
    if (!value) return "";
    return value.replace(/[^\d]/g, "").trim();
  },
} as const;

/**
 * Common validation schemas using Zod
 */
export const ValidationSchemas = {
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(ValidationPatterns.ALPHA, "Name must contain only letters"),

  email: z
    .string()
    .email("Invalid email address")
    .regex(ValidationPatterns.EMAIL, "Invalid email format")
    .transform(sanitize.email),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(ValidationPatterns.PHONE, "Invalid phone number format")
    .transform(sanitize.phone),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      ValidationPatterns.PASSWORD,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  url: z
    .string()
    .url("Invalid URL")
    .regex(ValidationPatterns.URL, "Invalid URL format")
    .transform(sanitize.url),

  postalCode: z
    .string()
    .regex(ValidationPatterns.POSTAL_CODE, "Invalid postal code format"),
} as const;

/**
 * Type guards for runtime type checking
 */
export const typeGuards = {
  isString: (value: unknown): value is string => {
    return typeof value === "string";
  },

  isNumber: (value: unknown): value is number => {
    return typeof value === "number" && !isNaN(value);
  },

  isBoolean: (value: unknown): value is boolean => {
    return typeof value === "boolean";
  },

  isObject: (value: unknown): value is object => {
    return typeof value === "object" && value !== null;
  },

  isArray: (value: unknown): value is unknown[] => {
    return Array.isArray(value);
  },

  isDate: (value: unknown): value is Date => {
    return value instanceof Date && !isNaN(value.getTime());
  },
} as const;

/**
 * Form validation helper functions
 */
export const formValidation = {
  /**
   * Validates a form field against a Zod schema
   */
  validateField: <T>(
    schema: z.ZodType<T>,
    value: unknown
  ): { success: true; data: T } | { success: false; error: string } => {
    try {
      const result = schema.parse(value);
      return { success: true, data: result };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { success: false, error: error.errors[0].message };
      }
      return { success: false, error: "Invalid input" };
    }
  },

  /**
   * Validates an entire form object against a Zod schema
   */
  validateForm: <T extends object>(
    schema: z.ZodType<T>,
    values: unknown
  ):
    | { success: true; data: T }
    | { success: false; errors: Record<string, string> } => {
    try {
      const result = schema.parse(values);
      return { success: true, data: result };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0].toString()] = err.message;
          }
        });
        return { success: false, errors };
      }
      return { success: false, errors: { form: "Invalid form data" } };
    }
  },
} as const;
