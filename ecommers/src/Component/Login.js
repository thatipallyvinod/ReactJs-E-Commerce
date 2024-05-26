import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    function loginClick() {
        if (uname === "admin" && password === "admin123") {
            sessionStorage.setItem("USER_ID", uname);
            navigate("/");
        } else {
            setResult("Invalid User Id or password");
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <form>
                    <legend>User Login</legend>

                    <label>User Name:</label>
                    <input type="text" onChange={(e) => setUname(e.target.value)} />

                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />

                    <input type="button" onClick={loginClick} value="Login" />
                    {result && <p className="error-message">{result}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
