import { betterAuth } from "better-auth";
import { authPool } from "../db/authDatabase";

const baseURL = process.env.BETTER_AUTH_URL;
const secret = process.env.BETTER_AUTH_SECRET;

if (!baseURL) {
    throw new Error("BETTER_AUTH_URL is missing");
}

if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is missing");
}

export const auth = betterAuth({
    appName: "Janus Money",
    baseURL,
    secret,
    database: authPool,
    emailAndPassword: {
        enabled: true,
    },
});