import React, { useState } from 'react';
import './EventsTable.css';
import { AddEvents } from '../../../redux/actions/AddEventsAction';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function AddEventTable({ onSubmitSuccess }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [location, setLocation] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const user = localStorage.getItem('UserID');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleEventDateChange = (event) => {
        setEventDate(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const myForm = {
            eventID: 0,
            title,
            description,
            eventDate: new Date(eventDate).toISOString(),
            location,
            createdBy: user,
            timeCreated: new Date().toISOString(),
            modifiedBy: user,
            timeModified: new Date().toISOString(),
        };

        try {
            await dispatch(AddEvents(myForm));
            toast.success('Event added successfully');
            setTimeout(() => {
                setSuccessMessage('');
                window.location.reload();
            }, 4000); 
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <table>
                <caption>Add Event</caption>
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
                                value={eventDate}
                                onChange={handleEventDateChange}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td>
                            <input
                                type="text"
                                value={location}
                                onChange={handleLocationChange}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="submit" onClick={handleSubmit}>Submit Event</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AddEventTable;
