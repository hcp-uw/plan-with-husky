import { useState } from "react";
import EmailSignup from "../components/EmailSignup/EmailSignup";
import MyHusky from "../components/MyHusky";
import Task from "../components/Task";
import "./Login.css";

export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    return (
        <div className="parent login-page">
            <div className="navigation">
                <div>Plan With Husky</div>
                <div className="buttons">
                    <button>Home</button>
                    <button>Notifications</button>
                    <button>Settings</button>
                    <button id="profile-button">Your Profile</button>
                </div>
            </div>

            <div className="title">
                <h1>Welcome to Login & Signup</h1>
            </div>

            <div className="menu">
                <div>todo</div>
                <div>calendar</div>
                <div>my husky</div>
                <div>shop</div>
            </div>

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

                <div className="preview-task">
                    <Task desc="Sample Task" date="2/23" categ="Homework" points={5} />
                </div>
            </div>

            <div className="husky">
                <MyHusky />
            </div>
        </div>
    );
}