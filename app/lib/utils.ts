import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object to regular js object
export function prismaToJsObject<T>(prismaObject: T): T {
  return JSON.parse(JSON.stringify(prismaObject));
}

// format error message
export async function formatError(error: any): Promise<string> {
  if (error.name === "ZodError") {
    const fieldErrors = Object.keys(error.errors).map((field) => {
      return error.errors[field].message;
    });

    return fieldErrors.join("\n ");
  }

  if (error.name === "PrismaClientValidationError" && error.code === "P2002") {
    const field: string = error.meta.target ? error.meta.target[0] : "Field";

    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }

  return typeof error.message === "string"
    ? error.message
    : JSON.stringify(error.message);
}
