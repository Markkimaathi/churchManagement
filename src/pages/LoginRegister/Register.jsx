import React, { useState } from "react";

export const Register = (props) => {
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [interests, setInterests] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, dateOfBirth, phoneNumber, interests, imageURL, password, confirmPassword);
    }

    return (
        <div className="auth-form-container">
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
                <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} type="file" id="imageURL" placeholder="Image URL" />

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
