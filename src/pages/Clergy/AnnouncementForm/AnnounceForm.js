import React, { useState, useEffect } from 'react';
import './AnnounceForm.css';
import { AddAnnouncement } from '../../../redux/actions/AnnouncementsAction';
import { useDispatch } from 'react-redux';

const API_ENDPOINT = 'http://localhost:81/api/Announcements';

function AnnounceForm({ onSubmitSuccess }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
const dispatch = useDispatch();
 
const user = localStorage.getItem('UserID')
 
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
            const response =  await dispatch(AddAnnouncement(myForm))
 console.log("added succesfully")
             
        } catch (error) {
            console.error('Error creating announcement:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Announce Form</h2>
           
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
         
            
            <button type="submit">Submit Announcement</button>
        </form>
    );
}   

export default AnnounceForm;
