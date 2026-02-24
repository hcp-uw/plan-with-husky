import { useState } from "react";
import EmailSignup from "../components/EmailSignup/EmailSignup";
import "./Login.css";

export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    return (
        <>
            <div className="content login-content">
                <div className="login-form">
                    <h2>Login</h2>
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
                </div>

                <EmailSignup />

            </div>
        </>
    );
}