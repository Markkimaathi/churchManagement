import { createAsyncThunk } from "@reduxjs/toolkit";


  //Update
  export const UpdateAnnouncementDetails = createAsyncThunk('fetch/UpdateUserDetails', async ({id}) => {
    try {
      const API_ENDPOINT_URL = `http://localhost:81/api/Announcement/Update/${id}`;
      const response = await fetch(API_ENDPOINT_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },       
      });  
  
      if (response.ok) {
        const data = await response.text();
        return data; 
        
      } else {
        const data = await response.text();
        return data; 
      }
    } catch (error) {
      console.error('Error during the PUT request:', error);
      throw new Error(`Error during the PUT request: ${error.message}`);
    }
  });


    