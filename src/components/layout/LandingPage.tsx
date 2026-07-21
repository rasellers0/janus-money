import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
    const navigate = useNavigate();
    let [destination, setDestination] = useState("");
    let [error, setError] = useState("")

    function handleClick(event: React.FormEvent){
        setDestination(event.currentTarget.id)
        if (destination !== "sign-in" && destination !== 'register'){
            setError("Invalid destination; someone's been fucking with the javascript.")
        }

        navigate("/" + destination)
    }

    return (
        <div>
            <h1>JANUS MONEY</h1>
            {error && <p>{error}</p>}
            <div>
                <button id="sign-in" onClick={handleClick}>Sign In</button>
                <button id="register" onClick={handleClick}>Register</button>
            </div>
        </div>
    );
}