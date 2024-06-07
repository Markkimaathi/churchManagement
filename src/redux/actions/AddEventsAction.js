import { createAsyncThunk } from "@reduxjs/toolkit";


export const AddEvents = createAsyncThunk('fetch/AddEvents', async (myForm) => {
  try {
    const API_ENDPOINT_URL = 'http://localhost:81/api/Events/Add';

    const response = await fetch(API_ENDPOINT_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myForm),
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