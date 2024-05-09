import React, { useState, useEffect } from "react";

export const Login = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userRole =0;
        await localStorage.setItem('userRole', userRole);      
        props.setUserRole(userRole); 
         await window.location.reload()
    }
    return (    
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="">Phone Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Enter your phone number" id="phone" name="phone" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}