import { createAuthClient } from "better-auth/react";

const APP_URL = "http://localhost:4321"

export const authClient = createAuthClient({
    baseURL: APP_URL,
    basePath: "/api/auth",
});