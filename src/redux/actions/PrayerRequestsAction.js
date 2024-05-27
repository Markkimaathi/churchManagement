import { createAsyncThunk } from "@reduxjs/toolkit";

//get all users

 //Register
 export const GetAllPrayerRequests = createAsyncThunk('fetch/AllPrayerRequests', async () => {
  try {
    const API_ENDPOINT_URL = 'http://localhost:81/api/PrayerRequests/GetAll';

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
    console.error('Error during the POST request:', error);
    throw new Error(`Error during the POST request: ${error.message}`);
  }
});