import { authClient } from "../lib/auth-client";
import type { RegisterFormData } from "../types/RegisterFormData";

export async function doRegister(data: RegisterFormData) {
    return authClient.signUp.email(data);
}