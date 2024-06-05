import React, { useState } from 'react';
import './AnnouncementTable.css';
import { AddAnnouncement } from '../../../redux/actions/AnnouncementsAction';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const API_ENDPOINT = 'http://localhost:81/api/Announcements';

function AddAnnouncementTable({ onSubmitSuccess }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const user = localStorage.getItem('UserID');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const myForm = {
            id: 0,
            title,
            description,
            createdBy: user,
            date: new Date(date).toISOString(),
            timeCreated: new Date().toISOString(),
        };

        try {
            await dispatch(AddAnnouncement(myForm));
            toast.success('Announcement added successfully');
            setTimeout(() => {
                setSuccessMessage('');
                window.location.reload();
            }, 4000); 
        } catch (error) {
            console.error('Error creating announcement:', error);
        }
    };

    return (
        <div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <table>
                <caption>Announce Table</caption>
                <tbody>
                    <tr>
                        <td>Title:</td>
                        <td>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea
                                value={description}
                                onChange={handleDescriptionChange}
                                rows="3"
                                required
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td>
                            <input
                                type="date"
                                value={date}
                                onChange={handleDateChange}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit" onClick={handleSubmit}>Submit Announcement</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AddAnnouncementTable;
