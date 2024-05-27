import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UpdateUserDetails } from '../actions/UpdateUserAction';

export const UpdateUserDetails = createAsyncThunk('users/updateUserDetails', async ({ myForm, id }) => {
  try {
    const API_ENDPOINT_URL = `http://localhost:81/api/Users/Update/${id}`;

    const response = await fetch(API_ENDPOINT_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myForm),
    });

    if (response.ok) {
      const data = await response.text();
      return data;
    } else {
      const data = await response.text();
      throw new Error(data);
    }
  } catch (error) {
    console.error('Error during the PUT request:', error);
    throw new Error(`Error during the PUT request: ${error.message}`);
  }
});
const userSlice = createSlice({
  name: 'users',
  initialState: {
    updateStatus: 'idle',
    updateError: null,
    updateResponse: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UpdateUserDetails.pending, (state) => {
        state.updateStatus = 'loading';
        state.updateError = null;
      })
      .addCase(UpdateUserDetails.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.updateResponse = action.payload;
      })
      .addCase(UpdateUserDetails.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.updateError = action.error.message;
      });
  },
});

export default userSlice.reducer;
