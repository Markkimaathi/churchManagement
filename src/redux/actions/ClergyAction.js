import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAllClergies = createAsyncThunk('fetch/AllClergies', async () => {
    try {
        const API_ENDPOINT_URL = 'http://localhost:81/api/Users/Clergies';
  
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
            throw new Error(errorData.message || 'Failed to get clergies');
          }
        } catch (error) {
          console.error('Error during the GET request:', error);
          throw new Error(`Error during the GET request: ${error.message}`);
        }
      });