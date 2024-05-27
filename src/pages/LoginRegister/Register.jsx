import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { RegisterRequest } from "../../redux/actions/LoginAction";

export const Register = (props) => {
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [interests, setInterests] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
const dispatch = useDispatch();



    function convertToAPIDate(dateString) {
        const date = new Date(dateString);
        return date.toISOString();
    }
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword)
            {
                toast.error("Password do not match")
                return null;
            }
   if (!fullName || !dateOfBirth || !phoneNumber || !interests || !password || !confirmPassword) {
                toast.error("Please fill in all fields");
                return;
            }
        const myForm = {
            userID: 0,
            fullName: fullName,
            dateOfBirth: convertToAPIDate(dateOfBirth),
            phoneNumber: phoneNumber,
            interests: interests,
            imageUrl: imageFile,
            userType: 0,
            password: password
        };

       

        try {
            const response = await dispatch(RegisterRequest(myForm));
            // console.log(response.payload);

            if (typeof response.payload === 'object' && response.payload !== null) {
                const userRole = await response.payload.userType;
                toast.success('Registered Successfully')
                setTimeout(() => {
                    localStorage.setItem('userRole', userRole);
                    props.setUserRole(userRole);
                    window.location.reload();
                }, 2000);
                // console.log(userRole);
            } else if (typeof response.payload === 'string') {
                if (response.payload.includes('Phone number already exists.')) {
                    toast.info('Phone number already exists. Please login.')
                    console.log('User not found');
                }
            }
        } catch (error) {
            console.log('Error occurred:', error);
            console.log('Please try again.');
        }
    }

    return (
        <div className="auth-form-container">
            <ToastContainer />
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} id="fullName" placeholder="Full Name" />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" id="dateOfBirth" />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" id="phoneNumber" placeholder="Phone Number" />

                <label htmlFor="interests">Interests</label>
                <input value={interests} onChange={(e) => setInterests(e.target.value)} id="interests" placeholder="Interests" />

                <label htmlFor="imageURL">Image URL</label>
                <input onChange={handleImageChange} type="file" id="imageURL" accept="image/*" />
                {/* Display preview of the selected image */}
                {imageFile && (
                    <img src={imageFile} alt="Preview" style={{ maxWidth: '10%', marginTop: '2px', borderRadius:'50%' }} />
                )}


                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="********" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" placeholder="********" />

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
