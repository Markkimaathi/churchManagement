import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../../redux/actions/LoginAction";
import { ToastContainer, toast } from 'react-toastify';
import MetaData from "../../components/MetaData";

export const Login = (props) => {
    const [phone, setphone] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const myForm = {
            phoneNumber: phone,
            password: pass
        };

        try {
            const response = await dispatch(LoginRequest(myForm));
            // console.log(response.payload);

            if (response.payload === null) {
                toast.error('Login failed. Please try again.');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                return;
            }

            if (typeof response.payload === 'object' && response.payload !== null) {
                const userRole = await response.payload.userType;
                const loggedinUser = await response.payload.userID;
                toast.success('Logged in Successfully')
                setTimeout(() => {
                    localStorage.setItem('userRole', userRole);
                    localStorage.setItem('UserID', loggedinUser);
                    props.setUserRole(userRole);
                    window.location.reload();
                }, 2000);
                // console.log(userRole);
            } else if (typeof response.payload === 'string') {
                if (response.payload.includes('User not found')) {
                    toast.info('User not found. Use a valid Phone number');
                    console.log('User not found');
                } else if (response.payload.includes('Invalid phone number or password.')) {
                    toast.error('Invalid phone number or password.');
                    console.log('Invalid phone number or password.');
                }
            }
        } catch (error) {
            console.log('Error occurred:', error);
            console.log('Please try again.');
        }
    }

    return (
        <div className="auth-form-container">
            <MetaData title="Login Page" />
            <ToastContainer />
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="">Phone Number</label>
                <input value={phone} onChange={(e) => setphone(e.target.value)} type="tel" placeholder="Enter your phone number" id="phone" name="phone" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
}
