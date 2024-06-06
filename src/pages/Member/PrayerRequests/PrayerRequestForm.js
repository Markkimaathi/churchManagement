import React, { useState } from 'react';
import './PrayerRequestsForm.css';
import { AddPrayerRequests } from '../../../redux/actions/AddPrayerRequestsAction';
import { useDispatch } from 'react-redux';

const API_ENDPOINT = 'http://localhost:81/api/PrayerRequests';

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
            id: 0,
            title,
            description,
            createdBy: user,
            date: new Date(requestDate).toISOString(),
            timeCreated: new Date().toISOString(),
        };

        try {
            const response =  await dispatch(AddPrayerRequests(myForm))
 console.log("added succesfully")
             
        } catch (error) {
            console.error('Error creating request:', error);
        }
    };
    return (
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
    );
};

export default PrayerRequestForm;
