import { createSlice } from '@reduxjs/toolkit';
import { GetAllAdmins } from '../actions/AdminsAction';

const adminsSlice = createSlice({
  name: 'admins',
  initialState: {
    allAdmins: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllAdmins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetAllAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allAdmins = action.payload;
      })
      .addCase(GetAllAdmins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default adminsSlice.reducer;