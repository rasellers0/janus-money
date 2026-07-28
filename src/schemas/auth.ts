import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().trim().min(2, "Must be longer than two characters.").max(100),
    email: z.email("Please enter a valid email address.").trim(),
    password: z.string().min(8, "Password must be at least 8 characters").max(128)
});

export const loginSchema = z.object({
    email: z.email().trim(),
    password: z.string().min(1, "Password is required.")
});

export type LoginFormData = z.infer<typeof loginSchema>;