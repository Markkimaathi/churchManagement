import React, { useState } from 'react';
import './Announce.css';

function Announce() {
    const [clergyName, setClergyName] = useState('');
    const [announcement, setAnnouncement] = useState('');

    const handleClergyNameChange = (event) => {
        setClergyName(event.target.value);
    };

    const handleAnnouncementChange = (event) => {
        setAnnouncement(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Clergy: ${clergyName}, Announcement: ${announcement}`);
        setClergyName('');
        setAnnouncement('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Announcement Form</h2>
            <label htmlFor="clergyName">Clergy Name:</label>
            <input
                type="text"
                id="clergyName"
                value={clergyName}
                onChange={handleClergyNameChange}
                required
            />
            <label htmlFor="announcement">Announcement:</label>
            <textarea
                id="announcement"
                value={announcement}
                onChange={handleAnnouncementChange}
                rows="4"
                required
            ></textarea>
            <button type="submit">Submit Announcement</button>
        </form>
    );
}

export default Announce;
