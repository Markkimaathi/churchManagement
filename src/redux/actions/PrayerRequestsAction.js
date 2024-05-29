import { createAsyncThunk } from "@reduxjs/toolkit";

// Get all prayer requests
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
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch prayer requests');
    }
  } catch (error) {
    console.error('Error during the GET request:', error);
    throw new Error(`Error during the GET request: ${error.message}`);
  }
});
