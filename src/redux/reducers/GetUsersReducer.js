
import { createSlice } from '@reduxjs/toolkit';
import { GetAllUsers } from '../actions/LoginAction';

const getUsersSlice = createSlice({
  name: 'Users',
  initialState: {
    allUsers: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(GetAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.allUsers = action.payload;
      })
      .addCase(GetAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getUsersSlice.reducer;