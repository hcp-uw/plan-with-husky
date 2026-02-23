import { useState } from "react";

export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    return (
        <>
            <input 
                placeholder="Email" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input 
                placeholder="Password" 
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </>
    );
}