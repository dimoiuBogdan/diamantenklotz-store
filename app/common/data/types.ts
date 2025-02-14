// Define return type for better type safety
export type ActionResult<T> = {
  data?: T;
  error?: string;
  success: boolean;
};
