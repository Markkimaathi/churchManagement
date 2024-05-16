import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../../redux/actions/LoginAction";
import { ToastContainer, toast } from 'react-toastify';

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

            if (typeof response.payload === 'object' && response.payload !== null) {
                const userRole = await response.payload.userType;
                toast.success('Logged in Successfully')
                setTimeout(() => {
                    localStorage.setItem('userRole', userRole);
                    props.setUserRole(userRole);
                    window.location.reload();
                }, 2000);
                // console.log(userRole);
            } else if (typeof response.payload === 'string') {
                if (response.payload.includes('User not found')) {
                    toast.info('User not found. Use a valid Phone number')
                    console.log('User not found');
                } else if (response.payload.includes('Invalid phone number or password.')) {
                    console.log('Invalid phone number or password.');

                }
            }
        } catch (error) {
            console.log('Error occurred:', error);
            console.log('Please try again.');
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); 
    //     const enteredNumber = parseInt(phone);
    //     let userRole;
    //     switch (enteredNumber) {
    //         case 0:
    //             userRole = 0;
    //             break;
    //         case 1:
    //             userRole = 1;
    //             break;
    //         case 2:
    //             userRole = 2;
    //             break;
    //         default:
    //             return;
    //     }
    //     await localStorage.setItem('userRole', userRole);      
    //     props.setUserRole(userRole); 
    //     await window.location.reload();
    // }
    return (
        <div className="auth-form-container">
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
