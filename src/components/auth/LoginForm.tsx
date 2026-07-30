import { useState } from "react";
import { loginSchema, type LoginFormData } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../styles/global.css";
import { styles } from "../../styles/styles.tsx";
import { useForm } from "react-hook-form";
import { authClient } from "../../lib/auth-client.ts";
import { useNavigate } from "react-router-dom";
import { navigate } from "astro:transitions/client";

export default function LoginForm(){
    const [serverError, setServerError] = useState("");
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginFormData>({resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    async function onSubmit(data: LoginFormData) {
        const result = await authClient.signIn.email(data);
        const userId = result.data?.user.id
        if (result.error) {
            setServerError(result.error.message || "An unknown error occured.");
            return;
        }
        navigate("/dashboard", {state: {name: result.data?.user.name, userId: userId}});
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12">
            <h1 className={`${styles.typography.h1} text-center p-6 col-span-12`}>Sign In To Your Account</h1>
                
            <div className="col-span-4 mx-3">
                <input type="email" placeholder="Email" className={styles.input.text} {...register("email")}/>
                {errors.email && (<p className={styles.alert.error}>{errors.email.message}</p>)}
            </div>
            <div className="col-span-4 mx-3">
                <input type="password" placeholder="Password" className={styles.input.text} {...register("password")}/>
                {errors.password && (<p className={styles.alert.error}>{errors.password.message}</p>)}
            </div>

            <div className="col-span-3 m-3">
                <button type="submit" disabled={isSubmitting} className={styles.button.primary}>
                    {isSubmitting ? "Signing You In..." : "Sign In"}
                </button>
            </div>
        </form>
        );
    }