import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAnnouncement = createAsyncThunk('fetch/deleteAnnouncement', async ({ id }, { rejectWithValue }) => {
  try {
    const API_ENDPOINT_URL = `http://localhost:81/api/Announcements/Delete/${id}`;
    const response = await fetch(API_ENDPOINT_URL, {
      method: 'DELETE',
    });

    if (response.ok) {
      const data = await response.text();
      return data;
    } else {
      const errorData = await response.text();
      return rejectWithValue(errorData);
    }
  } catch (error) {
    console.error('Error during the DELETE request:', error);
    return rejectWithValue(`Error during the DELETE request: ${error.message}`);
  }
});
