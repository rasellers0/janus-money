import { betterAuth } from "better-auth";
import { authPool } from "../db/authDatabase";

export const auth = betterAuth({

    database: authPool,

    emailAndPassword: {
        enabled: true
    }

});