import React from "react";
import "./loginform.css"

const LoginForm = () => {
    return (
        <div className="container">
            <form action="">
            <div className="title">
            <div className="img"></div>
            <h1>Log<span>in</span> Form</h1>
            <div className="line"></div>
            </div>
            <label>Username:</label>
            <input type="text" placeholder="Enter Your Username..." required />

            <label>Password:</label>
            <input type="password" placeholder="Enter Your Password..." required />

            <button type="submit">Login</button>
            </form>
            <div className="forgot">
                <a href="#">Forgot Pass<span>word</span>?</a>
                <div className="line"></div>
            </div>


        </div>
    )
}

export default LoginForm;