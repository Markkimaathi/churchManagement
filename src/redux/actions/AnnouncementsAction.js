import { createAsyncThunk } from "@reduxjs/toolkit";

//get all users

 //Register
 export const GetAllAnnouncements = createAsyncThunk('fetch/AllAnnouncements', async () => {
  try {
    const API_ENDPOINT_URL = 'http://localhost:81/api/Announcements';

    const response = await fetch(API_ENDPOINT_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },       
    });  

    if (response.ok) {
      const data = await response.json();
      return data; 
    } else {
      const data = await response.json();
      return data; 
    }
  } catch (error) {
    console.error('Error during the GET request:', error);
    throw new Error(`Error during the GET request: ${error.message}`);
  }
});

export const AddAnnouncement = createAsyncThunk('fetch/AddAnnouncement', async (myForm) => {
  try {
    const API_ENDPOINT_URL = `http://localhost:81/api/Announcements`;

    const response = await fetch(API_ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },       
      body: JSON.stringify(myForm)
    });  

    if (response.ok) {
      const data = await response.json();
      return data; 
      
    } else {
      const data = await response.text();
      return data; 
    }
  } catch (error) {
    console.error('Error during the POST request:', error);
    throw new Error(`Error during the POST request: ${error.message}`);
  }
});