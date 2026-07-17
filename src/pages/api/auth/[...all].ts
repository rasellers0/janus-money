import type { APIRoute } from "astro";
import { auth } from "../../../lib/auth";
import {authClient} from "../../../lib/auth-client";

export const prerender = false;

export const ALL: APIRoute = async (ctx) => {
    return auth.handler(ctx.request);
};

// export const ALL: APIRoute = async () => {
//     return new Response("authClient Sessions:" + JSON.stringify(authClient.getSession()));
// };