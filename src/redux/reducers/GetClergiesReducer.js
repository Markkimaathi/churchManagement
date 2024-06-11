import { createSlice } from '@reduxjs/toolkit';
import { GetAllClergies } from '../actions/ClergyAction';

const clergiesSlice = createSlice({
  name: 'clergies',
  initialState: {
    allClergies: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllClergies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetAllClergies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allClergies = action.payload;
      })
      .addCase(GetAllClergies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default clergiesSlice.reducer;