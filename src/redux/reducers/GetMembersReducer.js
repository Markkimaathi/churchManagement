import { createSlice } from '@reduxjs/toolkit';
import { GetAllMembers } from '../actions/MembersAction';

const membersSlice = createSlice({
  name: 'members',
  initialState: {
    allMembers: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllMembers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetAllMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allMembers = action.payload;
      })
      .addCase(GetAllMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default membersSlice.reducer;
