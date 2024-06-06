import React, { useState } from 'react';
import './PrayerRequestsForm.css';
import { AddPrayerRequests } from '../../../redux/actions/AddPrayerRequestsAction';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrayerRequestForm = ({ onSubmitSuccess }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [requestDate, setRequestDate] = useState('');
    const dispatch = useDispatch();

    const user = localStorage.getItem('UserID');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDateChange = (event) => {
        setRequestDate(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const myForm = {
            PrayerRequesID: 0,
            title,
            description,
            requestDate: new Date(requestDate).toISOString(),
            requestedBy: user,
            timeCreated: new Date().toISOString(),
        };

        try {
            await dispatch(AddPrayerRequests(myForm));
            toast.success('Prayer request added successfully');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error('Error creating request:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Prayer Request Form</h2>
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
                    onChange={handleDateChange}
                    required
                />
                <button type="submit">Submit Prayer Request</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default PrayerRequestForm;
