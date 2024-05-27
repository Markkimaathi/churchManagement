import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk('user/update', async (userData) => {
    try {
      const API_ENDPOINT_URL = 'http://localhost:81/api/Users/Update';
  
      const response = await fetch(API_ENDPOINT_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), 
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message); 
      }
    } catch (error) {
      console.error('Error during the PUT request:', error);
      throw new Error(`Error during the PUT request: ${error.message}`);
    }
  });
  