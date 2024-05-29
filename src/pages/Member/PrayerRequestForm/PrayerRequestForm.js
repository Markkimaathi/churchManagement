import React, { useState } from 'react';
import './PrayerRequestsForm.css';

function PrayerRequestForm() {
    const [memberName, setMemberName] = useState('');
    const [prayerRequest, setPrayerRequest] = useState('');

    const handleNameChange = (event) => {
        setMemberName(event.target.value);
    };

    const handleRequestChange = (event) => {
        setPrayerRequest(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${memberName}, Request: ${prayerRequest}`);
        setMemberName('');
        setPrayerRequest('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Prayer Request Form</h2>
            <label htmlFor="memberName">Your Name:</label>
            <input
                type="text"
                id="memberName"
                value={memberName}
                onChange={handleNameChange}
                required
            />
            <label htmlFor="prayerRequest">Prayer Request:</label>
            <textarea
                id="prayerRequest"
                value={prayerRequest}
                onChange={handleRequestChange}
                rows="4"
                required
            ></textarea>
            <button type="submit">Submit Request</button>
        </form>
    );
}

export default PrayerRequestForm;
