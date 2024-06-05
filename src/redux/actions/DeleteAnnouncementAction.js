import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAnnouncement = createAsyncThunk('fetch/deleteAnnouncement', async ({myForm, id}) => {
  try {
    const API_ENDPOINT_URL = `http://localhost:81/api/Announcements/${id}`;
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
