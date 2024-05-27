import { createAsyncThunk } from "@reduxjs/toolkit";

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const updateUserById = createAsyncThunk(
  'users/updateUserById',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const API_ENDPOINT_URL = `/api/Users/Update/${id}`;

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
        return rejectWithValue(errorData);
      }
    } catch (error) {
      console.error('Error during the PUT request:', error);
      throw new Error(`Error during the PUT request: ${error.message}`);
    }
  }
);
