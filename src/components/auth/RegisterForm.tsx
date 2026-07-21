import { useState } from "react";
import { authClient } from "../../lib/auth-client";
import "../../styles/global.css";
import { styles } from "../../styles/styles.tsx"


export default function RegisterForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        setLoading(true);
        setError("");

        const { error } = await authClient.signUp.email({ name, email, password}); 

        if (error) {
            setError(error.message ?? "Registration Failed");
        }

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-12">
            <h1 className={`${styles.typography.h1} text-center p-6 col-span-12`}>Create Account</h1>
                
            {error && <p>{error}</p>}
            <div className="col-span-4">
                <input type="text" placeholder="Name" className={`${styles.input.text} col-span-6 m-3`}
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-span-4">
                <input type="email" placeholder="Email" className={`${styles.input.text} col-span-6 m-3`}
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col-span-4">
                <input type="password" placeholder="Password" className={`${styles.input.text} col-span-6 m-3`}
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            
            

            <button disabled = {loading}>
                {loading ? "Creating" : "Register"}
            </button>
        </form>
        );

    }
