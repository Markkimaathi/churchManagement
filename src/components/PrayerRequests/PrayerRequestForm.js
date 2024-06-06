import React, { useState } from 'react';
import './PrayerRequestsForm.css';

function PrayerRequestForm() {
    const [prayerRequestID, setPrayerRequestID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [requestDate, setRequestDate] = useState('');
    const [requestedBy, setRequestedBy] = useState('');

    const handleIDChange = (event) => {
        setPrayerRequestID(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleRequestDateChange = (event) => {
        setRequestDate(event.target.value);
    };

    const handleRequestedByChange = (event) => {
        setRequestedBy(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`ID: ${prayerRequestID}, Title: ${title}, Description: ${description}, Request Date: ${requestDate}, Requested By: ${requestedBy}`);
        setPrayerRequestID('');
        setTitle('');
        setDescription('');
        setRequestDate('');
        setRequestedBy('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Prayer Request Form</h2>
            <label htmlFor="prayerRequestID">Prayer Request ID:</label>
            <input
                type="text"
                id="prayerRequestID"
                value={prayerRequestID}
                onChange={handleIDChange}
            />
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                required
            />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                rows="3"
                required
            ></textarea>
            <label htmlFor="requestDate">Request Date:</label>
            <input
                type="date"
                id="requestDate"
                value={requestDate}
                onChange={handleRequestDateChange}
            />
            <label htmlFor="requestedBy">Requested By:</label>
            <input
                type="text"
                id="requestedBy"
                value={requestedBy}
                onChange={handleRequestedByChange}
                required
            />
            <button type="submit">Submit Request</button>
        </form>
    );
}

export default PrayerRequestForm;
