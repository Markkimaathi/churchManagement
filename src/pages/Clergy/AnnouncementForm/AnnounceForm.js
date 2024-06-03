import React, { useState } from 'react';
import './AnnounceForm.css';

function AnnounceForm() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [timeCreated, setTimeCreated] = useState('');

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleCreatedByChange = (event) => {
        setCreatedBy(event.target.value);
    };

    const handleTimeCreatedChange = (event) => {
        setTimeCreated(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`ID: ${id}, Title: ${title}, Description: ${description}, Date: ${date}, Created By: ${createdBy}, Time Created: ${timeCreated}`);
        setId('');
        setTitle('');
        setDescription('');
        setDate('');
        setCreatedBy('');
        setTimeCreated('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Announce Form</h2>
            <label htmlFor="id">ID:</label>
            <input
                type="text"
                id="id"
                value={id}
                onChange={handleIdChange}
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
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
            />
            <label htmlFor="createdBy">Created By:</label>
            <input
                type="text"
                id="createdBy"
                value={createdBy}
                onChange={handleCreatedByChange}
                required
            />
            <label htmlFor="timeCreated">Time Created:</label>
            <input
                type="time"
                id="timeCreated"
                value={timeCreated}
                onChange={handleTimeCreatedChange}
                required
            />
            <button type="submit">Submit Announcement</button>
        </form>
    );
}

export default AnnounceForm;
