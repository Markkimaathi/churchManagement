import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAllEvents = createAsyncThunk('fetch/AllEvents', async () => {
    try {
      const API_ENDPOINT_URL = 'http://localhost:81/api/Events/GetAll';

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
        throw new Error(errorData.message || 'Failed to events');
      }
    } catch (error) {
      console.error('Error during the GET request:', error);
      throw new Error(`Error during the GET request: ${error.message}`);
    }
  });