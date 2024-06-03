import React, { useState, useEffect } from 'react';
import './AnnounceForm.css';

const API_ENDPOINT = 'http://localhost:81/api/Announcements';

function AnnounceForm({ onSubmitSuccess }) {
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const announcement = {
            id,
            title,
            description,
            date,
            createdBy,
            timeCreated,
        };

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(announcement),
            });

            if (response.ok) {
                const createdAnnouncement = await response.json();
                console.log('Announcement created:', createdAnnouncement);

                if (onSubmitSuccess) {
                    onSubmitSuccess(createdAnnouncement);
                }

                setId('');
                setTitle('');
                setDescription('');
                setDate('');
                setCreatedBy('');
                setTimeCreated('');
            } else {
                console.error('Failed to create announcement:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating announcement:', error);
        }
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
