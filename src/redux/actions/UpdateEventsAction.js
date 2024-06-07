import { createAsyncThunk } from '@reduxjs/toolkit';

export const UpdateEventsDetails = createAsyncThunk('fetch/UpdateEventsDetails', async ({ myForm, id }) => {
  try {
    const API_ENDPOINT_URL = `http://localhost:81/api/Events/Update/${id}`;

    const response = await fetch(API_ENDPOINT_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myForm)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response data:', errorData);
      throw new Error(`Error updating event: ${errorData.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('Update successful:', data);
    return data;

  } catch (error) {
    console.error('Error during the PUT request:', error);
    throw new Error(`Error during the PUT request: ${error.message}`);
  }
});
