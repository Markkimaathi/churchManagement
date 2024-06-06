import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteUser = createAsyncThunk( 'fetch/DeleteUser', async ({ myForm, id }, { rejectWithValue }) => {
    try {
      const API_ENDPOINT_URL = `http://localhost:81/api/Users/Delete/${id}`;

    const response = await fetch(API_ENDPOINT_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myForm)
    });  
    if (response.ok) {
      const data = await response.text();
      return data;      
    } else {
      const data = await response.text();
      return data; 
    }
  } catch (error) {
    console.error('Error during the DELETE request:', error);
    throw new Error(`Error during the DELETE request: ${error.message}`);
  }
});