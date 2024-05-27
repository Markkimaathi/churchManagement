import { createAsyncThunk } from "@reduxjs/toolkit";


  //Update
  export const UpdateUserDetails = createAsyncThunk('fetch/UpdateUserDetails', async ({myForm, id}) => {
    try {
      const API_ENDPOINT_URL = `http://localhost:81/api/Users/Update/${id}`;

      const response = await fetch(API_ENDPOINT_URL, {
        method: 'PUT',
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
      console.error('Error during the POST request:', error);
      throw new Error(`Error during the POST request: ${error.message}`);
    }
  });

//get all users



 